const headerLogo = document.querySelector(".header__logo");
const headerIcon = document.querySelector(".header__icon");
const headerNavigation = document.querySelector(".header__navigation");
const headerItems = document.querySelectorAll(".header__item");

function showNavigation() {
  if (headerLogo && headerIcon) {
    headerIcon.addEventListener("click", (e) => {
      document.body.classList.toggle("lock");
      headerLogo.classList.toggle("active");
      headerIcon.classList.toggle("active");
      headerNavigation.classList.toggle("active");
    });
  }
}

function closeNavigation() {
  headerItems.forEach((headerItem) => {
    headerItem.addEventListener("click", (e) => {
      if (headerIcon.classList.contains("active")) {
        document.body.classList.remove("lock");
        headerLogo.classList.remove("active");
        headerIcon.classList.remove("active");
        headerNavigation.classList.remove("active");
      }
    });
  });
}

export { showNavigation, closeNavigation };