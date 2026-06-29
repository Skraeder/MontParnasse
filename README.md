# Montparnasse Pastelería — Web v3 para Vercel

Demo funcional de eCommerce para Montparnasse Pastelería con catálogo amplio, carruseles por categoría, carrito, cotización de eventos, flujo por WhatsApp y preparación para Mercado Pago en Vercel.

## Qué contiene

- `index.html`: página principal con hero, constructor de celebración, favoritos, catálogo por categorías, eventos, compra y FAQ.
- `styles.css`: identidad visual premium cálida basada en morado Montparnasse, crema, lila, chocolate y dorado.
- `script.js`: catálogo editable, carruseles, filtros, carrito, modal de producto, WhatsApp y llamada a Mercado Pago.
- `api/create-preference.js`: función serverless para crear preferencia de pago en Mercado Pago desde Vercel.
- `success.html`, `pending.html`, `failure.html`: páginas de retorno de Mercado Pago.
- `aviso-privacidad.html`, `terminos.html`: textos base editables con aviso de validación legal.
- `404.html`: página de error personalizada.
- `assets/products`: imágenes SVG temporales de producto para presentación.
- `assets/data`: catálogo base en JSON y CSV.
- `.env.example`: variables de activación para Mercado Pago y WhatsApp.
- `vercel.json`: configuración mínima para Vercel.

## Información pública utilizada como base

La demo se construyó usando como base información pública investigada previamente:

- Montparnasse Pastelería como pastelería mexicana con trayectoria desde 1981.
- Oferta pública mencionada: pasteles, chocolates, gelatinas, helados, pastas secas y línea libre de azúcar.
- Mensaje de marca: “Endulzamos tu vida”.
- Contacto público observado: 55 2499 4700.
- Presencia digital en redes sociales y plataformas de delivery.
- Flujo recomendado para esta fase: catálogo + carrito + confirmación por WhatsApp.

Esta información debe confirmarse con la empresa antes de publicación comercial final.

## Datos por reemplazar antes de publicación final

| Elemento | Dato usado actualmente | Tipo: público validado / supuesto / placeholder | Dónde se edita | Recomendación |
|---|---|---|---|---|
| Logo | Logo demo con monograma M | Placeholder | `assets/brand/logo-montparnasse-demo.svg`, `index.html` | Reemplazar por logo oficial en SVG/PNG. |
| WhatsApp | 55 2499 4700 / `525524994700` | Público validado previamente | `script.js`, `.env.example`, enlaces en HTML | Confirmar número oficial para pedidos web. |
| Catálogo | 54 productos base | Público + supuesto profesional | `script.js`, `assets/data/catalogo_montparnasse_base.json` | Validar productos vigentes, nombres y categorías. |
| Precios | Precios observados y precios demo | Público + placeholder | `script.js`, `assets/data/catalogo_montparnasse_base.csv` | Reemplazar por lista oficial de precios por sucursal/presentación. |
| Fotos de producto | SVG generados para demo | Placeholder | `assets/products/` y campo `image` en `script.js` | Reemplazar por fotos oficiales autorizadas en WebP/JPG. |
| Porciones | Tamaños observados o demo | Público + supuesto | `script.js` | Confirmar gramajes, porciones y medidas oficiales. |
| Sucursales | Sección de consulta, sin direcciones exactas | Supuesto | `index.html` | Agregar buscador o listado oficial de sucursales. |
| Horarios | No se muestran horarios exactos | Pendiente | `index.html`, FAQ | Agregar horarios oficiales por sucursal. |
| Entrega | Recolección/entrega como flujo general | Supuesto | `index.html`, `script.js` | Definir zonas, costos y tiempos de entrega. |
| Mercado Pago | Integración preparada, no activa sin token | Supuesto técnico | `.env.example`, `api/create-preference.js` | Configurar credenciales reales en Vercel. |
| Métodos de pago | Mercado Pago + WhatsApp | Supuesto | `script.js`, `index.html` | Confirmar pagos aceptados: tarjeta, transferencia, efectivo, etc. |
| Facturación | No implementada como flujo final | Pendiente | `terminos.html`, `index.html` | Agregar proceso oficial de facturación. |
| Aviso de privacidad | Texto base editable | Placeholder legal | `aviso-privacidad.html` | Validar con abogado o responsable legal. |
| Términos | Texto base editable | Placeholder legal | `terminos.html` | Validar políticas de venta, cambios y cancelaciones. |
| Promociones | No se publican como definitivas | Pendiente | `index.html`, `script.js` | Agregar solo promociones oficiales vigentes. |

## Cómo abrir localmente

Abre `index.html` directamente en tu navegador. La página funciona como sitio estático.

Para probar la función de Mercado Pago localmente necesitarías un entorno que ejecute funciones serverless o desplegar en Vercel.

## Cómo editar el catálogo

En `script.js`, busca:

```js
const PRODUCTS = [...]
```

Cada producto tiene campos editables:

- `name`
- `category`
- `subcategory`
- `size`
- `description`
- `price`
- `priceNumber`
- `image`
- `badge`
- `moments`

Comentarios importantes dentro del código:

```js
// TODO: reemplazar con catálogo oficial validado por Montparnasse
// PLACEHOLDER: las imágenes SVG son arte temporal para presentación
```

## Cómo cambiar imágenes

1. Guarda fotos oficiales en `assets/products/`.
2. Ideal: formato `.webp`, 1000 × 1000 px, peso menor a 300 KB.
3. Cambia el campo `image` en `script.js`.

Ejemplo:

```js
image: 'assets/products/fresas-con-crema-oficial.webp'
```

## Cómo cambiar colores

Edita las variables en `styles.css`:

```css
:root {
  --plum:#6F2D84;
  --plum-dark:#321832;
  --lilac:#E9D6EF;
  --cream:#FFF8F1;
  --gold:#C9A15A;
}
```

## Cómo activar Mercado Pago en Vercel

1. Sube el proyecto a GitHub.
2. Importa el repositorio en Vercel.
3. En Vercel, entra a **Settings > Environment Variables**.
4. Agrega:

```env
MP_ACCESS_TOKEN=APP_USR_TU_ACCESS_TOKEN
SITE_URL=https://tu-dominio.vercel.app
DEFAULT_CURRENCY=MXN
```

5. Despliega nuevamente.

El frontend llama a:

```text
/api/create-preference
```

La función crea la preferencia de pago y redirige al checkout de Mercado Pago.

## Cómo publicar en Vercel

- No requiere build.
- No requiere dependencias.
- `index.html` está en la raíz.
- Vercel detecta archivos estáticos y la función dentro de `/api`.

Pasos:

1. Descomprime el ZIP.
2. Sube todo a GitHub tal cual.
3. Conecta el repositorio en Vercel.
4. No pongas Build Command.
5. Output Directory vacío o raíz.
6. Agrega variables de entorno si activarás Mercado Pago.
7. Deploy.

## Pendientes importantes

- Reemplazar logos e imágenes temporales.
- Confirmar precios oficiales.
- Confirmar catálogo vigente.
- Definir sucursales y horarios.
- Definir políticas de entrega, cancelación y facturación.
- Validar documentos legales.
- Configurar Mercado Pago real.
- Revisar textos finales con la marca.

## Nota de diseño

La v3 evita mostrar textos de “placeholder” o “por confirmar” en la página pública para que se sienta como una marca real. Las advertencias y datos pendientes quedan en README, código y archivos internos.
