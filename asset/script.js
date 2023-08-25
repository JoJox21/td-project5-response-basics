const hamburger = document.querySelector(".hamburger");
const arrange2 = document.querySelector(".arrange2");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    arrange2.classList.toggle("active");
});

document.querySelectorAll(".ticons_link").forEach(n => n.
addEventListener("click", () => {
    hamburger.classList.remove("active");
    arrange2.classList.remove("active");
}));
