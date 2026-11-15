# La Maison Orientale

Site d'épicerie en React (Create React App + Material-UI) : accueil FR/EN, catalogue, panier et paiement.

## Lancer en local

Double-cliquer sur `LANCER.bat`, ou :

```bash
npm install
npm start
```

Le site s'ouvre sur http://localhost:3000.

## Remis en état en 2026

- **Commerce.js (chec.io) a fermé** : `api.chec.io` n'existe plus. `src/lib/commerce.js` le remplace par
  une boutique locale qui garde la même interface : les produits sont définis dans ce fichier et le panier
  est gardé dans le `localStorage` du navigateur.
- **Paiement simulé** : Stripe passait par Commerce.js. Aucune carte n'est demandée ni débitée.
- `react-scripts` 3.4 → 5.0.1, pour que le site démarre avec les versions récentes de Node.
- Pages d'accueil : menu mobile réparé, liens internes sans rechargement de page, attributs JSX corrigés.
- `netlify.toml` : coquille `index.hmtl` → `index.html`.
