import { adminMessageSchema } from '@/prisma/zod';

import { z } from 'zod';

export const insertAdminMessageParams = adminMessageSchema.omit({
    id: true,
    userId: true
});


export type AdminMessage = z.infer<typeof adminMessageSchema>;
export type InsertAdminMessageParams = z.infer<typeof insertAdminMessageParams>;
