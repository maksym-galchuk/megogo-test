const scrollContainer = document.querySelector(".snap-container");

const scrollMainPage = () => {
  scrollContainer.scrollTop = window.innerHeight;
};
document
  .querySelector(".hero__scroll-btn")
  .addEventListener("click", scrollMainPage);

const burger = document.querySelector(".burger");
burger.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});
