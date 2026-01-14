import type { Metadata } from 'next';
import { GuideList } from './_components/guide-list';

export const metadata: Metadata = {
  title: 'Guías de Compra y Análisis',
  description: 'Explora todas nuestras guías de compra y artículos analíticos sobre AI PCs, tablets, portátiles y accesorios para productividad.',
};

export default function GuiasPage() {
  return (
    <div className="container px-4 md:px-6 py-12 md:py-24 lg:py-32">
      <div className="space-y-4 text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Nuestras Guías y Análisis</h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
          Aquí encontrarás todos nuestros artículos de alta calidad. Desde comparativas detalladas hasta consejos para tu setup ideal.
        </p>
      </div>
      <GuideList />
    </div>
  );
}
