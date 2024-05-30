import * as z from "zod"
import { Role, RoleStatus } from "@prisma/client"
import { CompleteOrder, relatedOrderSchema, CompleteCart, relatedCartSchema, CompleteProduct, relatedProductSchema, CompleteAdminMessage, relatedAdminMessageSchema } from "./index"

export const userSchema = z.object({
  id: z.string(),
  name: z.string().nullish(),
  email: z.string().nullish(),
  role: z.nativeEnum(Role),
  roleStatus: z.nativeEnum(RoleStatus),
  emailVerified: z.date().nullish(),
  image: z.string().nullish(),
})

export interface CompleteUser extends z.infer<typeof userSchema> {
  Order: CompleteOrder[]
  Cart: CompleteCart[]
  Product: CompleteProduct[]
  AdminMessage?: CompleteAdminMessage | null
}

/**
 * relatedUserSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedUserSchema: z.ZodSchema<CompleteUser> = z.lazy(() => userSchema.extend({
  Order: relatedOrderSchema.array(),
  Cart: relatedCartSchema.array(),
  Product: relatedProductSchema.array(),
  AdminMessage: relatedAdminMessageSchema.nullish(),
}))
