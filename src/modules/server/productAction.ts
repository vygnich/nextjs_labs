"use server"

import {insertProductParams, InsertProductParams} from "@/modules/schema/product";
import {createProduct, deleteProduct, updateProduct} from "@/modules/api/products";
import {checkAuth, getUserAuth} from "@/modules/auth/auth";


export async function ProductInsertAction(input:InsertProductParams ){
    try{
        await checkAuth();
        const session = await getUserAuth()
        if (!session) return
        const payload = insertProductParams.parse({userId: session.user.id ,...input});
        return  await createProduct(payload)
    }catch (e) {
        console.log(e)
    }
}
export async function ProductUpdateAction(id:string, input:InsertProductParams){
    try{
        await checkAuth();
        const session = await getUserAuth()
        if (!session) return
        const payload = insertProductParams.parse({userId: session.user.id ,...input});
        return  await updateProduct(id, payload)
    }catch (e) {
        console.log(e)
    }
}

export async function ProductDeleteAction(id:string){
    try{
        await checkAuth();
        const session = await getUserAuth()
        if (!session) return
        return  await deleteProduct(id)
    }catch (e) {
        console.log(e)
    }
}
