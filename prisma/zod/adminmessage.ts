import * as z from "zod"
import { CompleteUser, relatedUserSchema } from "./index"

export const adminMessageSchema = z.object({
  id: z.string(),
  userId: z.string(),
  message: z.string(),
})

export interface CompleteAdminMessage extends z.infer<typeof adminMessageSchema> {
  user: CompleteUser
}

/**
 * relatedAdminMessageSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedAdminMessageSchema: z.ZodSchema<CompleteAdminMessage> = z.lazy(() => adminMessageSchema.extend({
  user: relatedUserSchema,
}))
