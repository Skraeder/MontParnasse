// Montparnasse Pastelería — catálogo visual v4
// TODO: reemplazar catálogo, precios y disponibilidad con información oficial antes de publicación comercial.
// TODO: conectar Mercado Pago con credenciales reales desde Vercel Environment Variables.
// TODO: validar textos legales con asesoría correspondiente.

const WHATSAPP_NUMBER = "525524994700"; // TODO: confirmar número final de WhatsApp.
const ENABLE_MERCADOPAGO = true;
const SITE_CURRENCY = "MXN";

const PRODUCTS = [
  {
    "id": "ganash",
    "name": "Ganash",
    "category": "Pasteles",
    "section": "pasteles",
    "image": "ganash.webp",
    "sugar": false,
    "badge": "Favorito",
    "priceLabel": "Desde $270",
    "price": 270,
    "presentation": "4 porciones",
    "flavor": "chocolate",
    "people": [
      "1-4",
      "8-10"
    ],
    "occasions": [
      "cumpleanos",
      "regalo",
      "antojo"
    ],
    "desc": "Biscuit de chocolate con jarabe natural de chocolate, crema estilo Montparnasse y cobertura de ganash brillante."
  },
  {
    "id": "sf-fresas",
    "name": "Fresas con Crema Libre de Azúcar",
    "category": "Línea Libre de Azúcar",
    "section": "sugarfree",
    "image": "fresas-con-crema.webp",
    "sugar": true,
    "badge": "Libre de azúcar",
    "priceLabel": "Desde $270",
    "price": 270,
    "presentation": "4 porciones",
    "flavor": "frutal",
    "people": [
      "1-4",
      "8-10"
    ],
    "occasions": [
      "cumpleanos",
      "regalo",
      "libre"
    ],
    "desc": "Versión libre de azúcar con crema suave, fresas naturales y presentación premium para celebrar sin perder antojo."
  },
  {
    "id": "baileys-cake",
    "name": "Bailey’s",
    "category": "Pasteles",
    "section": "pasteles",
    "image": "baileys.webp",
    "sugar": false,
    "badge": "Especial",
    "priceLabel": "Desde $270",
    "price": 270,
    "presentation": "4 porciones",
    "flavor": "especial",
    "people": [
      "1-4",
      "8-10"
    ],
    "occasions": [
      "cumpleanos",
      "regalo"
    ],
    "desc": "Pastel cremoso con notas tipo Bailey’s, bizcocho vainilla-chocolate, crema Montparnasse y detalle de chocolate."
  },
  {
    "id": "pinon",
    "name": "Piñón",
    "category": "Pasteles",
    "section": "pasteles",
    "image": "pinon.webp",
    "sugar": false,
    "badge": "Clásico",
    "priceLabel": "Desde $270",
    "price": 270,
    "presentation": "4 porciones",
    "flavor": "especial",
    "people": [
      "1-4",
      "8-10"
    ],
    "occasions": [
      "cumpleanos",
      "regalo"
    ],
    "desc": "Pastel tradicional con crema suave, jarabe de tres leches con piñón y textura de nuez fina en la cubierta."
  },
  {
    "id": "sf-queso-chocolate",
    "name": "Queso con Chocolate Sin Azúcar",
    "category": "Línea Libre de Azúcar",
    "section": "sugarfree",
    "image": "queso-con-chocolate.webp",
    "sugar": true,
    "badge": "Libre de azúcar",
    "priceLabel": "Desde $270",
    "price": 270,
    "presentation": "4 porciones",
    "flavor": "chocolate",
    "people": [
      "1-4",
      "8-10"
    ],
    "occasions": [
      "cumpleanos",
      "regalo",
      "libre"
    ],
    "desc": "Pastel libre de azúcar con perfil de chocolate y relleno cremoso estilo queso delicatessen."
  },
  {
    "id": "sf-moka",
    "name": "Moka Libre de Azúcar",
    "category": "Línea Libre de Azúcar",
    "section": "sugarfree",
    "image": "moka.webp",
    "sugar": true,
    "badge": "Libre de azúcar",
    "priceLabel": "Desde $270",
    "price": 270,
    "presentation": "4 porciones",
    "flavor": "chocolate",
    "people": [
      "1-4",
      "8-10"
    ],
    "occasions": [
      "regalo",
      "antojo",
      "libre"
    ],
    "desc": "Versión libre de azúcar con notas moka, chocolate semiamargo y acabado cremoso elegante."
  },
  {
    "id": "mil-hojas",
    "name": "Mil Hojas de Fresa",
    "category": "Pasteles",
    "section": "pasteles",
    "image": "mil-hojas-de-fresa.webp",
    "sugar": false,
    "badge": "Premium",
    "priceLabel": "Desde $780",
    "price": 780,
    "presentation": "8–10 porciones",
    "flavor": "frutal",
    "people": [
      "8-10",
      "20+"
    ],
    "occasions": [
      "cumpleanos",
      "regalo",
      "evento"
    ],
    "desc": "Capas crujientes de hojaldre con crema pastelera y fresas naturales en una presentación refinada."
  },
  {
    "id": "alaska",
    "name": "Alaska",
    "category": "Pasteles",
    "section": "pasteles",
    "image": "alaska.webp",
    "sugar": false,
    "badge": "Cremoso",
    "priceLabel": "Desde $270",
    "price": 270,
    "presentation": "4 porciones",
    "flavor": "tres-leches",
    "people": [
      "1-4",
      "8-10"
    ],
    "occasions": [
      "cumpleanos",
      "regalo"
    ],
    "desc": "Pastel suave y cremoso con bizcocho de vainilla, jarabe de tres leches y relleno estilo queso delicatessen."
  },
  {
    "id": "selva-negra-cake",
    "name": "Selva Negra",
    "category": "Pasteles",
    "section": "pasteles",
    "image": "selva-negra.webp",
    "sugar": false,
    "badge": "Clásico",
    "priceLabel": "Desde $270",
    "price": 270,
    "presentation": "4 porciones",
    "flavor": "chocolate",
    "people": [
      "1-4",
      "8-10"
    ],
    "occasions": [
      "cumpleanos",
      "regalo"
    ],
    "desc": "Chocolate, crema y notas de cereza en una versión elegante del clásico Selva Negra."
  },
  {
    "id": "sf-tres-leches",
    "name": "3 Leches Libre de Azúcar",
    "category": "Línea Libre de Azúcar",
    "section": "sugarfree",
    "image": "tres-leches-tradicional.webp",
    "sugar": true,
    "badge": "Libre de azúcar",
    "priceLabel": "Desde $270",
    "price": 270,
    "presentation": "4 porciones",
    "flavor": "tres-leches",
    "people": [
      "1-4",
      "8-10"
    ],
    "occasions": [
      "cumpleanos",
      "regalo",
      "libre"
    ],
    "desc": "Versión libre de azúcar inspirada en el clásico tres leches, cremosa, suave y pensada para compartir."
  },
  {
    "id": "sf-gelatina-mosaico",
    "name": "Gelatina Mosaico Libre de Azúcar",
    "category": "Línea Libre de Azúcar",
    "section": "sugarfree",
    "image": "gelatina-mosaico.webp",
    "sugar": true,
    "badge": "Libre de azúcar",
    "priceLabel": "Desde $420",
    "price": 420,
    "presentation": "10 porciones",
    "flavor": "frutal",
    "people": [
      "8-10",
      "20+"
    ],
    "occasions": [
      "cumpleanos",
      "regalo",
      "libre"
    ],
    "desc": "Gelatina cremosa con mosaicos de color en una presentación fresca, limpia y libre de azúcar."
  },
  {
    "id": "sf-galletas",
    "name": "Galletas Artesanales Free",
    "category": "Línea Libre de Azúcar",
    "section": "sugarfree",
    "image": "galletas-surtidas.webp",
    "sugar": true,
    "badge": "Libre de azúcar",
    "priceLabel": "Desde $120",
    "price": 120,
    "presentation": "Caja surtida",
    "flavor": "especial",
    "people": [
      "1-4",
      "8-10"
    ],
    "occasions": [
      "regalo",
      "antojo",
      "libre"
    ],
    "desc": "Surtido de galletas artesanales libres de azúcar, ideales para regalar o acompañar café."
  },
  {
    "id": "teja-almendra",
    "name": "Teja de Almendra",
    "category": "Galletas y Chocolates",
    "section": "regalos",
    "image": "teja-de-almendra.webp",
    "sugar": false,
    "badge": "Regalo",
    "priceLabel": "Desde $250",
    "price": 250,
    "presentation": "200 g",
    "flavor": "especial",
    "people": [
      "1-4"
    ],
    "occasions": [
      "regalo",
      "antojo"
    ],
    "desc": "Tejas delgadas de almendra, crujientes y doradas, con una presentación elegante para detalle dulce."
  },
  {
    "id": "chocolates-mixtos",
    "name": "Chocolates Mixtos",
    "category": "Galletas y Chocolates",
    "section": "regalos",
    "image": "chocolates-mixtos.webp",
    "sugar": false,
    "badge": "Gift box",
    "priceLabel": "Cotizar",
    "price": null,
    "presentation": "Caja surtida",
    "flavor": "chocolate",
    "people": [
      "1-4",
      "8-10"
    ],
    "occasions": [
      "regalo",
      "evento"
    ],
    "desc": "Selección de chocolates y trufas con acabados premium, ideal para regalos y detalles especiales."
  },
  {
    "id": "coliseo-chocolate",
    "name": "Coliseo de Chocolate",
    "category": "Panqués",
    "section": "panques",
    "image": "coliseo-de-chocolate.webp",
    "sugar": false,
    "badge": "Para compartir",
    "priceLabel": "Cotizar",
    "price": null,
    "presentation": "Panqué",
    "flavor": "chocolate",
    "people": [
      "8-10"
    ],
    "occasions": [
      "regalo",
      "antojo"
    ],
    "desc": "Panqué de chocolate con miga húmeda, cubierta brillante y textura intensa para compartir."
  },
  {
    "id": "coliseo-naranja",
    "name": "Coliseo de Naranja",
    "category": "Panqués",
    "section": "panques",
    "image": "coliseo-de-naranja.webp",
    "sugar": false,
    "badge": "Para compartir",
    "priceLabel": "Cotizar",
    "price": null,
    "presentation": "Panqué",
    "flavor": "especial",
    "people": [
      "8-10"
    ],
    "occasions": [
      "regalo",
      "antojo"
    ],
    "desc": "Panqué de naranja con miga dorada, notas cítricas suaves y acabado artesanal."
  },
  {
    "id": "helado-chocolate-intenso",
    "name": "Chocolate Intenso",
    "category": "Helados",
    "section": "helados",
    "image": "helado-chocolate-intenso.webp",
    "sugar": false,
    "badge": "Helado",
    "priceLabel": "Cotizar",
    "price": null,
    "presentation": "Sencillo / doble",
    "flavor": "chocolate",
    "people": [
      "1-4"
    ],
    "occasions": [
      "antojo",
      "regalo"
    ],
    "desc": "Helado de chocolate profundo con textura cremosa y carácter indulgente."
  },
  {
    "id": "helado-selva-negra",
    "name": "Selva Negra Helado",
    "category": "Helados",
    "section": "helados",
    "image": "helado-selva-negra.webp",
    "sugar": false,
    "badge": "Helado",
    "priceLabel": "Cotizar",
    "price": null,
    "presentation": "Sencillo / doble",
    "flavor": "chocolate",
    "people": [
      "1-4"
    ],
    "occasions": [
      "antojo"
    ],
    "desc": "Helado inspirado en Selva Negra con chocolate, crema y notas sutiles de cereza."
  },
  {
    "id": "helado-baileys",
    "name": "Bailey’s Helado",
    "category": "Helados",
    "section": "helados",
    "image": "helado-baileys.webp",
    "sugar": false,
    "badge": "Helado",
    "priceLabel": "Cotizar",
    "price": null,
    "presentation": "Sencillo / doble",
    "flavor": "especial",
    "people": [
      "1-4"
    ],
    "occasions": [
      "antojo"
    ],
    "desc": "Helado cremoso con perfil tipo Bailey’s, sofisticado y elegante."
  },
  {
    "id": "helado-fresa-albahaca",
    "name": "Fresa con Albahaca",
    "category": "Helados",
    "section": "helados",
    "image": "helado-fresa-con-albahaca.webp",
    "sugar": false,
    "badge": "Gourmet",
    "priceLabel": "Cotizar",
    "price": null,
    "presentation": "Sencillo / doble",
    "flavor": "frutal",
    "people": [
      "1-4"
    ],
    "occasions": [
      "antojo"
    ],
    "desc": "Helado de fresa con un toque fresco de albahaca, ligero, moderno y gourmet."
  },
  {
    "id": "helado-limon-chia",
    "name": "Limón con Chía",
    "category": "Helados",
    "section": "helados",
    "image": "helado-limon-con-chia.webp",
    "sugar": false,
    "badge": "Fresco",
    "priceLabel": "Cotizar",
    "price": null,
    "presentation": "Sencillo / doble",
    "flavor": "frutal",
    "people": [
      "1-4"
    ],
    "occasions": [
      "antojo"
    ],
    "desc": "Helado fresco de limón con textura sutil de chía, limpio y refrescante."
  },
  {
    "id": "helado-mango-chamoy",
    "name": "Mango con Chamoy",
    "category": "Helados",
    "section": "helados",
    "image": "helado-mango-con-chamoy.webp",
    "sugar": false,
    "badge": "Especial",
    "priceLabel": "Cotizar",
    "price": null,
    "presentation": "Sencillo / doble",
    "flavor": "frutal",
    "people": [
      "1-4"
    ],
    "occasions": [
      "antojo"
    ],
    "desc": "Helado de mango con una nota de chamoy elegante, frutal y diferente."
  },
  {
    "id": "helado-monty",
    "name": "Monty",
    "category": "Helados",
    "section": "helados",
    "image": "helado-monty.webp",
    "sugar": false,
    "badge": "De la casa",
    "priceLabel": "Cotizar",
    "price": null,
    "presentation": "Sencillo / doble",
    "flavor": "especial",
    "people": [
      "1-4"
    ],
    "occasions": [
      "antojo"
    ],
    "desc": "Sabor de la casa con perfil cremoso, distintivo y memorable."
  },
  {
    "id": "helado-oreo",
    "name": "Oreo",
    "category": "Helados",
    "section": "helados",
    "image": "helado-oreo.webp",
    "sugar": false,
    "badge": "Helado",
    "priceLabel": "Cotizar",
    "price": null,
    "presentation": "Sencillo / doble",
    "flavor": "especial",
    "people": [
      "1-4"
    ],
    "occasions": [
      "antojo"
    ],
    "desc": "Helado cremoso con trozos de galleta integrados de forma equilibrada."
  },
  {
    "id": "helado-yogurt-miel",
    "name": "Yogurt con Miel",
    "category": "Helados",
    "section": "helados",
    "image": "helado-yogurt-con-miel.webp",
    "sugar": false,
    "badge": "Ligero",
    "priceLabel": "Cotizar",
    "price": null,
    "presentation": "Sencillo / doble",
    "flavor": "especial",
    "people": [
      "1-4"
    ],
    "occasions": [
      "antojo"
    ],
    "desc": "Helado cremoso de yogurt con notas suaves de miel, delicado y gourmet."
  },
  {
    "id": "helado-cherry-love",
    "name": "Cherry Love",
    "category": "Helados",
    "section": "helados",
    "image": "helado-cherry-love.webp",
    "sugar": false,
    "badge": "Especial",
    "priceLabel": "Cotizar",
    "price": null,
    "presentation": "Sencillo / doble",
    "flavor": "frutal",
    "people": [
      "1-4"
    ],
    "occasions": [
      "antojo",
      "regalo"
    ],
    "desc": "Helado con carácter de cereza, cremoso, elegante y visualmente especial."
  },
  {
    "id": "helado-pasion-invierno",
    "name": "Pasión de Invierno",
    "category": "Helados",
    "section": "helados",
    "image": "helado-pasion-de-invierno.webp",
    "sugar": false,
    "badge": "Temporada",
    "priceLabel": "Cotizar",
    "price": null,
    "presentation": "Sencillo / doble",
    "flavor": "especial",
    "people": [
      "1-4"
    ],
    "occasions": [
      "antojo",
      "regalo"
    ],
    "desc": "Sabor especial de temporada con perfil cremoso, cálido y sofisticado."
  }
];
const MORE_SPECIALTIES = [
  {
    "name": "Delicia de Fresa",
    "category": "Pasteles",
    "desc": "Pastel frutal y cremoso para cumpleaños, regalos y reuniones familiares."
  },
  {
    "name": "Monty Bunny",
    "category": "Pasteles",
    "desc": "Especialidad de celebración con personalidad visual y enfoque infantil-premium."
  },
  {
    "name": "Fiesta de Rompope",
    "category": "Pasteles",
    "desc": "Pastel especial con notas de rompope para celebraciones y temporada."
  },
  {
    "name": "Gelatina de Frutas",
    "category": "Gelatinas",
    "desc": "Gelatina fresca con frutas seleccionadas y presentación para compartir."
  },
  {
    "name": "Gelatina Halloween",
    "category": "Gelatinas de temporada",
    "desc": "Edición temporal para celebraciones temáticas y pedidos de temporada."
  },
  {
    "name": "Gelatina de Rompope",
    "category": "Gelatinas",
    "desc": "Gelatina cremosa con perfil clásico de rompope y acabado suave."
  },
  {
    "name": "Gelatina Tiramisú",
    "category": "Gelatinas",
    "desc": "Postre tipo gelatina con inspiración en tiramisú y acabado cremoso."
  },
  {
    "name": "Tartaleta de Fresa",
    "category": "Tartaletas",
    "desc": "Tartaleta con crema y fresa natural, ideal para antojos y regalos."
  },
  {
    "name": "Tartaleta de Almendras con Frutas",
    "category": "Tartaletas",
    "desc": "Base de almendra con frutas seleccionadas y acabado artesanal."
  },
  {
    "name": "Tartaleta de Nuez",
    "category": "Tartaletas",
    "desc": "Tartaleta con nuez y textura crujiente para compartir o regalar."
  },
  {
    "name": "Pan de Muerto Tradicional",
    "category": "Temporada",
    "desc": "Especialidad de temporada con presentación clásica y sabor de celebración."
  },
  {
    "name": "Pan de Muerto Bailey’s",
    "category": "Temporada",
    "desc": "Versión especial de temporada con perfil cremoso y distintivo."
  },
  {
    "name": "Bengala Montparnasse",
    "category": "Complementos",
    "desc": "Detalle para acompañar pasteles de cumpleaños y momentos de celebración."
  }
];

const SHOWCASE_COLLECTIONS = [
  {
    key: "favoritos",
    label: "Favoritos",
    eyebrow: "Montparnasse recomienda",
    title: "Favoritos para empezar.",
    desc: "Una selección principal para abrir antojo sin hacer la página demasiado larga.",
    hero: "ganash",
    ids: ["ganash", "sf-fresas", "mil-hojas", "helado-chocolate-intenso", "selva-negra-cake", "teja-almendra"]
  },
  {
    key: "pasteles",
    label: "Pasteles",
    eyebrow: "Celebraciones clásicas",
    title: "Pasteles con presencia premium.",
    desc: "Sabores clásicos y especiales para cumpleaños, regalos y momentos importantes.",
    hero: "mil-hojas",
    ids: PRODUCTS.filter(p => p.section === "pasteles").map(p => p.id)
  },
  {
    key: "sugarfree",
    label: "Libre de azúcar",
    eyebrow: "Línea especial",
    title: "Opciones fáciles de identificar.",
    desc: "El acento verde salvia ayuda a distinguir la línea libre de azúcar sin perder la estética premium.",
    hero: "sf-fresas",
    ids: PRODUCTS.filter(p => p.section === "sugarfree").map(p => p.id)
  },
  {
    key: "helados",
    label: "Helados",
    eyebrow: "Sabores de antojo",
    title: "Helados con más personalidad visual.",
    desc: "Sabores cremosos y de temporada para una sección más fresca, compacta y dinámica.",
    hero: "helado-chocolate-intenso",
    ids: PRODUCTS.filter(p => p.section === "helados").map(p => p.id)
  },
  {
    key: "regalos",
    label: "Regalos",
    eyebrow: "Detalles para regalar",
    title: "Regalos y complementos.",
    desc: "Opciones para detalle dulce, agradecimiento o un extra dentro de una celebración.",
    hero: "chocolates-mixtos",
    ids: PRODUCTS.filter(p => p.section === "regalos").map(p => p.id)
  },
  {
    key: "panques",
    label: "Panqués",
    eyebrow: "Para compartir",
    title: "Panqués artesanales.",
    desc: "Sabores cálidos y fáciles de regalar en un formato visual corto y elegante.",
    hero: "coliseo-chocolate",
    ids: PRODUCTS.filter(p => p.section === "panques").map(p => p.id)
  }
];

let cart = JSON.parse(localStorage.getItem("mp_cart_v4") || "[]");
let activeRecommendation = { occasion: "cumpleanos", people: "8-10", flavor: "todos" };
let activeShowcase = "favoritos";

function money(value) {
  return new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN', maximumFractionDigits: 0 }).format(value);
}

function asset(path) { return `assets/products/${path}`; }
function qs(sel, parent=document) { return parent.querySelector(sel); }
function qsa(sel, parent=document) { return [...parent.querySelectorAll(sel)]; }

function productCard(product, compact=false) {
  const actionLabel = product.price ? "Agregar" : "Consultar";
  const badge = product.sugar ? "Libre de azúcar" : product.badge;
  return `
    <article class="product-card ${product.sugar ? 'is-sugarfree' : ''} ${compact ? 'compact' : ''}" data-product-card="${product.id}">
      <div class="product-image-wrap">
        <img src="${asset(product.image)}" alt="${product.name} Montparnasse" loading="lazy">
        <span class="product-badge">${badge}</span>
      </div>
      <div class="product-info">
        <div class="product-meta"><span>${product.category}</span><span>${product.priceLabel}</span></div>
        <h3>${product.name}</h3>
        <p>${product.desc}</p>
        <div class="product-chips"><span>${product.presentation}</span><span>${product.flavor}</span></div>
        <div class="product-actions">
          <button class="btn btn-ghost" type="button" onclick="openProduct('${product.id}')">Ver detalles</button>
          <button class="btn btn-primary" type="button" onclick="${product.price ? `addToCart('${product.id}')` : `consultProduct('${product.id}')`}">${actionLabel}</button>
        </div>
      </div>
    </article>`;
}

function getShowcaseCollection(key = activeShowcase) {
  return SHOWCASE_COLLECTIONS.find(collection => collection.key === key) || SHOWCASE_COLLECTIONS[0];
}

function renderHeroProducts() {
  const collection = getShowcaseCollection();
  const product = PRODUCTS.find(item => item.id === collection.hero) || PRODUCTS.find(item => item.id === collection.ids[0]);
  const hero = qs('#heroProducts');
  const note = qs('#heroFloatingNote');
  if (!hero || !product || !note) return;
  hero.innerHTML = `
    <article class="hero-stage-card ${product.sugar ? 'is-sugarfree' : ''}">
      <div class="hero-stage-media"><img src="${asset(product.image)}" alt="${product.name} Montparnasse"></div>
      <div class="hero-stage-labels"><span>${collection.label}</span><span>${product.priceLabel}</span></div>
    </article>`;
  note.innerHTML = `
    <span class="hero-note-kicker">${collection.eyebrow}</span>
    <strong>${product.name}</strong>
    <span>${product.desc}</span>
    <div class="hero-note-tags"><span>${product.presentation}</span><span>${product.flavor}</span></div>
    <button class="text-link" type="button" onclick="scrollToSection('catalogo')">Ver categoría</button>`;
}

function renderCategoryTabs() {
  const tabs = qs('#categoryTabs');
  if (!tabs) return;
  tabs.innerHTML = SHOWCASE_COLLECTIONS.map(collection => `
    <button class="category-tab ${collection.key === activeShowcase ? 'active' : ''}" type="button" onclick="setActiveShowcase('${collection.key}')">${collection.label}</button>
  `).join('');
}

function renderCategoryShowcase() {
  const collection = getShowcaseCollection();
  const copy = qs('#catalogStageCopy');
  const showcase = qs('#categoryShowcase');
  if (!copy || !showcase) return;
  copy.innerHTML = `
    <span class="eyebrow">${collection.eyebrow}</span>
    <h2>${collection.title}</h2>
    <p>${collection.desc}</p>`;
  const items = collection.ids
    .map(id => PRODUCTS.find(product => product.id === id))
    .filter(Boolean);
  showcase.innerHTML = items.map(product => productCard(product, true)).join('');
}

function setActiveShowcase(key, skipAnimation = false) {
  activeShowcase = key;
  renderCategoryTabs();
  const stage = qs('#catalogStage');
  const hero = qs('#heroVisual');
  if (!skipAnimation) {
    stage?.classList.add('is-changing');
    hero?.classList.add('is-changing');
  }
  window.setTimeout(() => {
    renderCategoryShowcase();
    renderHeroProducts();
    requestAnimationFrame(() => {
      stage?.classList.remove('is-changing');
      hero?.classList.remove('is-changing');
    });
  }, skipAnimation ? 0 : 170);
}

function scrollTrack(id, dir) {
  const el = qs(`#${id}`);
  if (!el) return;
  el.scrollBy({ left: dir * Math.min(920, el.clientWidth * 0.85), behavior: 'smooth' });
}

function renderMoreSpecialties() {
  const groups = MORE_SPECIALTIES.reduce((acc, item) => {
    acc[item.category] ||= [];
    acc[item.category].push(item);
    return acc;
  }, {});
  qs('#moreSpecialtiesGrid').innerHTML = Object.entries(groups).map(([category, items]) => `
    <div class="specialty-group">
      <h3>${category}</h3>
      <div class="specialty-list">
        ${items.map(item => `<article class="specialty-card">
          <div class="specialty-icon"><img src="assets/placeholders/mas-especialidades.svg" alt="${item.name}"></div>
          <div><span>Más especialidades</span><h4>${item.name}</h4><p>${item.desc}</p></div>
          <button class="text-link" type="button" onclick="consultSpecialty('${item.name}')">Consultar disponibilidad</button>
        </article>`).join('')}
      </div>
    </div>
  `).join('');
}

function setFinder(key, value) {
  activeRecommendation[key] = value;
  qsa(`[data-finder="${key}"]`).forEach(btn => btn.classList.toggle('active', btn.dataset.value === value));
  renderRecommendations();
}

function renderRecommendations() {
  const { occasion, people, flavor } = activeRecommendation;
  const container = qs('#recommendationResults');
  const intro = qs('#recommendationIntro');
  if (people === '40+' || occasion === 'evento') {
    intro.innerHTML = `<strong>Recomendación para celebración grande:</strong> para 40+ personas conviene cotizar mesa dulce, combos de pasteles y logística por fecha.`;
    container.innerHTML = eventCards();
    return;
  }

  let filtered = PRODUCTS.filter(p => p.occasions.includes(occasion) || (occasion === 'cumpleanos' && p.occasions.includes('regalo')));
  filtered = filtered.filter(p => p.people.includes(people) || (people === '20+' && p.people.includes('8-10')));
  if (flavor !== 'todos') filtered = filtered.filter(p => p.flavor === flavor);
  if (occasion === 'libre') filtered = PRODUCTS.filter(p => p.sugar);

  if (filtered.length < 3) {
    const backup = occasion === 'libre' ? PRODUCTS.filter(p => p.sugar) : PRODUCTS.filter(p => p.price || p.section === 'helados').slice(0,6);
    filtered = [...new Map([...filtered, ...backup].map(p => [p.id, p])).values()];
  }
  filtered = filtered.slice(0,4);
  intro.innerHTML = `<strong>Recomendación Montparnasse:</strong> opciones alineadas a tu ocasión, tamaño y perfil de sabor.`;
  container.innerHTML = filtered.map(p => productCard(p, true)).join('');
}

function eventCards() {
  const cards = [
    { title:'Mesa dulce para evento', desc:'Pasteles, gelatina, galletas y detalles dulces para armar una propuesta según número de invitados.', cta:'Cotizar evento' },
    { title:'Cumpleaños grande', desc:'Combina pasteles de 8–10 porciones, gelatina y complementos para una celebración familiar o social.', cta:'Cotizar cumpleaños' },
    { title:'Regalos corporativos', desc:'Chocolates, galletas, tejas y panqués en una selección más cuidada para detalle o agradecimiento.', cta:'Consultar regalos' },
  ];
  return cards.map(c => `<article class="event-reco-card">
    <span>40+ personas</span><h3>${c.title}</h3><p>${c.desc}</p><button class="btn btn-primary" onclick="scrollToSection('eventos')">${c.cta}</button>
  </article>`).join('');
}

function openProduct(id) {
  const product = PRODUCTS.find(p => p.id === id);
  const modal = qs('#productModal');
  qs('#modalBody').innerHTML = `<div class="modal-grid ${product.sugar ? 'is-sugarfree' : ''}">
    <div class="modal-image"><img src="${asset(product.image)}" alt="${product.name}"></div>
    <div class="modal-copy">
      <span class="eyebrow">${product.category}</span>
      <h2>${product.name}</h2>
      <p>${product.desc}</p>
      <div class="detail-list">
        <div><strong>Presentación</strong><span>${product.presentation}</span></div>
        <div><strong>Precio</strong><span>${product.priceLabel}</span></div>
        <div><strong>Perfil</strong><span>${product.flavor}</span></div>
        <div><strong>Disponibilidad</strong><span>Se confirma por fecha y sucursal</span></div>
      </div>
      <div class="modal-actions">
        ${product.price ? `<button class="btn btn-primary" onclick="addToCart('${product.id}'); closeProduct();">Agregar al pedido</button>` : `<button class="btn btn-primary" onclick="consultProduct('${product.id}')">Consultar por WhatsApp</button>`}
        <button class="btn btn-ghost" onclick="closeProduct()">Seguir viendo</button>
      </div>
    </div>
  </div>`;
  modal.showModal();
}
function closeProduct() { qs('#productModal').close(); }
function openAtelier() { qs('#atelierModal')?.showModal(); }
function closeAtelier() { qs('#atelierModal')?.close(); }

function addToCart(id) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product.price) return consultProduct(id);
  const existing = cart.find(item => item.id === id);
  if (existing) existing.qty += 1; else cart.push({ id, qty: 1 });
  saveCart();
  openCart();
}
function removeFromCart(id) { cart = cart.filter(item => item.id !== id); saveCart(); }
function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(id); else saveCart();
}
function saveCart() {
  localStorage.setItem("mp_cart_v4", JSON.stringify(cart));
  renderCart();
}
function cartDetails() {
  return cart.map(item => { const p = PRODUCTS.find(x => x.id === item.id); return {...p, qty:item.qty, subtotal:(p.price||0)*item.qty}; });
}
function renderCart() {
  const details = cartDetails();
  const count = details.reduce((a,b)=>a+b.qty,0);
  const total = details.reduce((a,b)=>a+b.subtotal,0);
  qsa('.cart-count').forEach(el => el.textContent = count);
  qs('#cartItems').innerHTML = details.length ? details.map(p => `<div class="cart-line">
    <img src="${asset(p.image)}" alt="${p.name}">
    <div><h4>${p.name}</h4><p>${p.presentation} · ${money(p.price)}</p><div class="qty"><button onclick="changeQty('${p.id}',-1)">−</button><span>${p.qty}</span><button onclick="changeQty('${p.id}',1)">+</button></div></div>
    <strong>${money(p.subtotal)}</strong>
  </div>`).join('') : `<div class="empty-cart"><p>Tu selección está vacía.</p><button class="btn btn-primary" onclick="closeCart(); scrollToSection('catalogo')">Ver catálogo</button></div>`;
  qs('#cartTotal').textContent = money(total);
  qs('#mpButton').disabled = !details.length || details.some(p => !p.price);
}
function openCart() { qs('#cartDrawer').classList.add('open'); qs('#backdrop').classList.add('show'); renderCart(); }
function closeCart() { qs('#cartDrawer').classList.remove('open'); qs('#backdrop').classList.remove('show'); }

function whatsappText(kind='pedido') {
  const details = cartDetails();
  if (!details.length) return 'Hola, quiero información sobre Montparnasse Pastelería.';
  const lines = details.map(p => `• ${p.qty} x ${p.name} (${p.presentation}) — ${money(p.subtotal)}`);
  const total = details.reduce((a,b)=>a+b.subtotal,0);
  return `Hola, quiero finalizar mi pedido Montparnasse:

${lines.join('\n')}

Total estimado: ${money(total)}

Fecha deseada:
Entrega o recolección:
Zona / sucursal:
Comentarios:

Me ayudan a confirmar disponibilidad, cobertura, total final y método de pago.`;
}
function openWhatsApp(text) { window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank'); }
function checkoutWhatsApp() { openWhatsApp(whatsappText()); }
function consultProduct(id) {
  const p = PRODUCTS.find(x => x.id === id);
  openWhatsApp(`Hola, quiero consultar disponibilidad de ${p.name}.

Presentación: ${p.presentation}
Categoría: ${p.category}

Me pueden ayudar con precio, disponibilidad, sucursal y forma de entrega.`);
}
function consultSpecialty(name) {
  openWhatsApp(`Hola, quiero consultar si tienen disponible o pueden cotizar esta especialidad: ${name}.

Me pueden ayudar con presentaciones, precio y disponibilidad.`);
}

async function checkoutMercadoPago() {
  const items = cartDetails().filter(p => p.price).map(p => ({ title:p.name, quantity:p.qty, unit_price:p.price, currency_id:SITE_CURRENCY }));
  if (!items.length) return;
  try {
    qs('#mpButton').textContent = 'Creando pago...';
    const res = await fetch('/api/create-preference', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({ items }) });
    const data = await res.json();
    if (!res.ok || !data.init_point) throw new Error(data.error || 'No se pudo crear la preferencia');
    window.location.href = data.init_point;
  } catch (err) {
    alert('Mercado Pago todavía no está activado en esta demo. Puedes finalizar por WhatsApp o configurar MP_ACCESS_TOKEN en Vercel.');
  } finally {
    qs('#mpButton').textContent = 'Pagar con Mercado Pago';
  }
}

function scrollToSection(id) { document.getElementById(id)?.scrollIntoView({behavior:'smooth', block:'start'}); }

function setupFinder() {
  qsa('[data-finder]').forEach(btn => btn.addEventListener('click', () => setFinder(btn.dataset.finder, btn.dataset.value)));
  renderRecommendations();
}
function setupForms() {
  qs('#eventForm').addEventListener('submit', e => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const text = `Hola, quiero cotizar un evento con Montparnasse.

Tipo de evento: ${data.evento}
Fecha: ${data.fecha}
Personas: ${data.personas}
Producto deseado: ${data.producto}
Zona: ${data.zona}
Comentarios: ${data.comentarios || 'Sin comentarios adicionales'}

Me pueden ayudar con disponibilidad, sugerencias y cotización.`;
    openWhatsApp(text);
    qs('#eventSuccess').classList.add('show');
  });
  qs('#contactForm').addEventListener('submit', e => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    openWhatsApp(`Hola, soy ${data.nombre}.
Teléfono: ${data.telefono}
Motivo: ${data.motivo}
Mensaje: ${data.mensaje}`);
  });
}
function setupNav() {
  qs('#menuToggle').addEventListener('click', () => qs('#siteNav').classList.toggle('open'));
  qsa('[data-scroll]').forEach(btn => btn.addEventListener('click', () => {
    if (btn.dataset.category) setActiveShowcase(btn.dataset.category);
    scrollToSection(btn.dataset.scroll);
  }));
  qs('#openCart').addEventListener('click', openCart);
  qs('#closeCart').addEventListener('click', closeCart);
  qs('#backdrop').addEventListener('click', closeCart);
  qs('#whatsappCheckout').addEventListener('click', checkoutWhatsApp);
  qs('#mpButton').addEventListener('click', checkoutMercadoPago);
}

document.addEventListener('DOMContentLoaded', () => {
  renderCategoryTabs();
  setActiveShowcase(activeShowcase, true);
  renderMoreSpecialties();
  setupForms();
  setupNav();
  renderCart();
});
