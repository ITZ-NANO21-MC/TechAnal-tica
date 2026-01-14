import type { Guide, NavItem, GalleryImage, Product } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Cpu, Keyboard, TabletSmartphone, Laptop, Monitor, MousePointerClick } from 'lucide-react';

export const navItems: NavItem[] = [
  { title: 'Inicio', href: '/' },
  { title: 'Guías', href: '/guias' },
  { title: 'Galería', href: '/galeria' },
  { title: 'Catálogo', href: '/catalogo' },
  { title: 'Contacto', href: '/contacto' },
];

export const guides: Guide[] = [
  {
    title: 'AI PC vs. Portátil Tradicional 2026',
    description: 'Enfocado en privacidad y velocidad de IA local. Descubre las ventajas de los nuevos procesadores neuronales.',
    price: 'Gratuito',
    Icon: Cpu,
    slug: '/guias/ai-pc-vs-tradicional',
  },
  {
    title: 'Tableta Híbrida vs. Portátil',
    description: 'La guía definitiva para estudiantes y nómadas digitales. Analizamos portabilidad, potencia y ecosistemas.',
    price: 'Gratuito',
    Icon: TabletSmartphone,
    slug: '/guias/tableta-vs-portatil',
  },
  {
    title: 'Setup Perfecto: Teclado y Lápiz para tu Tablet',
    description: 'Cubre las mejores opciones para iPad, Android y Windows. Mejora tu productividad con los accesorios correctos.',
    price: 'Gratuito',
    Icon: Keyboard,
    slug: '/guias/accesorios-tablet',
  },
  {
    title: 'Los 5 Mejores Portátiles para Desarrollo en 2026',
    description: 'Analizamos rendimiento de compilación, calidad de pantalla y teclado para programadores.',
    price: 'Análisis Profundo - Próximamente',
    Icon: Laptop,
    slug: '#',
  },
  {
    title: 'Cómo Elegir un Monitor para Productividad',
    description: 'Desde paneles 4K hasta opciones ultrawide, te ayudamos a encontrar el monitor que se adapte a tu trabajo.',
    price: 'Gratuito',
    Icon: Monitor,
    slug: '/guias/elegir-monitor',
  },
  {
    title: 'Análisis de Tablets con Windows 11',
    description: '¿Pueden realmente reemplazar a un portátil? Exploramos los pros y contras de la experiencia Windows en tablets.',
    price: 'Gratuito',
    Icon: MousePointerClick,
    slug: '/guias/tablets-windows-11',
  },
];

const getImage = (id: string) => {
    const image = PlaceHolderImages.find(img => img.id === id);
    if (!image) throw new Error(`Image with id ${id} not found`);
    return image;
}

export const galleryImages: GalleryImage[] = [
    { id: '1', src: getImage('gallery-1').imageUrl, alt: 'AI PC en oficina', category: 'AI PC', description: 'Un profesional trabajando en un potente AI PC en un entorno de oficina moderno y luminoso.' },
    { id: '2', src: getImage('gallery-2').imageUrl, alt: 'Tablet para creativos', category: 'Tablets', description: 'Primer plano de una tablet de alta gama mostrando una ilustración digital colorida.' },
    { id: '3', src: getImage('gallery-3').imageUrl, alt: 'Setup de trabajo organizado', category: 'Setups', description: 'Un escritorio limpio y minimalista con un portátil, un monitor externo y plantas.' },
    { id: '4', src: getImage('gallery-4').imageUrl, alt: 'Accesorios tecnológicos', category: 'Accesorios', description: 'Una selección de accesorios modernos: teclado inalámbrico, ratón ergonómico y un lápiz digital.' },
    { id: '5', src: getImage('gallery-5').imageUrl, alt: 'Componentes de AI PC', category: 'AI PC', description: 'El interior de un AI PC con iluminación azul, mostrando el procesador y la tarjeta gráfica.' },
    { id: '6', src: getImage('gallery-6').imageUrl, alt: 'Dibujo en tablet híbrida', category: 'Tablets', description: 'Una diseñadora utilizando un lápiz óptico para dibujar en una tablet híbrida.' },
    { id: '7', src: getImage('gallery-7').imageUrl, alt: 'Setup minimalista', category: 'Setups', description: 'Un espacio de trabajo minimalista con enfoque en la ergonomía y la luz natural.' },
    { id: '8', src: getImage('gallery-8').imageUrl, alt: 'Teclado mecánico', category: 'Accesorios', description: 'Primer plano de un teclado mecánico con retroiluminación RGB personalizable.' },
    { id: '9', src: getImage('gallery-9').imageUrl, alt: 'Portátil futurista', category: 'AI PC', description: 'Concepto de un portátil AI del futuro con una pantalla holográfica interactiva.' },
    { id: '10', src: getImage('gallery-10').imageUrl, alt: 'Tablet plegable', category: 'Tablets', description: 'Una tablet plegable mostrada en diferentes ángulos y modos de uso.' },
    { id: '11', src: getImage('gallery-11').imageUrl, alt: 'Setup de desarrollador', category: 'Setups', description: 'El escritorio de un desarrollador con múltiples monitores mostrando código y una terminal.' },
    { id: '12', src: getImage('gallery-12').imageUrl, alt: 'Lápiz de precisión', category: 'Accesorios', description: 'Un lápiz digital de alta precisión junto a la pantalla de una tablet.' },
    { id: '13', src: getImage('gallery-13').imageUrl, alt: 'Portátil ultradelgado', category: 'AI PC', description: 'Vista lateral de un portátil AI ultradelgado, destacando su diseño y finura.' },
    { id: '14', src: getImage('gallery-14').imageUrl, alt: 'Oficina en casa', category: 'Setups', description: 'Un acogedor setup de oficina en casa con un portátil y una tablet trabajando en conjunto.' },
];


export const products: Product[] = [
  {
    id: 'prod-1',
    name: 'Teclado Mecánico ErgoPro',
    brand: 'LogiTech',
    features: ['Diseño dividido ergonómico', 'Switches silenciosos', 'Conexión dual (BT + USB)'],
    price: 129.99,
    image: {
      id: "product-keyboard-1",
      src: getImage('product-keyboard-1').imageUrl,
      alt: 'Teclado Mecánico ErgoPro',
      aiHint: 'ergonomic keyboard'
    },
    affiliateUrl: '#',
    compatibleWith: 'Universal',
  },
  {
    id: 'prod-2',
    name: 'Stylus Pro-Artist',
    brand: 'Wacom',
    features: ['8192 niveles de presión', 'Detección de inclinación', 'Bajo paralaje'],
    price: 99.99,
    image: {
      id: "product-stylus-1",
      src: getImage('product-stylus-1').imageUrl,
      alt: 'Stylus Pro-Artist',
      aiHint: 'digital stylus'
    },
    affiliateUrl: '#',
    compatibleWith: 'iPad',
  },
  {
    id: 'prod-3',
    name: 'USB-C Hub 10-en-1',
    brand: 'Anker',
    features: ['Puerto HDMI 4K@60Hz', 'Carga PD de 100W', 'Lector de tarjetas SD/microSD'],
    price: 59.99,
    image: {
      id: "product-hub-1",
      src: getImage('product-hub-1').imageUrl,
      alt: 'USB-C Hub 10-en-1',
      aiHint: 'USB hub'
    },
    affiliateUrl: '#',
    compatibleWith: 'Universal',
  },
  {
    id: 'prod-4',
    name: 'Funda Magnética Scribe',
    brand: 'ESR',
    features: ['Soporte multi-ángulo', 'Cierre magnético seguro', 'Material premium'],
    price: 35.50,
    image: {
      id: "product-case-1",
      src: getImage('product-case-1').imageUrl,
      alt: 'Funda Magnética Scribe',
      aiHint: 'tablet case'
    },
    affiliateUrl: '#',
    compatibleWith: 'Android',
  },
  {
    id: 'prod-5',
    name: 'Teclado Slim Folio',
    brand: 'Apple',
    features: ['Diseño ultraligero', 'Trackpad integrado', 'Smart Connector'],
    price: 179.00,
    image: {
      id: "product-keyboard-2",
      src: getImage('product-keyboard-2').imageUrl,
      alt: 'Teclado Slim Folio',
      aiHint: 'portable keyboard'
    },
    affiliateUrl: '#',
    compatibleWith: 'iPad',
  },
  {
    id: 'prod-6',
    name: 'Surface Pen',
    brand: 'Microsoft',
    features: ['Integración con Windows Ink', 'Botón de borrador', 'Punta de baja fricción'],
    price: 89.99,
    image: {
      id: "product-stylus-2",
      src: getImage('product-stylus-2').imageUrl,
      alt: 'Surface Pen',
      aiHint: 'note stylus'
    },
    affiliateUrl: '#',
    compatibleWith: 'Windows',
  }
];
