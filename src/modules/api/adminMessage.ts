"use server"
import { db } from '@/modules/db';
import {checkAuth, getUserAuth} from "@/modules/auth/auth";
import {updateUserStatus} from "@/modules/api/account";
import {Roles, RoleStatus} from "@/modules/types";


export const getMessages = async () =>{
    const messages = await db.adminMessage.findMany({
        include: {
            user: true,
        },
    });
    return messages;
}

export const createMessage = async (text: string) =>{
    await checkAuth()
    const session = await getUserAuth()
    if(!session) return
    await updateUserStatus(Roles.SELLER, RoleStatus.INPROGRESS)
    const message = await db.adminMessage.create({
        data: {
            message: text,
            userId: session.user.id
        }
    });
    return message;
}
export const acceptMessage = async (id: string, userId: string | undefined) => {
    await updateUserStatus(Roles.SELLER, RoleStatus.APPROVED, userId)
    const message = await db.adminMessage.delete({
        where: {
            id: id
        }
    });
    return message;
};






