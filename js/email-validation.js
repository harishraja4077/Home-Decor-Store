(function () {
  "use strict";

  var EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var GMAIL_PATTERN = /@gmail\.com$/i;
  var MESSAGE_SELECTOR = ".form-message, .contact-form-status, [data-form-message]";

  function messageFor(input) {
    var value = (input.value || "").trim();
    if (!value) return "Please enter your email address.";
    if (!EMAIL_PATTERN.test(value)) return "Please enter a valid email address.";
    if (!GMAIL_PATTERN.test(value)) return "Email must be a valid Gmail address ending with @gmail.com.";
    return "";
  }

  function targetFor(form) {
    var node = form.querySelector(MESSAGE_SELECTOR);
    if (node) return node;
    if (form.parentElement) return form.parentElement.querySelector(MESSAGE_SELECTOR);
    return null;
  }

  function clearError(input) {
    var form = input.form;
    if (!form) return;
    var target = targetFor(form);
    if (target && target.classList.contains("is-error")) {
      target.textContent = "";
      target.classList.remove("is-error");
    }
  }

  function validate(input, showMessage) {
    var message = messageFor(input);
    input.setCustomValidity(message);

    if (message) {
      input.setAttribute("aria-invalid", "true");
    } else {
      input.removeAttribute("aria-invalid");
    }

    if (showMessage && input.form) {
      var target = targetFor(input.form);
      if (target) {
        if (message) {
          target.textContent = message;
          target.classList.add("is-error");
        } else if (target.classList.contains("is-error")) {
          target.textContent = "";
          target.classList.remove("is-error");
        }
      }
    }

    return !message;
  }

  function bind(input) {
    input.addEventListener("input", function () {
      if (validate(input, false)) clearError(input);
    });
    input.addEventListener("blur", function () {
      validate(input, true);
    });
  }

  Array.prototype.forEach.call(document.querySelectorAll('input[type="email"]'), bind);

  document.addEventListener("submit", function (event) {
    var form = event.target;
    if (!form || form.tagName !== "FORM") return;

    var emails = form.querySelectorAll('input[type="email"]');
    if (!emails.length) return;

    var firstInvalid = null;
    Array.prototype.forEach.call(emails, function (input) {
      if (!validate(input, true) && !firstInvalid) firstInvalid = input;
    });

    if (firstInvalid) {
      event.preventDefault();
      event.stopImmediatePropagation();
      firstInvalid.reportValidity();
    }
  }, true);

  var style = document.createElement("style");
  style.textContent = ".form-message.is-error, .contact-form-status.is-error, [data-form-message].is-error { color: #b4513d !important; }";
  document.head.appendChild(style);
})();
