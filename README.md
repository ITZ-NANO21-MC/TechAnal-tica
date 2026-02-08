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

### 3. Configurar Variables de Envío

El proyecto necesita algunas variables de entorno para funcionar correctamente.

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

---

## 🛠️ Solución de Problemas con Git

### Error: Invalid username or token
Si recibes este error al hacer `git push`, recuerda que GitHub requiere un **Personal Access Token (PAT)** en lugar de tu contraseña habitual.

1. Genera un token en [GitHub Tokens](https://github.com/settings/tokens).
2. Actualiza tu URL de remoto con el token:
   ```bash
   git remote set-url origin https://<TU_TOKEN>@github.com/ITZ-NANO21-MC/TechAnal-tica.git
   ```

---

## ✨ Características Principales

- **Página de Inicio:** Presentación del sitio con guías destacadas.
- **Guías de Compra:** Artículos detallados sobre diferentes categorías de productos tecnológicos.
- **Galería:** Colección visual de dispositivos y setups.
- **Catálogo:** Lista de productos recomendados con filtros y enlaces de afiliados.
- **Contacto:** Formulario de contacto funcional y mapa interactivo.
- **Newsletter:** Suscripción a través de Mailchimp.
- **Modo Claro/Oscuro:** Soporte para temas claro y oscuro.
