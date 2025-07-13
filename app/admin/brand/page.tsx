import { Suspense } from 'react';
import {notFound, redirect} from 'next/navigation';

import { getBrand } from '@/lib/api/brand/queries';

import { BackButton } from '@/components/shared/BackButton';
import Loading from '@/app/(app)/loading';
import OptimisticBrand from './OptimisticBrand';
import {checkAccessProduct} from "@/lib/actions/products";

export const revalidate = 0;

async function Brand() {
    // const access = await checkAccessProduct(id);
    // (!access) && notFound();

    const { brand } = await getBrand();

  if (!brand) notFound();
  return (
    <Suspense fallback={<Loading />}>
      <div className="relative">
        <BackButton currentResource="products" />
        <OptimisticBrand brand={brand} />
      </div>
    </Suspense>
  );
}

export default async function BrandPage() {
  return (
    <main className="overflow-auto">
      <Brand />
    </main>
  );
}
