'use client';

import { z } from 'zod';

import { useTransition } from 'react';
import { useFormStatus } from 'react-dom';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { useValidatedForm } from '@/lib/hooks/useValidatedForm';

import { type Action, cn } from '@/lib/utils';
import { type TAddOptimistic } from '@/app/admin/brand/useOptimisticBrand';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useBackPath } from '@/components/shared/BackButton';

import { insertBrandParams, type Brand } from '@/lib/db/schema/brand';
import { updateBrandAction } from '@/lib/actions/brand';
import * as Sentry from '@sentry/nextjs';

function SaveButton({
  editing,
  errors,
}: {
  editing: Boolean;
  errors: boolean;
}) {
  const { pending } = useFormStatus();
  const isCreating = pending && editing === false;
  const isUpdating = pending && editing === true;
  return (
    <Button
      type="submit"
      className="mr-2"
      disabled={isCreating || isUpdating || errors}
      aria-disabled={isCreating || isUpdating || errors}
    >
      {editing
        ? `Sav${isUpdating ? 'ing...' : 'e'}`
        : `Creat${isCreating ? 'ing...' : 'e'}`}
    </Button>
  );
}

export function BrandForm({
  brand,
  openModal,
  closeModal,
  addOptimistic,
  postSuccess,
}: {
  brand: Brand;

  openModal?: (brand?: Brand) => void;
  closeModal?: () => void;
  addOptimistic?: TAddOptimistic;
  postSuccess?: () => void;
}) {
  const {
    errors, hasErrors, setErrors, handleChange,
  } = useValidatedForm<Brand>(insertBrandParams);

  const [pending, startMutation] = useTransition();

  const router = useRouter();
  const backpath = useBackPath('products');

  const onSuccess = (
    action: Action,
    data?: { error: string; values: Brand },
  ) => {
    const failed = Boolean(data?.error);
    if (failed) {
      openModal && openModal(data?.values);
      toast.error(`Failed to ${action}`, {
        description: data?.error ?? 'Error',
      });
    } else {
      router.refresh();
      postSuccess && postSuccess();
      toast.success(`Brand ${action}d!`);
      if (action === 'delete') router.push(backpath);
    }
  };

  const handleSubmit = async (data: FormData) => {
    setErrors(null);

    const payload = Object.fromEntries(data.entries());
    const brandParsed = await insertBrandParams.safeParseAsync({ ...payload });
    if (!brandParsed.success) {
      setErrors(brandParsed?.error.flatten().fieldErrors);
      return;
    }

    closeModal && closeModal();
    const values = brandParsed.data;
    const pendingBrand: Brand = {
      ...brand,
      ...values,
      id: brand?.id ?? '',
    };
    try {
      startMutation(async () => {
        addOptimistic && addOptimistic({
          data: pendingBrand,
          action: 'update',
        });

        const error = await updateBrandAction({ ...brand, ...values, id: brand.id })

        const errorFormatted = {
          error: error ?? 'Error',
          values: pendingBrand,
        };
        onSuccess('update',
          error ? errorFormatted : undefined,
        );
      });
    } catch (e) {
      Sentry.captureException(e);
      if (e instanceof z.ZodError) {
        setErrors(e.flatten().fieldErrors);
      }
    }
  };

  return (
    <form action={handleSubmit} onChange={handleChange} className="space-y-8">
      {/* Schema fields start */}
      <div>
        <Label
          className={cn(
            'mb-2 inline-block',
            errors?.name ? 'text-destructive' : '',
          )}
        >
          Назва
        </Label>
        <Input
          type="text"
          name="name"
          className={cn(errors?.name ? 'ring ring-destructive' : '')}
          defaultValue={brand?.name ?? ''}
        />
        {errors?.name ? (
          <p className="text-xs text-destructive mt-2">{errors.name[0]}</p>
        ) : (
          <div className="h-6" />
        )}
      </div>
      <div>
        <Label
          className={cn(
            'mb-2 inline-block',
            errors?.description ? 'text-destructive' : '',
          )}
        >
          Опис
        </Label>
        <Input
          type="text"
          name="description"
          className={cn(errors?.description ? 'ring ring-destructive' : '')}
          defaultValue={brand?.description ?? ''}
        />
        {errors?.description ? (
          <p className="text-xs text-destructive mt-2">{errors.description[0]}</p>
        ) : (
          <div className="h-6" />
        )}
      </div>
      <div>
        <Label
          className={cn(
            'mb-2 inline-block',
            errors?.photo ? 'text-destructive' : '',
          )}
        >
          Фото
        </Label>
        <Input
          type="text"
          name="photo"
          className={cn(errors?.photo ? 'ring ring-destructive' : '')}
          defaultValue={brand?.photo ?? ''}
        />
        {errors?.photo ? (
          <p className="text-xs text-destructive mt-2">{errors.photo[0]}</p>
        ) : (
          <div className="h-6" />
        )}
      </div>
      <div>
        <Label
          className={cn(
            'mb-2 inline-block',
            errors?.logo ? 'text-destructive' : '',
          )}
        >
          Логотип
        </Label>
        <Input
          type="text"
          name="logo"
          className={cn(errors?.logo ? 'ring ring-destructive' : '')}
          defaultValue={brand?.logo ?? ''}
        />
        {errors?.logo ? (
          <p className="text-xs text-destructive mt-2">{errors.logo[0]}</p>
        ) : (
          <div className="h-6" />
        )}
      </div>
      {/* Schema fields end */}

      {/* Save Button */}
      <SaveButton errors={hasErrors} editing={true} />
    </form>
  );
}
