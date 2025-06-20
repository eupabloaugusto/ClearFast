// Video Section 02  ---------||--------

const video = document.querySelector("#play_video");

video.addEventListener("click", videoPlay);

function videoPlay(evt) {
  console.log("Clicou no vídeo!");
  evt.currentTarget.removeEventListener("click", videoPlay);
  video.innerHTML = `<iframe width="665" height="600" border-radius="8px" src="https://www.youtube.com/embed/Q_f4076w5y0?autoplay=1&loop=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
}

// Contagem Gsap - ScrollTrigger  ---------||--------

gsap.registerPlugin(ScrollTrigger);

let contador = { valorSrvc: 0, valor_cidade: 0, valor_avaliacao: 0 };

gsap.to(contador, {
  valorSrvc: 6500, // Valor final
  duration: 3,
  scrollTrigger: {
    trigger: ".numeros-gerados",
    start: "top 80%",
  },
  onUpdate: () => {
    document.getElementById("srvc").textContent =
      Math.floor(contador.valorSrvc) + "+";
  },
});

gsap.to(contador, {
  valor_cidade: 85,
  duration: 3,
  scrollTrigger: {
    trigger: ".numeros-gerados",
    start: "top 80%",
  },
  onUpdate: () => {
    document.getElementById("cidade").textContent =
      Math.floor(contador.valor_cidade) + "+";
  },
});

gsap.to(contador, {
  valor_avaliacao: 4.8,
  duration: 3,
  scrollTrigger: {
    trigger: ".numeros-gerados",
    start: "top 80%",
  },
  onUpdate: () => {
    document.querySelector("#avaliacao").textContent =
      contador.valor_avaliacao.toFixed(1) + "/5";
  },
});

// Scroll Out Gsap - ScrollTrigger  ---------||--------
gsap.fromTo(
  ".card-1",
  { y: 500, opacity: -10 },
  {
    y: 0,
    opacity: 1,
    duration: 0.3,
    ease: "linear",
    scrollTrigger: {
      trigger: ".card-group",
      start: "top 100%",
      toggleActions: "play none none reverse",
    },
  }
);

gsap.fromTo(
  ".card-2",
  { y: 500, opacity: -10 },
  {
    y: 0,
    opacity: 1,
    duration: 0.4,
    ease: "linear",
    scrollTrigger: {
      trigger: ".card-group",
      start: "top 100%",
      toggleActions: "play none none reverse",
    },
  }
);

gsap.fromTo(
  ".card-3",
  { y: 500, opacity: -10 },
  {
    y: 0,
    opacity: 1,
    duration: 0.5,
    ease: "linear",
    scrollTrigger: {
      trigger: ".card-group",
      start: "top 100%",
      toggleActions: "play none none reverse",
    },
  }
);

gsap.fromTo(
  ".card-4",
  { y: 500, opacity: -10 },
  {
    y: 0,
    opacity: 1,
    duration: 0.6,
    ease: "linear",
    scrollTrigger: {
      trigger: ".card-group",
      start: "top 100%",
      toggleActions: "play none none reverse",
    },
  }
);
// Scroll Out Gsap - ScrollTrigger            ## FINAL ## //
