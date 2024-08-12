// home page
document.querySelectorAll(".navbar-nav .nav-link").forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default anchor behavior

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    const navbarHeight = document.querySelector(".navbar").offsetHeight;

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - navbarHeight,
        behavior: "smooth",
      });

      // Collapse the navbar after scrolling if the screen is medium or smaller
      if (window.innerWidth < 992) {
        const navbarCollapse = document.querySelector(".navbar-collapse");
        setTimeout(() => {
          if (window.getComputedStyle(navbarCollapse).display !== "none") {
            const bsCollapse = new bootstrap.Collapse(navbarCollapse);
            bsCollapse.hide();
          }
        }, 100); // Adjust the delay if needed
      }
    }
  });
});

// login page
// Select the form element
const form = document.getElementById("loginForm");

// Add an event listener for form submission
const loginForm = document.getElementById("loginForm");

// Generate and display the captcha
function generateCaptcha() {
  return Math.floor(1000 + Math.random() * 9000); // Random 4-digit number
}

const captchaDisplay = document.getElementById("captchaDisplay");
const captchaInput = document.getElementById("captchaInput");
let captchaValue = generateCaptcha();
captchaDisplay.textContent = captchaValue;

// Form submission event listener
loginForm.addEventListener("submit", function (event) {
  // Prevent the default form submission
  event.preventDefault();

  // Get the input values
  const username = document.getElementById("username");
  const password = document.getElementById("password");

  // Validate username, password, and captcha
  const isUsernameValid = username.checkValidity();
  const isPasswordValid = password.checkValidity();
  const isCaptchaValid = captchaInput.value === captchaValue.toString();

  if (isUsernameValid && isPasswordValid && isCaptchaValid) {
    alert("تم تسجيل الدخول بنجاح!");
    window.location.href = "dashboard.html"; // Replace with your target page
  } else {
    if (!isUsernameValid) {
      username.classList.add("is-invalid");
    }
    if (!isPasswordValid) {
      password.classList.add("is-invalid");
    }
    if (!isCaptchaValid) {
      captchaInput.classList.add("is-invalid");
    }
  }
});

// Remove invalid class when the user starts typing
loginForm.addEventListener("input", function (event) {
  event.target.classList.remove("is-invalid");
});
