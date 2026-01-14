'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import { useCounter } from '@/hooks/use-counter';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

const StatItem = ({ value, label }: { value: number; label: string }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const count = useCounter(inView ? value : 0, 50);

  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl md:text-5xl font-bold tracking-tighter text-primary">
        {Math.round(count)}+
      </p>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
};

export function Hero() {
  const heroBgImage = PlaceHolderImages.find(p => p.id === 'hero-background');

  return (
    <section className="relative w-full py-20 md:py-32 lg:py-40 overflow-hidden">
        {heroBgImage && (
             <Image
                src={heroBgImage.imageUrl}
                alt={heroBgImage.description}
                fill
                className="object-cover z-0"
                priority
                data-ai-hint={heroBgImage.imageHint}
            />
        )}
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground">
                Decisiones Tecnológicas Inteligentes para 2026
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Análisis y guías de compra para AI PCs, tablets y portátiles.
                Encuentra el dispositivo perfecto para tu productividad.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="/guias">Explora Nuestras Guías</Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="/catalogo">Comparar Dispositivos</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="grid grid-cols-2 gap-8 rounded-lg border bg-card/80 p-8 shadow-lg w-full max-w-md">
                <StatItem value={50} label="Dispositivos Analizados" />
                <StatItem value={80} label="% Tasa de Ayuda" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
