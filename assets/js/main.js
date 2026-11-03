document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  toggle?.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!open));
    nav.classList.toggle("nav-open", !open);
  });
  nav?.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
    nav.classList.remove("nav-open"); toggle?.setAttribute("aria-expanded", "false");
  }));
  const billing = document.querySelector(".billing-switch");
  billing?.addEventListener("click", () => {
    billing.classList.toggle("yearly");
    const yearly = billing.classList.contains("yearly");
    billing.querySelectorAll("span").forEach((el,i) => { if (i===0) el.classList.toggle("muted",yearly); if(i===2) el.classList.toggle("active",yearly); });
    document.querySelectorAll(".price strong").forEach(el => el.textContent = "$" + (yearly ? el.dataset.year : el.dataset.month));
  });
});