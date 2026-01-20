# TechAnalítica - Análisis y Guías de Compra de Tecnología

Este es el repositorio del proyecto TechAnalítica, un sitio web creado con Next.js que ofrece análisis detallados, comparativas y guías de compra de tecnología, enfocado en AI PCs, tablets, y dispositivos para la productividad.

## 🚀 Tecnologías Utilizadas

- **Framework:** [Next.js](https://nextjs.org/) (con App Router)
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
- **UI:** [React](https://react.dev/)
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/)
- **Componentes:** [ShadCN UI](https://ui.shadcn.com/)
- **Funcionalidad AI:** [Genkit](https://firebase.google.com/docs/genkit)
- **Formularios:** [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)
- **Envío de Emails:** [EmailJS](https://www.emailjs.com/) (para el formulario de contacto)
- **Mapas:** [MapLibre GL JS](https://maplibre.org/) con [Geoapify](https://www.geoapify.com/)

---

## ⚙️ Cómo Empezar

Sigue estos pasos para levantar el proyecto en tu entorno de desarrollo local.

### 1. Prerrequisitos

Asegúrate de tener instalado [Node.js](https://nodejs.org/) (versión 20.x o superior recomendada).

### 2. Instalar Dependencias

Desde la raíz del proyecto, ejecuta el siguiente comando para instalar todas las dependencias necesarias:

```bash
npm install
```

### 3. Configurar Variables de Entorno

El proyecto necesita algunas variables de entorno para funcionar correctamente, especialmente para los servicios de terceros.

1.  Crea una copia del archivo `.env.example` y renómbrala a `.env.local`:

    ```bash
    cp .env.example .env.local
    ```

2.  Abre el archivo `.env.local` y rellena los valores correspondientes.

    ```env
    # URL pública del sitio (para sitemap y robots.txt)
    NEXT_PUBLIC_SITE_URL=http://localhost:9002

    # Claves para el servicio de envío de email (Formulario de Contacto)
    NEXT_PUBLIC_EMAILJS_SERVICE_ID=TU_SERVICE_ID
    NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=TU_TEMPLATE_ID
    NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=TU_PUBLIC_KEY

    # API Key para el mapa interactivo (Página de Contacto)
    NEXT_PUBLIC_GEOAPIFY_API_KEY=TU_API_KEY_GEOAPIFY

    # Claves para la suscripción a la newsletter (Mailchimp)
    MAILCHIMP_API_KEY=TU_API_KEY_MAILCHIMP
    MAILCHIMP_AUDIENCE_ID=TU_AUDIENCE_ID
    MAILCHIMP_SERVER_PREFIX=TU_SERVER_PREFIX
    ```

### 4. Ejecutar el Servidor de Desarrollo

Una vez instaladas las dependencias y configuradas las variables de entorno, puedes iniciar el servidor de desarrollo:

```bash
npm run dev
```

Abre [http://localhost:9002](http://localhost:9002) en tu navegador para ver la aplicación en funcionamiento.

---

## ✨ Características Principales

- **Página de Inicio:** Presentación del sitio con guías destacadas.
- **Guías de Compra:** Artículos detallados sobre diferentes categorías de productos tecnológicos.
- **Galería:** Colección visual de dispositivos y setups.
- **Catálogo:** Lista de productos recomendados con filtros y enlaces de afiliados.
- **Contacto:** Formulario de contacto funcional y mapa interactivo.
- **Newsletter:** Suscripción a través de Mailchimp.
- **Modo Claro/Oscuro:** Soporte para temas claro y oscuro.
