document
  .querySelector(".signup__form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const inputs = [
      {
        input: document.querySelector(".form__input-first-name"),
        message: "First Name cannot be empty",
      },
      {
        input: document.querySelector(".form__input-last-name"),
        message: "Last Name cannot be empty",
      },
      {
        input: document.querySelector(".form__input-email"),
        message: "Looks like this is not an email",
      },
      {
        input: document.querySelector(".form__input-password"),
        message: "Password cannot be empty",
      },
    ];

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    clearErrors();

    let hasError = false;

    inputs.forEach(({ input, message }) => {
      if (
        input.value.trim() === "" ||
        (input.type === "email" && !emailRegex.test(input.value.trim()))
      ) {
        showError(input, message);
        hasError = true;
      }
    });

    if (!hasError) {
      alert("Form submitted successfully!");
      this.submit();
    }
  });

function showError(input, message) {
  const parent = input.parentElement;
  input.classList.add("error");

  const errorIcon = document.createElement("span");
  errorIcon.className = "error-icon";
  errorIcon.innerHTML = '<img src="./images/icon-error.svg" alt="error">';

  const errorText = document.createElement("small");
  errorText.className = "error-text";
  errorText.innerText = message;

  parent.appendChild(errorIcon);
  parent.appendChild(errorText);
}

function clearErrors() {
  document.querySelectorAll(".error").forEach((input) => {
    input.classList.remove("error");
  });

  document.querySelectorAll(".error-icon, .error-text").forEach((element) => {
    element.remove();
  });
}

const style = document.createElement("style");
style.innerHTML = `
    .error {
    border-color: hsl(0, 100%, 74%) !important;
  }
  .error-icon {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
  }
  .error-text {
    color: hsl(0, 100%, 74%);
    font-size: 12px;
    margin: 2px 0 0 0;
    text-align: right;
    display: block;
  }
  .signup__form {
    position: relative;
  }
  .form__group {
    position: relative;
    width: 100%;
  }
  .form__input {
    width: 100%;
    padding-right: 40px;
  }
`;
document.head.appendChild(style);
