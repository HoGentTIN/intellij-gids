// Image zoom
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("img").forEach(img => {
    img.onclick = () => {
      let backdrop = document.createElement("div");
      backdrop.className = "img-modal-backdrop";
      let big = document.createElement("img");
      big.src = img.src;
      backdrop.appendChild(big);
      backdrop.onclick = () => document.body.removeChild(backdrop);
      document.body.appendChild(backdrop);
    };
  });
});
// Scroll top
let scrollBtn = document.createElement("button");
scrollBtn.id = "scroll-top-btn";
scrollBtn.innerHTML = "↑";
scrollBtn.title = "Naar boven";
document.body.appendChild(scrollBtn);
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) scrollBtn.classList.add("show");
  else scrollBtn.classList.remove("show");
});
scrollBtn.onclick = () => window.scrollTo({top: 0, behavior: "smooth"});