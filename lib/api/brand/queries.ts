"use server"
import { db } from '@/lib/db';
import {getUserAuth} from "@/lib/auth/utils";
import {CategoryId, categoryIdSchema} from "@/lib/db/schema/categories";
import {BrandId} from "@/lib/db/schema/brand";

export const getBrands = async () => {
  const p = await db.brand.findMany({});
  return { brands: p };
};

export const getBrand = async () => {
  const { session } = await getUserAuth();

  const b = await db.brand.findUnique({where: {userId: session?.user.id!}});
  return { brand: b };
};

export const getBrandById = async (id: BrandId) => {
  const { id: brandId } = categoryIdSchema.parse({ id });
  const b = await db.brand.findFirst({ where: { id: brandId } });
  return { brand: b };
};


export const getProductsByBrandId = async (id: BrandId) => {
  const { id: brandId } = categoryIdSchema.parse({ id });
  const b = await db.brand.findFirst({
    where: {
      id: brandId,
    },
    include: {
      Products: true,
    },
  });
  return { brand: b };
};
