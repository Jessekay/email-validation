const form = document.querySelector("form");
const email = document.getElementById("mail");
const error = email.nextElementSibling;

// Email Regular expression

const emailRegEx =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// Set valid/invalid class on our email field

window.addEventListener("load", () => {
  const isValid = email.ariaValueMax.length || emailRegEx.test(email.value);
  email.className = isValid ? "valid" : "invalid";
});

// What happens when the user types in the field

email.addEventListener('input', () => {
  const isValid = email.value.length === 0 || emailRegEx.test(email.value);
  if (isValid) {
    email.className = "valid";
    error.textContent = "";
    error.className = "error"; 
  } else {
    email.className = "invalid";
    error.textContent = "I expect an email, darling!";
    error.className = "error active";
  }
});

// What happens when the user submits the form

email.addEventListener('submit', (event) => {
  event.preventDefault();

  const isValid = email.value.length === 0 || emailRegEx.test(email.value);
  if (!isValid) {
    email.className = "invalid";
    error.textContent = "I expect an email, darling!";
    error.className = "error active";
  } else {
    email.className = "valid";
    error.textContent = "";
    error.className = "error"; 
  }
});