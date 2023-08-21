const content = `<div class="d-flex flex-column h-100 w-100 pt-5 ps-sm-5">
<span class="fam-mon-med fs-60-sm me-5 mb-3 col-black"
  >Nowoczesna aranżacja Twojego ogrodu
</span>
<span class="fam-int-reg col-black w-sm-75 mb-5"
  >Marka GiardDesign to wieloletnie doświadczenie i wysoka estetyka realizacji. Oferujemy
  kompleksowy zakres usług z indywidualnym podejściem do każdego projektu.
</span>
<div class="d-flex gap-4">
<span>
  <a class="btn col-green-bg col-grey rounded-pill" href="#contact" role="button"
    >Skontaktuj się z nami</a
  >
</span>
<a class="btn rounded-pill button-outline-green d-flex align-items-center gap-2"
href="#realizations"
>
  <span>Zobacz nasze realizacje</span>
  <svg
    width="16"
    height="17"
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 8.49529L15.1043 7.59959L8.63642 14.0769L8.63642 0.5L7.36358 0.5L7.36358 14.0675L0.895699 7.59959L9.54553e-08 8.49529L8.00471 16.5L16 8.49529Z"
      fill="currentColor"
    />
  </svg>
</a>
</div>
</div>
`;

export const mountIntroContent = () => {
  const hook = document.querySelector("#intro-content");
  hook.innerHTML = content;
};
