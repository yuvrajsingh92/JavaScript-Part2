let email = document.querySelector("#email");
let password = document.querySelector("#password");
// let email_span = document.querySelector("#email_span");
let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email_ragex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  const password_ragex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  let emailans = email_ragex.test(email.value);
  let passwordans = password_ragex.test(password.value);

  if (!emailans) {
    document.querySelector("#email_span").textContent = "Email is incorrect";
  }

  if (!passwordans) {
    document.querySelector("#password_span").textContent = "Password is Wrong";
  }
});
