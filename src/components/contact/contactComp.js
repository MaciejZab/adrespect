const contact = `<div
class="container-sm d-flex flex-column flex-sm-row justify-content-sm-center col-green-bg col-grey p-5 gap-5"
>
<div class="d-flex align-items-center">
  <div>
    <span class="fam-mon-reg fs-40-sm">Zostańmy w kontakcie!<br />Znajdziesz nas na</span>
    <span class="fam-int-med-ita fs-40-sm">Instagramie.</span>
  </div>
</div>
<div class="d-flex flex-column justify-content-center fam-int-reg gap-3">
  <span>Śledź nasze najnowsze realizacje!</span>
  <span>
    <a class="btn col-grey-bg col-green rounded-pill" href="#" role="button">instagram</a>
  </span>
</div>
</div>`;

export const mountContact = () => {
  const hook = document.querySelector("#contact");
  hook.innerHTML = contact;
};
