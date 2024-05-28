import { db } from '@/modules/db';
import {checkAuth, getUserAuth} from "@/modules/auth/auth";





export const cartAddProduct = async (productId: string,
                                     count: number) => {
    await checkAuth()
    const session = await getUserAuth()
    if(!session) return
    const cartItem = await db.cart.create({
        data: {
            userId: session.user.id,
            productId,
            count,
        },
    });
    return cartItem;
};



export const cartDelete = async (id:string) => {
    return  await db.cart.delete({
        where: { id },
    });
}
