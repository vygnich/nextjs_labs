
import Link from 'next/link';
import {getUserAuth} from "@/modules/auth/auth";
import {useState} from "react";
import {Roles, RoleStatus} from "@/modules/types";


export default async function Header (){
    let links = [
        { href: '/', title: 'Home' },
        { href: '/account', title: 'Account' },
        { href: '/products', title: 'Products' },
        { href: '/memes', title: 'Memes' },
    ];

    const user = await getUserAuth()
    if (user && user.user.roleStatus == RoleStatus.APPROVED && (user.user.role == Roles.SELLER || user.user.role == Roles.ADMIN)){
        links = [...links, ...[{
            href: "/admin",
            title: "Admin"
        },
            {
                href: "/cart",
                title: "Cart"
            }]]
    }
    if (user && user.user.role == Roles.USER ){
        links = [...links, ...[{
            href: "/cart",
            title: "Cart"
        }]]
    }


    return (<div className=" p-8 mb-4 pb-2 w-full flex items-center">
        <div className="font-semibold text-lg">Logo</div>
        <div className="px-4 bg-muted">
            <ul className="flex flex-wrap">
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