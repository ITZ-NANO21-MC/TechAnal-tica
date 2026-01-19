'use client';

import { useEffect, useRef, useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { subscribeToNewsletter } from './newsletter-actions';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? 'Suscribiendo...' : 'Suscribirse'}
    </Button>
  );
}

export function Newsletter() {
  const [state, formAction] = useActionState(subscribeToNewsletter, null);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (!state) return;

    if (state.status === 'success') {
      toast({
        title: '¡Suscrito!',
        description: state.message,
      });
      formRef.current?.reset();
    } else if (state.status === 'error') {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: state.message,
      });
    }
  }, [state, toast]);

  return (
    <section id="newsletter" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Recibe las últimas guías y análisis
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Suscríbete para no perderte ninguna novedad sobre tecnología y
            productividad.
          </p>
        </div>
        <div className="mx-auto w-full max-w-sm">
          <form ref={formRef} className="flex space-x-2" action={formAction}>
            <Input
              type="email"
              name="email"
              placeholder="Ingresa tu email"
              className="max-w-lg flex-1"
              required
            />
            <SubmitButton />
          </form>
        </div>
      </div>
    </section>
  );
}
