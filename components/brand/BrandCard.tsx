import Link from 'next/link';
import { Category } from '@/lib/db/schema/categories';
import {Brand} from "@prisma/client";

interface Props {
  brand: Brand
}
export function BrandCard({ brand }: Props) {
  return (
    <div className="p-3 w-72 border rounded-xl">
      <Link href={`/brands/${brand.id}`}>
        <img className="w-72 h-40 object-cover rounded-lg" src={brand.logo ?? ''} alt="" />
        <h3 className="font-bold mt-1">{brand.name}</h3>
      </Link>
    </div>
  );
}
