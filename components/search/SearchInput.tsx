'use client';

import React, {SyntheticEvent, useState} from 'react';
import {SearchIcon} from 'lucide-react';
import {Input} from '@/components/ui/input';
import {Product} from "@prisma/client";
import Link from "next/link";

export function SearchInput() {

    const [query, setQuery] = useState('');
    const [results, setResults] = useState<Product[]>([]);

    const search = async (event: SyntheticEvent) => {
        event.preventDefault();

        if (!query.trim()) return;

        const res = await fetch(`/api/products/search?query=${encodeURIComponent(query)}`);
        const data = await res.json();
        setResults(data);
    };

    function hide(){
        setResults([])
    }
    return (
        <div className="relative">
            <form onSubmit={search} onBlur={hide} className="max-w-md mx-auto">
                <label
                    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinejoin="round" strokeWidth="2"
                                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input onChange={(e) => setQuery(e.target.value)} type="search" id="default-search"
                           className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="Пошук..." required/>
                    <button type="submit"
                            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Пошук
                    </button>
                </div>
            </form>
            {!!results.length &&
            <div className="mt-4 space-y-2 absolute w-full h-60 top-full left-0 overflow-auto bg-white">
                {results.map((product) => (
                    <Link href={`/products/${product.id}`} key={product.id} className="border p-2 rounded flex gap-1">
                        {product.photo && <img src={product.photo} alt={product.title} className="w-10 mt-1"/>}
                        <div>
                            <div className="font-bold">{product.title}</div>
                            <div>Ціна: ${product.price.toFixed(2)}</div>
                        </div>
                    </Link>
                ))}
            </div>
            }
        </div>
    );
}
