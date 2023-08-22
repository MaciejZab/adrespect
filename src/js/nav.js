export const mountNavEvents = () => {
  const nav = document.querySelector("nav");
  const searchForm = nav?.querySelector(".search-click");
  const hamburgerMenu = nav?.querySelector("#hamburger");
  const standardMenu = nav?.querySelector("#nav-menu");
  //
  searchForm?.addEventListener("click", () => {
    hamburgerMenu.setAttribute("aria-hidden", "true");
    standardMenu.setAttribute("aria-hidden", "true");
    searchForm.setAttribute("aria-expanded", "true");
  });

  document.addEventListener("click", (event) => {
    if (searchForm !== event.target) {
      setTimeout(() => {
        hamburgerMenu.setAttribute("aria-hidden", "false");
        standardMenu.setAttribute("aria-hidden", "false");
        searchForm.setAttribute("aria-expanded", "false");
      }, 500);
    }
  });

  searchForm?.addEventListener("submit", () => {
    setTimeout(() => {
      hamburgerMenu.setAttribute("aria-hidden", "false");
      standardMenu.setAttribute("aria-hidden", "false");
      searchForm.setAttribute("aria-expanded", "false");
    }, 500);
  });
};
