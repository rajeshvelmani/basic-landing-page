var toggleBtn = document.querySelector(".toggle-btn");
var navmenu = document.querySelector(".nav-menu-list");

toggleBtn.addEventListener("click", toggleFunction);

function toggleFunction() {
    navmenu.classList.toggle("active");
    toggleBtn.classList.toggle("active");
}

var body = document.querySelector("body");
var container = document.querySelector(".container");

//body.style.overflow = "hidden";
container.style.display = "none";
window.addEventListener("load", function () {
    container.style.display = "block";
    // body.style.overflow = "auto";
    body.classList.add("page-loads");
});
