# OlympeAI

Assistant IA autonome pour professionnels.
Auto-entrepreneur, France.
Site : olympeai.fr

## 🎯 Cible & Positionnement
- **Marque** : OlympeAI — "L'intelligence au service de votre métier"
- **Cible prioritaire** : avocats solo / petits cabinets (5-15 personnes) — PAS tech-savvy
- **Extension** : experts-comptables, artisans, indépendants généralistes
- **Branding client** : "assistant juridique" / assistant métier, PAS "agent IA" ni "OlympeAI" (le nom marque est pour le site, pas pour le client)
- **Valeur vendue** : un collègue intelligent disponible 24/24 sur leurs outils habituels
- **RGPD** = argument de vente : hébergement Europe (Hetzner), isolation stricte des sessions, logs anonymes, purge auto des données (voir section 🔒 RGPD & Conformité)
- **Positionnement hybride site** : l'IA est portée par les signaux de modernité (badge, nom, design, mentions techniques — Hermes, open source, stack). Le copy principal est concret et centré métier. L'esthétique tech/IA moderne renforce la crédibilité sans être le message principal.
- **H1** : "Un collègue qui ne dort jamais. Déjà dans vos e-mails et sur WhatsApp."
- **H2** : "Rien à installer, rien à configurer. OlympeAI s'occupe de vos dossiers là où vous êtes déjà."

## 💰 Offre & Pricing (validé — juin 2026)

**Sans engagement à tous les paliers. Paiement mensuel — l'infra s'arrête si impayé. Pas de préavis.**

### Offre régulière (3 paliers)

| Palier | Prix | Engagement | Canaux | Public |
|--------|------|------------|--------|--------|
| **L'Assistant** | 99€/mois | Sans engagement | WhatsApp + Email | Avocat solo / TPE |
| **Le Pro** | 199€/mois | Sans engagement | WhatsApp + Email + SMS + téléphone (1h/mois) | Avocat solo confirmé |
| **Le Cabinet** | 349€/mois | Sans engagement | Tous canaux illimités + sessions isolées | Cabinet 3-5 pers |

**⚠️ Diagnostic pricing (validé) :**
- Le palier 99€ couvre 90% de l'usage réel d'un avocat solo → ARPU plafonné à 99€
- Les paliers 199€/349€ vendent des canaux marginaux (SMS, téléphone) que la cible utilise peu
- **Ne pas ajouter LLM premium/Firecrawl/dédié dans les paliers publics** — ce sont des coûts techniques, pas des bénéfices métier ; risque de marge négative. Proposer en option cachée si usage intensif.
- Attendre des données de conversion réelles avant de modifier la grille

### Offre Fondateur — 5 cabinets pilotes 🐉

5 premiers cabinets (pas 5 places grand public). Offre bêta sans risque :

| Condition | Détail |
|-----------|--------|
| 🎁 Mois 1 | **Entièrement gratuit** — zéro facture, zéro risque |
| ⚙️ Configuration | **Personnalisée incluse** — adaptée à votre cabinet |
| 🔓 Engagement | **Aucun** — vous décidez après avoir vu ce que ça change |
| ⭐ Accès prioritaire | Nouveautés en avant-première + canal direct avec le fondateur |
| 🐉 Scarcité | 5 cabinets max — compteur sur le site |

**CTA site** : *"🐉 Offre Fondateur — Je réserve ma place"*

**Marge** : stack zero-cost/open-source → ~85-90%. Coût revient : ~30€/mois pour 5 clients (VPS + email + OpenRouter cap).

**Stratégie :** Pas de prix bloqué, pas d'engagement. On fait goûter le produit — si ça marche, le passage à 99€ est naturel. Si ça ne convertit pas, le problème vient du produit, pas du prix. Les 5 cabinets pilotes deviennent la preuve sociale (témoignages, cas clients).

## 🛠️ Stack technique
- **Assistant backend** : Hermes Agent sur VPS Hetzner (5-15€/mois)
- **Interface client** : WhatsApp (Baileys bridge, 1 bot number pour tous les clients)
- **Canaux alternatifs** : Email (IMAP/SMTP natif Hermes), SMS (Twilio), téléphone (Twilio + Bland.ai/Vapi)
- **Site vitrine** : Next.js / Tailwind CSS, charte noir & blanc épuré
- **Hébergement site** : Cloudflare Pages
- **Animations** : Framer Motion (simulation WhatsApp animée)
- **Réservation** : Cal.com (embed)
- **Formulaires** : Web3Forms ou Formspree (pas de BDD)
- **Push notifications** : ntfy (optionnel)

## 📦 Packs skills (standardisés par métier, ~20% custom/client)

### Pack Avocat (marché prioritaire)
Veille concurrentielle, analyse de jurisprudence, analyse de contrats (upload PDF → OCR → analyse), édition PDF, assistant email, agenda intelligent (cron + Google Calendar), dictée vocale → note pro (STT WhatsApp), chronométrage dossiers, relance échéances, relecture conclusions, pitch client.

### Pack Expert-Comptable (extension #1)
Veille fiscale, analyse de bilan, assistant déclaration, générateur conseil client, relance documents.

### Pack Artisan (extension #2)
Générateur devis, calculateur rentabilité, relance impayés, checklist normes.

### Pack Indépendant Généraliste (extension #3)
Rédacteur email pro, gestion Notion/Airtable, assistant comptable (scan ticket → catégorisation).

## 📱 Canaux de delivery
- WhatsApp (primaire) — 1 bot number pour tous les clients, sessions isolées par expéditeur
- Email (secondaire) — IMAP/SMTP, le client peut envoyer un email à son assistant
- SMS — via Twilio, pour les clients sans smartphone
- Téléphone — via Twilio + Bland.ai/Vapi, appels entrants et sortants

## 🏗️ Architecture infra — Approche A (validée)

### Phase initiale (1-2 clients) : 1 seul profile

```
VPS Hetzner CX22
    ↓
1 instance Hermes — 1 seul process
    ↓
1 bot WhatsApp (Baileys) ← TOUS les clients
    ↓
Isolation par session_key (1 numéro WhatsApp → 1 session)
    ↓
Packs skills mutualisés dans le même profile
```

### Phase production (dès le 1er-2e client) : multi-profiles + Docker

```
VPS Hetzner CX22
    ↓
1 instance Hermes — 1 seul process
    ↓
Profile "client-avocat-dupont"
    ├── terminal.backend: docker ← isolation filesystem
    ├── mémoire SQLite isolée
    ├── sessions isolées
    ├── skills dédiés (pack avocat + custom)
    └── config propre
    ↓
Profile "client-comptable-martin"
    ├── terminal.backend: docker
    ├── mémoire SQLite isolée
    ├── sessions isolées
    ├── skills dédiés (pack comptable + custom)
    └── config propre
    ↓
1 bot WhatsApp (Baileys) ← TOUS les clients
    ↓
Hermes route vers le bon profile par numéro WhatsApp expéditeur
```

**Pourquoi 1 Profile par client :**
- Isolation mémoire/sessions/skills = un client ne voit jamais les données d'un autre
- `terminal.backend: docker` = isolation filesystem réelle (pas juste organisationnelle)
- Argument "secret professionnel" défendable face à un avocat
- Coût quasi-nul à mettre en place (hermes profile create)

**Pourquoi `terminal.backend: docker` est obligatoire :**
- Sans ça, les Profiles n'isolent que la mémoire — le filesystem reste partagé
- Un client pourrait potentiellement lire les fichiers d'un autre via un outil terminal
- Docker = sandboxing réel par profil

**Quand scaler (15+ clients)** : multi-bot numbers Baileys sur le même Hermes. Pas besoin de VPS supplémentaire. Surveiller la RAM (chaque profile consomme).

**Risque partagé :**
- Crash/OOM du VPS = tous les clients impactés simultanément
- RAM : seuil de charge à observer en pratique (pas de garantie doc)
- WhatsApp mutualisé = point de défaillance critique (voir section ⚠️ Risques)

## 🔒 RGPD & Conformité (validé)

### Contexte : infrastructure mutualisée

L'approche multi-profiles (1 profile Hermes par client, `terminal.backend: docker`) est un **atout RGPD** : chaque client a sa propre mémoire, sessions, skills et config, sandboxé dans Docker. Le VPS Hetzner est en Europe. Mais les données couverts par le secret professionnel des avocats cohabitent sur la même machine physique — la rigueur reste absolue.

### 1. Couverture juridique (statut + documents)

**Statut : Sous-traitant (Data Processor)** — toi. Tes clients (avocats, experts-comptables) sont **Responsables de traitement (Data Controllers)**. C'est eux qui portent le risque vis-à-vis de leurs propres clients, tu dois leur fournir les documents pour se couvrir.

**DPA (Data Processing Agreement)** — contrat de 2 pages annexé aux CGV :
- Stockage exclusif Europe (Hetzner Allemagne / Finlande → conforme UE)
- Interdiction d'utiliser les données pour tout autre usage (pas de revente, pas de pub, pas d'entraînement de modèle)
- Suppression des données à la demande du client ou à la fin du contrat
- Délai de suppression garanti sous 72h ouvrées

**Clause "Secret Professionnel"** — pour les avocats, mention explicite dans le DPA :
- Isolation logique stricte des sessions SQLite (cross-session isolation)
- Maître A ne peut en aucun cas accéder aux données de Maître B
- Engagement de confidentialité personnelle du prestataire (toi)

### 2. Couverture technique (config infra)

#### A. Logs sécurisés (le piège classique)
Par défaut, Hermes et le bridge WhatsApp peuvent logger le contenu des messages reçus.

**Règle :** Niveau de log en production = **WARN** ou **ERROR** uniquement. Pas de DEBUG/INFO qui affichent le texte des messages clients. Si un inspecteur ou un avocat regarde les logs, il ne doit voir que des lignes techniques, jamais un nom de dossier ou un extrait de conversation.

#### B. Chiffrement au repos (at rest)
**Règle :** Activer le chiffrement complet du disque du VPS Hetzner au démarrage (LUKS). Option : extension SQLCipher sur les bases SQLite d'Hermes pour du chiffrement AES-256 au niveau fichier.

#### C. Politique de rétention (Data Purge)
**Règle :** Cron job hebdomadaire qui purge automatiquement l'historique des sessions SQLite de plus de **60 jours**.

**Argument de vente direct :** *"Vos données de session sont automatiquement anonymisées et purgées après 60 jours. Nous ne conservons que ce qui est strictement nécessaire au fonctionnement."*

#### D. Transit des données (LLM API)
- OpenRouter / DeepSeek API : les CGV de ces API **n'utilisent pas les données pour l'entraînement**
- Chiffrement TLS systématique entre le VPS et les API LLM
- **Clause DPA :** *"Les données textuelles sont transmises de manière sécurisée via TLS à des sous-traitants techniques (LLM API) s'engageant contractuellement à la non-utilisation des données pour l'entraînement."*

### 3. Checklist RGPD — Jour 1

| # | Action | Statut |
|---|--------|--------|
| 1 | Hébergement exclusif Europe (Hetzner DE/FI) | ✅ VPS Hetzner |
| 2 | DPA 2 pages annexé aux CGV | 📝 À rédiger |
| 3 | Clause secret professionnel dans le DPA | 📝 À rédiger |
| 4 | Niveau de log = WARN en production | 📝 À configurer |
| 5 | Chiffrement disque VPS (LUKS) | 📝 À activer |
| 6 | Cron purge auto sessions > 60 jours | 📝 À créer |
| 7 | Mention RGPD dans le contrat client | 📝 À rédiger |
| 8 | Pas de collecte de CB au mois 1 (moins de données financières = moins de responsabilités) | ✅ Offre Fondateur |
| 9 | Profile Hermes par client + terminal.backend: docker | 📝 À configurer dès le 1er client |

**Contexte :** on part de zéro — pas de site, pas de clients, pas de réseau juridique.

**Approche :** démarchage direct one-to-one, site vitrine comme carte de visite numérique.

### Pipeline de vente
```
Message (email/LinkedIn) → prospect googlease → SITE VITRINE → appel découverte 30 min → démo live → signature Offre Fondateur
```

### Offre Fondateur — 5 cabinets pilotes 🐉
- **5 cabinets** max — compteur sur le site (pas 5 places grand public, 5 pilotes)
- **1 mois entièrement gratuit** — zéro facture, configuration personnalisée incluse
- **Aucun engagement** — vous décidez après avoir vu ce que ça change
- Accès prioritaire aux nouvelles fonctionnalités + canal direct fondateur
- En échange : retour honnête + autorisation de citer l'expérience (preuve sociale)

### Sources de prospects (ordre de priorité)
1. Annuaire du Barreau local
2. LinkedIn → recherche "cabinet d'avocats [ville]"
3. Pages Jaunes / Google Maps → avocats, experts-comptables
4. Recommandation des premiers clients

### Appel découverte (30 min)
1. Écouter les problèmes du prospect (charge admin, organisation)
2. Montrer UN cas concret avec une démo live (WhatsApp → assistant)
3. Présenter l'offre bêta fondateur
4. Close : "Je lance dans 2 semaines, je te réserve une place ?"
5. Relance J+2 si pas de réponse

## ⚠️ Risques identifiés (non résolus)

| Risque | Impact | Probabilité | Mitigation |
|--------|--------|-------------|------------|
| **WhatsApp mutualisé** — Baileys ban ou Meta API down | TOUS les clients perdent WhatsApp simultanément | Moyenne | Documenter un plan de migration de numéro AVANT le 3e/4e client. Testé et prêt, pas juste pensé. |
| **Crash/OOM VPS** — tous les profiles sur la même machine | TOUS les clients impactés | Moyenne | Surveiller RAM au fur et à mesure. 1 VPS = seuil de charge à observer, pas à supposer. |
| **ARPU plafonné à 99€** — paliers supérieurs peu attractifs | Revenus ne montent pas avec le nb de clients | Élevée (structurel) | Attendre signal client réel avant de restructurer la grille. Ne pas coder de features pour des paliers que personne n'achète. |
| **Onboarding non industrialisé** — config sur-mesure = temps réel/client | Limitation à ~10 clients sans recrutement | Élevée (au-delà de 10) | Scripts d'onboarding dès le 3e client (Phase 2 roadmap) |

## 🚀 Roadmap

### Phase 0 — Fondations (maintenant)
- [ ] Construire site vitrine one-page (Next.js + Tailwind)
- [ ] Simulation WhatsApp animée (Framer Motion)
- [ ] Déploiement Cloudflare Pages
- [ ] Préparer assistant avatar + 3 cas de démo concrets
- [ ] Lister 20 cabinets cibles
- [ ] Message de prospection prêt

### Phase 1 — Premiers clients (semaines 1-4)
- [ ] Contacter 10 cabinets
- [ ] 3-5 appels découverte
- [ ] Convertir 1-2 clients en bêta fondateur
- [ ] Configurer l'assistant client
- [ ] Itérer sur les bugs
- [ ] Obtenir 1 témoignage vidéo/cas client

### Phase 2 — Scale (semaines 5+)
- [ ] Site complet multi-pages (solutions, pricing, contact)
- [ ] Campagne LinkedIn
- [ ] Extension Pack Expert-Comptable
- [ ] Automatisation onboarding (scripts de création de skills client)

### Phase 3 — Croissance (mois 3+)
- [ ] Pack Artisan
- [ ] Pack Indépendant Généraliste
- [ ] Premier recrutement (freelance support)

## 📋 Règles
- Ne jamais commit de tokens, API keys, ou infos clients
- Priorité aux solutions gratuites/open-source
- Le site doit pouvoir être mis à jour sans BDD
- Les skills clients sont dans des dossiers dédiés par client
- La communication client est en français, sans jargon technique
- Toujours montrer, jamais raconter (démo > pitch)
- Le site vitrine est une carte de visite, pas un tunnel de vente
