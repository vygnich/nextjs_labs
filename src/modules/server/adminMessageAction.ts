"use server"

import {insertProductParams, InsertProductParams} from "@/modules/schema/product";
import {createProduct, deleteProduct, updateProduct} from "@/modules/api/products";
import {checkAuth, getUserAuth} from "@/modules/auth/auth";
import {InsertAdminMessageParams, insertAdminMessageSchema} from "@/modules/schema/adminMessage";
import {acceptMessage, createMessage} from "@/modules/api/adminMessage";


export async function AdminMessageInsertAction(input:InsertAdminMessageParams ){
    try{
        const payload = insertAdminMessageSchema.parse(input);
        return  await createMessage(input.message)
    }catch (e) {
        console.log(e)
    }
}


export async function AdminMessageAcceptMessageAction(id: string, userId: string ){
    try{
        return  await acceptMessage(id, userId)
    }catch (e) {
        console.log(e)
    }
}

