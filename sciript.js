const searchform = document.querySelector(".search-form");
const cardItem = document.querySelector(".card-items-conteiner");
const navbar = document.querySelector(".navbar");

/* buttons*/

const searchBtn = document.querySelector("#search-btn");
const cardBtn = document.querySelector("#card-btn");
const menuBtn = document.querySelector("#menu-btn");

searchBtn.addEventListener("click", function () {
  searchform.classList.toggle("active");
  document.addEventListener("click", function (e) {
    if (
      !e.composedPath().includes(searchBtn) &&
      !e.composedPath().includes(searchform)
    ) {
      searchform.classList.remove("active");
    }
  });
});

cardBtn.addEventListener("click", function () {
  cardItem.classList.toggle("active");
  document.addEventListener("click", function (e) {
    if (
      !e.composedPath().includes(cardBtn) &&
      !e.composedPath().includes(cardItem)
    ) {
      cardItem.classList.remove("active");
    }
  });
});

menuBtn.addEventListener("click", function () {
  navbar.classList.toggle("active");
  document.addEventListener("click", function (e) {
    if (
      !e.composedPath().includes(menuBtn) &&
      !e.composedPath().includes(navbar)
    ) {
      navbar.classList.remove("active");
    }
  });
});
