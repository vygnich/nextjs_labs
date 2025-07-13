"use server"
import { db } from '@/lib/db';
import { getUserAuth } from '@/lib/auth/utils';
import {ProductId, productIdSchema, UpdateProductParams, updateProductSchema} from "@/lib/db/schema/products";
import * as Sentry from "@sentry/nextjs";
import {BrandId, brandIdSchema, UpdateBrandParams, updateBrandSchema} from "@/lib/db/schema/brand";


export const initBrand = async (userId: string) =>{
  const user = await db.user.findUnique({where: {id: userId}});
  if(!user) return

  return db.brand.create({
    data: {
      name: String(user.name),
      userId: user.id,
    }
  });
}



export const updateBrand = async (id: BrandId, brand: UpdateBrandParams) => {
  const { id: brandId } = brandIdSchema.parse({ id });

  console.log("updateBrand", brand)

  const newBrand = updateBrandSchema.parse(brand);
  try {
    const b = await db.brand.update({ where: { id: brandId }, data: newBrand });
    return { brand: b };
  } catch (err) {
    Sentry.captureException(err);
    const message = (err as Error).message ?? 'Error, please try again';
    console.error(message);
    throw new Error(message);
  }
};
