/* Shared scroll reveal motion for the marketing site and both control panels. */
(() => {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || !("IntersectionObserver" in window)) return;
  document.documentElement.classList.add("motion-ready");
  const selectors = [
    ".hero-grid", ".trust-strip", ".section-heading", ".center-heading",
    ".plan-card", ".domain-finder-inner", ".product-range-head",
    ".product-range-grid article", ".feature-card", ".network-grid",
    ".faq-item", ".closing-cta", ".dash-heading", ".stat-card", ".panel",
    ".tool-card", ".security-card", ".admin-page-head", ".admin-stats article",
    ".admin-panel", ".node-card", ".settings-card"
  ].join(",");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -42px 0px" });
  const observe = (root = document) => {
    root.querySelectorAll(selectors).forEach((el) => {
      if (!el.classList.contains("is-visible") && !el.classList.contains("reveal-pending")) {
        el.classList.add("reveal-pending");
        observer.observe(el);
      }
    });
  };
  observe();
  const mutation = new MutationObserver((records) => {
    records.forEach((record) => {
      if (record.type === "childList") record.addedNodes.forEach((node) => {
        if (node.nodeType === 1) {
          if (node.matches?.(selectors)) { node.classList.add("reveal-pending"); observer.observe(node); }
          observe(node);
        }
      });
      if (record.type === "attributes" && record.attributeName === "class") observe(record.target);
    });
  });
  mutation.observe(document.body, { subtree: true, childList: true, attributes: true, attributeFilter: ["class"] });
})();