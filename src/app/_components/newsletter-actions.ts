'use server';

import * as z from 'zod';

const subscribeSchema = z.object({
  email: z.string().email({ message: 'Por favor, introduce un email válido.' }),
});

type SubscribeState = {
  message: string;
  status: 'success' | 'error';
} | null;

export async function subscribeToNewsletter(
  prevState: SubscribeState,
  formData: FormData
): Promise<SubscribeState> {
  const validatedFields = subscribeSchema.safeParse({
    email: formData.get('email'),
  });

  if (!validatedFields.success) {
    return {
      message: validatedFields.error.errors[0].message,
      status: 'error',
    };
  }

  const { email } = validatedFields.data;

  const mailchimpApiKey = process.env.MAILCHIMP_API_KEY;
  const mailchimpAudienceId = process.env.MAILCHIMP_AUDIENCE_ID;
  const mailchimpServerPrefix = process.env.MAILCHIMP_SERVER_PREFIX;

  if (!mailchimpApiKey || !mailchimpAudienceId || !mailchimpServerPrefix) {
    console.error('Mailchimp environment variables not set');
    return {
      message: 'El servicio de newsletter no está configurado. Por favor, contacta al administrador.',
      status: 'error',
    };
  }

  const data = {
    email_address: email,
    status: 'subscribed',
  };

  try {
    const response = await fetch(
      `https://${mailchimpServerPrefix}.api.mailchimp.com/3.0/lists/${mailchimpAudienceId}/members`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `api_key ${mailchimpApiKey}`,
        },
        body: JSON.stringify(data),
      }
    );

    if (response.ok) {
      return {
        message: '¡Gracias por suscribirte! Revisa tu bandeja de entrada para confirmar.',
        status: 'success',
      };
    }
    
    const errorData = await response.json();
    if (response.status === 400 && errorData.title === 'Member Exists') {
        return {
            message: 'Este email ya está suscrito. ¡Gracias!',
            status: 'success', // Treat as success for the user
        }
    }

    console.error('Mailchimp API error:', errorData);
    return {
      message: 'Hubo un problema al procesar tu solicitud. Inténtalo de nuevo más tarde.',
      status: 'error',
    };
  } catch (error) {
    console.error('Network or fetch error:', error);
    return {
      message: 'No se pudo conectar con el servicio de newsletter. Revisa tu conexión a internet.',
      status: 'error',
    };
  }
}
