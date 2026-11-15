// Boutique locale qui remplace Commerce.js (chec.io).
// Le service Commerce.js a fermé : api.chec.io n'existe plus, donc le catalogue,
// le panier et le paiement ne pouvaient plus fonctionner. Ce module garde la même
// interface (commerce.products.list(), commerce.cart.add(), ...) pour que les
// composants n'aient presque pas à changer, mais tout se passe dans le navigateur :
// les produits sont définis ici et le panier est gardé dans le localStorage.

const img = (file) => ({ url: `${process.env.PUBLIC_URL}/assets/IMAGE/${encodeURIComponent(file)}` });

const money = (amount) => ({
  raw: amount,
  formatted: amount.toFixed(2),
  formatted_with_symbol: `$${amount.toFixed(2)}`,
});

const PRODUCTS = [
  { id: 'prod_dattes', name: 'Dattes Medjool (1 kg)', price: 14.99, image: img('fruit et legume.jpeg'), description: '<p>Dattes moelleuses importées, parfaites avec le thé.</p>' },
  { id: 'prod_grenades', name: 'Grenades (x3)', price: 6.99, image: img('fruit et legume.jpeg'), description: '<p>Grenades fraîches et juteuses.</p>' },
  { id: 'prod_labneh', name: 'Labneh (500 g)', price: 5.49, image: img('lait et oeuf.jpg'), description: '<p>Fromage frais crémeux, à servir avec huile d\'olive et zaatar.</p>' },
  { id: 'prod_halloumi', name: 'Halloumi (250 g)', price: 7.99, image: img('lait et oeuf.jpg'), description: '<p>Fromage à griller, idéal à la poêle ou au barbecue.</p>' },
  { id: 'prod_couscous', name: 'Couscous moyen (1 kg)', price: 3.99, image: img('pates.jpg'), description: '<p>Semoule de blé dur pour couscous traditionnel.</p>' },
  { id: 'prod_boulgour', name: 'Boulgour fin (900 g)', price: 4.49, image: img('pates.jpg'), description: '<p>Pour le taboulé et le kebbé.</p>' },
  { id: 'prod_merguez', name: 'Merguez halal (500 g)', price: 9.99, image: img('viande.jpeg'), description: '<p>Saucisses épicées d\'agneau et de bœuf.</p>' },
  { id: 'prod_agneau', name: 'Agneau haché halal (1 lb)', price: 11.49, image: img('viande.jpeg'), description: '<p>Agneau frais haché sur place.</p>' },
].map((p) => ({ ...p, price: money(p.price) }));

const STORAGE_KEY = 'lmo-cart';

const newCartId = () => `cart_${Date.now().toString(36)}`;

const loadItems = () => {
  try {
    const saved = JSON.parse(window.localStorage.getItem(STORAGE_KEY));
    if (saved && saved.id && Array.isArray(saved.items)) return saved;
  } catch (e) {
    // localStorage indisponible ou corrompu : on repart d'un panier vide.
  }
  return { id: newCartId(), items: [] };
};

let state = loadItems();

const save = () => {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    // Pas grave : le panier vivra seulement le temps de la page.
  }
};

const findProduct = (productId) => PRODUCTS.find((p) => p.id === productId);

// Construit un objet panier au format de Commerce.js.
const buildCart = () => {
  const line_items = state.items
    .map(({ lineId, productId, quantity }) => {
      const product = findProduct(productId);
      if (!product) return null;
      return {
        id: lineId,
        product_id: productId,
        name: product.name,
        quantity,
        image: product.image,
        price: product.price,
        line_total: money(product.price.raw * quantity),
      };
    })
    .filter(Boolean);

  const subtotal = line_items.reduce((sum, item) => sum + item.line_total.raw, 0);

  return {
    id: state.id,
    total_items: line_items.reduce((sum, item) => sum + item.quantity, 0),
    total_unique_items: line_items.length,
    line_items,
    subtotal: money(subtotal),
  };
};

const reply = () => Promise.resolve({ cart: buildCart() });

const SUBDIVISIONS = {
  CA: { QC: 'Québec', ON: 'Ontario', NB: 'Nouveau-Brunswick', NS: 'Nouvelle-Écosse', MB: 'Manitoba', AB: 'Alberta', BC: 'Colombie-Britannique' },
};

const SHIPPING_OPTIONS = [
  { id: 'ship_pickup', description: 'Cueillette en magasin', price: money(0) },
  { id: 'ship_local', description: 'Livraison locale (Gatineau / Ottawa)', price: money(7.5) },
];

export const commerce = {
  products: {
    list: () => Promise.resolve({ data: PRODUCTS }),
  },

  cart: {
    retrieve: () => Promise.resolve(buildCart()),

    add: (productId, quantity = 1) => {
      const existing = state.items.find((i) => i.productId === productId);
      if (existing) existing.quantity += quantity;
      else state.items.push({ lineId: `item_${productId}`, productId, quantity });
      save();
      return reply();
    },

    update: (lineItemId, { quantity }) => {
      if (quantity <= 0) return commerce.cart.remove(lineItemId);
      const item = state.items.find((i) => i.lineId === lineItemId);
      if (item) item.quantity = quantity;
      save();
      return reply();
    },

    remove: (lineItemId) => {
      state.items = state.items.filter((i) => i.lineId !== lineItemId);
      save();
      return reply();
    },

    empty: () => {
      state.items = [];
      save();
      return reply();
    },

    refresh: () => {
      state = { id: newCartId(), items: [] };
      save();
      return Promise.resolve(buildCart());
    },
  },

  checkout: {
    generateToken: (cartId) => {
      const cart = buildCart();
      if (cartId !== cart.id || !cart.line_items.length) return Promise.reject(new Error('Panier vide'));
      return Promise.resolve({ id: `chkt_${cart.id}`, live: { line_items: cart.line_items, subtotal: cart.subtotal } });
    },

    getShippingOptions: () => Promise.resolve(SHIPPING_OPTIONS),

    // Paiement simulé : aucune carte n'est débitée, on fabrique juste une commande.
    capture: (checkoutTokenId, order) => Promise.resolve({
      customer: order.customer,
      customer_reference: `LMO-${Date.now().toString(36).toUpperCase()}`,
    }),
  },

  services: {
    localeListShippingCountries: () => Promise.resolve({ countries: { CA: 'Canada' } }),
    localeListSubdivisions: (countryCode) => Promise.resolve({ subdivisions: SUBDIVISIONS[countryCode] || {} }),
  },
};
