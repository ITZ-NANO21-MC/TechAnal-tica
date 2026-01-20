
import type { Metadata } from 'next';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Scaling, Ratio, PanelTop, Usb } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Cómo Elegir un Monitor para Productividad',
  description: 'Desde paneles 4K hasta opciones ultrawide, te ayudamos a encontrar el monitor que se adapte a tu trabajo.',
};

const FeatureCard = ({ icon: Icon, title, children }: { icon: React.ElementType, title: string, children: React.ReactNode }) => (
    <Card>
        <CardHeader className="flex flex-row items-center gap-4">
            <div className="rounded-full bg-primary/10 p-3">
                <Icon className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
            <p className="text-muted-foreground">{children}</p>
        </CardContent>
    </Card>
);

export default function GuidePage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'guide-monitor');

    return (
        <article className="container px-4 md:px-6 py-12 md:py-16 lg:py-20">
            <header className="space-y-4 text-center mb-12">
                <Badge variant="secondary" className="text-sm">Guía de Compra</Badge>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                    Cómo Elegir el Monitor Perfecto para Productividad
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                    Un buen monitor es la pieza central de cualquier setup productivo. Te guiamos entre resoluciones, tamaños y formatos para que hagas la mejor inversión.
                </p>
            </header>

            {heroImage && (
                 <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden mb-12">
                    <Image
                        src={heroImage.imageUrl}
                        alt={heroImage.description}
                        fill
                        className="object-cover"
                        priority
                        data-ai-hint={heroImage.imageHint}
                    />
                     <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                </div>
            )}

            <main className="mx-auto max-w-4xl space-y-12">
                <section>
                    <h2 className="text-3xl font-bold mb-4">Más Allá de los Píxeles</h2>
                    <p className="text-muted-foreground text-lg mb-6">
                        Elegir un monitor puede parecer abrumador. ¿4K o Ultrawide? ¿IPS o VA? La respuesta depende enteramente de tu tipo de trabajo. Un programador, un diseñador gráfico y un analista financiero tienen necesidades muy distintas. Desglosemos los factores clave para que encuentres tu compañero de escritorio ideal.
                    </p>
                </section>
                
                <section>
                    <h2 className="text-3xl font-bold mb-6">Factores Clave a Considerar</h2>
                    <div className="grid gap-6 md:grid-cols-1">
                        <FeatureCard icon={Scaling} title="Resolución y Nitidez">
                           La resolución determina la claridad del texto y las imágenes. Para 2026, un monitor "QHD (1440p)" es un buen punto de partida. Si trabajas con mucho texto o gráficos, saltar a "4K (2160p)" ofrece una nitidez excepcional, similar a una pantalla Retina.
                        </FeatureCard>
                        <FeatureCard icon={Ratio} title="Tamaño y Relación de Aspecto">
                           Un monitor de "27" es el estándar de oro. Para una multitarea inmersiva, los "Ultrawide (21:9)" de 34, son fantásticos, ya que equivalen a dos monitores sin el bisel en medio. Los "Super Ultrawide (32:9)" llevan esto al extremo, ideales para finanzas o edición de vídeo.
                        </FeatureCard>
                         <FeatureCard icon={PanelTop} title="Tecnología de Panel">
                           "IPS" es el rey para la mayoría: ofrece los mejores colores y ángulos de visión, ideal para diseño y uso general. "VA" ofrece un contraste superior (negros más profundos), bueno para ver contenido multimedia. "OLED" es la gama alta, con contraste infinito, pero puede ser propenso a "quemaduras" con elementos estáticos.
                        </FeatureCard>
                         <FeatureCard icon={Usb} title="Conectividad y Ergonomía">
                           Un puerto "USB-C con Power Delivery" es un cambio de juego: un solo cable para vídeo, datos y para cargar tu portátil. No subestimes la ergonomía: busca soportes que permitan ajustar la altura, inclinación y rotación para una postura saludable.
                        </FeatureCard>
                    </div>
                </section>

                <section>
                    <h2 className="text-3xl font-bold mb-4">¿Qué Monitor para Qué Usuario?</h2>
                    <Card>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Perfil de Usuario</TableHead>
                                    <TableHead>Recomendación Principal</TableHead>
                                    <TableHead>Características Clave</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell className="font-medium">Programador / Escritor</TableCell>
                                    <TableCell>Monitor 4K de 27"-32"</TableCell>
                                    <TableCell>Alta densidad de píxeles (texto nítido), modo vertical.</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">Diseñador / Editor de Vídeo</TableCell>
                                    <TableCell>Ultrawide 34" QHD+ o 4K</TableCell>
                                    <TableCell>Excelente precisión de color (IPS), amplio espacio para timelines.</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">Ofimática / Multitarea</TableCell>
                                    <TableCell>Ultrawide 34" QHD</TableCell>
                                    <TableCell>Espacio para tener varias ventanas lado a lado, conectividad USB-C.</TableCell>
                                </TableRow>
                                 <TableRow>
                                    <TableCell className="font-medium">Analista Financiero</TableCell>
                                    <TableCell>Super Ultrawide 49" (32:9)</TableCell>
                                    <TableCell>Máximo espacio horizontal para hojas de cálculo y dashboards complejos.</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Card>
                </section>
                
                <section>
                    <Alert>
                        <AlertTitle className="font-bold">Conclusión: La Inversión que Más Impacta</AlertTitle>
                        <AlertDescription className="mt-2">
                           <p className="mb-2">Después de tu silla, el monitor es el componente que más afecta tu comodidad y productividad diaria. No escatimes aquí. </p>
                           <p>Para la mayoría de los profesionales en 2026, un "monitor IPS Ultrawide de 34" con resolución QHD y conectividad USB-C" representa el punto dulce perfecto entre precio, funcionalidad y preparación para el futuro. Si el presupuesto lo permite, saltar a 4K en un formato tradicional de 27" o 32" es una mejora fantástica para la nitidez.</p>
                        </AlertDescription>
                    </Alert>
                </section>
            </main>
        </article>
    );
}
