import type { Metadata } from 'next';
import { ContactSection } from './_components/contact-section';

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Ponte en contacto con nosotros para consultas, sugerencias de análisis o para reportar un error. Estamos aquí para ayudarte.',
};

export default function ContactoPage() {
  return (
    <div className="container px-4 md:px-6 py-12 md:py-24 lg:py-32">
       <div className="space-y-4 text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ponte en Contacto</h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
          ¿Tienes alguna pregunta, sugerencia o quieres colaborar? Rellena el formulario o utiliza nuestros datos de contacto.
        </p>
      </div>
      <ContactSection />
    </div>
  );
}
