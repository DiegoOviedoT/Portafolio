const links = document.querySelectorAll(".navbar__menu--link");

const options = {
  rootMargin: "-50% 0px -50% 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    let id = entry.target.getAttribute("id");
    let link = document.querySelector(`a[href="#${id}"]`);
    if (entry.isIntersecting) {
      document
        .querySelector(".navbar__menu--link--icon.active")
        .classList.remove("active");
      document
        .querySelector(".navbar__menu--link--text.active")
        .classList.remove("active");
      link.childNodes[1].classList.add("active");
      link.childNodes[3].classList.add("active");
    }
  });
}, options);

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    document
      .querySelector(".navbar__menu--link--icon.active")
      .classList.remove("active");
    document
      .querySelector(".navbar__menu--link--text.active")
      .classList.remove("active");
    e.target.childNodes[1].classList.add("active");
    e.target.childNodes[3].classList.add("active");
  });
  const hash = link.getAttribute("href");
  const target = document.querySelector(hash);
  if (target) {
    observer.observe(target);
  }
});

const loadingDocument = () => {
  document.getElementById("o").classList.toggle("loading__img--o");
  document.getElementById("d").classList.toggle("loading__img--d");
  document.getElementById("soporte").classList.toggle("loading__img--soporte");
  document.getElementById("ceja1").classList.toggle("loading__img--cejas");
  document.getElementById("ceja2").classList.toggle("loading__img--cejas");
};

let idInterval = setInterval(loadingDocument, 2550);

window.onload = () => {
  clearInterval(idInterval);
  document.getElementById("loading").style.display = "none";
  document.getElementById("header").removeAttribute("style");
  document.getElementById("home").removeAttribute("style");
  document.getElementById("description").removeAttribute("style");
  document.getElementById("proyect").removeAttribute("style");
  document.getElementById("contact").removeAttribute("style");
};

const golang = document.getElementById("golang");
const golangMessage = document.querySelector(".profile__golang--message");

golang.addEventListener("touchstart", (e) => {
  e.preventDefault();
  e.style = "transform: translateX(-100%) scale(.9)";
  golangMessage.classList.toggle("showMessage");
});

golang.addEventListener("click", (e) => {
  e.preventDefault();
  e.style = "transform: translateX(-100%) scale(.9)";
  golangMessage.classList.toggle("showMessage");
});