# OlympeAI — Site vitrine

Site vitrine one-page pour OlympeAI, assistant IA pour professionnels (avocats, experts-comptables, artisans). Build 100% statique, sans backend.

## Stack

- Next.js 14 (`output: 'export'`)
- Tailwind CSS
- Framer Motion
- Lucide React (icônes)
- Inter (auto-hébergée via `@fontsource/inter`, zéro requête réseau)

## Développement local

```bash
npm install
npm run dev
```

Le site est servi sur `http://localhost:3000`.

## Build statique

```bash
npm run build
```

Génère le dossier `out/` — c'est ce dossier qu'il faut déployer.

## Déploiement sur Cloudflare Pages

1. Connecter le repo Git à Cloudflare Pages, ou faire un déploiement direct (`wrangler pages deploy out`).
2. Paramètres de build :
   - **Build command** : `npm run build`
   - **Build output directory** : `out`
   - **Node version** : 18 ou plus
3. Aucune variable d'environnement n'est nécessaire (0 backend).

## À configurer avant mise en production

- **Web3Forms** (`src/components/sections/FinalCTA.tsx`) : remplacer `YOUR_WEB3FORMS_ACCESS_KEY` par votre vraie clé d'accès, obtenue sur web3forms.com.
- **Cal.com** (`src/components/sections/FinalCTA.tsx`) : remplacer le lien `https://cal.com/olympeai/decouverte` et l'attribut `data-cal-link` par votre vrai lien de réservation. Pour l'embed JS officiel (popup Cal.com), suivre la doc cal.com/docs/embed et ajouter leur script dans `layout.tsx`.
- **Mentions légales / RGPD** (`src/app/mentions-legales` et `src/app/rgpd`) : compléter les champs `[à compléter]` (raison sociale, SIREN/SIRET, adresse, email de contact).
- **Domaine** : `metadataBase` dans `src/app/layout.tsx` est réglé sur `https://olympeai.fr`.

## Structure

```
src/
  app/
    layout.tsx          → layout racine, fonts, metadata SEO
    page.tsx             → assemblage des sections
    globals.css          → styles globaux, focus visible, reduced motion
    mentions-legales/    → page légale
    rgpd/                 → page RGPD
  components/
    sections/             → Navbar, Hero, HowItWorks, WhyOlympe,
                            WhatsAppDemo, Pricing, FAQ, FinalCTA, Footer
    ui/                   → Reveal, LetterReveal, CodeMock (composants partagés)
```

## Notes

- Aucune image (`next/image`) n'est utilisée — conforme à la contrainte de compatibilité Cloudflare Pages.
- Toutes les animations respectent `prefers-reduced-motion`.
- Le focus clavier est visible sur tous les éléments interactifs.
