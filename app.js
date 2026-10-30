// Edit this list to add or remove directory entries.
const apps = [
  {name:"Canva",category:"Creativity",initial:"C",description:"Design presentations, posters, social posts, and more.",url:"https://www.canva.com/"},
  {name:"CapCut",category:"Creativity",initial:"CC",description:"Create and edit videos with creative editing tools.",url:"https://www.capcut.com/"},
  {name:"Notion",category:"Productivity",initial:"N",description:"Organize notes, projects, tasks, and ideas in one workspace.",url:"https://www.notion.com/"},
  {name:"Google Drive",category:"Productivity",initial:"D",description:"Store, organize, and share files with Google Drive.",url:"https://drive.google.com/"},
  {name:"Khan Academy",category:"Learning",initial:"K",description:"Learn school subjects and explore free educational lessons.",url:"https://www.khanacademy.org/"},
  {name:"Spotify",category:"Entertainment",initial:"S",description:"Discover music, podcasts, and audio entertainment.",url:"https://www.spotify.com/"},
];
let activeCategory="All";
const grid=document.querySelector("#appGrid"), search=document.querySelector("#search");
function render(){
 const term=search.value.trim().toLowerCase();
 const visible=apps.filter(a=>(activeCategory==="All"||a.category===activeCategory)&&(`${a.name} ${a.category} ${a.description}`).toLowerCase().includes(term));
 document.querySelector("#count").textContent=`${visible.length} ${visible.length===1?"app":"apps"}`;
 grid.innerHTML=visible.length?visible.map(a=>`<article class="app-card"><div class="app-top"><div class="app-icon">${a.initial}</div><div><h3>${a.name}</h3><div class="category">${a.category}</div></div></div><p>${a.description}</p><a class="app-link" href="${a.url}" target="_blank" rel="noopener noreferrer">Visit official website ↗</a></article>`).join(""):`<div class="empty">No apps found. Try another search.</div>`;
}
document.querySelectorAll(".chip").forEach(btn=>btn.addEventListener("click",()=>{document.querySelector(".chip.active")?.classList.remove("active");btn.classList.add("active");activeCategory=btn.dataset.category;render()}));
search.addEventListener("input",render);
document.querySelector("#year").textContent=new Date().getFullYear();
render();
if("serviceWorker" in navigator && location.protocol.startsWith("http")) window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}));
