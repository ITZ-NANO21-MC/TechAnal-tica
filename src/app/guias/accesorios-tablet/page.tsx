
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
import { Keyboard, PenTool, CheckCircle, XCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Setup Perfecto: Teclado y Lápiz para tu Tablet',
  description: 'Cubre las mejores opciones para iPad, Android y Windows. Mejora tu productividad con los accesorios correctos.',
};

export default function GuidePage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'guide-accessories');

    return (
        <article className="container px-4 md:px-6 py-12 md:py-16 lg:py-20">
            <header className="space-y-4 text-center mb-12">
                <Badge variant="secondary" className="text-sm">Guía de Compra</Badge>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                    Setup Perfecto: Teclado y Lápiz para tu Tablet
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                    Transforma tu tablet en una estación de productividad. Comparamos los mejores teclados y lápices para iPad, Android y Windows.
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
                    <h2 className="text-3xl font-bold mb-4">Más Allá de la Pantalla Táctil</h2>
                    <p className="text-muted-foreground text-lg mb-6">
                        Una tablet es una herramienta increíblemente versátil, pero para desatar todo su potencial de productividad, los accesorios adecuados son clave. Un buen teclado la convierte en un portátil ligero, y un lápiz de precisión abre un mundo de creatividad y toma de apuntes. Analicemos las mejores opciones para cada ecosistema.
                    </p>
                </section>
                
                <section>
                    <h2 className="text-3xl font-bold mb-6 flex items-center gap-3"><Keyboard className="h-8 w-8 text-primary"/>El Teclado Ideal</h2>
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-2xl font-semibold mb-2">Para iPad: El Ecosistema Premium</h3>
                            <p className="text-muted-foreground mb-4">Apple ofrece una integración perfecta. El <strong>Magic Keyboard</strong> es la opción de lujo, con un excelente trackpad y un diseño flotante. Como alternativa más versátil y protectora, el <strong>Logitech Combo Touch</strong> ofrece un teclado desmontable y un soporte ajustable.</p>
                        </div>
                         <div>
                            <h3 className="text-2xl font-semibold mb-2">Para Tablets Android y Windows</h3>
                            <p className="text-muted-foreground mb-4">En el mundo de Android (como las Samsung Galaxy Tab) y Windows (como la Surface Pro), las opciones son más variadas. Las <strong>fundas-teclado oficiales</strong> (ej. Surface Pro Type Cover) ofrecen la mejor integración. Sin embargo, teclados Bluetooth de marcas como <strong>Logitech (serie MX Keys Mini)</strong> o <strong>Brydge</strong> ofrecen una experiencia de escritura superior, a menudo a costa de la portabilidad integrada.</p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-3xl font-bold mb-6 flex items-center gap-3"><PenTool className="h-8 w-8 text-primary"/>El Lápiz de Precisión</h2>
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-2xl font-semibold mb-2">Apple Pencil: El Rey de la Precisión</h3>
                            <p className="text-muted-foreground mb-4">El <strong>Apple Pencil (2ª Gen o Pro)</strong> es el estándar de oro para los usuarios de iPad. Su baja latencia, sensibilidad a la presión e inclinación, y la carga magnética lo hacen ideal para artistas y profesionales. El <strong>Logitech Crayon</strong> es una alternativa fantástica y más económica para tomar notas, aunque sacrifica la sensibilidad a la presión.</p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold mb-2">S Pen y Surface Pen: Productividad Integrada</h3>
                             <p className="text-muted-foreground mb-4">El <strong>S Pen de Samsung</strong>, a menudo incluido con las tablets Galaxy Tab de gama alta, es increíble. No necesita batería y se integra perfectamente con el software de Samsung para funciones de productividad. Para usuarios de Surface, el <strong>Surface Slim Pen 2</strong> ofrece una gran precisión y un sutil feedback háptico que simula la escritura en papel.</p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-3xl font-bold mb-4">Tabla Comparativa de Accesorios</h2>
                    <Card>
                        <CardHeader>
                            <CardTitle>Comparativa Rápida de Lápices</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Lápiz</TableHead>
                                        <TableHead>Sensibilidad Presión</TableHead>
                                        <TableHead>Carga</TableHead>
                                        <TableHead>Ideal para</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow>
                                        <TableCell className="font-medium">Apple Pencil 2/Pro</TableCell>
                                        <TableCell><CheckCircle className="text-green-500"/></TableCell>
                                        <TableCell>Magnética</TableCell>
                                        <TableCell>Dibujo, diseño, notas</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-medium">Logitech Crayon</TableCell>
                                        <TableCell><XCircle className="text-red-500"/></TableCell>
                                        <TableCell>USB-C</TableCell>
                                        <TableCell>Notas, estudiantes</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-medium">Samsung S Pen</TableCell>
                                        <TableCell><CheckCircle className="text-green-500"/></TableCell>
                                        <TableCell>No requiere (EMR)</TableCell>
                                        <TableCell>Productividad, notas</TableCell>
                                    </TableRow>
                                     <TableRow>
                                        <TableCell className="font-medium">Surface Slim Pen 2</TableCell>
                                        <TableCell><CheckCircle className="text-green-500"/></TableCell>
                                        <TableCell>Inalámbrica</TableCell>
                                        <TableCell>Todo uso en Windows</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </section>
                
                <section>
                    <Alert>
                        <AlertTitle className="font-bold">Conclusión: ¿Cómo Elegir?</AlertTitle>
                        <AlertDescription className="mt-2">
                           <p className="mb-2"><strong>Para Escritura Intensiva:</strong> Prioriza un teclado con buen recorrido de teclas y un trackpad grande. Las fundas-teclado oficiales o modelos premium de Logitech son tu mejor apuesta.</p>
                           
                           <p className="mb-2"><strong>Para Artistas y Diseñadores:</strong> La sensibilidad a la presión es innegociable. El Apple Pencil y el Surface Pen son los líderes aquí.</p>

                           <p><strong>Para Estudiantes y Nómadas:</strong> Busca un equilibrio. Una funda-teclado desmontable (como la de Logitech) y un lápiz versátil (Crayon o S Pen) ofrecen la mejor combinación de portabilidad y funcionalidad para tomar apuntes y escribir trabajos.</p>
                        </AlertDescription>
                    </Alert>
                </section>
            </main>
        </article>
    );
}
