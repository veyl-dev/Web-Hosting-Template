# NexHost — Web Hosting Website, Client Portal & Admin Dashboard

A responsive front-end template for hosting providers, domain registrars, VPS brands, and infrastructure businesses.

## Included
- Public marketing website with hosting plans, product sections, network status, FAQ, and domain/hosting sales entry points.
- Customer portal: overview, services, domains, invoices, support, file manager shortcut, databases, FTP, cron jobs, PHP settings, staging, DNS records, SSL status, backups, malware scanning, and firewall status.
- Separate admin console: overview, customers, hosting services, domains, servers/nodes, support tickets, billing/invoices, and settings.
- Responsive desktop and mobile layouts.
- Demo interactions: monthly/yearly price switch, navigation, search/filter, and demo action notices.
- Centralized white-label settings in `assets/js/config.js`.
- Static deployment support; no build step required.

## Preview
- `index.html` — public website
- `dashboard.html` — customer portal
- `admin-dashboard.html` — admin console

## Customize
Edit `assets/js/config.js` to change the brand name, mark, accent colors, and fonts. Update plan pricing, product descriptions, sample records, regions, and support information in the HTML files. Replace all demo values with accurate details before publishing.

## Deploy
See [VERCEL-DEPLOY.md](VERCEL-DEPLOY.md). The project can also be hosted on any static web host.

## Important scope note
This is a **front-end website and UI kit**, not a functioning hosting control panel. All customer/admin records are sample data. It does not provision hosting accounts or VPS instances, register domains, change DNS, issue SSL certificates, manage files or databases, create backups, authenticate staff/customers, charge cards, issue real invoices, or send support replies. Those capabilities require secure backend services and integrations (for example, a hosting control panel/provisioning API, registrar API, billing system, and authenticated admin API). Do not connect a live production account without implementing authorization, validation, audit logging, and server-side permission checks.

Plan prices, revenue, uptime, node metrics, customer records, and sample locations are illustrative. Replace them with verified business information.

## Structure
- `index.html`
- `dashboard.html`
- `admin-dashboard.html`
- `assets/css/style.css`
- `assets/css/dashboard.css`
- `assets/css/admin.css`
- `assets/js/config.js`
- `assets/js/main.js`
- `assets/js/dashboard.js`
- `assets/js/admin.js`
