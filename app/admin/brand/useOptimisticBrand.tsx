import { type Brand } from '@/lib/db/schema/brand';
import { OptimisticAction } from '@/lib/utils';
import { useOptimistic } from 'react';
import { CompleteBrand} from "@/prisma/zod";
import type {CompleteProduct, Product} from "@/lib/db/schema/products";

export type TAddOptimistic = (action: OptimisticAction<Brand>) => void;


export function useOptimisticBrands(
    brands: CompleteBrand[],
) {
    const [optimisticBrand, addOptimisticBrand] = useOptimistic(
        brands,
        (
            currentState: CompleteBrand[],
            action: OptimisticAction<Brand>,
        ): CompleteBrand[] => {
            const { data } = action;

            const optimisticProduct = {
                ...data,

                id: 'optimistic',
            };

            switch (action.action) {
                case 'create':
                    // @ts-ignore
                    return currentState.length !== 0 ? [...currentState, optimisticBrand as CompleteBrand] : [optimisticBrand as CompleteBrand];
                case 'update':
                    return currentState.map((item) => (item.id === data.id ? { ...item, ...optimisticBrand } : item));
                case 'delete':
                    return currentState.map((item) => (item.id === data.id ? { ...item, id: 'delete' } : item));
                default:
                    return currentState;
            }
        },
    );

    return { addOptimisticBrand, optimisticBrand };
}
