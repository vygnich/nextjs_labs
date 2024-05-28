"use server"

import {updateUserParams, UpdateUserParams} from "@/modules/schema/account";
import {updateUser} from "@/modules/api/account";
import {cartAddProduct, cartDelete} from "@/modules/api/cart";


export async function UserUpdateAction(input:UpdateUserParams ){
    try{
        const payload = updateUserParams.parse(input);
        await updateUser(payload.id!, payload)
    }catch (e) {
        console.log(e)
    }
}


export async function UserInsetCartProductAction(productId: string,
                                                 count: number ){
    try{
        return await cartAddProduct(productId, count)
    }catch (e) {
        console.log(e)
    }
}


export async function UserRemoveCartProductAction(id: string){
    try{
        return await cartDelete(id)
    }catch (e) {
        console.log(e)
    }
}
