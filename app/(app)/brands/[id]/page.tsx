import { getProductsByCategoryId } from '@/lib/api/categories/queries';
import React, { Suspense } from 'react';
import Loading from '@/app/(app)/loading';
import { notFound } from 'next/navigation';
import { ProductsGrid } from '@/components/products';
import { getProductIdsInCart } from '@/lib/api/carts/queries';
import { getProductIdsInFavorites } from '@/lib/api/favorites/queries';
import { getProductsByBrandId } from '@/lib/api/brand/queries';

interface Props {
  params: {
    id: string
  }
}

export default async function BrandIdPage({ params }: Props) {
  const { brand } = await getProductsByBrandId(params.id);
  if (!brand) {
    notFound();
  }

  const productsInCart = await getProductIdsInCart();
  const productsInFavorite = await getProductIdsInFavorites();
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <section className="bg-white lg:grid lg:place-content-center dark:bg-gray-900">
          <div
              className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 md:grid md:grid-cols-2 md:items-center md:gap-4 lg:px-8 lg:py-32"
          >
            <div className="max-w-prose text-left">
              <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl dark:text-white">
                {brand.name}
              </h1>

              <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed dark:text-gray-200">
                {brand.description}
              </p>

            </div>

            <img src={brand.photo!}/>
          </div>
        </section>
        <ProductsGrid productsInCart={productsInCart} productsInFavorite={productsInFavorite} products={brand.Products} />
      </Suspense>
    </div>
  );
}
