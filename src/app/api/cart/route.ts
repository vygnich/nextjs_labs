import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '@/modules/db'
import {NextResponse} from "next/server";
import {insertProductParams} from "@/modules/schema/product";


export async function GET(req: Request, res: NextResponse){
        const { searchParams } = new URL(req.url);
        const userId = searchParams.get('userId');
        if (!userId) {
            return NextResponse.json({ error: 'User ID is required' }, { status: 500 });
        }
        try {
            const cart = await db.cart.findMany({
                where: { userId },
                include: { product: true },
            });
            return NextResponse.json(cart, { status: 200 });
        } catch (error) {
            return NextResponse.json(error, { status: 500 });
        }
}
export async function POST(req: Request, res: NextResponse){

    const body  = await req.json()
    const { userId, productId, count }  = body;
    if (!userId || !productId || !count) {
    return NextResponse.json({ error: 'User ID, Product ID, and Count are required' }, { status: 200 });
    }
    try {
        const cartItem = await db.cart.create({
            data: {
                userId,
                productId,
                count,
            },
        });

        return NextResponse.json(cartItem, { status: 200 });
    } catch (error) {
        return NextResponse.json(error, { status: 500 });
    }
}