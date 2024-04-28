'use client'

import Link from "next/link";
import s from "@/styles/navigation.module.scss"
import {usePathname} from "next/navigation";

const articlesRoutes = [
    {
        title: 'Favorite',
        path: '/articles/favorite'
    },
    {
        title: 'Create',
        path: '/articles/create'
    }
]

export default function ArticlesLayout({children}: { children: React.ReactNode }) {
    const pathname = usePathname()

    return (
        <section>
            <nav className={s.nav}>
                {
                    articlesRoutes.map(({title, path}, index) =>{
                        return (
                            <Link key={title} className={`text-3xl font-bold underline ${s.link} ${pathname === path ? s.link_active: "" }`} href={path}>
                                {title}
                            </Link>
                        )
                    })
                }
            </nav>
            {children}
        </section>
    )
}
