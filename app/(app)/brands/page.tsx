import { Suspense } from 'react';
import Loading from '@/app/(app)/loading';
import { getCategories } from '@/lib/api/categories/queries';
import { CategoryGrid } from '@/components/categories';
import {getBrands} from "@/lib/api/brand/queries";
import {BrandsGrid} from "@/components/brand/BrandsGrid";

export default async function CategoriesPage() {
  const { brands } = await getBrands();
  return (
    <Suspense fallback={<Loading />}>
      <BrandsGrid brands={brands} />
    </Suspense>
  );
}
