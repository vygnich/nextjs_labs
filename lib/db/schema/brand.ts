import { brandSchema } from '@/zodAutoGenSchemas';
import { z } from 'zod';
import { timestamps } from '@/lib/utils';
import { getBrands } from '@/lib/api/brand/queries';

// Schema for products - used to validate API requests
const baseSchema = brandSchema.omit({});

export const insertBrandSchema = baseSchema.partial({ id: true, userId: true});
export const insertBrandParams = baseSchema.partial({
  id: true,
  userId: true
});

export const updateBrandSchema = baseSchema;
export const updateBrandParams = updateBrandSchema.extend({
}).partial({ userId: true});
export const brandIdSchema = baseSchema.pick({ id: true });

// Types for products - used to type API request params and within Components
export type Brand = z.infer<typeof brandSchema>;
export type NewBrand = z.infer<typeof insertBrandSchema>;
export type NewBrandParams = z.infer<typeof insertBrandParams>;
export type UpdateBrandParams = z.infer<typeof updateBrandParams>;
export type BrandId = z.infer<typeof brandIdSchema>['id'];

// this type infers the return from getProducts() - meaning it will include any joins


// this type infers the return from getProducts() - meaning it will include any joins
export type CompleteBrand = Awaited<ReturnType<typeof getBrands>>['brands'][number];