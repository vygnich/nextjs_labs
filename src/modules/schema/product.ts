import {productSchema} from "../../../prisma/zod"
import { z } from 'zod';
import { timestamps } from '@/modules/seed';

// Schema for products - used to validate API requests
const baseSchema = productSchema.omit(timestamps);

export const insertProductSchema = baseSchema.omit({ id: true });
export const insertProductParams = baseSchema.extend({
    price: z.coerce.number(),
}).omit({
    id: true,
});

export const updateProductSchema = baseSchema.omit({ id: true });
export const updateProductParams = updateProductSchema.extend({
    price: z.coerce.number(),
})
export const productIdSchema = baseSchema.pick({ id: true });

// Types for products - used to type API request params and within Components

// this type infers the return from getProducts() - meaning it will include any joins
