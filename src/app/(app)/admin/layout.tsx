// import { checkAuth } from '@/lib/auth/utils';
// import { Toaster } from '@/components/ui/sonner';

import { ReactNode } from 'react';
import {SessionProvider} from "next-auth/react";
import Header from "@/components/Header";
import AdminActionsButtons from "@/components/admin/AdminActionsButtons";
export default async function AppLayout({children,}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main>
            <div className=" h-screen">
                <main className="flex-1 md:p-8 pt-2 p-8 overflow-y-auto">
                    {children}
                </main>
            </div>

        </main>
    );
}
