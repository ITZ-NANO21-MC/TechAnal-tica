import { guides } from '@/lib/data';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function FeaturedGuides() {
  const featured = guides.slice(0, 3);

  return (
    <section id="guias-destacadas" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Guías Destacadas
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Nuestros análisis más populares para ayudarte a tomar la mejor
              decisión de compra.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          {featured.map((guide) => (
            <Card key={guide.title} className="flex flex-col h-full">
              <CardHeader>
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-primary/10 p-4 text-primary">
                    <guide.Icon className="h-8 w-8" />
                  </div>
                </div>
                <CardTitle className="text-center">{guide.title}</CardTitle>
                <CardDescription className="text-center h-16">{guide.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex items-end justify-center">
                <Button asChild variant="outline">
                  <Link href={guide.slug}>
                    Leer Guía <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
