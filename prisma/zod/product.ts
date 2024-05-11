import * as z from "zod"
import { CompleteOrder, relatedOrderSchema, CompleteCart, relatedCartSchema, CompleteOrderProducts, relatedOrderProductsSchema } from "./index"

export const productSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string().nullish(),
  photo: z.string().nullish(),
  price: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
  orderId: z.string().nullish(),
})

export interface CompleteProduct extends z.infer<typeof productSchema> {
  Order?: CompleteOrder | null
  Cart: CompleteCart[]
  OrderProducts: CompleteOrderProducts[]
}

/**
 * relatedProductSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedProductSchema: z.ZodSchema<CompleteProduct> = z.lazy(() => productSchema.extend({
  Order: relatedOrderSchema.nullish(),
  Cart: relatedCartSchema.array(),
  OrderProducts: relatedOrderProductsSchema.array(),
}))
