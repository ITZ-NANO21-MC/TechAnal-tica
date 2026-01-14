'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Newsletter() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Newsletter logic would go here
    console.log('Newsletter signup');
  };

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
          <form className="flex space-x-2" onSubmit={handleSubmit}>
            <Input
              type="email"
              placeholder="Ingresa tu email"
              className="max-w-lg flex-1"
              required
            />
            <Button type="submit">Suscribirse</Button>
          </form>
        </div>
      </div>
    </section>
  );
}
