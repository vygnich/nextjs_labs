"use server"
import { db } from '@/lib/db';
import { getUserAuth } from '@/lib/auth/utils';
import {updateUserStatus} from "@/lib/api/users/mutations";


export const createMessage = async (text: string) =>{
  const { session } = await getUserAuth();
  if(!session) return

  await updateUserStatus("SELLER", "INPROGRESS")
  return db.adminMessage.create({
    data: {
      message: text,
      userId: session.user.id
    }
  });
}
export const acceptMessage = async (id: string, userId: string | undefined) => {
  return updateUserStatus("SELLER", "APPROVED", userId)
};