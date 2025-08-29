document.addEventListener("DOMContentLoaded", function () {
  const emailBox = document.getElementById("emailBox");
  const emailInput = document.getElementById("emailInput");
  const submitButton = document.getElementById("submitButton");
  const validationMessage = document.getElementById("validationMessage");

  // Focus effect
  emailInput.addEventListener("focus", function () {
    emailBox.classList.add("focused");
  });

  emailInput.addEventListener("blur", function () {
    emailBox.classList.remove("focused");
  });

  // Email validation function
  function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  // Submit handler
  function handleSubmit() {
    const email = emailInput.value.trim();

    if (!email) {
      validationMessage.textContent = "Please enter your email address";
      emailBox.classList.add("shake");
      setTimeout(() => emailBox.classList.remove("shake"), 500);
      return;
    }

    if (!isValidEmail(email)) {
      validationMessage.textContent = "Please enter a valid email address";
      emailBox.classList.add("shake");
      setTimeout(() => emailBox.classList.remove("shake"), 500);
      return;
    }

    // If valid
    validationMessage.textContent = "Thank you for subscribing!";

    // Simulate successful submission
    setTimeout(() => {
      emailInput.value = "";
      emailInput.blur();
      validationMessage.textContent = "";
    }, 2000);
  }

  // Event listeners
  submitButton.addEventListener("click", handleSubmit);

  emailInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      handleSubmit();
    }
  });
});
