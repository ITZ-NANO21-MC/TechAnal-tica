import type { Metadata } from 'next';
import { Catalog } from './_components/catalog';

export const metadata: Metadata = {
  title: 'Catálogo de Accesorios',
  description: 'Descubre nuestra selección de accesorios recomendados para mejorar tu productividad: teclados, lápices, hubs y más.',
};

export default function CatalogoPage() {
  return (
    <div className="container px-4 md:px-6 py-12 md:py-24 lg:py-32">
      <div className="space-y-4 text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Catálogo de Accesorios</h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
          Nuestra selección de productos recomendados. Ordena por precio, marca o dispositivo compatible para encontrar lo que necesitas.
        </p>
      </div>
      <Catalog />
    </div>
  );
}
