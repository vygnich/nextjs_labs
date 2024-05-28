import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '@/modules/db'
import {NextResponse} from "next/server";
import {insertProductParams} from "@/modules/schema/product"; // Make sure you have a prisma instance in lib/prisma.ts


export async function GET(req: Request, res: NextResponse){
        const { searchParams } = new URL(req.url);
        const userId = searchParams.get('userId');
        if (!userId) {
            return NextResponse.json({ error: 'User ID is required' }, { status: 500 });
        }
    console.log("userId", userId)
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
    console.log("req.body", body)
    if (!userId || !productId || !count) {
    return NextResponse.json({ error: 'User ID, Product ID, and Count are required' }, { status: 200 });
    }
    //
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
// const handler = async (req: NextApiRequest, res: NextApiResponse) => {
//     if (req.method === 'POST') {
//         const { userId, productId, count } = req.body;
//
//         if (!userId || !productId || !count) {
//             return res.status(400).json({ error: 'User ID, Product ID, and Count are required' });
//         }
//
//         try {
//             const cartItem = await db.cart.create({
//                 data: {
//                     userId,
//                     productId,
//                     count,
//                 },
//             });
//
//             return res.status(200).json(cartItem);
//         } catch (error) {
//             return res.status(500).json({ error: 'Failed to add item to cart' });
//         }
//     }
//     else if (req.method === 'PUT') {
//         const { id, count } = req.body;
//
//         if (!id || !count) {
//             return res.status(400).json({ error: 'ID and Count are required' });
//         }
//
//         try {
//             const cartItem = await db.cart.update({
//                 where: { id },
//                 data: { count },
//             });
//
//             return res.status(200).json(cartItem);
//         } catch (error) {
//             return res.status(500).json({ error: 'Failed to update cart item' });
//         }
//     }
//     else if (req.method === 'DELETE') {
//         const { id } = req.body;
//
//         if (!id) {
//             return res.status(400).json({ error: 'ID is required' });
//         }
//
//         try {
//             const cartItem = await db.cart.delete({
//                 where: { id },
//             });
//
//             return res.status(200).json(cartItem);
//         } catch (error) {
//             return res.status(500).json({ error: 'Failed to delete cart item' });
//         }
//     }
//     else {
//         res.setHeader('Allow', ['GET']);
//         res.status(405).end(`Method ${req.method} Not Allowed`);
//     }
// }
//
// export default handler;
