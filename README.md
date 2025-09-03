# CTI Muebles – Catálogo minimalista (Next.js 14 + Tailwind)

Catálogo simple con precios en ARS, estilo moderno/minimalista e integración con redes (WhatsApp, Facebook, X).

## Requisitos locales
- Node.js 18+
- npm o pnpm

## Correr local
```bash
npm install
npm run dev
# http://localhost:3000
```

## Deploy GRATIS

### Opción A – Vercel (recomendada)
1. Subí este repo a **GitHub**.
2. Entra a **https://vercel.com** → New Project → Import de tu repo.
3. Aceptá los defaults para Next.js → Deploy.
4. **Actualizá**: 
   - Dominio en `lib/utils.ts` (shareLinks).
   - Número de WhatsApp en `pages/index.tsx` y `pages/producto/[id].tsx`.
   - Reemplazá imágenes en `/public` por fotos reales.
5. Listo. Podés usar el dominio de Vercel o conectar uno propio.

### Opción B – Netlify
1. New site from Git → conectá tu repo.
2. Detecta Next.js; si pide, Build: `npm run build`, Publish: `.next` (o usar Next runtime de Netlify).
3. Deploy.

## Personalización
- Editá **`data/products.json`** para agregar/editar productos.
- Branding en `components/Header.tsx` / `components/Footer.tsx`.
- Ajustes de estilo en `styles/globals.css`.

## Notas de redes
- Instagram no ofrece “share” por URL; enlazamos tu perfil en header/footer.
- WhatsApp/Facebook/X ya configurados vía URL; OG tags en `_app.tsx`.

## Export estático (opcional)
```bash
# export estático si querés hostear en GitHub Pages o Netlify sin SSR
npx next export -o out
```
