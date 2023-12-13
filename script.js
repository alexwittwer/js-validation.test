const email = document.querySelector("#email");
const country = document.querySelector("#country");
const zipcode = document.querySelector("#zipcode");
const password = document.querySelector("#password");
const passwordConfirm = document.querySelector("#password-confirmation");
const submit = document.querySelector("#submit");
const form = document.querySelector("#html-form");

email.required = true;
country.required = true;
zipcode.required = true;
password.required = true;
passwordConfirm.required = true;

country.pattern = "[A-Za-z ]+";
zipcode.pattern = "^[0-9]{5}(?:-[0-9]{4})?$";
password.pattern = ".{8,}";

fields = [email, country, zipcode, password, passwordConfirm];

email.addEventListener("keyup", (e) => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I am expecting an email");
  } else {
    email.setCustomValidity("");
  }
});

zipcode.addEventListener("keyup", (e) => {
  if (zipcode.validity.patternMismatch) {
    zipcode.setCustomValidity(
      "Please enter a 5 digit zipcode, with an optional 4 digit locality code"
    );
  } else {
    zipcode.setCustomValidity("");
  }
});

country.addEventListener("keyup", (e) => {
  if (country.validity.patternMismatch) {
    country.setCustomValidity("Please enter a valid country name");
  } else {
    country.setCustomValidity("");
  }
});

password.addEventListener("keyup", (e) => {
  if (password.validity.patternMismatch) {
    password.setCustomValidity("Password must be 8 characters long");
  } else if (password.value !== passwordConfirm.value) {
    password.setCustomValidity("Passwords do not match");
  } else {
    password.setCustomValidity("");
  }
});

passwordConfirm.addEventListener("keyup", (e) => {
  if (passwordConfirm.value !== password.value) {
    passwordConfirm.setCustomValidity("Passwords do not match");
  } else {
    passwordConfirm.setCustomValidity("");
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fields.forEach((element) => {
    if (element.checkValidity()) {
      return;
    } else {
      alert("error");
    }
  });
});

function test() {
  const a = 1;
  const b = 2;
  const c = 3;

  return { a, b, c };
}

const { a, b, c } = test();

console.log(b);
