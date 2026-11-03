document.addEventListener("DOMContentLoaded", () => {
  const toggle=document.querySelector(".menu-toggle"),nav=document.querySelector(".main-nav");
  toggle?.addEventListener("click",()=>{const open=toggle.getAttribute("aria-expanded")==="true";toggle.setAttribute("aria-expanded",String(!open));nav.classList.toggle("nav-open",!open)});
  nav?.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("nav-open");toggle?.setAttribute("aria-expanded","false")}));
  const billing=document.querySelector(".billing-switch");
  billing?.addEventListener("click",()=>{billing.classList.toggle("yearly");const yearly=billing.classList.contains("yearly");billing.querySelectorAll("span").forEach((el,i)=>{if(i===0)el.classList.toggle("muted",yearly);if(i===2)el.classList.toggle("active",yearly)});document.querySelectorAll(".price strong").forEach(el=>el.textContent="$"+(yearly?el.dataset.year:el.dataset.month))});
  const form=document.getElementById("domain-search"),input=document.getElementById("domain-query");
  form?.addEventListener("submit",e=>{e.preventDefault();let result=form.querySelector(".domain-result");if(!result){result=document.createElement("p");result.className="domain-result";form.append(result)}const value=input.value.trim().replace(/^https?:\/\//,"").replace(/\/$/,"");result.textContent=value?"Demo search: "+value+" — connect a domain registrar API to check live availability.":"Enter a domain name to continue."});
});