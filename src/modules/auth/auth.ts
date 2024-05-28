import NextAuth from "next-auth";
import { PrismaAdapter } from '@auth/prisma-adapter';
import { Adapter } from 'next-auth/adapters';
import {db} from "@/modules/db";
import { redirect } from 'next/navigation';
import { DefaultSession, getServerSession, NextAuthOptions } from 'next-auth';
import GoogleProvider from "next-auth/providers/google"
import GitHubProvider from "next-auth/providers/github"
import { PrismaClient } from "@prisma/client"
import {faker} from "@faker-js/faker";


const prisma = new PrismaClient()

declare module 'next-auth' {
    interface Session {
        user: DefaultSession['user'] & {
            id: string,
            name?: string;
            email?: string;
            image?: string;
        };
    }
}
export type AuthSession = {
    session: {
        user: {
            id: string;
            name?: string;
            email?: string;
        };
    } | null;
};
export const authOptions :NextAuthOptions  = {
    callbacks: {
        session: async function AuthUser ({ session }) {
            let user = await db.user.findUnique({
                where: {
                    email: session.user.email!,
                }
            })
            if (!user){
                user = await db.user.create({
                    data: {
                        email: session.user.email,
                        name: session.user.name,
                    },
                })
            }
            return ({
            ...session,
                user: {
                    ...user
                }
        })},
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID!,
            clientSecret: process.env.GITHUB_SECRET!
        })
    ],
    secret: process.env.NEXTAUTH_SECRET
}

export const getUserAuth = async () => {
    const session = await getServerSession(authOptions);
    return session;
};

export const checkAuth = async () => {
    const session = await getUserAuth();
    if (!session) redirect('/api/auth/signin');
};