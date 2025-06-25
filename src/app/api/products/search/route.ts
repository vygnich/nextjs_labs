// pages/api/products/search.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import {NextResponse} from "next/server";

const prisma = new PrismaClient();

export async function GET(req: NextApiRequest, res: NextApiResponse) {
    const { searchParams } = new URL(req.url!);
    const query = searchParams.get('query');

    try {
        const products = await prisma.product.findMany({
            where: {
                title: {
                    contains: query!,
                    mode: 'insensitive',
                },
            },
            orderBy: {
                createdAt: 'desc',
            },
        });

        console.log("products", products)

        return NextResponse.json(products, { status: 200 });

    } catch (error) {
        return NextResponse.json({ message: 'Server error', error }, { status: 500 });
    }
}
