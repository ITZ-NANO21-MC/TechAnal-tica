'use server';

import * as z from 'zod';

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  subject: z.string(),
  message: z.string(),
});

export async function submitContactForm(values: z.infer<typeof formSchema>) {
  const parsed = formSchema.safeParse(values);

  if (!parsed.success) {
    return { success: false, message: 'Datos de formulario no válidos.' };
  }

  try {
    // Aquí es donde se integraría un servicio de email como EmailJS, SendGrid, etc.
    // Por ahora, solo lo mostraremos en la consola del servidor.
    console.log('Nuevo mensaje de contacto:');
    console.log('Nombre:', parsed.data.name);
    console.log('Email:', parsed.data.email);
    console.log('Asunto:', parsed.data.subject);
    console.log('Mensaje:', parsed.data.message);

    // Simula un pequeño retraso de red
    await new Promise(resolve => setTimeout(resolve, 1000));

    return { success: true };
  } catch (error) {
    console.error('Error al procesar el formulario de contacto:', error);
    return { success: false, message: 'Error del servidor. Por favor, inténtelo de nuevo más tarde.' };
  }
}
