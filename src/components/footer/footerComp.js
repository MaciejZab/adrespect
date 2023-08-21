const footer = `<div
class="container-sm d-flex flex-column flex-md-row align-items-md-center p-0 pb-5 ps-5 ps-sm-0 border-bottom fam-int-reg gap-3"
>
<span class="flex-grow-1">
  <img
    src="./src/assets/icons/giarddesign-logo.svg"
    alt="giarddesign logo"
    style="height: 19px"
/></span>
<span>Daj znać, co możemy dla Ciebie zrobić!</span>
<span>
  <a class="btn col-green-bg col-grey rounded-pill" href="#" role="button"
    >Skontaktuj się z nami</a
  ></span
>
</div>
<div
class="container-sm d-flex flex-column flex-md-row justify-content-sm-between p-0 my-5 ps-5 ps-sm-0 gap-3"
>
<div class="d-flex flex-column flex-sm-row gap-3">
  <a href="#" class="text-decoration-none col-grey">Kontakt</a>
  <a href="#" class="text-decoration-none col-grey">Instagram</a>
  <a href="#" class="text-decoration-none col-grey">Facebook</a>
  <a href="#" class="text-decoration-none col-grey">LinkedIn</a>
</div>
<div class="d-flex flex-column flex-sm-row gap-3">
  <span>000-000-000</span>
  <span>giarddesign@kontakt.pl</span>
</div>
</div>
<div
class="container-sm d-flex flex-column flex-sm-row justify-content-sm-between p-0 mt-5 ps-5 ps-sm-0 gap-3"
>
<div>Prawa zastrzeżone © 2022</div>
<div class="d-flex gap-3">
  <span>made by</span
  ><img
    src="./src/assets/icons/adrespect-logo.svg"
    alt="adrespect logo"
    style="height: 23px"
  />
</div>
</div>`;

export const mountFooter = () => {
  const hook = document.querySelector("footer");
  hook.innerHTML = footer;
};
