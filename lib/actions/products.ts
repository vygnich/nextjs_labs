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
import { getUserAuth } from '@/lib/auth/utils';
import { getProductById } from '@/lib/api/products';
import { UserRole } from '@prisma/client';
// eslint-disable-next-line import/no-named-as-default
import db from '@/lib/db';

const handleErrors = (e: unknown) => {
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
  console.log("createProductAction")
  try {
    const { session } = await getUserAuth();

    const brand = await db.brand.findUnique({ where: { userId: session?.user.id! } });

    input = {
      ...input,
      brandId: brand?.id!,
    };


    const payload = insertProductParams.parse(input);
    await createProduct(input);
    revalidateProducts();
  } catch (e) {
    return handleErrors(e);
  }
};

export const updateProductAction = async (input: UpdateProductParams) => {
  console.log("updateProductAction", input)
  try {
    const payload = updateProductParams.parse(input);
    console.log("payload", payload)
    await updateProduct(input.id!, payload);
    revalidateProducts();
    console.log("finish")
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

  if (session?.user.role === UserRole.ADMIN) return true;

  const product = await getProductById(input);

  if (!product || !session?.user) return false;

  const brand = await db.brand.findUnique({ where: { userId: session.user.id } });

  if (!brand) return false;

  return brand.userId === session.user.id;
};
