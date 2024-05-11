import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

import { getAllProducts, createProduct, deleteProduct, updateProduct } from '@/modules/api/products';
import { insertProductParams, productIdSchema, updateProductParams } from '@/modules/schema/product';


export async function GET(request: Request) {
    const products = await getAllProducts();
    return Response.json(products, );
}
export async function POST(req: Request) {
    try {
        const origin = req.headers.get('origin') ?? ''
        const validatedData = insertProductParams.parse(await req.json());
        const product = await createProduct(validatedData);
        return NextResponse.json(product, { status: 201 });
    } catch (err) {
        if (err instanceof z.ZodError) {
            return NextResponse.json({ error: err.issues }, { status: 400 });
        }
        return NextResponse.json({ error: err }, { status: 500 });
    }
}

export async function PUT(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const id = searchParams.get('id');
        const validatedData = updateProductParams.parse(await req.json());
        const validatedParams = productIdSchema.parse({ id });
        const product = await updateProduct(validatedParams.id, validatedData);

        return NextResponse.json(product, { status: 200 });
    } catch (err) {
        if (err instanceof z.ZodError) {
            return NextResponse.json({ error: err.issues }, { status: 400 });
        }
        return NextResponse.json(err, { status: 500 });
    }
}

export async function DELETE(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const id = searchParams.get('id');

        const validatedParams = productIdSchema.parse({ id });
        const product = await deleteProduct(validatedParams.id);

        return NextResponse.json(product, { status: 200 });
    } catch (err) {
        if (err instanceof z.ZodError) {
            return NextResponse.json({ error: err.issues }, { status: 400 });
        }
        return NextResponse.json(err, { status: 500 });
    }
}