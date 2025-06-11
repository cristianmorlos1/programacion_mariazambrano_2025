gsap.registerPlugin(ScrollTrigger);

gsap.to("h1", {
  scrollTrigger: {
    trigger: "h1",
    start: "top 80%", // cuando el top del h1 llegue al 80% de la pantalla
    toggleActions: "play none none none"
  },
  opacity: 1,
  x: 0,
  duration: 1.5,
  ease: "power3.out"
});

gsap.utils.toArray("p").forEach((p, i) => {
  gsap.to(p, {
    scrollTrigger: {
      trigger: p,
      start: "top 85%",
      toggleActions: "play none none none"
    },
    opacity: 1,
    x: 0,
    duration: 1.3,
    delay: i * 0.3,
    ease: "power3.out"
  });
});

gsap.to("img", {
  scrollTrigger: {
    trigger: "img",
    start: "top 85%",
    toggleActions: "play none none none"
  },
  opacity: 1,
  scale: 1,
  duration: 1.5,
  ease: "power3.out"
});



// Animación del enlace
gsap.to("a", {
  scrollTrigger: {
    trigger: "a",
    start: "top 95%",
    toggleActions: "play none none none",
    // markers: true, // activa para debug
  },
  opacity: 1,
  y: 0,
  duration: 1.5,
  ease: "power3.out"
});

