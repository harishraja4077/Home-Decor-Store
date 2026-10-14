const toast = document.querySelector(".toast");
let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 2600);
}

document.querySelectorAll(".add-button").forEach((button) => {
  button.addEventListener("click", () => {
    window.location.href = "404.html";
  });
});

document.querySelectorAll(".heart-button").forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    const isFavorite = button.classList.toggle("is-favorite");
    button.setAttribute("aria-pressed", String(isFavorite));
    showToast(isFavorite ? "Added to your favorites" : "Removed from your favorites");
  });
});

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navBar = menuToggle ? menuToggle.closest(".nav-bar") : null;
let menuCloseButton = null;

function lockScroll(lock) {
  document.documentElement.classList.toggle("no-scroll", lock);
  document.body.classList.toggle("no-scroll", lock);
}

function ensureMenuCloseButton() {
  if (!navLinks || menuCloseButton) return;
  menuCloseButton = document.createElement("button");
  menuCloseButton.type = "button";
  menuCloseButton.className = "menu-close";
  menuCloseButton.setAttribute("aria-label", "Close navigation");
  menuCloseButton.innerHTML =
    '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><g fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 6 18 18"></path><path d="M18 6 6 18"></path></g></svg>';
  navLinks.prepend(menuCloseButton);
  menuCloseButton.addEventListener("click", closeNavMenu);
}

function closeNavMenu() {
  if (!navLinks || !menuToggle) return;
  navLinks.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation");
  lockScroll(false);
}

if (menuToggle && navLinks && navBar) {
  ensureMenuCloseButton();

  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    lockScroll(isOpen);
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeNavMenu);
  });

  window.addEventListener("resize", () => {
    if (window.matchMedia("(max-width: 760px)").matches) {
      if (navLinks.classList.contains("is-open")) lockScroll(true);
    } else {
      closeNavMenu();
    }
  });

  window.addEventListener("scroll", () => {
    navBar.classList.toggle("is-scrolled", window.scrollY > 6);
  }, { passive: true });
  navBar.classList.toggle("is-scrolled", window.scrollY > 6);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && navLinks.classList.contains("is-open")) closeNavMenu();
  });

  document.addEventListener("click", (event) => {
    if (!navLinks.classList.contains("is-open")) return;
    if (navBar.contains(event.target)) return;
    closeNavMenu();
  });
}

const newsletterForm = document.querySelector(".newsletter-form");
if (newsletterForm) {
  newsletterForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = document.querySelector("#email");
    const message = document.querySelector(".form-message");
    if (!email.checkValidity()) {
      email.reportValidity();
      return;
    }
    message.textContent = "Thank you for joining us. Look out for a note from our studio.";
    email.value = "";
  });
}
