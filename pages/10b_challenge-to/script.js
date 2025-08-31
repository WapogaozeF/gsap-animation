import gsap from "gsap";

gsap.to(".one", {
  y: -100,
  duration: 1,
  ease: "expo.out",
  onComplete: () => {
    gsap.to(".one", {
      y: 0,
      duration: 0.5,
      delay: 2.5,
      onComplete: () => {
        gsap.to(".two", {
          y: -100,
          duration: 1,
          ease: "expo.out",
          onComplete: () => {
            gsap.to(".two", {
              y: 0,
              delay: 2.5,
              duration:0.5,
            });
          }
        });
      }
    });
  }
});
