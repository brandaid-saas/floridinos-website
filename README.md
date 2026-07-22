# Handoff: Floridino's Italian Kitchen — Full Site

## Overview
The complete Floridino's website: Home, Menu, Catering, and Contact pages, including a working staff editor (login + inline menu/catering editing) on the Menu and Catering pages. Goal: stand this up on Cloudflare (Pages + Worker + D1) with real auth and persistence.

## About the Design Files
The bundled `.dc.html` files are **fully functional HTML/CSS/JS prototypes** — not static mockups. Every layout, style, and interaction (nav, parallax bands, staff login, inline item edit/add/delete) already works in-browser against fake/local persistence. The task is to recreate this experience in your target framework (or serve it close to as-is via Cloudflare Pages) and swap the two fake integration points for a real backend — not to redesign anything.

`support.js` is a small runtime shim the prototype tool injects (templating/state helpers) — do not treat it as required production code; a developer's real stack (React, plain JS, etc.) replaces this role entirely once rebuilt, or can be shipped as-is if serving the HTML directly on Pages.

## Fidelity
Hi-fi and functional — final colors, type, spacing, copy, and interactions. Recreate pixel-for-pixel; don't restyle.

## Site structure & shared header/footer
- Fixed header: logo (`assets/floridinos-logo.png`, hard white drop-shadow `0 3px 0 rgba(248,248,248,0.75)`) left, nav (HOME / MENU / CATERING / CONTACT US) + phone pill button right, hamburger + mobile dropdown under 780px.
- Sticky mobile call bar (bottom, phone icon + "CALL 863-353-2670") replaces header phone button under 780px; intro CTA buttons on Catering hide on mobile since the bar covers calling.
- Footer: logo, hours, contact block, "Staff Login" trigger (bottom-left of copyright line) on the pages with an editor.
- Palette: background `#130f0c`, panels `#1a1512`/`#241c16`, borders `#3a2f25` / `rgba(210,154,90,0.35)`, gold accent `#d29a5a`, body text `#d1c8bb`, muted `#8f867a`, error `#c96a5a`. Headings: Raleway 700–800. Body: Inter 200–600.

## Pages
- **Home.dc.html** — hero, story/lasagna-mahi section, lunch-specials parallax band (pasta.jpg), order CTA (pepperoni.jpg).
- **Menu.dc.html** — full menu by category with parallax image bands (randomized shuffle of 9 photos on every load — see below), staff editor (login/edit/add/delete), order-for-pickup CTA (lasagna.jpg).
- **Catering.dc.html** — catering hero, intro ("Experience the Taste of Old Italy — Our Way") with Call + Download PDF CTAs, category list (Fresh Salads; Floridino's Famous Wings; Pasta Favorites; Pizzas & Calzones — includes baguettes/mini calzones/muffin platter; Dessert & Lunch Specials) each with its own parallax band (lasagna/mahi/dough/pepperoni/wine — deliberately different order than Menu's), plan-your-event CTA (wings.jpg), same staff editor pattern as Menu, PDF download link (`assets/FloridinosCateringMenu.pdf`).
- **Contact.dc.html** — icon rows (address, hours incl. separate Sunday line, phone, "Email Us" mailto link), social row, map/CTA section.

### Random image shuffle (Menu page only)
`Menu.dc.html`'s `componentDidMount` shuffles a 9-photo pool (`Fisher–Yates`) once per page load and assigns bands to categories in that order — every visit gets a different arrangement. Catering's bands are a fixed curated sequence (not randomized) chosen to look distinct from Menu's typical picks.

## Staff editor (Menu + Catering) — current fake integration points to replace
Both pages share the same pattern, independently implemented per file:

1. **Login** — `doLogin()`: accepts any username, password must be `demo` (or blank); sets `sessionStorage['floridinos-admin']='1'`. Replace with `POST /api/login` (see API spec) storing a real session (httpOnly cookie preferred).
2. **Persistence** — `persist(cats)`: writes to `localStorage['floridinos-menu-v1']` / `localStorage['floridinos-catering-v1']` (each versioned via a `_VERSION` export in the data file, so shipping new defaults doesn't get masked by stale local data). Replace with `PUT /api/menu` / `PUT /api/catering`.
3. **Initial load** — `componentDidMount()`: imports `menu-data.js` / `catering-data.js` for defaults, overlays localStorage if present and version matches. Replace the overlay step with `GET /api/menu` / `GET /api/catering` (fall back to the static file only if the API call fails).

Editor UX (identical on both pages): "Staff Login" footer link opens a modal (username/password, error state, cancel); once signed in, an "EDIT" affordance appears per item, clicking swaps the row for an inline card (name/price/description + Save/Cancel/Delete), a dashed "+ Add item to {group}" button appears per group, and a floating admin bar (bottom-center) shows mode + a "Preview guest view" toggle + "Log out."

## Recommended Cloudflare architecture
- **Cloudflare Pages** — hosts the static site (all `.dc.html` + `assets/`) as-is, or the rebuilt app if you choose a framework.
- **Cloudflare Worker** (Pages Functions, e.g. `functions/api/`) — implements the API below.
- **Cloudflare D1** (SQLite) — one table per menu (`menu`, `catering`), each storing the category JSON blob (or normalize into `categories`/`groups`/`items` tables), plus a `staff_users` table (bcrypt/argon2-hashed passwords, never plaintext).
- **Sessions** — httpOnly, Secure, SameSite=Strict cookie with a signed session token on login; or skip custom auth entirely with **Cloudflare Access** (email OTP/SSO) gating `/api/menu PUT`, `/api/catering PUT`, and `/api/login`.

## API spec
- `GET /api/menu` → 200, the menu category array (shape below). Public, no auth.
- `PUT /api/menu` → body: full updated array. Requires staff session, 401 otherwise.
- `GET /api/catering` → 200, the catering category array (shape below). Public.
- `PUT /api/catering` → body: full updated array. Requires staff session.
- `POST /api/login` → `{ username, password }` → `{ ok: true }` + session cookie, or 401 `{ ok: false }`.
- `POST /api/logout` → clears session cookie.

## Data shapes
Menu (`menu-data.js`, `MENU` export):
```js
{ title: "Salads", note: "optional", items: [{ name, price, desc }] }
```
Catering (`catering-data.js`, `CATERING` export) — categories can bundle multiple labeled item groups:
```js
{ title: "Fresh Salads", note: "optional", groups: [
  { subtitle: null /* or a string label */, items: [{ name, price, desc }] }
]}
```
Keep these shapes in D1 (JSON column per category, or fully normalized) — the front-end only depends on this structure.

## Assets
All under `assets/`: `dough.jpg`, `home-banner.jpg`, `lasagna.jpg`, `mahi.jpg`, `menu-header.jpg`, `pasta.jpg`, `pepperoni.jpg`, `pizza-muffins.jpg`, `pizza-supreme.jpg`, `wine.jpg`, `wings.jpg`, `floridinos-logo.png`, `FloridinosCateringMenu.pdf`.

## Files in this bundle
- `Home.dc.html`, `Menu.dc.html`, `Catering.dc.html`, `Contact.dc.html` — the four pages.
- `menu-data.js`, `catering-data.js` — data sources / D1 shape reference / offline fallback.
- `support.js` — prototype runtime shim (see note above).
- `assets/` — all images + the catering PDF.
