import { db } from '@/lib/db';
import {
  insertUserSchema,
  NewUserParams,
  UpdateUserParams,
  updateUserSchema,
  UserId,
  userIdSchema,
} from '@/lib/db/schema/users';
import * as Sentry from '@sentry/nextjs';
import { getUserAuth } from '@/lib/auth/utils';
import {RoleStatus, UserRole} from "@prisma/client";


export const createUser = async (user: NewUserParams) => {
  const newUser = insertUserSchema.parse(user);
  try {
    const c = await db.user.create({ data: newUser });
    return { user: c };
  } catch (err) {
    Sentry.captureException(err);
    const message = (err as Error).message ?? 'Error, please try again';
    console.error(message);
    throw new Error(message);
  }
};

export const updateUser = async (id: UserId, user: UpdateUserParams) => {
  const { id: userId } = userIdSchema.parse({ id });
  const newUser = updateUserSchema.parse(user);
  try {
    const c = await db.user.update({ where: { id: userId }, data: newUser });
    return { category: c };
  } catch (err) {
    Sentry.captureException(err);
    const message = (err as Error).message ?? 'Error, please try again';
    console.error(message);
    throw new Error(message);
  }
};

export const deleteUser = async (id: UserId) => {
  const { id: userId } = userIdSchema.parse({ id });
  try {
    const c = await db.user.delete({ where: { id: userId } });
    return { user: c };
  } catch (err) {
    Sentry.captureException(err);
    const message = (err as Error).message ?? 'Error, please try again';
    console.error(message);
    throw new Error(message);
  }
};

export const updateUserStatus = async (role: UserRole, roleStatus: RoleStatus, userId: string | undefined = undefined) => {
  if(!userId){
    const {session} = await getUserAuth()
    if(!session) return
    userId = session.user.id!
  }
  return  db.user.update({ where: { id: userId },
    data: {
      role: role,
      roleStatus: roleStatus
    }
  });
};
