document.querySelector(".btn-submit").addEventListener("click", (e) => {
  e.preventDefault();

  const inputs = {
    name: document.getElementById("nameInput"),
    email: document.getElementById("emailInput"),
    message: document.getElementById("messageInput"),
  };

  const errors = {
    name: document.getElementById("nameError"),
    email: document.getElementById("emailError"),
    message: document.getElementById("messageError"),
  };

  //In this function, I used the regex pattern to ensure the input for the name contains only letters, spaces, and Cyrillic letters as well.
  //The regex pattern for email ensures the format follows a standard email address structure.
  const rules = {
    name: {
      required: "Name is required",
      regex: /^[a-zA-Zа-шА-Ш\s-]+$/,
      invalid: "Please enter a valid name",
    },
    email: {
      required: "E-mail is required",
      regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      invalid: "Please enter a valid email address",
    },
    message: {
      required: "Message is required",
    },
  };

  let isValid = true;

  Object.values(errors).forEach((errorElement) => {
    errorElement.classList.add("hidden");
    errorElement.textContent = "";
  });

  Object.keys(inputs).forEach((key) => {
    const input = inputs[key];
    const errorElement = errors[key];
    const rule = rules[key];

    if (!input.value.trim()) {
      errorElement.textContent = rule.required;
      errorElement.classList.remove("hidden");
      isValid = false;
    } else if (rule.regex && !rule.regex.test(input.value.trim())) {
      errorElement.textContent = rule.invalid;
      errorElement.classList.remove("hidden");
      isValid = false;
    }
  });

  if (isValid) {
    const successModal = new bootstrap.Modal(
      document.getElementById("successModal")
    );

    successModal.show();

    console.log("Form submitted successfully");
  }
});
