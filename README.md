# Frontend Mentor — Multi-step form

Solución al reto [Multi-step form](https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ) de Frontend Mentor.

Formulario de suscripción a una plataforma de gaming en cuatro pasos, con pantalla de confirmación final. Implementado con React, TypeScript, Vite y Tailwind CSS.

## Tabla de contenidos

- [Descripción general](#descripción-general)
- [Funcionalidades](#funcionalidades)
- [Captura de pantalla](#captura-de-pantalla)
- [Enlaces](#enlaces)
- [Stack tecnológico](#stack-tecnológico)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Arquitectura](#arquitectura)
- [Inicio rápido](#inicio-rápido)
- [Scripts disponibles](#scripts-disponibles)
- [Despliegue](#despliegue)
- [Autor](#autor)

## Descripción general

El reto consiste en construir un formulario multi-paso donde el usuario:

- Completa cada paso de la secuencia
- Puede volver a un paso anterior para actualizar sus selecciones
- Ve un resumen de sus selecciones antes de confirmar
- Recibe mensajes de validación cuando un campo está vacío, el email no es válido o no se ha seleccionado un plan
- Usa un layout adaptado a escritorio y móvil

### Pasos del formulario

| Paso | Sidebar     | Contenido                                                                      |
| ---- | ----------- | ------------------------------------------------------------------------------ |
| 1    | YOUR INFO   | Información personal (nombre, email, teléfono)                                 |
| 2    | SELECT PLAN | Selección de plan (Arcade, Advanced, Pro) con facturación mensual o anual      |
| 3    | ADD-ONS     | Complementos opcionales (Online service, Larger storage, Customizable Profile) |
| 4    | SUMMARY     | Resumen y confirmación                                                         |
| 5    | —           | Pantalla de agradecimiento (`Thank you!`)                                      |

### Layouts

- **Escritorio:** tarjeta con sidebar de progreso a la izquierda y contenido del paso a la derecha
- **Móvil:** stepper horizontal en la parte superior y barra de navegación fija en la parte inferior

La especificación de diseño detallada está documentada en [`design.md`](./design.md).

## Funcionalidades

Implementado en el código actual:

- Navegación entre pasos con validación al avanzar (pasos 1 y 2)
- Validación de campos personales con [Zod](https://zod.dev/) (`name`, `email`, `phone`)
- Selección de plan con toggle mensual/anual y precios dinámicos
- Selección múltiple de complementos
- Resumen con total calculado según plan, complementos y periodo de facturación
- Enlace «Change» en el resumen para volver al paso de selección de plan
- Estados de hover, focus y error en campos e interactivos
- Animaciones de transición entre pasos (`tailwind-animations`)

## Captura de pantalla

_Pendiente: agregar captura de pantalla._

## Enlaces

- **Repositorio:** [github.com/Mooenz/multi-step-form](https://github.com/Mooenz/multi-step-form)
- **Sitio en vivo:** https://mooenz.github.io/multi-step-form/
- **Solución en Frontend Mentor:** https://www.frontendmentor.io/solutions/multistep-form-qfFxErDz3_

## Stack tecnológico

| Tecnología                                               | Versión | Uso                                                  |
| -------------------------------------------------------- | ------- | ---------------------------------------------------- |
| [React](https://react.dev/)                              | 19      | UI                                                   |
| [TypeScript](https://www.typescriptlang.org/)            | ~6.0    | Tipado estático                                      |
| [Vite](https://vite.dev/)                                | 8       | Bundler y dev server                                 |
| [Tailwind CSS](https://tailwindcss.com/)                 | 4       | Estilos                                              |
| [Zod](https://zod.dev/)                                  | 4       | Validación de formulario                             |
| [React Compiler](https://react.dev/learn/react-compiler) | —       | Optimización de renders (via `@vitejs/plugin-react`) |
| [pnpm](https://pnpm.io/)                                 | 11      | Gestor de paquetes                                   |

## Estructura del proyecto

```
src/
├── App.tsx                    # Punto de entrada de la aplicación
├── main.tsx
├── global.css                 # Tokens de diseño y estilos globales
├── font.css                   # Tipografía Ubuntu
├── assets/                    # Iconos e imágenes de fondo
├── constants/form-data.ts     # Planes, complementos y pasos
├── lib/
│   ├── schemas.ts             # Esquemas Zod y validación
│   └── validation.ts
├── types/form.ts              # Tipos del formulario
└── components/
    ├── form/                  # Layout, provider, navegación, sidebar
    ├── steps/                 # Un componente por paso
    └── ui/                    # Button, TextInput, PlanCard, AddonCard, etc.
```

## Arquitectura

El estado del formulario se gestiona con un patrón de **compound components** y **Context**:

- `FormProvider` centraliza el estado (`FormState`), las acciones (`FormActions`) y metadatos (`FormMeta`)
- `useForm` consume el contexto desde los componentes hijos
- Cada paso es un componente independiente renderizado dinámicamente según `state.step`
- La validación se ejecuta al pulsar «Next Step» en los pasos 1 y 2

## Inicio rápido

### Requisitos

- Node.js 22 (usado en CI)
- pnpm 11

### Instalación

```bash
pnpm install
```

### Desarrollo

```bash
pnpm dev
```

### Build de producción

```bash
pnpm build
```

### Vista previa del build

```bash
pnpm preview
```

## Scripts disponibles

| Script         | Descripción                                     |
| -------------- | ----------------------------------------------- |
| `pnpm dev`     | Inicia el servidor de desarrollo (Vite)         |
| `pnpm build`   | Compila TypeScript y genera el build en `dist/` |
| `pnpm preview` | Sirve el build de producción localmente         |
| `pnpm lint`    | Ejecuta ESLint                                  |

## Despliegue

El proyecto incluye un workflow de GitHub Actions (`.github/workflows/deploy.yml`) que:

- Se ejecuta en push a la rama `master` o manualmente (`workflow_dispatch`)
- Construye con `VITE_BASE=/multi-step-form/ pnpm build` para publicar en la ruta del repositorio
- Despliega el contenido de `dist/` en GitHub Pages

## Autor

- **GitHub:** [@Mooenz](https://github.com/Mooenz)
- **Sitio web:** [mooenz.me](https://mooenz.me)
- **Twitter / X:** [@Mooenz](https://x.com/MooenzDev)
