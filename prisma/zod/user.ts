import * as z from "zod"
import { RoleStatus, UserRole } from "@prisma/client"
import { CompleteAccount, relatedAccountSchema, CompleteSession, relatedSessionSchema, CompleteOrder, relatedOrderSchema, CompleteFeedback, relatedFeedbackSchema, CompleteCart, relatedCartSchema, CompleteFavorite, relatedFavoriteSchema, CompleteAdminMessage, relatedAdminMessageSchema, CompleteBrand, relatedBrandSchema } from "./index"

export const userSchema = z.object({
  id: z.string(),
  name: z.string().nullish(),
  email: z.string().nullish(),
  emailVerified: z.date().nullish(),
  image: z.string().nullish(),
  dateOfBirth: z.date().nullish(),
  successPurchases: z.number().int().nullish(),
  failPurchases: z.number().int().nullish(),
  bonuses: z.number().int().nullish(),
  roleStatus: z.nativeEnum(RoleStatus),
  role: z.nativeEnum(UserRole),
})

export interface CompleteUser extends z.infer<typeof userSchema> {
  accounts: CompleteAccount[]
  sessions: CompleteSession[]
  orders: CompleteOrder[]
  feedbacks: CompleteFeedback[]
  carts: CompleteCart[]
  favorites: CompleteFavorite[]
  AdminMessage?: CompleteAdminMessage | null
  brand?: CompleteBrand | null
}

/**
 * relatedUserSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedUserSchema: z.ZodSchema<CompleteUser> = z.lazy(() => userSchema.extend({
  accounts: relatedAccountSchema.array(),
  sessions: relatedSessionSchema.array(),
  orders: relatedOrderSchema.array(),
  feedbacks: relatedFeedbackSchema.array(),
  carts: relatedCartSchema.array(),
  favorites: relatedFavoriteSchema.array(),
  AdminMessage: relatedAdminMessageSchema.nullish(),
  brand: relatedBrandSchema.nullish(),
}))
