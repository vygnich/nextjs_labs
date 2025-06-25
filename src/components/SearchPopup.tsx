'use client';

import { useEffect, useRef, useState } from 'react';

type Product = {
    id: string;
    title: string;
    description?: string;
    price: number;
    photo?: string;
};

export default function SearchPopup() {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<Product[]>([]);
    const [loading, setLoading] = useState(false);
    const popupRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    const handleSearch = async () => {
        if (!query.trim()) return;
        setLoading(true);
        const res = await fetch(`/api/products/search?query=${encodeURIComponent(query)}`);
        const data = await res.json();
        setResults(data);
        setLoading(false);
    };

    return (
        <div className="relative" ref={popupRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-black text-xl p-2"
                aria-label="Open search"
            >
                🔍
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg p-4 z-50">
                    <input
                        type="text"
                        value={query}
                        placeholder="Search products..."
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                        className="w-full border text-black border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <button
                        onClick={handleSearch}
                        className="w-full mt-2 bg-blue-500 text-white rounded py-2 text-sm hover:bg-blue-600 transition"
                    >
                        Search
                    </button>

                    {loading && <p className="text-sm text-gray-500 mt-2">Loading...</p>}

                    <ul className="mt-3 max-h-60 overflow-y-auto divide-y divide-gray-100">
                        {results?.map((product) => (
                            <li key={product.id} className="py-2 text-sm">
                                <span className="font-semibold text-black">{product.title}</span> — ${product.price}
                            </li>
                        ))}
                    </ul>

                    {!loading && results.length === 0 && query && (
                        <p className="text-sm text-gray-500 mt-3">No products found.</p>
                    )}
                </div>
            )}
        </div>
    );
}
