# Montparnasse Pastelería — sitio web v4 visual

Demo funcional lista para Vercel con enfoque visual premium, catálogo por carruseles, imágenes reales/generadas para demo, carrito, WhatsApp y Mercado Pago preparado mediante Serverless Function.

## Qué contiene

- `index.html` en raíz, listo para abrir localmente.
- `styles.css` con diseño responsive, carruseles, cards premium y tratamiento visual para línea libre de azúcar.
- `script.js` con catálogo editable, carrito, recomendaciones, WhatsApp y flujo Mercado Pago.
- `/api/create-preference.js` para crear preferencias de Mercado Pago en Vercel.
- `aviso-privacidad.html`, `terminos.html`, `404.html`, `success.html`, `pending.html`, `failure.html`.
- `/assets/products` con 27 imágenes optimizadas en WebP.
- `/assets/brand` con wordmark editable en SVG.
- `/assets/placeholders` con imagen para “Más especialidades”.

## Información pública utilizada como base

- Montparnasse Pastelería se presenta como pastelería mexicana con trayectoria desde 1981.
- Oferta usada como base: pasteles, chocolates, gelatinas, helados, pastas secas, panqués y línea libre de azúcar.
- Mensaje de marca usado: “Endulzamos tu vida”.
- Contacto público usado como base: 55 2499 4700.
- La presencia digital y delivery se consideró como referencia para plantear un flujo realista de catálogo + carrito + WhatsApp.

Todo lo anterior debe validarse antes de publicación comercial final.

## Datos por reemplazar antes de publicación final

| Elemento | Dato usado actualmente | Tipo: público validado / supuesto / placeholder | Dónde se edita | Recomendación |
|---|---|---|---|---|
| WhatsApp | 525524994700 | público utilizado como base | `script.js`, constante `WHATSAPP_NUMBER` | Confirmar número final y país. |
| Precios | Desde $270, $420, $120, $250 y “Cotizar” | público/supuesto demo | `script.js`, arreglo `PRODUCTS` | Reemplazar por precios oficiales por sucursal/presentación. |
| Catálogo | 27 productos visuales + “Más especialidades” | supuesto editable | `script.js`, `PRODUCTS` y `MORE_SPECIALTIES` | Validar catálogo completo y disponibilidad. |
| Imágenes | Imágenes generadas para demo por el usuario | placeholder visual premium | `/assets/products` y campo `image` en `script.js` | Sustituir por fotos oficiales si se usará comercialmente. |
| Logo | Wordmark SVG editable | placeholder | `/assets/brand/montparnasse-wordmark.svg` | Sustituir por logo oficial en SVG/PNG. |
| Línea libre de azúcar | Fresas, Queso, Moka, 3 Leches, Gelatina, Galletas | supuesto / demo | `script.js`, productos con `sugar:true` | Confirmar cuáles son oficialmente libres de azúcar. |
| Sucursales | Consulta por WhatsApp, sin direcciones exactas | placeholder estratégico | `index.html`, sección contacto | Agregar sucursales oficiales si se confirman. |
| Horarios | No se muestran horarios fijos | pendiente | Sección contacto/FAQ | Agregar horarios oficiales por sucursal. |
| Entrega | Confirmación por WhatsApp | supuesto operativo | FAQ y carrito | Validar zonas, costos y condiciones. |
| Mercado Pago | API preparada, sin token | placeholder técnico | Vercel env `MP_ACCESS_TOKEN` | Activar con credenciales reales. |
| Aviso legal | Texto base editable | placeholder legal | `aviso-privacidad.html` | Validar con asesoría legal. |
| Términos | Texto base editable | placeholder legal | `terminos.html` | Validar con asesoría legal. |

## Cómo abrir localmente

Abre `index.html` en tu navegador. El sitio funciona de forma estática. Mercado Pago requiere Vercel o un entorno serverless para `/api/create-preference.js`.

## Cómo cambiar imágenes

1. Guarda la nueva imagen en `/assets/products`.
2. Recomendada: formato `.webp`, vertical 4:5, peso menor a 600 KB.
3. En `script.js`, busca el producto y cambia el campo `image`.

Ejemplo:

```js
image: "ganash.webp"
```

## Cómo editar catálogo

En `script.js`, modifica el arreglo `PRODUCTS`.

Campos clave:

```js
{
  id: "ganash",
  name: "Ganash",
  category: "Pasteles",
  section: "pasteles",
  image: "ganash.webp",
  sugar: false,
  priceLabel: "Desde $270",
  price: 270,
  presentation: "4 porciones",
  desc: "Descripción del producto"
}
```

## Cómo marcar un producto como libre de azúcar

En `script.js`, usa:

```js
sugar: true,
section: "sugarfree",
badge: "Libre de azúcar"
```

El sitio aplicará automáticamente el marco verde salvia y badge especial.

## Cómo conectar Mercado Pago en Vercel

1. Sube el proyecto a GitHub.
2. Conecta el repositorio en Vercel.
3. No uses build command.
4. Agrega estas variables de entorno:

```env
MP_ACCESS_TOKEN=APP_USR_xxxxxxxxx
SITE_URL=https://tu-dominio.vercel.app
```

La función está en:

```txt
/api/create-preference.js
```

## Pendientes recomendados

- Confirmar catálogo completo, precios, porciones y disponibilidad.
- Subir logo oficial.
- Validar textos legales.
- Activar Mercado Pago con token real.
- Agregar sucursales oficiales si se decide mostrarlas.
- Generar fotos para productos de “Más especialidades” o mantenerlos como consulta.
