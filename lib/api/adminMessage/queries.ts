"use server"
import { db } from '@/lib/db';

export const getMessages = async () =>{
  return  db.adminMessage.findMany({
    include: {
      user: true,
    },
  });
}