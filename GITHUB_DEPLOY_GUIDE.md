# 📋 Guía: GitHub → Netlify

## 📁 Qué archivos SUBIR a GitHub

### ✅ Archivos NECESARIOS:
```
├── client/                    # Todo el frontend
├── server/                    # Backend (para funcionalidad completa)
├── shared/                    # Esquemas compartidos
├── attached_assets/           # Tus imágenes personales
├── netlify.toml              # Configuración de Netlify
├── package.json              # Dependencias
├── package-lock.json         # Lock de versiones
├── tsconfig.json             # TypeScript config
├── tailwind.config.ts        # Tailwind config
├── postcss.config.js         # PostCSS config
├── vite.config.ts            # Vite config
├── components.json           # shadcn/ui config
├── .gitignore               # Archivos a ignorar
├── README.md                # Documentación
└── NETLIFY_DEPLOY.md        # Guía de despliegue
```

### ❌ Archivos que NO SUBIR (ya están en .gitignore):
```
├── node_modules/            # Se instalan automáticamente
├── dist/                    # Se genera en build
├── .replit                  # Específico de Replit
├── .env                     # Variables sensibles
├── logs/                    # Archivos de log
└── .vscode/                 # Configuración del editor
```

## 🚀 Pasos para GitHub + Netlify

### 1. Crear repositorio en GitHub
```bash
# En GitHub.com
- Clic en "New repository"
- Nombre: "portfolio-reiber-lozano" (o el que prefieras)
- Público o Privado (tu elección)
- NO inicializar con README (ya tienes uno)
```

### 2. Subir tu proyecto
```bash
# En tu computadora (después de descargar de Replit)
git init
git add .
git commit -m "Initial commit: Portfolio website"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/TU-REPOSITORIO.git
git push -u origin main
```

### 3. Conectar con Netlify
1. **Ve a [netlify.com](https://netlify.com)**
2. **Clic en "New site from Git"**
3. **Selecciona "GitHub"**
4. **Autoriza Netlify en GitHub**
5. **Selecciona tu repositorio**
6. **Configuración automática:**
   - Build command: `vite build --outDir dist/public`
   - Publish directory: `dist/public`
   - (Netlify lee esto del `netlify.toml`)

### 4. ¡Desplegado! 🎉
- Tu sitio estará en: `https://tu-nombre.netlify.app`
- Cada push a GitHub actualiza automáticamente Netlify
- SSL/HTTPS automático incluido

## 🔧 Ventajas de GitHub + Netlify

### GitHub te da:
- ✅ Control de versiones profesional
- ✅ Backup seguro en la nube
- ✅ Historial completo de cambios
- ✅ Colaboración (si trabajas en equipo)

### Netlify te da:
- ✅ Deploy automático en cada cambio
- ✅ HTTPS gratuito
- ✅ CDN global (carga rápida mundial)
- ✅ Domain personalizado fácil
- ✅ Form handling (para formulario de contacto)

## 📝 Comandos Git útiles

```bash
# Ver estado
git status

# Agregar cambios
git add .

# Confirmar cambios
git commit -m "Descripción del cambio"

# Subir cambios
git push

# Ver historial
git log --oneline
```

## 🎯 Resultado final
Tu portafolio será accesible desde:
- **URL de Netlify:** `https://tu-nombre.netlify.app`
- **Dominio personalizado:** `https://tu-dominio.com` (opcional)
- **Código en GitHub:** Para mostrarlo en tu perfil profesional