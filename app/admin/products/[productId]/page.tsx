import { Suspense } from 'react';
import {notFound, redirect} from 'next/navigation';

import { getProductById } from '@/lib/api/products/queries';

import { BackButton } from '@/components/shared/BackButton';
import Loading from '@/app/(app)/loading';
import OptimisticProduct from './OptimisticProduct';
import {checkAccessProduct} from "@/lib/actions/products";
import db from "@/lib/db";

export const revalidate = 0;

async function Product({ id }: { id: string }) {
    const access = await checkAccessProduct(id);
    (!access) && notFound();

    const { product } = await getProductById(id);

  if (!product) notFound();
  return (
    <Suspense fallback={<Loading />}>
      <div className="relative">
        <BackButton currentResource="products" />
        <OptimisticProduct product={product} categories={await db.category.findMany()} />
      </div>
    </Suspense>
  );
}

export default async function ProductPage({
  params,
}: {
  params: { productId: string };
}) {
  return (
    <main className="overflow-auto">
      <Product id={params.productId} />
    </main>
  );
}
