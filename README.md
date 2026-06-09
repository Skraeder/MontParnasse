# Montparnasse Pastelería — Demo funcional v2

Sitio web estático profesional, listo para abrir localmente o subir directo a Vercel, Netlify o GitHub Pages. No requiere build, dependencias ni servidor.

## Información pública utilizada como base

Esta demo usa como base información pública previamente investigada y aprobada para el proyecto:

- Montparnasse Pastelería es una pastelería mexicana con trayectoria desde 1981.
- Ofrece categorías como pasteles, chocolates, gelatinas, helados, pastas secas y línea libre de azúcar.
- Maneja el mensaje de marca “Endulzamos tu vida”.
- El contacto público encontrado es 55 2499 4700.
- Tiene presencia en redes sociales y plataformas de delivery.
- Para esta versión, el flujo más realista es catálogo + carrito + confirmación por WhatsApp.

> Importante: esta información debe confirmarse con la empresa antes de publicación comercial final.

## Qué contiene el proyecto

```text
index.html
styles.css
script.js
aviso-privacidad.html
terminos.html
404.html
README.md
/assets
/assets/products
/assets/brand
/assets/placeholders
```

## Cómo abrirlo localmente

1. Descomprime el ZIP.
2. Abre `index.html` en tu navegador.
3. También puedes usar Live Server en VS Code para probarlo mejor.

## Cómo publicarlo en Vercel

1. Crea un repositorio en GitHub.
2. Sube todos los archivos a la raíz del repositorio, no dentro de una carpeta extra.
3. Entra a Vercel.
4. Selecciona **New Project**.
5. Importa el repositorio.
6. Framework preset: **Other** o **Static**.
7. Build command: dejar vacío.
8. Output directory: dejar vacío o usar raíz.
9. Deploy.

## Cómo editar el catálogo

Abre `script.js` y busca:

```js
// TODO: reemplazar con catálogo oficial.
const PRODUCTS = [ ... ]
```

Cada producto tiene:

- `id`
- `name`
- `category`
- `tag`
- `priceLabel`
- `image`
- `description`
- `meta`

## Cómo cambiar WhatsApp

En `script.js` cambia:

```js
const WHATSAPP_NUMBER = "525524994700";
```

Usa formato internacional sin espacios. Ejemplo México: `52` + número.

## Cómo cambiar imágenes

Reemplaza los SVG temporales en:

```text
/assets/products
/assets/brand
/assets/placeholders
```

Recomendación:

- Fotos de producto: `.webp`, 1000x1000 px, menos de 300 KB.
- Hero: `.webp`, 1800x1400 px, menos de 500 KB.
- Logo: `.svg` o `.png` transparente.

Luego actualiza las rutas en `index.html` y `script.js`.

## Cómo cambiar colores

Edita las variables en `styles.css`:

```css
:root {
  --brand: #6F2D84;
  --brand-dark: #321832;
  --cream: #FFF8F1;
}
```

La paleta actual busca respetar la identidad morada/lila observada en la marca y elevarla con crema, chocolate y dorado suave.

## Formularios

- El formulario de evento abre WhatsApp con mensaje prellenado.
- El formulario de contacto muestra mensaje de éxito en demo.
- Para producción, conectar a Formspree, Netlify Forms, Make, Zapier o backend propio.

## Flujo de compra incluido

Versión MVP incluida:

1. Catálogo editable.
2. Producto detalle.
3. Carrito lateral.
4. Cantidades.
5. Datos de intención, fecha y zona.
6. Confirmación por WhatsApp.

No se promete pago en línea. El sitio comunica:

> “El equipo confirmará disponibilidad, cobertura, total final y método de pago por WhatsApp.”

## Datos por reemplazar antes de publicación final

| Elemento | Dato usado actualmente | Tipo: público validado / supuesto / placeholder | Dónde se edita | Recomendación |
|---|---|---|---|---|
| Nombre comercial | Montparnasse Pastelería | Público validado | `index.html`, metatags, footer | Confirmar escritura oficial, acentos y uso de mayúsculas. |
| Trayectoria | Desde 1981 | Público validado | `index.html` hero y README | Confirmar si debe comunicarse como “desde 1981”, “fundada en 1981” u otra frase oficial. |
| Mensaje de marca | “Endulzamos tu vida” | Público validado | `index.html` hero | Confirmar frase exacta y estilo de uso. |
| WhatsApp | 55 2499 4700 / `525524994700` | Público validado por investigar, requiere confirmación | `script.js`, `index.html`, footer | Validar que sea el número correcto para pedidos web. |
| Logo | `logo-placeholder.svg` | Placeholder | `/assets/brand/`, `index.html`, footer | Reemplazar por logo oficial en SVG o PNG transparente. |
| Catálogo | Productos de ejemplo por categoría | Supuesto / placeholder | `script.js` en `PRODUCTS` | Reemplazar por catálogo oficial con nombres, descripciones y disponibilidad. |
| Precios | “Precio por confirmar”, “Desde $___” | Placeholder | `script.js`, campo `priceLabel` | Sustituir por precios oficiales o mantener cotización si así opera la empresa. |
| Porciones | Por confirmar | Placeholder | `script.js`, `meta` de cada producto | Agregar porciones reales por tamaño. |
| Fotografías | SVG premium temporales | Placeholder | `/assets/products` y rutas en `script.js` | Usar fotos reales optimizadas en WebP. |
| Sucursales | Sucursal 1, 2 y 3 — dirección por confirmar | Placeholder | `index.html`, sección `sucursales` | Reemplazar con direcciones oficiales y links a Maps. |
| Horarios | “Horarios sujetos a disponibilidad por sucursal...” | Supuesto profesional | `index.html`, sección `sucursales` | Confirmar horarios reales por sucursal. |
| Entrega | Recolección y entrega sujeta a cobertura | Supuesto profesional | `index.html`, carrito, FAQ | Definir zonas, costos, tiempos y restricciones. |
| Métodos de pago | Confirmación por WhatsApp | Supuesto profesional | `index.html`, `script.js`, términos | Confirmar efectivo, transferencia, tarjeta, link de pago, Mercado Pago u otros. |
| Facturación | No definida | Dato pendiente | Agregar en FAQ, términos o checkout futuro | Confirmar proceso, correo y datos necesarios. |
| Políticas de entrega | Texto base editable | Placeholder legal/comercial | `terminos.html`, FAQ | Redactar con reglas oficiales. |
| Políticas de cancelación | Texto base editable | Placeholder legal/comercial | `terminos.html` | Validar legalmente antes de publicar. |
| Aviso de privacidad | Texto base editable | Placeholder legal | `aviso-privacidad.html` | Reemplazar por aviso legal oficial. |
| Términos y condiciones | Texto base editable | Placeholder legal | `terminos.html` | Reemplazar por términos oficiales. |
| Página 404 | Página de error demo | Supuesto profesional | `404.html` | Ajustar texto final si se desea. |
| SEO | Meta title y description demo | Supuesto profesional | `index.html` `<head>` | Ajustar con keywords, zonas y sucursales oficiales. |

## Pendientes recomendados

- Confirmar datos oficiales con la empresa.
- Reemplazar imágenes temporales por fotos reales.
- Validar textos legales.
- Definir si el sitio se queda como MVP con WhatsApp o evoluciona a eCommerce avanzado.
- Conectar formulario de contacto a una herramienta real.
- Configurar dominio propio en Vercel.
- Crear favicon y social card oficiales.

## Versión eCommerce avanzada futura

Para convertir este MVP en eCommerce completo se necesitaría:

- Catálogo oficial con SKUs.
- Inventario por sucursal.
- Precios definitivos.
- Cobertura por código postal.
- Selección real de fecha y horario.
- Checkout.
- Pasarela de pago.
- Confirmación automática por correo y WhatsApp.
- Políticas legales definitivas.
- Panel para administrar pedidos.
