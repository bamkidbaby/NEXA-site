// === Mobile menu ===
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const mobileOverlay = document.getElementById("mobileOverlay");
const closeBtn = document.getElementById("closeMobileMenu");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.add("active");
  mobileOverlay.classList.add("active");
});

function closeMenu() {
  mobileMenu.classList.remove("active");
  mobileOverlay.classList.remove("active");
}

closeBtn.addEventListener("click", closeMenu);
mobileOverlay.addEventListener("click", closeMenu);

// Mobile dropdown toggle
document.querySelectorAll(".mobile-dropdown .drop-btn").forEach(btn => {
  btn.addEventListener("click", e => {
    e.preventDefault();
    const parent = btn.parentElement;
    parent.classList.toggle("active");
  });
});

// Desktop dropdown hover + click
document.querySelectorAll(".nav-links .dropdown").forEach(drop => {
  const link = drop.querySelector("a"); // desktop link
  const menu = drop.querySelector(".dropdown-menu");

  // Click toggles dropdown without preventing menu access
  link.addEventListener("click", e => {
    if (window.innerWidth > 900) {
      e.preventDefault(); // prevent navigating if it’s just a menu parent
      drop.classList.toggle("active");
    }
  });

  // Close dropdown when mouse leaves parent and submenu
  drop.addEventListener("mouseleave", () => {
    if (window.innerWidth > 900) {
      drop.classList.remove("active");
    }
  });
});



//logo slider
const slider = document.querySelector(".logo-row");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.classList.remove("active");
});

slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.classList.remove("active");
});

slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2; // scroll-fast multiplier
  slider.scrollLeft = scrollLeft - walk;
});

//faq section
 // Select all FAQ cards
var faqCards = document.querySelectorAll('.faq-card');

faqCards.forEach(function(card) {
  card.addEventListener('click', function() {
    // Toggle the 'active' class on the clicked card
    card.classList.toggle('active');
  });
});
