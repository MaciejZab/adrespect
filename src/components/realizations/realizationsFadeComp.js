const fade = `<div
class="btn rounded-pill button-outline-black d-flex align-items-center gap-2 position-absolute mb-5"
>
<span>Rozwiń</span>
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
</div>`;

export const mountRealizationsFade = () => {
  const hook = document.querySelector("#fade");
  hook.innerHTML = fade;
};
