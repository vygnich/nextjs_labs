'use client';

import { Product } from '@/lib/db/schema/products';
import {
  IoCart, IoCartOutline, IoHeartOutline, IoHeartSharp,
} from 'react-icons/io5';
import Link from 'next/link';
import { useTransition } from 'react';
import { createCartAction } from '@/lib/actions/carts';
import { createFavoriteAction, removeFromFavoriteAction } from '@/lib/actions/favorites';
import { deleteProductFromCartAction } from '@/lib/actions/orders';
import classNames from 'classnames';
import { toast } from 'sonner';

interface Props {
  product: Product
  inCart: boolean;
  inFavorite: boolean;
}
export async function ProductCard({ product, inCart, inFavorite }: Props) {
  const [, startTransition] = useTransition();

  const addToCartHandle = () => {
    startTransition(async () => {
      await createCartAction({ productId: product.id, count: 1 });
    });
  };
  const removeFromCartHandler = async () => {
    startTransition(async () => {
      await deleteProductFromCartAction(product.id);
    });
  };
  const addToFavoriteHandle = () => {
    startTransition(async () => {
      await createFavoriteAction({ productId: product.id });
    });
  };
  const removeFromFavoriteHandler = async () => {
    startTransition(async () => {
      await removeFromFavoriteAction(product.id);
    });
  };

  const handleCartClick = () => {
    startTransition(async () => {
      if (inCart) {
        await removeFromCartHandler();
      } else {
        addToCartHandle();
      }
      toast('Success');
    });
  };

  const handleFavoriteClick = () => {
    startTransition(async () => {
      if (inFavorite) {
        await removeFromFavoriteHandler();
      } else {
        addToFavoriteHandle();
      }
      toast('Success');
    });
  };

  return (
    <Link className="w-72" href={`/products/${product.id}`}>
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <div className="h-56 w-full">
            <img className="mx-auto h-full dark:hidden"
                 src={product.photo || "https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"} alt=""/>
            <img className="mx-auto hidden h-full dark:block"
                 src={product.photo || "https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg"}
                 alt=""/>
          </div>
          <div className="pt-6">
            <div className="mb-4 flex items-center justify-between gap-4">
              <div className="flex items-center justify-end gap-1">
                <button type="button" data-tooltip-target="tooltip-quick-look"
                        className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                  <span className="sr-only"> Quick look </span>
                  <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                       fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor"
                          d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"></path>
                    <path stroke="currentColor" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path>
                  </svg>
                </button>
                <button
                    type="button"
                    className={classNames(
                        'size-8 rounded-md flex justify-center items-center duration-500'
                    )}
                    onClick={handleFavoriteClick}
                >
                  {inFavorite ? <IoHeartSharp/> : <IoHeartOutline/>}
                </button>
              </div>
            </div>

            <span className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white">Apple
              {product.title}</span>

            <div className="mt-2 flex items-center gap-2">
              <div className="flex items-center">
                <svg className="h-4 w-4 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                     fill="currentColor" viewBox="0 0 24 24">
                  <path
                      d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z"></path>
                </svg>

                <svg className="h-4 w-4 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                     fill="currentColor" viewBox="0 0 24 24">
                  <path
                      d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z"></path>
                </svg>

                <svg className="h-4 w-4 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                     fill="currentColor" viewBox="0 0 24 24">
                  <path
                      d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z"></path>
                </svg>

                <svg className="h-4 w-4 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                     fill="currentColor" viewBox="0 0 24 24">
                  <path
                      d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z"></path>
                </svg>

                <svg className="h-4 w-4 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                     fill="currentColor" viewBox="0 0 24 24">
                  <path
                      d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z"></path>
                </svg>
              </div>

              <p className="text-sm font-medium text-gray-900 dark:text-white">5.0</p>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">(455)</p>
            </div>

            <div className="mt-4 flex items-center justify-between gap-4">
              <p className="text-2xl font-extrabold leading-tight text-gray-900 dark:text-white">
                {product.price}{' '}грн
              </p>
            </div>
          </div>
        </div>
        </Link>
  );
}
