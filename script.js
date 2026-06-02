// ================= MOBILE MENU TOGGLE =================
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// ================= BACK TO TOP BUTTON =================
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }

  highlightNav();
  revealOnScroll();
});

topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// ================= SMOOTH SCROLL FOR HERO BUTTON =================
const heroBtn = document.querySelector(".hero-btn");

if (heroBtn) {
  heroBtn.addEventListener("click", () => {
    document.getElementById("properties").scrollIntoView({
      behavior: "smooth"
    });
  });
}

// ================= ACTIVE NAV LINK HIGHLIGHT =================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

function highlightNav() {
  let scrollPos = window.scrollY + 150;

  sections.forEach(section => {
    if (
      scrollPos >= section.offsetTop &&
      scrollPos < section.offsetTop + section.offsetHeight
    ) {
      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${section.id}`) {
          link.classList.add("active");
        }
      });
    }
  });
}

// ================= SCROLL REVEAL ANIMATION =================
const revealElements = document.querySelectorAll(
  ".property-card, .section-title, .gallery-grid img, #about p"
);

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add("show");
    }
  });
}

// ================= INITIAL LOAD ANIMATION =================
window.addEventListener("load", () => {
  revealOnScroll();
});

// ================= OPTIONAL: FLOATING BACKGROUND EFFECT =================
document.addEventListener("mousemove", (e) => {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;

  document.body.style.background = `
    radial-gradient(circle at ${x * 100}% ${y * 100}%, #1a2a6c, #0b1026)
  `;
});