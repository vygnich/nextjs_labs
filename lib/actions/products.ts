'use server';

import { revalidatePath } from 'next/cache';
import { createProduct, deleteProduct, updateProduct } from '@/lib/api/products/mutations';
import {
  insertProductParams,
  NewProductParams,
  ProductId,
  productIdSchema,
  UpdateProductParams,
  updateProductParams,
} from '@/lib/db/schema/products';
import * as Sentry from '@sentry/nextjs';
import {getUserAuth} from "@/lib/auth/utils";
import {getProductById} from "@/lib/api/products";
import {UserRole} from "@prisma/client";
import db from "@/lib/db";

const handleErrors = (e: unknown) => {
  Sentry.captureException(e);
  const errMsg = 'Error, please try again.';
  if (e instanceof Error) return e.message.length > 0 ? e.message : errMsg;
  if (e && typeof e === 'object' && 'error' in e) {
    const errAsStr = e.error as string;
    return errAsStr.length > 0 ? errAsStr : errMsg;
  }
  return errMsg;
};

const revalidateProducts = () => revalidatePath('/products');

export const createProductAction = async (input: NewProductParams) => {
  try {
    const category = await db.category.findFirst();
    const { session } = await getUserAuth();

    const brand = await db.brand.findUnique({where: {userId: session?.user.id!}});


    input = {
      ...input,
      categoryId: category?.id!,
      brandId: brand?.id!,
    }

    console.log("input", input)

    const payload = insertProductParams.parse(input);
    await createProduct(input);
    revalidateProducts();
  } catch (e) {
    return handleErrors(e);
  }
};

export const updateProductAction = async (input: UpdateProductParams) => {
  try {
    const payload = updateProductParams.parse(input);
    await updateProduct(payload.id, payload);
    revalidateProducts();
  } catch (e) {
    return handleErrors(e);
  }
};

export const deleteProductAction = async (input: ProductId) => {
  try {
    const payload = productIdSchema.parse({ id: input });
    await deleteProduct(payload.id);
    revalidateProducts();
  } catch (e) {
    return handleErrors(e);
  }
};

export const checkAccessProduct = async (input: ProductId) => {
  const { session } = await getUserAuth();

  const product = await getProductById(input);

  if(!product || !session?.user) return false

  const brand = await db.brand.findUnique({where: {userId: session.user.id}});

  if(!brand) return false

  return brand.userId === session.user.id || session.user.role === UserRole.ADMIN;
};

