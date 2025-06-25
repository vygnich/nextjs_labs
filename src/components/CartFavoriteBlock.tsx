'use client';

import { useTransition } from 'react';
import { createCartAction } from '@/lib/actions/carts';
import { deleteProductFromCartAction } from '@/lib/actions/orders';
import { ProductId } from '@/lib/db/schema/products';


interface Props {
    inCart: boolean;
    productId: ProductId;
}

export function CartFavoriteBlock({ productId, inCart }: Props) {
    const [, startTransition] = useTransition();
    const addToCartHandler = async () => {
        startTransition(async () => {
            await createCartAction({ productId, count: 1 });
        });
    };

    const removeFromCartHandler = async () => {
        startTransition(async () => {
            await deleteProductFromCartAction(productId);
        });
    };

    const handleCartClick = () => {
        startTransition(async () => {
            if (inCart) {
                await removeFromCartHandler();
            } else {
                await addToCartHandler();
            }
            toast('Success');
        });
    };
    return (
        <div className="grid grid-cols-2 gap-2">
            <div
                className="min-w-40 h-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={handleCartClick}
            >
                {inCart ? <IoCart size="23px" color="white" /> : <IoCartOutline size="23px" color="white" />}
            </div>
        </div>
    );
}