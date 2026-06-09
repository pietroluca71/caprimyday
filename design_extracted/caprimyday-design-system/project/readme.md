# CapriMyDay Design System

## Overview

**CapriMyDay** is a wedding & event planning brand based in Capri, Italy. The brand projects elegance, romance, and Mediterranean warmth — a refined yet approachable aesthetic suited to luxury destination weddings and curated celebrations.

### Sources

- Brand palette image (`assets/palette-reference.png`)
- Logo — color variant (`assets/logo-color.png`) and white variant (`assets/logo-white.png`)
- Line-art icon set: leaf, envelope, flower, ring (`assets/icon-*.jpg`)
- Typography: DM Serif Display (titles), DM Sans (body) — loaded via Google Fonts

---

## Content Fundamentals

### Tone & Voice

- **Warm, personal, aspirational.** Copy speaks directly to the couple ("your day", "your vision") using second person.
- **Romantic but grounded.** Avoids over-the-top fairy-tale language; prefers understated elegance. Think: "effortless beauty" not "magical princess moment."
- **Bilingual Italian/English.** The brand operates in both languages. Italian copy leans slightly more poetic; English copy is clean and modern.
- Sentence case for body text. Title case for headings (English) or standard Italian capitalisation.
- No emoji in brand communications. Decorative elements are handled by the line-art icon set, never by unicode symbols.
- Short paragraphs, generous whitespace. Copy breathes — never dense blocks of text.

### Example Copy

> "Every detail, curated for you."  
> "Il giorno che hai sempre sognato, reso reale."  
> "We plan. You celebrate."

---

## Visual Foundations

### Color

| Role | Token | Hex |
|---|---|---|
| Primary (Rosa) | `--color-rosa` | `#e5abbe` |
| White | `--color-white` | `#ffffff` |
| Grey (text/details) | `--color-grigio` | `#8e9a9b` |

The palette is intentionally restrained. Rosa is the signature accent — used sparingly for emphasis, buttons, and decorative touches. White dominates surfaces. Grey handles all body text and secondary UI.

Extended neutral scale (`--neutral-50` through `--neutral-900`) provides depth without introducing new hues.

### Typography

| Purpose | Family | Token |
|---|---|---|
| Titles / Display | DM Serif Display | `--font-display` |
| Subtitles / Body / UI | DM Sans | `--font-body` |

- Display type is always regular weight (400), never bold — the serif carries its own visual weight.
- Body type uses 300–600 weight range: light for large callouts, regular for body, medium/semibold for labels and emphasis.
- Size scale runs from `--text-xs` (12px) to `--text-5xl` (60px) on a 1.25 modular ratio.

### Spacing & Layout

- 4px base unit; scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96.
- Generous whitespace is central to the brand. Sections should breathe — prefer `--space-16` to `--space-24` between major blocks.
- Content width maxes at 1200px; narrow reading column at 720px.

### Backgrounds & Surfaces

- **Predominantly white.** The brand relies on whitespace as a design element.
- **Rosa tint surfaces** (`--surface-accent`, `--color-rosa-lighter`) used for callout blocks, hero sections, and feature highlights — never as the dominant background.
- **Dark surfaces** (`--neutral-900`) reserved for footers and contrast sections; pair with white logo.
- **No gradients.** The brand avoids gradient backgrounds. If depth is needed, use subtle box-shadow or layered white cards.
- **No patterns or textures.** Surfaces are flat and clean.
- **Photography:** warm Mediterranean tones — golden light, sea blues, terracotta, greenery. Never desaturated or moody.

### Borders & Corners

- Default border: 1px `--border-default` (light neutral).
- Accent border: 1px `--border-accent` (rosa) — for active states, featured cards.
- Corner radii: `--radius-md` (8px) for cards and containers; `--radius-full` for pills and avatars.
- Avoid heavy rounding on large containers (no 24px+ radius on full cards).

### Shadows & Elevation

- Shadows are soft and subtle (`rgba(44,50,51, 0.04–0.12)`).
- Cards use `--shadow-sm` at rest, `--shadow-md` on hover.
- Avoid deep/dramatic shadows — the brand is light and airy.

### Animation & Interaction

- **Easing:** `--ease-default` (ease-out feel) for all transitions.
- **Duration:** 120–350ms range. Micro-interactions at 120ms; page transitions at 350ms.
- **Hover states:** subtle opacity reduction (0.85) or background tint shift. No scale transforms on hover.
- **Press states:** slight darkening of background color. No shrink effects.
- **No bounces, springs, or playful animations.** Movement is smooth and restrained.
- **Entrance animations:** gentle fade-in + slight upward translate (8–12px). Never slide from sides.

### Imagery Style

- Warm, sun-drenched Mediterranean photography.
- Golden hour light preferred.
- Subjects: floral arrangements, table settings, coastal landscapes, architectural details, candid couple moments.
- Never: stock-photo-style posed shots, dark/moody edits, heavy filters.

---

## Iconography

The brand uses a custom **line-art icon set** — thin single-stroke illustrations in the rosa accent color. These icons are decorative, not functional UI elements.

### Available Icons

| Icon | File | Usage |
|---|---|---|
| Leaf branch | `assets/icon-leaf.jpg` | Nature, organic, growth themes |
| Envelope with leaves | `assets/icon-envelope.jpg` | Invitations, correspondence, RSVP |
| Flower | `assets/icon-flower.jpg` | Floral, beauty, ceremony |
| Ring | `assets/icon-ring.jpg` | Engagement, commitment, jewelry |

### Icon Guidelines

- Icons are rendered in `--color-rosa` on white backgrounds, or white on dark/rosa backgrounds.
- Stroke weight is thin and consistent — matches the delicate brand feel.
- For functional UI icons (arrows, close, menu, etc.), use a thin-weight icon set that harmonises with the line-art style. Recommended: [Lucide Icons](https://lucide.dev/) at 1.5px stroke width.
- No emoji. No filled/solid icon styles. No heavy icon weights.
- Icons are used as decorative accents alongside text, never as primary navigation elements.

---

## File Index

```
├── styles.css              ← Global CSS entry (imports only)
├── tokens/
│   ├── colors.css          ← Color custom properties
│   ├── typography.css      ← Type scale, font families, weights
│   └── spacing.css         ← Spacing, radii, shadows, motion
├── assets/
│   ├── logo-color.png      ← Primary logo (rosa + grey)
│   ├── logo-white.png      ← White variant (for dark bgs)
│   ├── icon-leaf.jpg       ← Line-art: leaf branch
│   ├── icon-envelope.jpg   ← Line-art: envelope with leaves
│   ├── icon-flower.jpg     ← Line-art: flower
│   └── icon-ring.jpg       ← Line-art: ring
├── guidelines/             ← Foundation specimen cards
├── components/             ← Reusable React UI primitives
├── readme.md               ← This file
└── SKILL.md                ← Agent skill manifest
```

---

## Components

See `components/` for reusable React primitives: Button, Card, Badge, Input, Tag, Avatar, Divider.

Each component:
- Is a named JSX export with a `.d.ts` props contract
- Uses CSS custom properties from `styles.css` (no CSS-in-JS)
- Has a `.prompt.md` usage guide
- Has a specimen `.card.html` tagged for the Design System tab
