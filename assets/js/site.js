(() => {
  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".site-nav");
  if (menuButton && navigation) {
    const closeMenu = () => {
      menuButton.setAttribute("aria-expanded", "false");
      navigation.classList.remove("is-open");
    };
    menuButton.addEventListener("click", () => {
      const isOpen = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!isOpen));
      navigation.classList.toggle("is-open", !isOpen);
    });
    navigation.addEventListener("click", (event) => {
      if (event.target.closest("a")) closeMenu();
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeMenu();
        menuButton.focus();
      }
    });
    window.matchMedia("(min-width: 881px)").addEventListener("change", closeMenu);
  }

  const form = document.querySelector("[data-estimate-form]");
  if (!form) return;

  const submitButton = form.querySelector("[type=submit]");
  const status = document.getElementById("form-status");
  const endpoint = form.dataset.endpoint.trim();
  const originalButtonText = submitButton.textContent;

  const announce = (message, state) => {
    status.textContent = message;
    status.dataset.state = state;
  };

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (submitButton.disabled) return;

    if (!endpoint) {
      announce("Form delivery is not configured yet. Your information has not been sent. Please check back after the estimate form is set up.", "error");
      return;
    }

    const email = form.elements.namedItem("email").value.trim();
    const phone = form.elements.namedItem("phone").value.trim();
    if (!email && !phone) {
      announce("Please add an email address or phone number so Ethan can follow up.", "error");
      (form.elements.namedItem("email")).focus();
      return;
    }
    if (!form.querySelector("input[name='services[]']:checked")) {
      announce("Choose at least one service you are interested in.", "error");
      form.querySelector("input[name='services[]']").focus();
      return;
    }
    const captchaResponse = form.querySelector("textarea[name='h-captcha-response']");
    if (!captchaResponse?.value.trim()) {
      announce("Please complete the spam-protection check before sending your request.", "error");
      form.querySelector(".h-captcha")?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    submitButton.disabled = true;
    submitButton.textContent = "Sending request…";
    announce("Sending your request…", "info");

    try {
      const formData = new FormData(form);
      const response = await fetch(endpoint, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      const result = await response.json();
      if (!response.ok || result.success !== true) {
        throw new Error(result.message || "The form service could not accept your request. Please try again later.");
      }
      form.reset();
      announce("Thanks — your estimate request was accepted. Ethan will follow up using the contact details you provided.", "success");
    } catch (error) {
      announce(error instanceof TypeError ? "We couldn't reach the form service. Your request was not confirmed as sent. Please try again later." : error.message, "error");
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = originalButtonText;
    }
  });
})();