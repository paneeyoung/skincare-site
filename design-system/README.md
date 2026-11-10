Calm, honest, plant-first design system for the Modee Creative organic-skincare web shop: warm cream pages, olive actions, gold accents, serif display type.

## Content fundamentals
- Voice is calm and plant-first. Write short declaratives: "Hydrate. Restore. Glow naturally." and "Pure ingredients. Honest results."
- Speak to *you* ("your ritual", "your skin"). Use "we/our" sparingly ("Our promise").
- Headlines are sentence case. Eyebrows, buttons, nav labels and badges are UPPERCASE with wide tracking (`ls-eyebrow`, `ls-button`, `ls-label`). Product names are Title Case.
- Product lines pair a name with ingredients and size, separated by a middle dot: "Squalane + ceramides · 50 ml". Prices are euro with two decimals (€42.00).
- Trust lines are concrete: "Free shipping on orders over €50", "30-day skin guarantee", "Never tested on animals".
- Never use emoji. Star ratings are ★ glyphs in `gold-500`.

## Visual foundations
- Page is `bg-page` (cream-100); cards and inputs are `bg-card` (cream-50). Text is `text-1` (ink-900), never pure black.
- Primary actions and active states are `action` (olive-700), hover `action-hover` (olive-800), text `on-action`. Use one full-bleed `bg-inverse` olive band per page for the ritual section; use `bg-band` (sage-200) for the perks strip.
- `accent` (gold-500) is for eyebrows, 1px rules, stars, progress fill and link underlines. It is below 4.5:1 on cream: keep it to 12px+ uppercase labels and decoration, never body text.
- Display, product names and quotes use `display` (Cormorant Garamond), often italic. UI, labels and body use `body` (Jost). Use `script` (Allura) for one accent phrase per view and the M monogram only.
- Backgrounds are flat colour. The only gradient is a cream-to-transparent scrim over the full-bleed hero photo. No patterns or textures.
- Photography is warm daylight with stone, glass and botanical props in a muted earthy palette. Crop to 4:5 or 1:1.15 and round with `radius-md` to `radius-2xl`. The signature motif is an arch-topped frame (radius 50% on top) with a thin `gold-400` offset outline.
- Lines are 1px hairlines in `line-1` (sand-300) or `line-2` (sand-400); gold 1px rules; links get a gold 1px bottom border.
- Corners: cards `radius-md` to `radius-lg`, hero `radius-2xl`, buttons and chips `radius-pill`. Outline "view all" buttons and the newsletter field are square.
- Shadows are almost absent: `shadow-soft` under the nav capsule, `shadow-float` only on the round "made with natural ingredients" badge.
- Layout: `container` 1320px with `gutter` 40px; use auto-fit grids with minmax so content reflows. Sections breathe at `space-11` to `space-12` vertical padding.
- Hover: primary buttons darken to `action-hover`; category cards lift 3px; nav pills tint to `cream-200`; links turn gold. Press has no shrink, only a colour change. Transitions run `dur` (.2s). The shipping progress bar animates its width. Nothing else moves.
- No blur or translucency except the hero scrim.

## Iconography
- Thin line icons on a 24px grid, 1.3 to 1.6px stroke, round caps and joins, `currentColor`, usually olive or gold. Frame them in a 40 to 52px circle with a 1px `sand-300` or `gold-400` outline when used as perk icons.
- Use the `Icon` component (leaf, heart, drop, sparkle, shield, flask, truck, return, lock, bag, search, user, box, insta, arrow). Do not add an icon font or emoji. Unicode allowed: ★ ratings, → and ← in links, − and + in the quantity stepper.
- The logo is type-based: gold Allura "M" over MODEE / CREATIVE in Jost at `ls-logo` tracking. Render it with the `Logo` component; do not redraw it.

## Components
Load `window.ModeeSkincare` and compose from it instead of restyling.
- Core: `Button` (primary, light, outline, link), `Chip`, `Icon`, `Logo`, `SectionHeading`.
- Shop: `ProductCard`, `CategoryCard`, `QuantityStepper`, `ShippingProgress` (free shipping from €50).
- Content: `NavPills`, `TestimonialCard`, `NewsletterField`.
Each component folder has a README with props and do/don'ts.

## Fonts
Cormorant Garamond, Jost and Allura load from Google Fonts through `bundle.css`; there are no font files in this system.

## Known gaps
- No logo file exists; the mark is typeset. Product and lifestyle photography stays in the original Organic Skincare Website project.
- `gold-500` text, `sand-400` control borders and `ink-400` text miss WCAG contrast on cream; they are kept exact from the source and flagged in their token notes.
