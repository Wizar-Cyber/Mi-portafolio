# Guía de Despliegue en Netlify

## Pasos para desplegar tu portafolio en Netlify

### 1. Descargar el proyecto
- En Replit, ve al panel de archivos
- Haz clic en los tres puntos (...) 
- Selecciona "Download as zip"

### 2. Preparar para Netlify
Tu proyecto ya está configurado con:
- ✅ `netlify.toml` - Configuración de build
- ✅ Redirects para SPA (Single Page Application)
- ✅ Optimizado para sitio estático

### 3. Opciones de despliegue

#### Opción A: Drag & Drop (Más fácil)
1. Ve a [netlify.com](https://netlify.com)
2. Crea una cuenta gratuita
3. En el dashboard, arrastra tu carpeta del proyecto
4. Netlify automáticamente detectará la configuración

#### Opción B: Conectar con Git (Recomendado)
1. Sube tu proyecto a GitHub/GitLab
2. En Netlify, haz clic en "New site from Git"
3. Conecta tu repositorio
4. Netlify usará la configuración del `netlify.toml`

### 4. Configuración automática
Netlify ejecutará:
```
vite build --outDir dist/public
```

### 5. Tu sitio estará disponible en:
```
https://tu-nombre-del-sitio.netlify.app
```

### 6. Dominio personalizado (Opcional)
- En Netlify dashboard → Domain settings
- Agrega tu dominio personalizado
- Netlify configurará SSL automáticamente

## Notas importantes:
- El sitio es completamente estático (no requiere servidor)
- La funcionalidad de contacto funcionará del lado del cliente
- Carga rápida y optimizada para SEO
- HTTPS automático incluido

## Estructura final en Netlify:
```
dist/public/
├── index.html
├── assets/
│   ├── css/
│   ├── js/
│   └── images/
└── _redirects (generado automáticamente)
```