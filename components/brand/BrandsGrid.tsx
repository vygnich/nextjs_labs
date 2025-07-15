import { Category } from '@/lib/db/schema/categories';
import { CategoryCard } from '@/components/categories';
import {Brand} from "@prisma/client";
import {BrandCard} from "@/components/brand/BrandCard";

interface Props {
  brands: Brand[]
}

export function BrandsGrid({ brands }: Props) {
  return (
    <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
      <div className="flex flex-wrap gap-5 justify-around">
        {brands.map((brand) => (
          <BrandCard brand={brand} key={brand.id} />
        ))}
      </div>
    </div>
  );
}
