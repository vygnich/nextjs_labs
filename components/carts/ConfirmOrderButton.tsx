'use client';

import { Button } from '@/components/ui/button';
import { useState, useTransition } from 'react';
import { createUserOrderAction } from '@/lib/actions/orders';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { toast } from 'sonner';
import { redirect } from 'next/navigation';

export const ConfirmOrderButton = () => {
  const [, startMutation] = useTransition();
  const [notes, setNotes] = useState('');

  const clickHandler = () => {
    startMutation(async () => {
      await createUserOrderAction(notes);
      toast('Success');
      redirect('/orders');
    });
  };
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="bg-app-secondary">Погодити замовлення</Button>
      </SheetTrigger>
      <SheetContent className="bg-bg-light">
        <SheetHeader>
          <SheetTitle>Погодити замовлення</SheetTitle>
          <SheetDescription>
            Підтвердіть замовлення та додайте коментар до замовлення, якщо бажаєте. Натисніть підтвердити.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-3">
            <Label htmlFor="name" className="text-right">
              Нотатки:
            </Label>
            <Input
              id="notes"
              placeholder="Add a comment to the order"
              className="col-span-3"
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button onClick={clickHandler}>Погодити замовлення</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
