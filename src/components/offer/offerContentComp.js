const content = `<span class="fam-int-reg fs-12 col-green">Oferta</span>
<span class="fam-mon-med fs-48-sm me-5 mb-3 col-black"
  >Działamy <span class="fam-int-med-ita">kompleksowo</span></span
>
<span class="fam-int-reg col-black w-sm-50 mb-4 me-5"
  >Oferujemy kompletną obsługę inwestycji terenów zielonych. Projektujemy nowoczesne ogrody
  przydomowe oraz rezydencjonalne. Stworzymy dla Ciebie projekt, zwizualizujemy go i
  wcielimy w życie, a na każdym etapie posłużymy radą i wieloletnim doświadczeniem.
</span>`;

export const mountOfferContent = () => {
  const hook = document.querySelector("#offer-content");
  hook.innerHTML = content;
};
