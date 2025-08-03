import { db } from '@/lib/db';
import {
  insertProductSchema,
  NewProductParams,
  ProductId,
  productIdSchema, updateProductParams,
  UpdateProductParams,
  updateProductSchema,
} from '@/lib/db/schema/products';

export const createProduct = async (product: NewProductParams) => {
  console.log("product", product)
  const newProduct = insertProductSchema.parse(product);
  try {
    const p = await db.product.create({ data: newProduct });
    return { product: p };
  } catch (err) {
    const message = (err as Error).message ?? 'Error, please try again';
    console.error(message);
    throw new Error(message);
  }
};

export const updateProduct = async (id: ProductId, product: UpdateProductParams) => {
  console.log("updateProduct")
  const { id: productId } = productIdSchema.parse({ id });
  console.log("productId", productId)
  console.log("product", product)
  const newProduct = updateProductParams.parse(product);
  console.log("newProduct", newProduct)
  try {
    const p = await db.product.update({ where: { id: productId }, data: newProduct });
    return { product: p };
  } catch (err) {
    const message = (err as Error).message ?? 'Error, please try again';
    console.error(message);
    throw new Error(message);
  }
};

export const deleteProduct = async (id: ProductId) => {
  const { id: productId } = productIdSchema.parse({ id });
  try {
    const p = await db.product.delete({ where: { id: productId } });
    return { product: p };
  } catch (err) {
    const message = (err as Error).message ?? 'Error, please try again';
    console.error(message);
    throw new Error(message);
  }
};
