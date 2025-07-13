"use server"

import {InsertAdminMessageParams, insertAdminMessageParams} from '@/lib/db/schema/adminMessage';
import {acceptMessage, createMessage} from "@/lib/api/adminMessage/mutations";
import {initBrand} from "@/lib/api/brand/mutations";


export async function AdminMessageInsertAction(input:InsertAdminMessageParams ){
    try{
        const payload = insertAdminMessageParams.parse(input);
        return  await createMessage(input.message)
    }catch (e) {
        console.log(e)
    }
}


export async function acceptMessageAction(id: string, userId: string ){
    try{
        await initBrand()
        return  await acceptMessage(id, userId)
    }catch (e) {
        console.log(e)
    }
}