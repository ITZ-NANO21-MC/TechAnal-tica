
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
import { ShieldCheck, Zap, BatteryCharging, BrainCircuit } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI PC vs. Portátil Tradicional 2026',
  description: 'Análisis detallado sobre las diferencias, ventajas y futuro de los AI PCs frente a los portátiles tradicionales, enfocado en privacidad, velocidad y NPUs.',
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
    const heroImage = PlaceHolderImages.find(p => p.id === 'gallery-9');

    return (
        <article className="container px-4 md:px-6 py-12 md:py-16 lg:py-20">
            <header className="space-y-4 text-center mb-12">
                <Badge variant="secondary" className="text-sm">Guía de Compra</Badge>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                    AI PC vs. Portátil Tradicional
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                    Mirando hacia 2026: ¿Merece la pena un AI PC? Analizamos la revolución de la IA local, la privacidad y el rendimiento.
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
                    <h2 className="text-3xl font-bold mb-4">La Gran Diferencia: El NPU</h2>
                    <p className="text-muted-foreground text-lg mb-6">
                        El término "AI PC" (o PC con Copilot+) no es solo marketing. La diferencia fundamental reside en un nuevo componente de hardware: la **Unidad de Procesamiento Neuronal (NPU)**. Piensa en ella como un cerebro secundario, diseñado exclusivamente para ejecutar tareas de inteligencia artificial de manera ultraeficiente.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                         <Card className="bg-muted/40">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2"><BrainCircuit className="text-primary"/>AI PC</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>Utiliza una NPU dedicada para procesar tareas de IA localmente. Esto libera a la CPU y GPU, mejorando el rendimiento general y la duración de la batería.</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Portátil Tradicional</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>Depende de la CPU (Unidad Central de Procesamiento) y la GPU (Unidad de Procesamiento Gráfico) para todo, incluidas las tareas de IA, lo que es menos eficiente y consume más energía.</p>
                            </CardContent>
                        </Card>
                    </div>
                </section>
                
                <section>
                    <h2 className="text-3xl font-bold mb-6">Ventajas Clave de los AI PCs para 2026</h2>
                    <div className="grid gap-6 md:grid-cols-1">
                        <FeatureCard icon={ShieldCheck} title="Privacidad Primero">
                            Funciones como "Recall" de Windows, que captura tu actividad para crear una memoria explorable, procesan y almacenan toda la información en tu dispositivo. Tus datos no viajan a la nube, ofreciendo un nivel de privacidad imposible en sistemas que dependen de servidores externos.
                        </FeatureCard>
                        <FeatureCard icon={Zap} title="Velocidad y Respuesta Instantánea">
                            Al ejecutar la IA localmente, la latencia de red desaparece. Las traducciones en tiempo real durante una videollamada, la generación de imágenes en segundos con Cocreator o la transcripción de audio son instantáneas, mejorando drásticamente el flujo de trabajo.
                        </FeatureCard>
                         <FeatureCard icon={BatteryCharging} title="Eficiencia Energética y Batería para Todo el Día">
                           La NPU es mucho más eficiente energéticamente que la CPU o la GPU para tareas de IA. Esto se traduce en una duración de batería significativamente mayor. Los fabricantes prometen jornadas completas de trabajo intensivo sin necesidad de un cargador.
                        </FeatureCard>
                    </div>
                </section>

                <section>
                    <h2 className="text-3xl font-bold mb-4">Tabla Comparativa: AI PC vs. Tradicional</h2>
                    <Card>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[150px]">Característica</TableHead>
                                    <TableHead>AI PC (Proyección 2026)</TableHead>
                                    <TableHead>Portátil Tradicional</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell className="font-medium">Procesador IA</TableCell>
                                    <TableCell><Badge>NPU Dedicado (&gt;40 TOPS)</Badge></TableCell>
                                    <TableCell>CPU / GPU</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">Velocidad IA</TableCell>
                                    <TableCell>Instantánea (local)</TableCell>
                                    <TableCell>Lenta (depende de la nube)</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">Privacidad</TableCell>
                                    <TableCell>Muy Alta (datos en el dispositivo)</TableCell>
                                    <TableCell>Limitada (envío de datos a servidores)</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">Batería</TableCell>
                                    <TableCell>Superior, mayor eficiencia</TableCell>
                                    <TableCell>Estándar, alto consumo en IA</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">Funciones</TableCell>
                                    <TableCell>Recall, Cocreator local, Live Captions avanzadas</TableCell>
                                    <TableCell>Funciones de IA basadas en web</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">Ideal para</TableCell>
                                    <TableCell>Profesionales, creativos, usuarios que priorizan la privacidad y el rendimiento futuro.</TableCell>
                                    <TableCell>Uso general, tareas ofimáticas, presupuestos ajustados.</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Card>
                </section>
                
                <section>
                    <Alert>
                        <AlertTitle className="font-bold">Conclusión: ¿Cuál Comprar?</AlertTitle>
                        <AlertDescription className="mt-2">
                           Si planeas comprar un portátil de gama media o alta a partir de finales de 2024 y quieres que tu inversión dure, un **AI PC es la elección lógica y preparada para el futuro**. Las ventajas en rendimiento, privacidad y la nueva ola de software exclusivo que aprovechará la NPU lo convierten en el nuevo estándar.
                           <br/><br/>
                           Un **portátil tradicional** seguirá siendo una opción viable para tareas básicas o si tienes un presupuesto muy limitado, pero estarás renunciando a la principal innovación en computación personal de la década.
                        </AlertDescription>
                    </Alert>
                </section>
            </main>
        </article>
    );
}
