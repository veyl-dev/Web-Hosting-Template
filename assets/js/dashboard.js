document.addEventListener("DOMContentLoaded",()=>{
 const links=[...document.querySelectorAll("[data-view]")],views=[...document.querySelectorAll(".dash-view")],title=document.getElementById("current-section"),sidebar=document.querySelector(".sidebar"),toast=document.querySelector(".toast");
 function showView(name){links.forEach(b=>b.classList.toggle("active",b.dataset.view===name));views.forEach(v=>v.classList.toggle("active",v.id==="view-"+name));title.textContent=name.charAt(0).toUpperCase()+name.slice(1);sidebar?.classList.remove("sidebar-open");}
 links.forEach(b=>b.addEventListener("click",()=>showView(b.dataset.view)));
 document.querySelectorAll("[data-view-link]").forEach(b=>b.addEventListener("click",()=>showView(b.dataset.viewLink)));
 document.querySelector(".sidebar-toggle")?.addEventListener("click",()=>sidebar.classList.toggle("sidebar-open"));
 let toastTimer;document.querySelectorAll("[data-demo-action]").forEach(b=>b.addEventListener("click",()=>{toast.textContent=b.dataset.demoAction+" is a demo action. Connect your own backend to enable it.";toast.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove("show"),3200);}));
 document.querySelectorAll("[data-search]").forEach(input=>input.addEventListener("input",()=>{const q=input.value.toLowerCase();document.querySelectorAll("#view-"+input.dataset.search+" .searchable").forEach(row=>row.hidden=!row.textContent.toLowerCase().includes(q));}));
});