
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
import { Package, Zap, LayoutGrid, PenTool, Check, X } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Tableta Híbrida vs. Portátil: La Guía Definitiva 2026',
  description: 'Analizamos portabilidad, potencia y ecosistemas para estudiantes y nómadas digitales. ¿Cuál es la mejor opción para ti?',
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
    const heroImage = PlaceHolderImages.find(p => p.id === 'guide-tablet-vs-laptop');

    return (
        <article className="container px-4 md:px-6 py-12 md:py-16 lg:py-20">
            <header className="space-y-4 text-center mb-12">
                <Badge variant="secondary" className="text-sm">Guía de Compra</Badge>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                    Tableta Híbrida vs. Portátil
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                    La guía definitiva para estudiantes y nómadas digitales. Analizamos portabilidad, potencia y ecosistemas.
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
                    <h2 className="text-3xl font-bold mb-4">El Dilema Moderno</h2>
                    <p className="text-muted-foreground text-lg mb-6">
                        La línea entre tabletas y portátiles es cada vez más borrosa. Dispositivos como el iPad Pro con Magic Keyboard o la Surface Pro de Microsoft prometen lo mejor de ambos mundos. Pero, ¿realmente pueden reemplazar a un portátil tradicional para un estudiante o un trabajador remoto? Analizamos los puntos clave.
                    </p>
                </section>
                
                <section>
                    <h2 className="text-3xl font-bold mb-6">Puntos Clave a Comparar</h2>
                    <div className="grid gap-6 md:grid-cols-1">
                        <FeatureCard icon={Package} title="Portabilidad y Versatilidad">
                           Las tabletas híbridas ganan en ligereza y flexibilidad. Puedes usarlas como un cuaderno digital en clase, como pantalla para ver contenido o acoplar un teclado para escribir. Un portátil, aunque cada vez más ligero, sigue siendo una única pieza más rígida.
                        </FeatureCard>
                        <FeatureCard icon={Zap} title="Potencia y Rendimiento Bruto">
                           Para tareas exigentes como edición de vídeo 4K, programación con grandes proyectos o virtualización, los portátiles (especialmente los basados en x86) siguen llevando la delantera. Los chips de las tabletas (como los de Apple Silicon) son increíblemente potentes, pero el software a veces es la limitación.
                        </FeatureCard>
                         <FeatureCard icon={LayoutGrid} title="Ecosistema y Software">
                           Aquí reside la mayor diferencia. Un portátil te da acceso a décadas de software de escritorio sin restricciones. iPadOS y Android son más limitados, con multitarea menos robusta y una gestión de archivos más simple, aunque están mejorando rápidamente con funciones como Stage Manager.
                        </FeatureCard>
                         <FeatureCard icon={PenTool} title="Métodos de Entrada y Creatividad">
                           Si tomas apuntes a mano, dibujas o diseñas, la experiencia con un lápiz óptico en una tableta es insuperable. Sin embargo, para escribir durante horas, el teclado y trackpad de un buen portátil suelen ser más cómodos y ergonómicos que las fundas-teclado.
                        </FeatureCard>
                    </div>
                </section>

                <section>
                    <h2 className="text-3xl font-bold mb-4">Tabla Comparativa Rápida</h2>
                    <Card>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[150px]">Característica</TableHead>
                                    <TableHead>Tableta Híbrida</TableHead>
                                    <TableHead>Portátil Tradicional</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell className="font-medium">Portabilidad</TableCell>
                                    <TableCell><Badge>Excelente</Badge></TableCell>
                                    <TableCell><Badge variant="outline">Buena</Badge></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">Versatilidad</TableCell>
                                    <TableCell className="flex items-center gap-2"><Check className="text-green-500"/> Múltiples modos</TableCell>
                                    <TableCell className="flex items-center gap-2"><X className="text-red-500"/> Un solo modo</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">Potencia Máxima</TableCell>
                                    <TableCell>Alta, pero limitada por software</TableCell>
                                    <TableCell>Muy Alta, sin restricciones</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">Software</TableCell>
                                    <TableCell>Apps móviles, multitarea limitada</TableCell>
                                    <TableCell>Programas de escritorio, multitarea completa</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">Uso con Lápiz</TableCell>
                                    <TableCell>Nativo y superior</TableCell>
                                    <TableCell>Limitado o inexistente</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">Ergonomía (escritura)</TableCell>
                                    <TableCell>Aceptable, a menudo inestable</TableCell>
                                    <TableCell>Excelente y estable</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Card>
                </section>
                
                <section>
                    <Alert>
                        <AlertTitle className="font-bold">Conclusión: ¿Para Quién es Cada Uno?</AlertTitle>
                        <AlertDescription className="mt-2">
                           <p className="mb-2"><strong>Elige una Tableta Híbrida si:</strong> Eres estudiante, artista, o priorizas la portabilidad extrema. Si tu flujo de trabajo se basa en tomar apuntes, leer, y usar apps específicas en lugar de software de escritorio complejo. Es ideal como dispositivo secundario o principal para cargas de trabajo ligeras.</p>
                           
                           <p><strong>Elige un Portátil Tradicional si:</strong> Necesitas potencia sin compromisos para programación, diseño gráfico profesional o edición de vídeo. Si dependes de software que solo existe para Windows o macOS, o si pasas la mayor parte del día escribiendo y necesitas la mejor ergonomía posible.</p>
                        </AlertDescription>
                    </Alert>
                </section>
            </main>
        </article>
    );
}
