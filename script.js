// FORM VALIDATION
// INTERACTIVE FEATURE 1: Light/Dark Toggle
document.getElementById("toggleModeBtn").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// INTERACTIVE FEATURE 2: Counter
let count = 0;
document.getElementById("countBtn").addEventListener("click", () => {
  count++;
  document.getElementById("countValue").textContent = count;
});


  document.getElementById("registerForm").addEventListener("submit", function(e) {
  e.preventDefault();

  // Input values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Error elements
  const nameErr = document.getElementById("nameError");
  const emailErr = document.getElementById("emailError");
  const passErr = document.getElementById("passwordError");
  const success = document.getElementById("successMsg");

  // Reset messages
  nameErr.textContent = "";
  emailErr.textContent = "";
  passErr.textContent = "";
  success.textContent = "";

  let valid = true;

  // Name validation
  if (name.length < 3) {
    nameErr.textContent = "Name must be at least 3 characters";
    valid = false;
  }

  // Email validation
  const emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailRegex.test(email)) {
    emailErr.textContent = "Invalid email format";
    valid = false;
  }

  // Password validation
  if (password.length < 6) {
    passErr.textContent = "Password must be at least 6 characters";
    valid = false;
  }

  if (valid) {
    success.textContent = "✅ Form submitted successfully!";
  }
});
