const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navBar = menuToggle ? menuToggle.closest(".nav-bar") : null;

function positionNavMenu() {
  if (!navBar || !navLinks) return;
  if (window.matchMedia("(max-width: 760px)").matches) {
    const rect = navBar.getBoundingClientRect();
    navLinks.style.top = Math.round(rect.bottom) + "px";
    navLinks.style.left = Math.round(rect.left) + "px";
    navLinks.style.width = Math.round(rect.width) + "px";
  } else {
    navLinks.style.top = "";
    navLinks.style.left = "";
    navLinks.style.width = "";
  }
}

function closeNavMenu() {
  if (!navLinks || !menuToggle) return;
  navLinks.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation");
}

if (menuToggle && navLinks && navBar) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    if (isOpen) positionNavMenu();
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeNavMenu);
  });

  window.addEventListener("resize", () => {
    if (window.matchMedia("(max-width: 760px)").matches) {
      if (navLinks.classList.contains("is-open")) positionNavMenu();
    } else {
      closeNavMenu();
    }
  });

  window.addEventListener("scroll", () => {
    if (navLinks.classList.contains("is-open")) closeNavMenu();
    navBar.classList.toggle("is-scrolled", window.scrollY > 6);
  }, { passive: true });
  navBar.classList.toggle("is-scrolled", window.scrollY > 6);

  document.addEventListener("click", (event) => {
    if (!navLinks.classList.contains("is-open")) return;
    if (navBar.contains(event.target)) return;
    closeNavMenu();
  });
}

const contactForm = document.querySelector(".contact-form");
const formStatus = document.querySelector(".contact-form-status");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!contactForm.reportValidity()) return;

  const formData = new FormData(contactForm);
  const subject = `Stackly enquiry: ${formData.get("subject")}`;
  const body = [
    `Name: ${formData.get("name")}`,
    `Email: ${formData.get("email")}`,
    `Phone: ${formData.get("phone") || "Not provided"}`,
    "",
    String(formData.get("message"))
  ].join("\n");

  formStatus.textContent = "Your email app will open with your enquiry ready to send.";
  window.location.href = `mailto:hello@stacklyhome.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

document.querySelector(".newsletter-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const email = document.querySelector("#contact-email");
  const message = document.querySelector(".form-message");
  if (!email.checkValidity()) {
    email.reportValidity();
    return;
  }

  message.textContent = "Thank you for joining us. Look out for a note from our studio.";
  email.value = "";
});
