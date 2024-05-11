'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const defaultLinks = [
    { href: '/', title: 'Home' },
    { href: '/account', title: 'Account' },
];
export default function Header (){
    const pathname = usePathname();

    return (<div className=" md:p-8 mb-4 pb-2 w-full flex items-center">
        <div className="font-semibold text-lg">Logo</div>
        <div className="px-4 bg-muted">
            <ul className="flex ">
                {defaultLinks.map((link) => (
                    <li className="my-0 mx-1" key={link.title}>
                        <Link
                            href={link.href}
                            className={
                                pathname === link.href
                                    ? 'text-primary hover:text-primary font-semibold'
                                    : 'text-muted-foreground hover:text-primary'
                            }
                        >
                            {link.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    </div>)
}