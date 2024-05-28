"use server"
import { db } from '@/modules/db';
import {checkAuth, getUserAuth} from "@/modules/auth/auth";




export const updateUser = async (id: string, data: any) => {
    const user = await db.user.update({ where: { id: id }, data });
    return user;
};


export const getUser = async () => {
    await checkAuth()
    const session = await getUserAuth()
    if(!session) return
    const user = await db.user.findUnique({ where: { id: session.user.id }});
    return user;
};


export const getUserCart = async () => {
    await checkAuth()
    const session = await getUserAuth()
    if(!session) return

    const cart = await db.cart.findMany({
        where: { userId: session.user.id },
        include: { product: true },
    });

    return cart;
}


