var hambuger = document.querySelector(".hambuger");
var navmenu = document.querySelector(".nav-menu");

hambuger.addEventListener("click", function() {
  navmenu.classList.toggle("active");
});
