---
version: alpha
name: Multi-step Form
description: Formulario de suscripción en cuatro pasos con barra lateral de progreso (escritorio) o indicador horizontal (móvil).
colors:
  primary: "#483eff"
  primary-variant: "#6259ff"
  on-primary: "#ffffff"
  marine: "#02295a"
  marine-muted: "#473dff"
  accent-sky: "#bee2fd"
  accent-orange: "#ffaf7e"
  accent-pink: "#f9818e"
  accent-pink-deep: "#e96170"
  neutral-caption: "#9699ab"
  neutral-border: "#d6d9e6"
  neutral-surface: "#f8f9ff"
  page-background: "#eef5ff"
  surface: "#ffffff"
typography:
  step-label:
    fontFamily: Ubuntu
    fontWeight: 400
    lineHeight: 1
  step-title:
    fontFamily: Ubuntu
    fontWeight: 700
    lineHeight: 1.2
  heading:
    fontFamily: Ubuntu
    fontWeight: 700
    lineHeight: 1.1
  body:
    fontFamily: Ubuntu
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: Ubuntu
    fontWeight: 700
    lineHeight: 1.2
  caption:
    fontFamily: Ubuntu
    fontWeight: 400
    lineHeight: 1.5
  total:
    fontFamily: Ubuntu
    fontWeight: 700
    lineHeight: 1.2
rounded:
  md: 8px
  lg: 10px
components:
  button-primary:
    backgroundColor: "{colors.marine}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: 14px 24px
  button-confirm:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: 14px 24px
  link-back:
    textColor: "{colors.neutral-caption}"
    typography: "{typography.body}"
  input-default:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.marine}"
    rounded: "{rounded.md}"
    padding: 12px 16px
  input-focus:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.marine}"
    rounded: "{rounded.md}"
    padding: 12px 16px
  input-error:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.marine}"
    rounded: "{rounded.md}"
    padding: 12px 16px
  step-indicator-active:
    backgroundColor: "{colors.accent-sky}"
    textColor: "{colors.marine}"
  step-indicator-inactive:
    backgroundColor: transparent
    textColor: "{colors.on-primary}"
  plan-card-selected:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.md}"
  plan-card-default:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.md}"
  addon-card-selected:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.md}"
  addon-card-default:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.md}"
  summary-box:
    backgroundColor: "{colors.neutral-surface}"
    rounded: "{rounded.md}"
    padding: 16px 24px
  sidebar:
    backgroundColor: "{colors.primary}"
    rounded: "{rounded.lg}"
---

# Multi-step Form

## Overview

Formulario de suscripción a una plataforma de gaming en **cuatro pasos**: información personal, selección de plan, complementos y resumen. Tras confirmar, se muestra una pantalla de agradecimiento.

La interfaz es limpia y moderna, con tipografía sans-serif (Ubuntu), jerarquía clara entre títulos en azul marino y texto secundario en gris, y acentos en azul vibrante, naranja y rosa en la barra lateral y los iconos de planes.

**Flujo de pasos (visible en las imágenes):**

| Paso | Título en sidebar | Pantalla principal |
| --- | --- | --- |
| 1 | YOUR INFO | Personal info |
| 2 | SELECT PLAN | Select your plan |
| 3 | ADD-ONS | Pick add-ons |
| 4 | SUMMARY | Finishing up → Thank you! |

**Layouts observados:**

- **Escritorio:** tarjeta blanca horizontal con esquinas redondeadas y sombra suave sobre fondo azul claro (`#eef5ff`). Columna izquierda fija con barra lateral azul (`#483eff`) y formas decorativas (naranja, rosa, trazos blancos diagonales). Columna derecha con el contenido del paso activo.
- **Móvil:** indicador de pasos horizontal (círculos numerados 1–4) sobre fondo azul con formas decorativas. Tarjeta blanca central con el formulario. Barra de navegación inferior (blanca) con «Go Back» a la izquierda y botón de acción a la derecha.

**Referencias visuales:** imágenes en `design/` — `desktop-design-step-*.jpg`, `mobile-design-step-*.jpg`, `active-states-step-*.jpg`.

## Colors

La paleta combina azul vibrante en la navegación, azul marino para títulos y acciones primarias, grises para texto secundario y acentos cálidos en iconos y gráficos decorativos.

- **Primary (`#483eff`):** fondo de la barra lateral (escritorio) y del encabezado (móvil). Icono del plan Pro. Botón «Confirm» en el paso de resumen.
- **Primary variant (`#6259ff`):** forma decorativa orgánica en la parte inferior de la barra lateral.
- **On primary (`#ffffff`):** texto de pasos en sidebar, números de pasos inactivos, texto de botones primarios.
- **Marine (`#02295a`):** títulos de pantalla («Personal info», «Select your plan», etc.), etiquetas de campos, nombres de planes y complementos, botón «Next Step», toggle de facturación (pista activa).
- **Marine muted (`#473dff`):** precio total en resumen y botón «Confirm» (variante visible en estados activos).
- **Accent sky (`#bee2fd`):** círculo del paso activo en el indicador de progreso.
- **Accent orange (`#ffaf7e`):** icono del plan Arcade y forma decorativa en sidebar/encabezado.
- **Accent pink (`#f9818e`):** icono del plan Advanced, forma decorativa en sidebar/encabezado, círculo del icono de éxito en «Thank you!».
- **Accent pink deep (`#e96170`):** sombra interior del icono de checkmark en «Thank you!».
- **Neutral caption (`#9699ab`):** subtítulos, placeholders, precios secundarios, enlace «Go Back», texto de complementos en resumen.
- **Neutral border (`#d6d9e6`):** bordes de campos por defecto, bordes de tarjetas no seleccionadas, divisor en caja de resumen.
- **Neutral surface (`#f8f9ff`):** fondo de la caja de resumen y barra del toggle de facturación.
- **Page background (`#eef5ff`):** fondo de la página (escritorio).
- **Surface (`#ffffff`):** tarjeta principal, campos de entrada, área de contenido.
- **Error (rojo):** borde de campo con error y mensaje «This field is required» (visible en `active-states-step-1.jpg`; valor hex no indicado en las capturas).

**Colores de selección (visibles en tarjetas activas):** borde azul/morado (`#483eff` o tono similar) y ligero tinte de fondo en tarjetas de plan y complemento seleccionados.

## Typography

Tipografía **Ubuntu** (sans-serif) en todo el formulario. Tres pesos visibles: regular (400), medium (500) y bold (700).

- **Step label:** «STEP 1», «STEP 2», etc. — texto pequeño, mayúsculas, color blanco o gris claro en sidebar; sobre fondo azul en móvil.
- **Step title:** «YOUR INFO», «SELECT PLAN», «ADD-ONS», «SUMMARY» — mayúsculas, bold, blanco en sidebar.
- **Heading:** título de cada paso — bold, azul marino, tamaño grande (p. ej. «Personal info», «Select your plan», «Pick add-ons», «Finishing up», «Thank you!»).
- **Body / caption:** descripciones bajo el título — regular, gris (`#9699ab`).
- **Label:** etiquetas de campos («Name», «Email Address», «Phone Number») y nombres de planes/complementos — bold, azul marino.
- **Price:** precios de planes y complementos — regular, gris; precios de complementos seleccionados en azul/morado.
- **Total:** «+$12/mo» / «$120/yr» — bold, azul vibrante, alineado a la derecha.

En modo yearly, las tarjetas de plan muestran una línea adicional «2 months free» debajo del precio, en azul marino y tamaño menor.

## Layout

**Escritorio**

- Contenedor principal: tarjeta blanca centrada, proporción horizontal, `border-radius` ~10px, sombra suave.
- Sidebar: ~1/3 del ancho de la tarjeta; lista vertical de 4 pasos con círculo numérico + dos líneas de texto.
- Área de contenido: ~2/3 del ancho; título y subtítulo arriba, contenido intermedio, navegación abajo.
- Navegación inferior del contenido: «Go Back» alineado a la izquierda (pasos 2–4); botón de acción («Next Step» o «Confirm») alineado a la derecha.
- Paso 1 solo muestra «Next Step» (sin «Go Back»).

**Móvil**

- Encabezado: fondo azul con gradiente y formas decorativas; stepper horizontal de 4 círculos centrados.
- Tarjeta blanca: ocupa el centro de la pantalla con padding generoso.
- Planes y complementos: apilados verticalmente (en escritorio, planes en fila horizontal de 3 columnas).
- Pie fijo: barra blanca con «Go Back» (izquierda) y botón primario (derecha), fuera de la tarjeta principal en pasos 2–4.

**Espaciado**

- Padding generoso dentro de la tarjeta y entre elementos del formulario.
- Separación vertical consistente entre campos, tarjetas de plan/complemento y bloques de resumen.
- En resumen: etiquetas alineadas a la izquierda, precios a la derecha en la misma fila.

## Elevation & Depth

La jerarquía visual se logra principalmente con **capas tonales**, no con sombras pronunciadas.

- Fondo de página: azul muy claro (`#eef5ff`).
- Tarjeta principal: blanco puro con sombra suave y discreta.
- Barra lateral / encabezado móvil: azul sólido (`#483eff`) con formas orgánicas superpuestas en la parte inferior (naranja, rosa, azul más claro).
- Caja de resumen: fondo gris-azulado (`#f8f9ff`) dentro de la tarjeta blanca.
- Icono de éxito («Thank you!»): círculo rosa con checkmark blanco y sombra interior sutil.

No se observan sombras fuertes en botones ni en tarjetas de selección; el estado activo se comunica con borde de color y ligero cambio de fondo.

## Shapes

- **Tarjeta principal:** esquinas redondeadas (~8–10px).
- **Campos de texto:** rectángulos con esquinas redondeadas y borde fino.
- **Botones «Next Step» / «Confirm»:** rectángulos con esquinas redondeadas.
- **Indicadores de paso:** círculos. Activo: relleno azul cielo (`#bee2fd`) con número en azul marino. Inactivo: contorno blanco transparente con número blanco (sidebar) o contorno blanco sobre fondo azul (móvil).
- **Tarjetas de plan y complemento:** rectángulos con esquinas redondeadas.
- **Checkboxes de complementos:** cuadrados con esquinas ligeramente redondeadas; seleccionado: relleno azul/morado con checkmark blanco.
- **Toggle de facturación:** pista horizontal redondeada; control deslizante circular blanco.
- **Iconos de plan:** círculos de color (naranja, rosa, azul) con pictograma blanco en el interior.

## Components

### Sidebar / Stepper (navegación)

Cuatro pasos fijos:

1. **YOUR INFO**
2. **SELECT PLAN**
3. **ADD-ONS**
4. **SUMMARY**

Cada paso muestra: círculo numerado + «STEP N» (pequeño) + nombre del paso (mayúsculas, bold).

- **Paso activo:** círculo relleno `#bee2fd`, número en azul marino.
- **Pasos inactivos:** círculo con borde blanco, número blanco.
- En paso 4 activo (`active-states-step-4.jpg`, `desktop-design-step-5.jpg`): variante con círculo blanco sólido y número azul.

### Paso 1 — Personal info

**Contenido visible:**

- Título: «Personal info»
- Subtítulo: «Please provide your name, email address, and phone number.»
- Campos:
  - **Name** — placeholder: «e.g. Stephen King»
  - **Email Address** — placeholder: «e.g. stephenking@lorem.com»
  - **Phone Number** — placeholder: «e.g. +1 234 567 890»
- Acción: botón «Next Step»

**Estados (`active-states-step-1.jpg`):**

- Campo con foco: borde azul marino (email con valor parcial «vanessamint@»).
- Campo con error: borde rojo, mensaje «This field is required» alineado a la derecha sobre el campo Phone Number.

### Paso 2 — Select your plan

**Contenido visible:**

- Título: «Select your plan»
- Subtítulo: «You have the option of monthly or yearly billing.»
- Tres planes con icono circular:

| Plan | Icono | Mensual | Anual |
| --- | --- | --- | --- |
| Arcade | Naranja (`#ffaf7e`) | $9/mo | $90/yr + «2 months free» |
| Advanced | Rosa (`#f9818e`) | $12/mo | $120/yr + «2 months free» |
| Pro | Azul (`#483eff`) | $15/mo | $150/yr + «2 months free» |

- **Toggle:** etiquetas «Monthly» y «Yearly»; interruptor entre ambas. Mensual: control a la izquierda; anual: control a la derecha.
- **Navegación:** «Go Back» + «Next Step»

**Estados (`active-states-step-2.jpg`, `desktop-design-step-2-monthly.jpg`):**

- Plan seleccionado: borde azul/morado visible (Arcade en las capturas por defecto).
- Hover: borde morado al pasar sobre tarjeta no seleccionada (Advanced).
- Plan no seleccionado: borde gris claro, fondo blanco.

### Paso 3 — Pick add-ons

**Contenido visible:**

- Título: «Pick add-ons»
- Subtítulo: «Add-ons help enhance your gaming experience.»
- Tres opciones con checkbox, título, descripción y precio alineado a la derecha:

| Complemento | Descripción | Mensual | Anual |
| --- | --- | --- | --- |
| Online service | Access to multiplayer games | +$1/mo | +$10/yr |
| Larger storage | Extra 1TB of cloud save | +$2/mo | +$20/yr |
| Customizable profile | Custom theme on your profile | +$2/mo | +$20/yr |

- **Navegación:** «Go Back» + «Next Step»

**Estados (`active-states-step-3.jpg`, `desktop-design-step-3-monthly.jpg`):**

- Seleccionado: checkbox relleno con checkmark blanco, borde azul/morado, ligero tinte de fondo.
- No seleccionado: checkbox vacío con borde gris, fondo blanco, borde gris en la tarjeta.
- Hover visible sobre tarjeta no seleccionada (Customizable Profile).

### Paso 4 — Finishing up (resumen)

**Contenido visible:**

- Título: «Finishing up»
- Subtítulo: «Double-check everything looks OK before confirming.»
- Caja de resumen con:
  - Plan elegido y periodo — p. ej. «Arcade (Monthly)» + precio «$9/mo» o «Arcade (Yearly)» + «$90/yr»
  - Enlace «Change» subrayado debajo del nombre del plan
  - Divisor horizontal
  - Líneas de complementos seleccionados con precio incremental
  - Fila de total: «Total (per month)» + «+$12/mo» o «Total (per year)» + «$120/yr»
- **Navegación:** «Go Back» + botón «Confirm» (fondo azul `#483eff`, texto blanco)

**Estados (`active-states-step-4.jpg`):**

- Cursor sobre enlace «Change» y botón «Confirm».

### Paso 5 — Thank you! (confirmación)

**Contenido visible (`desktop-design-step-5.jpg`, `mobile-design-step-5.jpg`):**

- Icono: círculo rosa (`#f9818e`) con checkmark blanco
- Título: «Thank you!»
- Texto: «Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.»
- Contenido centrado vertical y horizontalmente en el área principal.
- Sidebar/stepper sigue visible con paso 4 como activo o finalizado.

### Botones y enlaces

- **Next Step:** fondo azul marino (`#02295a`), texto blanco bold, esquinas redondeadas.
- **Confirm:** fondo azul vibrante (`#483eff`), texto blanco bold.
- **Go Back:** solo texto, sin fondo, color gris (`#9699ab`); visible en pasos 2–4.

### Campos de entrada

- Fondo blanco, borde gris claro por defecto.
- Placeholder en gris claro.
- Foco: borde azul marino.
- Error: borde rojo + mensaje de validación en rojo.

### Toggle de facturación

- Contenedor: barra horizontal gris claro (`#f8f9ff`), ancho completo bajo las tarjetas de plan.
- Etiqueta activa («Monthly» o «Yearly»): azul marino bold.
- Etiqueta inactiva: gris.
- Interruptor: pista azul marino, control circular blanco.

## Do's and Don'ts

- Usar el azul marino (`#02295a`) para títulos, etiquetas de campo y el botón «Next Step».
- Usar el azul vibrante (`#483eff`) para la barra lateral, el botón «Confirm» y acentos de selección.
- Usar gris (`#9699ab`) exclusivamente para texto secundario, placeholders y «Go Back».
- Mostrar el paso activo con círculo relleno `#bee2fd` y número en azul marino.
- Comunicar selección en tarjetas con borde de color, no solo con cambio de sombra.
- Mantener la alineación precio-derecha en planes, complementos y resumen.
- En modo yearly, mostrar la línea «2 months free» bajo el precio anual de cada plan.
- En resumen, etiquetar el total como «Total (per month)» o «Total (per year)» según el periodo de facturación visible en las capturas.
- Mostrar mensajes de error en rojo junto al campo afectado (como «This field is required» en teléfono).
- No mostrar «Go Back» en el paso 1 (no aparece en `desktop-design-step-1.jpg` ni `mobile-design-step-1.jpg`).
- No usar más de los tres pesos tipográficos visibles (regular, medium, bold) en una misma pantalla.
- No reemplazar los nombres fijos de los cuatro pasos del sidebar.
- No omitir el enlace «Change» en la caja de resumen del paso 4.
- No inventar pasos, campos, planes o complementos adicionales a los mostrados en las imágenes de `design/`.
