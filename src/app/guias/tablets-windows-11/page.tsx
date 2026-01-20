
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
import { Cpu, LayoutGrid, MousePointerClick, AppWindow, CheckCircle, XCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Análisis de Tablets con Windows 11',
  description: '¿Pueden realmente reemplazar a un portátil? Exploramos los pros y contras de la experiencia Windows en tablets.',
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
    const heroImage = PlaceHolderImages.find(p => p.id === 'guide-windows-tablet');

    return (
        <article className="container px-4 md:px-6 py-12 md:py-16 lg:py-20">
            <header className="space-y-4 text-center mb-12">
                <Badge variant="secondary" className="text-sm">Guía de Compra</Badge>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                    Análisis de Tablets con Windows 11
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                    ¿Pueden realmente reemplazar a un portátil? Exploramos los pros y contras de la experiencia Windows en tablets.
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
                    <h2 className="text-3xl font-bold mb-4">La Promesa: Un PC Completo en tus Manos</h2>
                    <p className="text-muted-foreground text-lg mb-6">
                        Dispositivos como la serie Microsoft Surface han popularizado la idea de una tablet que ejecuta una versión completa de Windows. La promesa es atractiva: la portabilidad y el formato táctil de una tablet con la potencia y la compatibilidad de un portátil. Pero, ¿se cumple esta promesa en el uso diario?
                    </p>
                </section>

                <section>
                    <h2 className="text-3xl font-bold mb-6">Pros y Contras de la Experiencia Windows Tablet</h2>
                    <div className="grid gap-6 md:grid-cols-1">
                        <FeatureCard icon={Cpu} title="Pro: Potencia y Software sin Restricciones">
                           Esta es la mayor ventaja. Puedes instalar y ejecutar cualquier aplicación de escritorio de Windows (x86/x64), desde la suite completa de Adobe hasta entornos de desarrollo, pasando por juegos de PC. No hay compromisos en cuanto al software que puedes usar.
                        </FeatureCard>
                        <FeatureCard icon={LayoutGrid} title="Pro: Multitarea Real y Gestión de Archivos">
                           La gestión de ventanas de Windows 11, con funciones como Snap Layouts, es muy superior a la de iPadOS o Android. Puedes organizar múltiples ventanas de aplicaciones de escritorio como lo harías en un PC normal, y el explorador de archivos es completo y sin restricciones.
                        </FeatureCard>
                        <FeatureCard icon={MousePointerClick} title="Contra: Interfaz no Siempre Amigable al Tacto">
                           A pesar de las mejoras, Windows sigue siendo un sistema operativo diseñado para ratón y teclado. Muchos menús, iconos y elementos de aplicaciones de escritorio son pequeños y difíciles de usar con los dedos, lo que puede resultar frustrante.
                        </FeatureCard>
                         <FeatureCard icon={AppWindow} title="Contra: Ecosistema de Apps Táctiles Débil">
                           La Microsoft Store carece de la variedad y calidad de apps optimizadas para el tacto que encuentras en el App Store de Apple o en Google Play. Muchas "apps" son simplemente envoltorios de sitios web, y la experiencia a menudo es inferior a usar una app nativa en iPadOS.
                        </FeatureCard>
                    </div>
                </section>

                <section>
                    <h2 className="text-3xl font-bold mb-4">Tablet Windows vs. Tablet Tradicional</h2>
                    <Card>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Característica</TableHead>
                                    <TableHead>Tablet con Windows 11</TableHead>
                                    <TableHead>Tablet (iPadOS/Android)</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell className="font-medium">Software</TableCell>
                                    <TableCell>Acceso total a apps de escritorio (PC)</TableCell>
                                    <TableCell>Apps móviles optimizadas para el tacto</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">Multitarea</TableCell>
                                    <TableCell><Badge>Excelente</Badge> (gestión de ventanas)</TableCell>
                                    <TableCell><Badge variant="outline">Limitada</Badge> (pantalla dividida, Stage Mgr.)</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">Experiencia Táctil</TableCell>
                                    <TableCell>Irregular, depende de la app</TableCell>
                                    <TableCell>Excelente y consistente</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">Acceso a Archivos</TableCell>
                                    <TableCell><CheckCircle className="text-green-500"/> Total y sin restricciones</TableCell>
                                    <TableCell><XCircle className="text-red-500"/> Limitado y "enjaulado"</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Card>
                </section>
                
                <section>
                    <Alert>
                        <AlertTitle className="font-bold">Conclusión: ¿Para Quién es una Tablet con Windows?</AlertTitle>
                        <AlertDescription className="mt-2">
                           <p className="mb-2">Una tablet con Windows "es ideal para" el profesional o estudiante que "necesita ejecutar un software de escritorio específico" que no está disponible en iPadOS o Android. Es un reemplazo de portátil viable si valoras la versatilidad de un 2-en-1 y tu flujo de trabajo depende de esas aplicaciones de PC.</p>
                           
                           <p>Si tu uso principal es el consumo de medios, navegación web, redes sociales y apps creativas optimizadas para el tacto, una "tablet tradicional como un iPad o una Galaxy Tab probablemente te ofrecerá una experiencia más pulida y agradable".</p>
                        </AlertDescription>
                    </Alert>
                </section>
            </main>
        </article>
    );
}
