import gsap from "gsap";

const button = document.querySelectorAll(".reactions button");

button.forEach((btn) => {
  btn.addEventListener("click", () => {
    const emoji = btn.dataset.emoji;

    const bubble = document.createElement("span");
    bubble.classList.add("bubble");
    bubble.textContent = emoji;

    const rect = btn.getBoundingClientRect();
    bubble.style.left = rect.left + rect.width / 2 + "px";
    bubble.style.top = rect.top + "px";

    document.body.appendChild(bubble);

    gsap.fromTo(bubble, {
      y: 0,
      scale: 0.5,
      opacity: 1,
      rotate: 0
    }, {
      y: -200 - Math.random() * 100,
      x: (Math.random() - 0.5) * 150,
      scale: 1.5,
      rotate: Math.random() * 360,
      opacity: 0,
      duration: 1.5 + Math.random(),
      ease: "power2.out",
      onComplete: () => bubble.remove(),
    });
  });
});
