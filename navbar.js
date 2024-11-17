const isLoggedIn = localStorage.getItem("user") ? true : false;
document.getElementById("login-popup").innerHTML = isLoggedIn
  ? "Log Out"
  : "Login";
document.getElementById("login-popup").addEventListener("click", function () {
  if (isLoggedIn) {
    localStorage.clear();
    window.location.reload();
  } else {
    document.getElementById("loginModal").style.display = "flex";
  }
});

function closePopup() {
  document.getElementById("loginModal").style.display = "none";
}
document.getElementById("navbar-toggle").addEventListener("click", function () {
  const navbarCta = document.getElementById("navbar-cta");
  navbarCta.classList.toggle("hidden");
});
const currentPage = window.location.pathname;
if (currentPage.includes("index")) {
  document.getElementById("homeLink").classList.add("active-link");
} else if (currentPage.includes("aboutus")) {
  document.getElementById("aboutLink").classList.add("active-link");
} else if (currentPage.includes("products")) {
  document.getElementById("productsLink").classList.add("active-link");
} else if (currentPage.includes("quality")) {
  document.getElementById("qualityLink").classList.add("active-link");
} else if (currentPage.includes("contactus")) {
  document.getElementById("contactUsLink").classList.add("active-link");
} else {
  document.getElementById("homeLink").classList.add("active-link");
}
document
  .getElementById("togglePassword")
  .addEventListener("click", function () {
    const passwordField = document.getElementById("password");
    const eyeIcon = document.getElementById("eyeIcon");
    if (passwordField.type === "password") {
      passwordField.type = "text";
      eyeIcon.classList.replace("fa-eye", "fa-eye-slash");
    } else {
      passwordField.type = "password";
      eyeIcon.classList.replace("fa-eye-slash", "fa-eye");
    }
  });

document.getElementById("loginbtn").addEventListener("click", function () {
  document.getElementById("usernameError").innerHTML = "";
  document.getElementById("passwordError").innerHTML = "";
  if (!document.getElementById("email")?.value) {
    document.getElementById("usernameError").innerHTML = "Please enter email";
    return;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(document.getElementById("email").value)) {
    document.getElementById("usernameError").innerHTML =
      "Please enter valid email";
    return;
  }
  if (document.getElementById("email")?.value !== "arpanchangani18@gmail.com") {
    document.getElementById("usernameError").innerHTML = "Invalid credentials";
    return;
  }
  if (!document.getElementById("password")?.value) {
    document.getElementById("passwordError").innerHTML =
      "Please enter password.";
    return;
  }
  if (document.getElementById("password")?.value !== "Arpan@1618") {
    document.getElementById("passwordError").innerHTML = "Invalid credentials";
    return;
  }
  const user = {
    email: document.getElementById("email")?.value,
    password: document.getElementById("password")?.value,
  };
  localStorage.setItem("user", JSON.stringify(user));
  document.getElementById("loginModal").style.display = "none";
  window.location.reload();
});
