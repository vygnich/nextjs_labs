"use client"

import {SessionProvider} from "next-auth/react";
import Cart from "@/components/Cart";
import {getUser} from "@/modules/api/account";

export default  function AppLayout({children,}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main>
            <SessionProvider>
                <div className=" h-screen">
                    <main className="flex-1 md:p-8 pt-2 p-8 overflow-y-auto">
                        {children}
                    </main>
                </div>
            </SessionProvider>
        </main>
    );
}
