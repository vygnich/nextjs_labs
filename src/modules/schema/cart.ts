import {cartSchema} from "../../../prisma/zod"
import { z } from 'zod';

export type Cart = z.infer<typeof cartSchema>;

