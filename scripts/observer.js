let options = {
    //     root: document.querySelector(".card"),
    rootMargin: "-100px",
    //     threshold: 1.0,
};
let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        // Each entry describes an intersection change for one observed
        // target element:
        //   entry.boundingClientRect
        //   entry.intersectionRatio
        //   entry.intersectionRect
        //   entry.isIntersecting
        //   entry.rootBounds
        //   entry.target
        //   entry.time
        if (entry.isIntersecting) {
            entry.target.classList.add("observed");
        }
    });
}, options);

let cards_target = document.querySelectorAll(".card");

cards_target &&
    cards_target.forEach((target) => {
        observer.observe(target);
    });

let social_target = document.querySelectorAll(".social");
social_target &&
    social_target.forEach((target) => {
        observer.observe(target);
    });

let hero_section_target = document.querySelectorAll(".hero-section");
hero_section_target &&
    hero_section_target.forEach((target) => {
        observer.observe(target);
    });
