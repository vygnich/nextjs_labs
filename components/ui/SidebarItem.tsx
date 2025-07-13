'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

// import { LucideIcon } from 'lucide-react';

import { cn } from '@/lib/utils';


interface SidebarLinkType {
    title: string;
    href: string;
}

export function SidebarLink({
                                link,
                                children
                            }: {
    link: SidebarLinkType;
    children: React.ReactNode
}) {
    const fullPathname = usePathname();
    const  active = fullPathname === link.href


    return (
        <Link
            href={link.href}
            className={`group transition-colors p-2 inline-block hover:bg-popover hover:text-primary text-muted-foreground text-xs hover:shadow rounded-md w-full${
                active ? ' text-primary font-semibold' : ''
            }`}
        >

            <div className="flex items-center">
                <div
                    className={cn(
                        'opacity-0 left-0 h-6 w-[4px] absolute rounded-r-lg bg-primary',
                        active ? 'opacity-100' : '',
                    )}
                />
                {children}
                <span>{link.title}</span>
            </div>
        </Link>
    );
}
