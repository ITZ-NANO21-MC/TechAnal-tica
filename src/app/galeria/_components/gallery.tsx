'use client';

import { useState } from 'react';
import Image from 'next/image';
import { galleryImages } from '@/lib/data';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const categories = ['Todos', 'AI PC', 'Tablets', 'Setups', 'Accesorios'];

export function Gallery() {
  const [filter, setFilter] = useState('Todos');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  const filteredImages =
    filter === 'Todos'
      ? galleryImages
      : galleryImages.filter((image) => image.category === filter);

  const openLightbox = (index: number) => {
    const globalIndex = galleryImages.findIndex(img => img.id === filteredImages[index].id);
    setSelectedImageIndex(globalIndex);
  };
  const closeLightbox = () => setSelectedImageIndex(null);

  const nextImage = () => {
    if (selectedImageIndex === null) return;
    const currentFilteredIndex = filteredImages.findIndex(img => img.id === galleryImages[selectedImageIndex].id);
    const nextFilteredIndex = (currentFilteredIndex + 1) % filteredImages.length;
    const nextGlobalIndex = galleryImages.findIndex(img => img.id === filteredImages[nextFilteredIndex].id);
    setSelectedImageIndex(nextGlobalIndex);
  };

  const prevImage = () => {
    if (selectedImageIndex === null) return;
    const currentFilteredIndex = filteredImages.findIndex(img => img.id === galleryImages[selectedImageIndex].id);
    const prevFilteredIndex = (currentFilteredIndex - 1 + filteredImages.length) % filteredImages.length;
    const prevGlobalIndex = galleryImages.findIndex(img => img.id === filteredImages[prevFilteredIndex].id);
    setSelectedImageIndex(prevGlobalIndex);
  };

  const selectedImage = selectedImageIndex !== null ? galleryImages[selectedImageIndex] : null;

  return (
    <div>
      <div className="flex justify-center flex-wrap gap-2 mb-8">
        {categories.map((category) => (
          <Button
            key={category}
            variant={filter === category ? 'default' : 'outline'}
            onClick={() => setFilter(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredImages.map((image, index) => (
          <motion.div
            key={image.id}
            layout
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden rounded-lg cursor-pointer group"
            onClick={() => openLightbox(index)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={400}
              height={300}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              data-ai-hint={image.category.toLowerCase()}
            />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <Dialog open={selectedImageIndex !== null} onOpenChange={(isOpen) => !isOpen && closeLightbox()}>
            <DialogContent className="max-w-4xl p-0 border-0">
              <DialogHeader className="sr-only">
                <DialogTitle>{selectedImage.alt}</DialogTitle>
                <DialogDescription>{selectedImage.description}</DialogDescription>
              </DialogHeader>
              <div className="relative">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  width={1200}
                  height={800}
                  className="w-full h-auto object-contain rounded-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4 rounded-b-lg">
                  <h3 className="font-bold">{selectedImage.alt}</h3>
                  <p className="text-sm text-gray-300">{selectedImage.description}</p>
                </div>
              </div>
              <Button variant="ghost" size="icon" className="absolute left-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/20 hover:bg-white/40 text-white" onClick={prevImage}>
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="icon" className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/20 hover:bg-white/40 text-white" onClick={nextImage}>
                <ChevronRight className="h-6 w-6" />
              </Button>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </div>
  );
}
