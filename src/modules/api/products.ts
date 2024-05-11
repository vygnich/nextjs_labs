import { db } from '@/modules/db';

export const getAllProducts = async () => {
    const products = await db.product.findMany();
    return products;
};

export const createProduct = async (data: any) => {
    const product = await db.product.create({ data });
    return product;
};

export const getProductById = async (id: string) => {
    const product = await db.product.findUnique({ where: { id } });
    return product;
};

export const deleteProduct = async (id: string) => {
    const product = await db.product.delete({ where: { id } });
    return product;
};

export const updateProduct = async (id: string, data: any) => {
    const product = await db.product.update({ where: { id: id }, data });
    return product;
};