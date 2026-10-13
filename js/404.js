(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var toast = document.querySelector(".toast");
  var toastTimer;

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("is-visible");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(function () {
      toast.classList.remove("is-visible");
    }, 2600);
  }

  var goBack = document.querySelector("[data-go-back]");
  if (goBack) {
    goBack.addEventListener("click", function () {
      if (window.history.length > 1) {
        window.history.back();
      } else {
        window.location.href = "index.html";
      }
    });
  }

  var navBar = document.querySelector(".nav-bar");
  if (navBar) {
    var syncNav = function () {
      navBar.classList.toggle("is-scrolled", window.scrollY > 6);
    };
    window.addEventListener("scroll", syncNav, { passive: true });
    syncNav();
  }

  var newsletter = document.querySelector(".newsletter-form");
  if (newsletter) {
    newsletter.addEventListener("submit", function (event) {
      event.preventDefault();
      var email = document.querySelector("#nf-email");
      var message = document.querySelector(".form-message");
      if (email && !email.checkValidity()) {
        email.reportValidity();
        return;
      }
      if (message) message.textContent = "Thank you for joining us. Look out for a note from our studio.";
      if (email) email.value = "";
    });
  }

  var rotator = document.querySelector(".nf-rotator");
  if (rotator) {
    var phrases = (rotator.dataset.rotator || "").split("|").filter(Boolean);
    if (reduceMotion || phrases.length < 2) {
      if (phrases.length) rotator.textContent = phrases[0];
    } else {
      var phraseIndex = 0;
      var charIndex = phrases[0].length;
      var deleting = false;
      var startDelay = 1800;

      var tick = function () {
        var word = phrases[phraseIndex];
        rotator.textContent = word.slice(0, charIndex);

        if (!deleting && charIndex < word.length) {
          charIndex++;
          window.setTimeout(tick, 55);
        } else if (!deleting) {
          deleting = true;
          window.setTimeout(tick, startDelay);
        } else if (charIndex > 0) {
          charIndex--;
          window.setTimeout(tick, 28);
        } else {
          deleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
          window.setTimeout(tick, 320);
        }
      };

      window.setTimeout(function () {
        deleting = true;
        tick();
      }, startDelay);
    }
  }

  var glow = document.querySelector(".nf-glow");
  if (glow && !reduceMotion && window.matchMedia("(pointer: fine)").matches) {
    window.addEventListener("pointermove", function (event) {
      glow.style.transform = "translate(" + event.clientX + "px," + event.clientY + "px) translate(-50%,-50%)";
      glow.style.opacity = "1";
    });
    document.addEventListener("pointerleave", function () {
      glow.style.opacity = "0";
    });
  }
})();
