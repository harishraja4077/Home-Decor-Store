document.querySelectorAll("[data-auth-form]").forEach((form) => {
  const message = form.querySelector("[data-form-message]");
  const type = form.dataset.authForm;

  if (type === "signup") {
    const password = form.querySelector('[name="password"]');
    const confirmPassword = form.querySelector('[name="confirmPassword"]');
    const validatePasswords = () => {
      confirmPassword.setCustomValidity(
        confirmPassword.value && confirmPassword.value !== password.value
          ? "Passwords do not match."
          : ""
      );
    };

    password.addEventListener("input", validatePasswords);
    confirmPassword.addEventListener("input", validatePasswords);
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const role = form.querySelector('input[name="role"]:checked') ||
      document.querySelector('input[name="role"]:checked');
    const roleLabel = role ? role.value : "User";
    const dashboard = roleLabel === "Admin"
      ? "dashboard/admin/overview.html"
      : "dashboard/user/overview.html";

    try {
      localStorage.setItem("stackly-role", roleLabel);
      localStorage.setItem("stackly-email", (form.querySelector('[name="email"]') || {}).value || "");
    } catch (error) {}

    const destination = type === "signup" ? "signin.html" : dashboard;

    message.textContent = type === "signup"
      ? "Account created. Taking you to sign in…"
      : `Welcome back. Signing you in as ${roleLabel}…`;

    window.setTimeout(() => {
      window.location.href = destination;
    }, 800);
  });
});

document.querySelectorAll("[data-reset-notice]").forEach((button) => {
  button.addEventListener("click", () => {
    window.location.href = "404.html";
  });
});

document.querySelectorAll("[data-social-notice]").forEach((button) => {
  button.addEventListener("click", () => {
    window.location.href = "404.html";
  });
});
