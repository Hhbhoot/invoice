'use client';
import { useFormStatus } from 'react-dom';
import { Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled className="w-full cursor-wait">
          <p className="flex items-center justify-center gap-3">
            <Loader2 className="animate-spin mr-2" />
            Please wait...
          </p>
        </Button>
      ) : (
        <Button className="w-full cursor-pointer" type="submit">
          Submit
        </Button>
      )}
    </>
  );
}
