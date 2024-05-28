
import Link from 'next/link';
import {getUserAuth} from "@/modules/auth/auth";
import {useState} from "react";


export default async function Header (){
    let links = [
        { href: '/', title: 'Home' },
        { href: '/account', title: 'Account' },
        { href: '/products', title: 'Products' },
    ];

    const user = await getUserAuth()
    if (user){
        links = [...links, ...[{
            href: "/admin",
            title: "Admin"
        }]]
    }


    return (<div className=" md:p-8 mb-4 pb-2 w-full flex items-center">
        <div className="font-semibold text-lg">Logo</div>
        <div className="px-4 bg-muted">
            <ul className="flex ">
                {links.map((link) => (
                    <li className="my-0 mx-1" key={link.title}>
                        <Link
                            href={link.href}
                            className={
                                'text-muted-foreground hover:text-primary'
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