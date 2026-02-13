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

El proyecto necesita variables de entorno para funcionar.

1.  Crea una copia del archivo `.env.example` y renómbrala a `.env.local`:
    ```bash
    cp .env.example .env.local
    ```
2.  Abre el archivo `.env.local` y rellena los valores correspondientes. Estos valores se obtienen de EmailJS, Geoapify y Mailchimp.

### 4. Ejecutar el Servidor de Desarrollo

```bash
npm run dev
```

Abre [http://localhost:9002](http://localhost:9002) en tu navegador para ver la aplicación en funcionamiento.

## ✨ Características Principales

- **Análisis de AI PCs:** Comparativas de rendimiento local vs nube.
- **Guías de Tablets:** Análisis de productividad en iPad, Android y Windows.
- **Catálogo de Accesorios:** Productos recomendados con filtros.
- **Newsletter Dinámica:** Suscripción conectada a Mailchimp.
- **Formulario de Contacto:** Envío directo mediante EmailJS.
- **Mapa Interactivo:** Ubicación del negocio mediante MapLibre y Geoapify.
