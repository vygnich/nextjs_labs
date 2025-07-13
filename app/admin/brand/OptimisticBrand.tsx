'use client';

import { useOptimistic, useState } from 'react';
import { TAddOptimistic } from '@/app/admin/brand/useOptimisticBrand';
import { type Product } from '@/lib/db/schema/products';
import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';
import { Modal } from '@/components/shared/Modal';
import { BrandForm } from '@/components/brand/BrandForm';
import { type Brand } from '@/lib/db/schema/brand';


export default function OptimisticBrand({
                brand,
}: {
    brand: Brand;
}) {
  const [open, setOpen] = useState(false);
  const openModal = () => {
    setOpen(true);
  };
  const closeModal = () => setOpen(false);
  const [optimisticBrand, setOptimisticBrand] = useOptimistic(brand);
  const updateBrand: TAddOptimistic = (input) => setOptimisticBrand({ ...input.data });

  return (
    <div className="m-4">
      <Modal open={open} setOpen={setOpen}>
        <BrandForm
          brand={optimisticBrand}
          closeModal={closeModal}
          openModal={openModal}
          addOptimistic={updateBrand}
        />
      </Modal>
      <div className="flex justify-between items-end mb-4">
        <h1 className="font-semibold text-2xl">{optimisticBrand.name}</h1>
        <Button className="" onClick={() => setOpen(true)}>
          Edit
        </Button>
      </div>
      <pre
        className={cn(
          'bg-secondary p-4 rounded-lg break-all text-wrap',
            optimisticBrand.id === 'optimistic' ? 'animate-pulse' : '',
        )}
      >
        {JSON.stringify(optimisticBrand, null, 2)}
      </pre>
    </div>
  );
}
