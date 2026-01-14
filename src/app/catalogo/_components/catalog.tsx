'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { products } from '@/lib/data';
import type { Product } from '@/lib/types';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ExternalLink, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export function Catalog() {
  const [sortBy, setSortBy] = useState('price-asc');

  const sortedProducts = useMemo(() => {
    const sorted = [...products];
    switch (sortBy) {
      case 'price-asc':
        return sorted.sort((a, b) => a.price - b.price);
      case 'price-desc':
        return sorted.sort((a, b) => b.price - a.price);
      case 'brand':
        return sorted.sort((a, b) => a.brand.localeCompare(b.brand));
      case 'compatibility':
        return sorted.sort((a, b) => a.compatibleWith.localeCompare(b.compatibleWith));
      default:
        return sorted;
    }
  }, [sortBy]);

  return (
    <div>
      <div className="flex justify-end mb-8">
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Ordenar por..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="price-asc">Precio: Menor a Mayor</SelectItem>
            <SelectItem value="price-desc">Precio: Mayor a Menor</SelectItem>
            <SelectItem value="brand">Marca</SelectItem>
            <SelectItem value="compatibility">Dispositivo Compatible</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {sortedProducts.map((product) => (
          <Card key={product.id} className="flex flex-col">
            <CardHeader>
              <div className="aspect-[4/3] relative overflow-hidden rounded-t-lg mb-4">
                <Image
                  src={product.image.src}
                  alt={product.image.alt}
                  fill
                  className="object-cover"
                  data-ai-hint={product.image.aiHint}
                />
              </div>
              <CardTitle>{product.name}</CardTitle>
              <CardDescription>{product.brand} - Compatible con {product.compatibleWith}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow space-y-2">
              {product.features.map((feature) => (
                <div key={feature} className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">{feature}</p>
                </div>
              ))}
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <p className="text-xl font-bold">${product.price.toFixed(2)}</p>
              <Button asChild>
                <Link href={product.affiliateUrl} target="_blank">
                  Ver Oferta <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
