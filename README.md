# NexHost — Web Hosting Website & Client Dashboard Template

A responsive, front-end HTML template for hosting providers, domain registrars, VPS brands, and infrastructure startups.

## What's included

- **Marketing website** — hero section, hosting plans, feature highlights, network section, FAQ, and conversion-focused calls to action.
- **Client area preview** — overview, services, domains, invoices, and support views.
- **Responsive layouts** — desktop, tablet, and mobile navigation.
- **Demo interactions** — annual/monthly pricing toggle, dashboard navigation, table search, and demo-action notifications.
- **Central configuration** — brand name, logo mark, colors, fonts, and optional contact email in one file.
- **Static deployment** — no build tools or package installation required.

## Preview locally

1. Download or clone this repository.
2. Open `index.html` in a browser.
3. Open `dashboard.html` to view the client area.

For the most consistent local preview, use a simple static server or the VS Code Live Server extension.

## Customize the template

Start with `assets/js/config.js`:

- `brand.name` — business name
- `brand.mark` — logo letter or short mark
- `brand.contactEmail` — optional buyer-owned support email
- `theme.accent` and `theme.accentHover` — primary colors
- `theme.font` and `theme.headingFont` — typography

Then update the sample copy, plan prices, product limits, regions, FAQ answers, and dashboard records in the HTML files. Replace all sample account details and commercial claims with information that is true for your business.

## Deploy

See [VERCEL-DEPLOY.md](VERCEL-DEPLOY.md) for Vercel instructions. The project can also be uploaded to any static web host.

## Important scope note

This package is a **front-end website and dashboard UI template**, not a functioning hosting business platform. The dashboard uses sample data and demo-only interactions. It does not provision servers, register domains, authenticate users, process payments, issue invoices, open real support tickets, or connect to a hosting control panel. Those features require your own backend and service integrations.

Plan names, prices, storage limits, uptime statements, data center locations, and other offer details are sample content. Verify and replace them before publishing.

## Project structure

```
.
├── index.html
├── dashboard.html
├── assets/
│   ├── css/
│   │   ├── style.css
│   │   └── dashboard.css
│   └── js/
│       ├── config.js
│       ├── main.js
│       └── dashboard.js
├── vercel.json
└── VERCEL-DEPLOY.md
```
