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

1. Connecter le repo Git à Cloudflare Pages, ou faire un déploiement direct (`npx wrangler pages deploy out`).
2. Paramètres de build :
   - **Framework preset** : Next.js (Static HTML Export)
   - **Build command** : `npm run build`
   - **Build output directory** : `out`
   - **Node version** : 18 ou plus
3. **Variables d'environnement (build)** à configurer dans Cloudflare Pages → votre projet → **Settings → Environment variables** :
   | Variable | Valeur |
   |---|---|
   | `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | `0x4AAAAAADg0WHxTIPc8uIVX` |
   | `TURNSTILE_SECRET_KEY` | `0x4AAAAAADg0WHextnbvU1rXgnv7ZTHuGPs` |
   | `RESEND_API_KEY` | Votre clé API Resend |
   | `CONTACT_EMAIL` | Email où vous recevez les notifications |

## À configurer avant mise en production

- **Mentions légales / RGPD** (`src/app/mentions-legales` et `src/app/rgpd`) : vérifier que tous les champs sont complétés (raison sociale, SIREN/SIRET, adresse, email de contact).
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
