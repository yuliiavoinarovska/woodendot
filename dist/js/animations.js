// GSAP ANIMATIONS
gsap.registerPlugin(ScrollTrigger);

// HERO
const tl = gsap.timeline();
tl.fromTo(
  ".hero__btn",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 1.4,
    ease: "power2.out",
  },
  0.6
)
  .fromTo(
    ".hero__title",
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1.4,
      ease: "power2.out",
    },
    0.4
  )
  .fromTo(
    ".hero__btn-black",
    {
      opacity: 0,
      y: 20,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1.4,
      ease: "power2.out",
    },
    1.2
  );

// BENEFITS SECTION
gsap.from(".benefits__icon", {
  scrollTrigger: {
    trigger: ".benefits",
    start: "-30% center",
    end: "+=300px",
    once: true,
  },
  scale: 0,
  transformOrigin: "left center",
  stagger: 0.6,
  duration: 1,
  ease: "power2.out",
});

gsap.from(".benefits__text", {
  scrollTrigger: {
    trigger: ".benefits",
    start: "-30% center",
    end: "+=300px",
    once: true,
  },
  scale: 0,
  opacity: 0,
  duration: 1,
  stagger: 0.6,
  ease: "power2.out",
});

// GALLERY
gsap.fromTo(
  ".gallery__item",
  {
    opacity: 0,
    x: 100,
  },
  {
    scrollTrigger: {
      trigger: ".gallery",
      start: "top 80%",
      end: "bottom top",
      scrub: true,
      onUpdate: (self) => {
        if (self.direction === 1) {
          gsap.to(".gallery__item", {
            opacity: 1,
            x: 0,
            duration: 1.4,
            stagger: 0.8,
          });
        }
      },
    },
  }
);

// PRODUCTS
gsap.utils.toArray(".product").forEach((product, index) => {
  gsap.fromTo(
    product,
    {
      opacity: 0,
      y: 100,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1.4,
      delay: index * 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: product,
        start: "top 80%",
        end: "bottom top",
        scrub: true,
        once: true,
      },
    }
  );
});

// INSTA-SLIDER
gsap.fromTo(
  ".insta-gallery__title",
  {
    opacity: 0,
    x: -100,
  },
  {
    opacity: 1,
    x: 0,
    duration: 1.4,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".insta-gallery",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      once: true,
    },
  }
);
gsap.fromTo(
  ".insta-gallery__subtitle",
  {
    opacity: 0,
    x: -100,
  },
  {
    opacity: 1,
    x: 0,
    duration: 1.4,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".insta-gallery",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      once: true,
    },
  }
);

// FEATURES
gsap.fromTo(
  ".features__card",
  {
    opacity: 0,
    x: -100,
  },
  {
    scrollTrigger: {
      trigger: ".features",
      start: "top 80%",
      end: "bottom top",
      scrub: true,
      onUpdate: (self) => {
        if (self.direction === 1) {
          gsap.to(".features__card", {
            opacity: 1,
            x: 0,
            duration: 1.4,
            stagger: 0.8,
          });
        }
      },
    },
  }
);

// PARTNERS
gsap.fromTo(
  ".partners__title",
  {
    opacity: 0,
    x: -100,
  },
  {
    opacity: 1,
    x: 0,
    duration: 1.4,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".partners",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      once: true,
    },
  }
);

gsap.from(".partners__logos>img", {
  scrollTrigger: {
    trigger: ".benefits",
    start: "-30% center",
    end: "+=300px",
    once: true,
  },
  scale: 0,
  transformOrigin: "left center",
  duration: 1,
  stagger: 0.4,
  ease: "power2.out",
});
