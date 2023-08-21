const carousel = `<div id="carouselAbout" class="carousel slide h-100" data-bs-ride="carousel">
<div id="about-carousel-inner" class="carousel-inner h-100">
  <div class="carousel-item h-100 active">
    <img
      src="./src/assets/imgs/inspirations/inspiration13/2.jpg"
      class="d-block w-100 h-100"
      alt="..."
    />
  </div>
  <div class="carousel-item h-100">
    <img
      src="./src/assets/imgs/inspirations/inspiration7/4.jpg"
      class="d-block w-100 h-100"
      alt="..."
    />
  </div>
  <div class="carousel-item h-100">
    <img
      src="./src/assets/imgs/inspirations/inspiration9/2.jpg"
      class="d-block w-100 h-100"
      alt="..."
    />
  </div>
</div>
</div>`;

export const mountAboutCarousel = () => {
  const hook = document.querySelector("#about-carousel");
  hook.innerHTML = carousel;
};