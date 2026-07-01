# Montparnasse Pastelería — v7 app premium

Versión tipo app con vistas internas: Inicio, Catálogo, Eventos, Más especialidades y Sucursales. La navegación superior cambia de vista sin convertir la experiencia en una landing larga.

## Contenido

- `index.html` — sitio principal estático.
- `styles.css` — identidad visual, responsive, vistas internas y componentes.
- `script.js` — catálogo editable, filtros por categoría, carrito, modales, WhatsApp y sucursales.
- `/assets/products` — imágenes del catálogo.
- `/assets/brand` — logotipo/wordmark.
- `/assets/placeholders` — apoyo visual para más especialidades.
- `aviso-privacidad.html` y `terminos.html` — textos base que deben revisarse legalmente.

## Cómo abrir

Abre `index.html` en tu navegador. No requiere build ni dependencias.

## Cómo editar catálogo

En `script.js`, edita el arreglo `PRODUCTS`:

- `name`: nombre visible.
- `category`: categoría.
- `section`: filtro interno (`pasteles`, `sugarfree`, `helados`, `regalos`, `panques`).
- `image`: archivo dentro de `/assets/products`.
- `priceLabel`: precio visible.
- `price`: número para carrito o `null` para cotización.
- `presentation`: presentación.
- `desc`: descripción para modal.

## Cómo cambiar WhatsApp

En `script.js`, reemplaza:

```js
const WHATSAPP_NUMBER = "525524994700";
```

## Datos por reemplazar antes de publicación final

| Elemento | Dato usado actualmente | Tipo | Dónde se edita | Recomendación |
|---|---|---|---|---|
| Teléfono | 55 2499 4700 | público encontrado | `script.js` | Confirmar número oficial de WhatsApp. |
| Precios | Desde $270, $420, $780 y “Cotizar” | público/supuesto | `script.js`, arreglo `PRODUCTS` | Confirmar precios oficiales por presentación y sucursal. |
| Catálogo | 27 productos principales | público/supuesto | `script.js` | Validar catálogo final y presentaciones. |
| Imágenes | Imágenes generadas por el usuario | visual editable | `/assets/products` | Reemplazar por fotos oficiales si se publica comercialmente. |
| Sucursales | Direcciones públicas encontradas | público por validar | `script.js`, arreglo `LOCATIONS` | Confirmar ubicaciones actuales antes de publicación comercial. |
| Legales | Textos base | base legal editable | `aviso-privacidad.html`, `terminos.html` | Validar con asesoría legal. |

## Publicación

Puedes subir el proyecto estático a GitHub Pages, Netlify o Vercel. El archivo `index.html` está en raíz.
