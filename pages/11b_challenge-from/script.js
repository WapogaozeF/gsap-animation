import gsap from "gsap";

const card = document.querySelector("#card");

gsap.from(card, {
  rotateY: -90,
  opacity: 1,
  duration: 1,
  ease: "back.out(1.7)"
});

card.addEventListener("mouseenter", () => {
  gsap.to(card, {
    rotateY: 180,
    duration: 0.8,
    ease: "power3.inOut",
    transformOrigin: "center",
  });
});

card.addEventListener("mouseleave", () => {
  gsap.to(card, {
    rotateY: 0,
    duration: 0.8,
    ease: "power3.inOut",
    transformOrigin: "center",
  });
});
