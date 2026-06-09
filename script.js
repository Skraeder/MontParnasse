/*
  Montparnasse Pastelería — Demo funcional v2
  Código sin dependencias, listo para Vercel.
  TODO: reemplazar con datos oficiales antes de publicación comercial final.
*/

const WHATSAPP_NUMBER = "525524994700"; // TODO: reemplazar con WhatsApp oficial confirmado.

// TODO: reemplazar con catálogo oficial.
// Este catálogo es editable y usa placeholders profesionales para que la demo se vea completa.
const PRODUCTS = [
  {
    id: "pastel-celebracion",
    name: "Pastel de celebración",
    category: "pasteles",
    tag: "Cumpleaños",
    priceLabel: "Precio por confirmar", // PLACEHOLDER: precio de ejemplo / dato pendiente.
    image: "assets/products/producto-pastel-celebracion.svg", // PLACEHOLDER: imagen temporal.
    description: "Pastel de ejemplo para cumpleaños, reuniones familiares y regalos. Reemplazar por producto oficial, sabor, tamaño y porciones.",
    meta: ["Sujeto a disponibilidad por sucursal y fecha", "Porciones por confirmar", "Ideal para celebraciones"]
  },
  {
    id: "pastel-chocolate",
    name: "Pastel de chocolate",
    category: "pasteles",
    tag: "Pasteles",
    priceLabel: "Desde $___",
    image: "assets/products/producto-chocolate.svg", // PLACEHOLDER: imagen temporal.
    description: "Producto de ejemplo basado en una categoría típica de pastelería. Confirmar nombre oficial, receta, precio y disponibilidad.",
    meta: ["Precio oficial pendiente", "Tamaños por confirmar", "Disponible según sucursal"]
  },
  {
    id: "gelatina-especial",
    name: "Gelatina especial",
    category: "gelatinas",
    tag: "Gelatinas",
    priceLabel: "Precio por confirmar",
    image: "assets/products/producto-gelatina.svg", // PLACEHOLDER: imagen temporal.
    description: "Gelatina de ejemplo para mostrar la categoría. Reemplazar por foto, nombre y descripción oficial.",
    meta: ["Categoría pública mencionada", "Sabores por confirmar", "Pedido sujeto a disponibilidad"]
  },
  {
    id: "postres-surtidos",
    name: "Postres surtidos",
    category: "postres",
    tag: "Postres",
    priceLabel: "Precio por confirmar",
    image: "assets/products/producto-postres.svg", // PLACEHOLDER: imagen temporal.
    description: "Producto de ejemplo para petit fours, bocadillos, pastas secas u opciones individuales. Editar con catálogo oficial.",
    meta: ["Catálogo editable", "Presentaciones por confirmar", "Ideal para regalos o reuniones"]
  },
  {
    id: "libre-azucar",
    name: "Opción libre de azúcar",
    category: "libre-azucar",
    tag: "Línea especial",
    priceLabel: "Precio por confirmar",
    image: "assets/products/producto-libre-azucar.svg", // PLACEHOLDER: imagen temporal.
    description: "Sección estratégica para la línea libre de azúcar mencionada en información pública. Confirmar catálogo, ingredientes y disponibilidad.",
    meta: ["Ingredientes por confirmar", "No sustituye recomendación médica", "Disponibilidad por sucursal"]
  },
  {
    id: "pastel-evento",
    name: "Pastel para evento",
    category: "eventos",
    tag: "Cotización",
    priceLabel: "Cotización personalizada",
    image: "assets/products/producto-evento.svg", // PLACEHOLDER: imagen temporal.
    description: "Opción de ejemplo para bodas, XV años, empresas o cumpleaños grandes. El precio final depende de fecha, personas y diseño.",
    meta: ["Requiere cotización", "Número de personas por confirmar", "Diseño y fecha sujetos a disponibilidad"]
  },
  {
    id: "chocolates-surtidos",
    name: "Chocolates surtidos",
    category: "postres",
    tag: "Chocolates",
    priceLabel: "Precio por confirmar",
    image: "assets/products/producto-chocolates.svg", // PLACEHOLDER: imagen temporal.
    description: "Producto de ejemplo basado en la categoría chocolates. Confirmar empaque, presentación y disponibilidad oficial.",
    meta: ["Presentaciones por confirmar", "Ideal para detalle o regalo", "Sujeto a inventario"]
  },
  {
    id: "pastas-secas",
    name: "Pastas secas",
    category: "postres",
    tag: "Pastas secas",
    priceLabel: "Precio por confirmar",
    image: "assets/products/producto-pastas-secas.svg", // PLACEHOLDER: imagen temporal.
    description: "Categoría mencionada en información pública. Este producto es placeholder hasta cargar el catálogo oficial.",
    meta: ["Categoría pública mencionada", "Gramaje por confirmar", "Precio oficial pendiente"]
  }
];

const state = {
  cart: [],
  filter: "todos",
  search: "",
  selectedProduct: null
};

const productGrid = document.querySelector("#product-grid");
const cartDrawer = document.querySelector("#cart-drawer");
const cartItems = document.querySelector("#cart-items");
const cartEmpty = document.querySelector("#cart-empty");
const searchInput = document.querySelector("#search-products");
const filterButtons = document.querySelectorAll(".filter-btn");
const modal = document.querySelector("#product-modal");
const modalImage = document.querySelector("#modal-image");
const modalTitle = document.querySelector("#modal-title");
const modalTag = document.querySelector("#modal-tag");
const modalDescription = document.querySelector("#modal-description");
const modalMeta = document.querySelector("#modal-meta");
const modalPrice = document.querySelector("#modal-price");
const modalAdd = document.querySelector("#modal-add");

function formatCategory(category) {
  const labels = {
    "pasteles": "Pasteles",
    "gelatinas": "Gelatinas",
    "postres": "Postres",
    "libre-azucar": "Libre de azúcar",
    "eventos": "Eventos"
  };
  return labels[category] || category;
}

function getFilteredProducts() {
  return PRODUCTS.filter(product => {
    const matchesFilter = state.filter === "todos" || product.category === state.filter;
    const query = state.search.trim().toLowerCase();
    const matchesSearch = !query || [product.name, product.category, product.tag, product.description]
      .join(" ")
      .toLowerCase()
      .includes(query);
    return matchesFilter && matchesSearch;
  });
}

function renderProducts() {
  const products = getFilteredProducts();
  productGrid.innerHTML = "";

  if (!products.length) {
    productGrid.innerHTML = `<div class="location-card"><h3>Sin resultados</h3><p>Intenta con otra categoría o palabra clave.</p></div>`;
    return;
  }

  products.forEach(product => {
    const card = document.createElement("article");
    card.className = "product-card reveal is-visible";
    card.innerHTML = `
      <div class="product-card__image">
        <img src="${product.image}" alt="${product.name} - imagen temporal editable" loading="lazy">
      </div>
      <div class="product-card__body">
        <div class="product-card__top">
          <span class="tag">${product.tag}</span>
          <span class="price">${product.priceLabel}</span>
        </div>
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <small>Sujeto a disponibilidad por sucursal y fecha.</small>
        <div class="product-card__actions">
          <button class="btn btn--primary" type="button" data-add-product="${product.id}">Agregar al pedido</button>
          <button class="text-button" type="button" data-view-product="${product.id}">Ver detalles</button>
        </div>
      </div>
    `;
    productGrid.appendChild(card);
  });
}

function addToCart(productId) {
  const product = PRODUCTS.find(item => item.id === productId);
  if (!product) return;

  const existing = state.cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    state.cart.push({ ...product, quantity: 1 });
  }

  renderCart();
  openCart();
}

function removeFromCart(productId) {
  state.cart = state.cart.filter(item => item.id !== productId);
  renderCart();
}

function updateQuantity(productId, direction) {
  const item = state.cart.find(product => product.id === productId);
  if (!item) return;
  item.quantity += direction;
  if (item.quantity <= 0) removeFromCart(productId);
  renderCart();
}

function getCartCount() {
  return state.cart.reduce((total, item) => total + item.quantity, 0);
}

function renderCart() {
  const count = getCartCount();
  document.querySelectorAll("[data-cart-count]").forEach(el => { el.textContent = count; });
  cartItems.innerHTML = "";
  cartEmpty.style.display = state.cart.length ? "none" : "block";

  state.cart.forEach(item => {
    const row = document.createElement("article");
    row.className = "cart-item";
    row.innerHTML = `
      <img src="${item.image}" alt="${item.name} - imagen temporal">
      <div class="cart-item__body">
        <div class="cart-item__top">
          <h3>${item.name}</h3>
          <button class="text-button" type="button" data-remove-product="${item.id}">Quitar</button>
        </div>
        <small>${item.priceLabel} · ${formatCategory(item.category)}</small>
        <div class="quantity" aria-label="Cantidad">
          <button type="button" data-qty="-1" data-product="${item.id}" aria-label="Restar">−</button>
          <strong>${item.quantity}</strong>
          <button type="button" data-qty="1" data-product="${item.id}" aria-label="Sumar">+</button>
        </div>
      </div>
    `;
    cartItems.appendChild(row);
  });
}

function openCart() {
  cartDrawer.classList.add("is-open");
  cartDrawer.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
}

function closeCart() {
  cartDrawer.classList.remove("is-open");
  cartDrawer.setAttribute("aria-hidden", "true");
  document.body.classList.remove("no-scroll");
}

function openModal(productId) {
  const product = PRODUCTS.find(item => item.id === productId);
  if (!product) return;
  state.selectedProduct = product;
  modalImage.src = product.image;
  modalImage.alt = `${product.name} - imagen temporal editable`;
  modalTitle.textContent = product.name;
  modalTag.textContent = product.tag;
  modalDescription.textContent = product.description;
  modalPrice.textContent = product.priceLabel;
  modalMeta.innerHTML = product.meta.map(item => `<li>${item}</li>`).join("");
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
}

function closeModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("no-scroll");
}

function buildCartWhatsAppMessage(formData) {
  const items = state.cart.map(item => `- ${item.quantity} x ${item.name} (${item.priceLabel})`).join("%0A");
  return [
    "Hola%2C%20quiero%20solicitar%20un%20pedido%20desde%20la%20p%C3%A1gina%20web%20de%20Montparnasse.",
    "",
    "Resumen%20del%20pedido%3A",
    items || "- Sin productos agregados",
    "",
    `Motivo%3A%20${encodeURIComponent(formData.get("intent"))}`,
    `Fecha%20tentativa%3A%20${encodeURIComponent(formData.get("date"))}`,
    `Entrega%20o%20recolecci%C3%B3n%3A%20${encodeURIComponent(formData.get("delivery"))}`,
    `Zona%20o%20sucursal%3A%20${encodeURIComponent(formData.get("zone"))}`,
    "",
    "Quedo%20atento%2Fa%20para%20confirmar%20disponibilidad%2C%20cobertura%2C%20total%20final%20y%20m%C3%A9todo%20de%20pago."
  ].join("%0A");
}

function buildQuoteWhatsAppMessage(formData) {
  return [
    "Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20para%20evento%20con%20Montparnasse.",
    "",
    `Tipo%20de%20evento%3A%20${encodeURIComponent(formData.get("eventType"))}`,
    `Fecha%3A%20${encodeURIComponent(formData.get("eventDate"))}`,
    `N%C3%BAmero%20de%20personas%3A%20${encodeURIComponent(formData.get("people"))}`,
    `Producto%20deseado%3A%20${encodeURIComponent(formData.get("desiredProduct"))}`,
    `Zona%3A%20${encodeURIComponent(formData.get("zone"))}`,
    `Comentarios%3A%20${encodeURIComponent(formData.get("comments") || "Sin comentarios adicionales")}`,
    "",
    "Quedo%20atento%2Fa%20para%20confirmar%20disponibilidad%20y%20siguiente%20paso."
  ].join("%0A");
}

function openWhatsApp(message) {
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank", "noopener");
}

function setupEventListeners() {
  document.addEventListener("click", (event) => {
    const addButton = event.target.closest("[data-add-product]");
    if (addButton) addToCart(addButton.dataset.addProduct);

    const quickAdd = event.target.closest("[data-quick-add]");
    if (quickAdd) addToCart(quickAdd.dataset.quickAdd);

    const viewButton = event.target.closest("[data-view-product]");
    if (viewButton) openModal(viewButton.dataset.viewProduct);

    const removeButton = event.target.closest("[data-remove-product]");
    if (removeButton) removeFromCart(removeButton.dataset.removeProduct);

    const qtyButton = event.target.closest("[data-qty]");
    if (qtyButton) updateQuantity(qtyButton.dataset.product, Number(qtyButton.dataset.qty));

    if (event.target.closest("[data-open-cart]")) openCart();
    if (event.target.closest("[data-close-cart]")) closeCart();
    if (event.target.closest("[data-close-modal]")) closeModal();

    const filterLink = event.target.closest("[data-filter-link]");
    if (filterLink) {
      state.filter = filterLink.dataset.filterLink;
      filterButtons.forEach(button => button.classList.toggle("is-active", button.dataset.filter === state.filter));
      renderProducts();
    }
  });

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      state.filter = button.dataset.filter;
      filterButtons.forEach(item => item.classList.remove("is-active"));
      button.classList.add("is-active");
      renderProducts();
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", (event) => {
      state.search = event.target.value;
      renderProducts();
    });
  }

  modalAdd.addEventListener("click", () => {
    if (state.selectedProduct) {
      addToCart(state.selectedProduct.id);
      closeModal();
    }
  });

  document.querySelector("#cart-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!state.cart.length) {
      alert("Agrega al menos un producto antes de confirmar por WhatsApp.");
      return;
    }
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    openWhatsApp(buildCartWhatsAppMessage(new FormData(form)));
  });

  document.querySelector("#quote-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const message = document.querySelector("[data-quote-message]");
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    message.textContent = "Abriendo WhatsApp con tu solicitud de cotización.";
    openWhatsApp(buildQuoteWhatsAppMessage(new FormData(form)));
  });

  document.querySelector("#contact-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const message = document.querySelector("[data-contact-message]");
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    message.textContent = "Gracias. Recibimos tu solicitud en esta demo. Para producción, conecta este formulario a Formspree, Netlify Forms o backend propio.";
    form.reset();
  });

  document.querySelectorAll(".faq-item button").forEach(button => {
    button.addEventListener("click", () => {
      button.closest(".faq-item").classList.toggle("is-open");
    });
  });

  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeCart();
      closeModal();
    }
  });
}

function setupRevealAnimations() {
  const elements = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    elements.forEach(el => el.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  elements.forEach(el => observer.observe(el));
}

function init() {
  document.querySelector("#year").textContent = new Date().getFullYear();
  renderProducts();
  renderCart();
  setupEventListeners();
  setupRevealAnimations();
}

init();
