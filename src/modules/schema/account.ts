import {userSchema} from "../../../prisma/zod"
import { z } from 'zod';

export const insertUserSchema = userSchema.omit({ id: true });
export const insertUserParams = userSchema.extend({}).omit({
    id: true,
});

export const updateUserSchema = userSchema
export const updateUserParams = updateUserSchema.extend({});
export const userIdSchema = userSchema.pick({ id: true });

export type User = z.infer<typeof userSchema>;
export type UpdateUserParams = z.infer<typeof updateUserParams>;

