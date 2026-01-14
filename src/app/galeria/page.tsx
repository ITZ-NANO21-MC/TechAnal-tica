import type { Metadata } from 'next';
import { Gallery } from './_components/gallery';

export const metadata: Metadata = {
  title: 'Galería de Dispositivos',
  description: 'Explora nuestra galería de imágenes de alta calidad de AI PCs, tablets, setups de trabajo y accesorios. Inspírate para tu próximo equipo.',
};

export default function GaleriaPage() {
  return (
    <div className="container px-4 md:px-6 py-12 md:py-24 lg:py-32">
      <div className="space-y-4 text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Galería de Dispositivos</h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
          Una colección de imágenes de alta calidad de los dispositivos y setups que analizamos. Filtra por categoría para encontrar lo que buscas.
        </p>
      </div>
      <Gallery />
    </div>
  );
}
