var toggleBtn = document.querySelector(".toggle-btn");
var navmenu = document.querySelector(".nav-menu-list");

toggleBtn.addEventListener("click", toggleFunction);

function toggleFunction() {
    navmenu.classList.toggle("active");
    toggleBtn.classList.toggle("active");
}
