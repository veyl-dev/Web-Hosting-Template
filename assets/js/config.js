/* NexHost template settings. Edit this file first when white-labeling the demo. */
window.NEXHOST_CONFIG = {
  brand: { name: "NexHost", mark: "N", contactEmail: "" },
  theme: { accent: "#5b8cff", accentHover: "#79a1ff", background: "#08111f", font: "'DM Sans', sans-serif", headingFont: "'Manrope', sans-serif" },
  links: { clientArea: "dashboard.html", primaryCta: "#plans" },
  demo: { showSampleDataNotice: true }
};
document.addEventListener("DOMContentLoaded", () => {
  const c = window.NEXHOST_CONFIG;
  document.querySelectorAll("[data-brand-name]").forEach(el => el.textContent = c.brand.name);
  document.querySelectorAll(".brand-mark").forEach(el => el.textContent = c.brand.mark);
  document.querySelectorAll("[data-year]").forEach(el => el.textContent = new Date().getFullYear());
  if (c.theme) {
    const root = document.documentElement;
    root.style.setProperty("--accent", c.theme.accent);
    root.style.setProperty("--accent-hover", c.theme.accentHover);
    if (c.theme.font) root.style.setProperty("--font-body", c.theme.font);
    if (c.theme.headingFont) root.style.setProperty("--font-heading", c.theme.headingFont);
  }
  if (c.brand.contactEmail) {
    document.querySelectorAll("[data-contact-link]").forEach(el => { el.href = "mailto:" + c.brand.contactEmail; });
  } else {
    document.querySelectorAll("[data-contact-group]").forEach(el => el.hidden = true);
  }
});