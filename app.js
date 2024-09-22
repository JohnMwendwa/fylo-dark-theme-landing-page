const form = document.querySelector("form");
const emailInput = document.querySelector("input");
const error = document.querySelector(".error");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (emailInput.value === "") {
    error.textContent = "Please enter a valid email address";
  }

  // Validate email address
  else if (!emailInput.value.includes("@")) {
    error.textContent = "Please enter a valid email address";
  } else {
    //   Show success message
    error.textContent = "Success! You are now subscribed";
    error.style.color = "lightgreen";

    //   Clear input field aftter 5 seconds
    setTimeout(() => {
      emailInput.value = "";
      error.textContent = "";
      error.style.color = "var(--accent-light-red";
    }, 5000);
  }
});
