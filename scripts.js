document.addEventListener("DOMContentLoaded", function () {
  var headerHeight = document.querySelector("header").offsetHeight;
  var navbar = document.getElementById("myNavbar");

  function toggleNavbarClass() {
    if (window.pageYOffset > headerHeight) {
      navbar.classList.add("navbar-scroll");
      navbar.classList.add("container")
      navbar.classList.remove("navbar-scrollB");
      navbar.classList.remove("container-fluid")
    } else {
      navbar.classList.remove("navbar-scroll");
      navbar.classList.remove("container")
      navbar.classList.add("navbar-scrollB");
      navbar.classList.add("container-fluid");
    }
  }

  toggleNavbarClass();
  window.addEventListener("scroll", toggleNavbarClass);
});

window.sr = ScrollReveal();
sr.reveal(`.about__content`, {
  duration: 3000,
  origin: `top`,
  distance: `-50px`,
});
sr.reveal(`.about__picture`, {
  duration: 3000,
  origin: `bottom`,
  distance: `-50px`,
});
sr.reveal(`.contact-container`, {
  duration: 5000,
});

sr.reveal(`.form-container`, {
  duration: 3000,
  origin: `right`,
  distance: `-500px`,
});
sr.reveal(`.form-container h3`, {
  duration: 3000,
  origin: `bottom`,
  distance: `-100px`,
});

sr.reveal(`.map`, {
  duration: 3000,
  origin: `left`,
  distance: `-500px`,
});

sr.reveal("#leng-button", {
  duration: 3000,
  origin: `left`,
  distance: `-500px`,
});

sr.reveal("#construction-title", {
  duration: 3000,
  origin: `bottom`,
  distance: `-100px`,
});

sr.reveal("#carousel-img", {
  duration: 3000,
  origin: `right`,
  distance: `-100px`,
});

sr.reveal("#work-title", {
  duration: 3000,
  origin: `right`,
  distance: `-100px`,
});

sr.reveal("#work-subtitle", {
  duration: 5000,
  origin: `left`,
  distance: `-100px`,
});

sr.reveal("#work-button", {
  duration: 6000,
  origin: `left`,
  distance: `-100px`,
});
