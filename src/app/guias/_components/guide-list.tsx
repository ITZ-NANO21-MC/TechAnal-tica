import { guides } from '@/lib/data';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export function GuideList() {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
      {guides.map((guide) => (
        <Card key={guide.title} className="flex flex-col">
          <CardHeader className="flex-row items-start gap-4 space-y-0">
            <div className="rounded-lg bg-primary/10 p-3 text-primary mt-1">
              <guide.Icon className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <CardTitle>{guide.title}</CardTitle>
              <CardDescription className="mt-2 text-base">{guide.description}</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="flex-grow" />
          <CardFooter className="flex justify-between items-center">
            <Badge variant={guide.price === 'Gratuito' ? 'secondary' : 'outline'}>
              {guide.price}
            </Badge>
            <Button asChild disabled={guide.price !== 'Gratuito'}>
              <Link href={guide.slug}>Leer Guía</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
