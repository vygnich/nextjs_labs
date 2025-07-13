"use server"
import { db } from '@/lib/db';
import {getUserAuth} from "@/lib/auth/utils";

export const getBrands = async () => {
  const p = await db.brand.findMany({});
  return { brands: p };
};

export const getBrand = async () => {
  const { session } = await getUserAuth();

  const b = await db.brand.findUnique({where: {userId: session?.user.id!}});
  return { brand: b };
};

