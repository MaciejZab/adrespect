const carousel = `<div id="carouselIntro" class="carousel slide h-100" data-bs-ride="carousel">
<div id="intro-carousel-inner" class="carousel-inner h-100">
  <div class="carousel-item h-100 active">
    <img
      src="./src/assets/imgs/inspirations/inspiration7/4.jpg"
      class="d-block w-100 h-100"
      alt="..."
    />
  </div>
  <div class="carousel-item h-100">
    <img
      src="./src/assets/imgs/inspirations/inspiration6/1.jpg"
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
  <div class="col-grey-bg position-absolute d-flex" style="right: 0; bottom: 0; width: 192px; height: 96px;">
    <button class="w-25 m-4 carousel-control-prev" type="button" data-bs-target="#carouselIntro" data-bs-slide="prev">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="#111111" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
      </svg>

      <span class="visually-hidden">Previous</span>
    </button>
    <button class="w-25 m-4 carousel-control-next" type="button" data-bs-target="#carouselIntro" data-bs-slide="next">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="#111111" class=" w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
      </svg>
  
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</div>
</div>`;

export const mountIntroCarousel = () => {
  const hook = document.querySelector("#intro-carousel");
  hook.innerHTML = carousel;
};