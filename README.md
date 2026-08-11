# Next Studio Digital Card — Phases 1–3

Premium bilingual digital business card for Richard Vélez / Next Studio.

## Included

- React + Vite + TypeScript architecture
- EN/ES routes: `/en` and `/es`
- Mobile-first premium Next Studio visual system
- WhatsApp with prefilled bilingual message
- Call and email actions
- Downloadable `.vcf` contact
- Native Web Share API with clipboard fallback
- Live QR code generated from the current card URL
- NFC-ready permanent URL model
- Services, featured projects, About and booking CTA
- Centralized profile data in `src/data/profile.ts`
- Future-ready `/card/richard` alias

## Run

```bash
npm install
npm run dev
```

## Build check

```bash
npm run lint
npm run build
```

## Before launch

1. Replace the initials avatar with Richard's real professional photo.
2. Replace the text brand mark with the official Next Studio logo asset.
3. Confirm the final email and social links in `src/data/profile.ts`.
4. Deploy to Vercel.
5. Point `card.nextstudio.agency` to the Vercel project.
6. Program an NFC card with the permanent URL, e.g. `https://card.nextstudio.agency/en`.

## Phase 4 later

Supabase Auth, database, Storage and RLS can be added without changing the public card structure.
