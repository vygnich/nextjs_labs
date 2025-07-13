import * as z from "zod"
import { CompleteUser, relatedUserSchema, CompleteProduct, relatedProductSchema } from "./index"

export const brandSchema = z.object({
  id: z.string(),
  userId: z.string(),
  name: z.string(),
  description: z.string().nullish(),
  photo: z.string().nullish(),
  logo: z.string().nullish(),
})

export interface CompleteBrand extends z.infer<typeof brandSchema> {
  owner: CompleteUser
  Products: CompleteProduct[]
}

/**
 * relatedBrandSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedBrandSchema: z.ZodSchema<CompleteBrand> = z.lazy(() => brandSchema.extend({
  owner: relatedUserSchema,
  Products: relatedProductSchema.array(),
}))
