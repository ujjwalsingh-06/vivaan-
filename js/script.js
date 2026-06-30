// Mobile Navbar
const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

if (menuToggle && navbar) {
  menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("active");

    const icon = menuToggle.querySelector("i");
    if (navbar.classList.contains("active")) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-xmark");
    } else {
      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-bars");
    }
  });

  document.querySelectorAll(".navbar a").forEach((link) => {
    link.addEventListener("click", () => {
      navbar.classList.remove("active");

      const icon = menuToggle.querySelector("i");
      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-bars");
    });
  });
}

// Header Scroll Effect
const mainHeader = document.getElementById("mainHeader");

window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    mainHeader.classList.add("scrolled");
  } else {
    mainHeader.classList.remove("scrolled");
  }
});

// Scroll Reveal Animation
const revealElements = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
  revealElements.forEach((element) => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const revealPoint = 120;

    if (elementTop < windowHeight - revealPoint) {
      element.classList.add("active");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// Counter Animation
const counters = document.querySelectorAll(".counter");
let counterStarted = false;

const startCounters = () => {
  if (counterStarted) return;

  const statsSection = document.querySelector(".hero-stats");
  if (!statsSection) return;

  const sectionTop = statsSection.getBoundingClientRect().top;

  if (sectionTop < window.innerHeight) {
    counters.forEach((counter) => {
      const target = Number(counter.getAttribute("data-target"));
      let count = 0;
      const speed = Math.max(1, Math.floor(target / 80));

      const updateCounter = () => {
        if (count < target) {
          count += speed;
          counter.innerText = count > target ? target : count;
          requestAnimationFrame(updateCounter);
        } else {
          counter.innerText = target + "+";
        }
      };

      updateCounter();
    });

    counterStarted = true;
  }
};

window.addEventListener("scroll", startCounters);
window.addEventListener("load", startCounters);

// Back To Top Button
const backToTop = document.getElementById("backToTop");

if (backToTop) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      backToTop.classList.add("show");
    } else {
      backToTop.classList.remove("show");
    }
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}
