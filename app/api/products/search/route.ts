import { NextResponse } from 'next/server';
import { z } from 'zod';
import {searchProducts} from "@/lib/api/products/queries";


export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);

        const query = searchParams.get('query')

        if(!query) return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });

        const products = await searchProducts(query)

        return NextResponse.json(products);
    } catch (err) {
        if (err instanceof z.ZodError) {
            return NextResponse.json({ error: err.issues }, { status: 400 });
        }
        return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
    }
}
