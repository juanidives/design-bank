document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const mm = gsap.matchMedia();

  // Desktop Parallax
  mm.add("(min-width: 768px)", () => {
    // Hero Parallax
    const heroTrigger = document.querySelector(".js-top-mv");
    if (heroTrigger) {
      const heroSc = {
        trigger: heroTrigger,
        start: "top top",
        end: "bottom top",
        scrub: true
      };
      gsap.fromTo(".js-wave2", { yPercent: -10 }, { yPercent: 35, ease: "none", scrollTrigger: heroSc });
      gsap.fromTo(".js-wave1", { yPercent: -5 }, { yPercent: 20, ease: "none", scrollTrigger: heroSc });
      gsap.fromTo(".js-building", { yPercent: -2 }, { yPercent: 6, ease: "none", scrollTrigger: heroSc });
      gsap.fromTo(".js-circle", { yPercent: 0 }, { yPercent: 5, ease: "none", scrollTrigger: heroSc });
    }

    // Lead Section 1 Parallax (Story)
    const storySection = document.getElementById("story-section");
    if (storySection) {
      const storySc = {
        trigger: storySection,
        start: "top center",
        end: "bottom top",
        scrub: true
      };
      gsap.fromTo("#story-section .people-01 img", { yPercent: 5, scale: 1.15 }, { yPercent: -15, scale: 1.15, ease: "none", scrollTrigger: storySc });
      gsap.fromTo("#story-section .people-05 img", { yPercent: 15, scale: 1.15, rotation: -2 }, { yPercent: -25, scale: 1.15, rotation: 2, ease: "none", scrollTrigger: storySc });
      gsap.fromTo("#story-section .people-02 img", { yPercent: 25, scale: 1.15 }, { yPercent: -35, scale: 1.15, ease: "none", scrollTrigger: storySc });
    }

    // Lead Section 2 Parallax (Fleet)
    const fleetSection = document.getElementById("fleet-section");
    if (fleetSection) {
      const fleetSc = {
        trigger: fleetSection,
        start: "top center",
        end: "bottom top",
        scrub: true
      };
      gsap.fromTo("#fleet-section .lead2-a img", { yPercent: 10, scale: 1.15 }, { yPercent: -20, scale: 1.15, ease: "none", scrollTrigger: fleetSc });
      gsap.fromTo("#fleet-section .lead2-b img", { yPercent: 20, scale: 1.15 }, { yPercent: -30, scale: 1.15, ease: "none", scrollTrigger: fleetSc });
      gsap.fromTo("#fleet-section .lead2-c img", { yPercent: 5, scale: 1.15, rotation: 3 }, { yPercent: -15, scale: 1.15, rotation: -2, ease: "none", scrollTrigger: fleetSc });
    }
  });

  // Mobile Parallax
  mm.add("(max-width: 767px)", () => {
    // Story mobile parallax
    const storySection = document.getElementById("story-section");
    if (storySection) {
      const storySc = {
        trigger: storySection,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      };
      gsap.fromTo("#story-section .people-01 img", { yPercent: 2, scale: 1.1 }, { yPercent: -8, scale: 1.1, ease: "none", scrollTrigger: storySc });
      gsap.fromTo("#story-section .people-05 img", { yPercent: 5, scale: 1.1 }, { yPercent: -12, scale: 1.1, ease: "none", scrollTrigger: storySc });
      gsap.fromTo("#story-section .people-02 img", { yPercent: 0, scale: 1.1 }, { yPercent: -5, scale: 1.1, ease: "none", scrollTrigger: storySc });
    }

    // Fleet mobile parallax
    const fleetSection = document.getElementById("fleet-section");
    if (fleetSection) {
      const fleetSc = {
        trigger: fleetSection,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      };
      gsap.fromTo("#fleet-section .lead2-a img", { yPercent: 2, scale: 1.1 }, { yPercent: -8, scale: 1.1, ease: "none", scrollTrigger: fleetSc });
      gsap.fromTo("#fleet-section .lead2-b img", { yPercent: 5, scale: 1.1 }, { yPercent: -12, scale: 1.1, ease: "none", scrollTrigger: fleetSc });
      gsap.fromTo("#fleet-section .lead2-c img", { yPercent: 0, scale: 1.1 }, { yPercent: -5, scale: 1.1, ease: "none", scrollTrigger: fleetSc });
    }
  });
});
