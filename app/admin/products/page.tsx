import { Suspense } from 'react';

import Loading from '@/app/(app)/loading';
import { ProductList } from '@/components/products';
import {getUserOrAllProducts} from '@/lib/api/products/queries';
import {getUserAuth} from "@/lib/auth/utils";
import db from "@/lib/db";

export const revalidate = 0;

async function Products() {
    const { session } = await getUserAuth();

    const { products } = await getUserOrAllProducts(session?.user.id);

  return (
    <Suspense fallback={<Loading />}>
      <ProductList products={products} categories={await db.category.findMany()} />
    </Suspense>
  );
}

export default async function ProductsPage() {
  return (
    <main>
      <div className="relative">
        <div className="flex justify-between">
          <h1 className="font-semibold text-2xl my-2">Products</h1>
        </div>
        <Products />
      </div>
    </main>
  );
}
