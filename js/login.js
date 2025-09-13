function login() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  const user = users.find((u) => u.email === email && u.password === password);

  if (user) {
    currentUser = user;
    alert("Login Successful!");

    document.getElementById("loginNav").style.display = "none";
    document.getElementById("signupNav").style.display = "none";
    document.getElementById("logoutNav").style.display = "block";

    if (document.getElementById("detail").classList.contains("active")) {
      document.getElementById("subscriptionSection").style.display = "none";
      document.getElementById("subscribedSection").style.display = "block";
    }

    showPage("home");
  } else {
    alert("Login Unsuccessful. Please check your credentials.");
  }
}

function logout() {
  currentUser = null;

  document.getElementById("loginNav").style.display = "block";
  document.getElementById("signupNav").style.display = "block";
  document.getElementById("logoutNav").style.display = "none";

  if (document.getElementById("detail").classList.contains("active")) {
    document.getElementById("subscriptionSection").style.display = "block";
    document.getElementById("subscribedSection").style.display = "none";
  }

  showPage("home");
}

function setupValidation() {
  document.getElementById("signupName").addEventListener("blur", function () {
    const name = this.value.trim();
    const errorElement = document.getElementById("nameError");

    if (
      name.length <= 5 ||
      /[0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(name)
    ) {
      errorElement.style.display = "block";
    } else {
      errorElement.style.display = "none";
    }
  });

  document.getElementById("signupEmail").addEventListener("blur", function () {
    const email = this.value.trim();
    const errorElement = document.getElementById("emailError");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      errorElement.style.display = "block";
    } else {
      errorElement.style.display = "none";
    }
  });

  document
    .getElementById("signupPassword")
    .addEventListener("blur", function () {
      const password = this.value;
      const errorElement = document.getElementById("passwordError");

      const hasUpperCase = /[A-Z]/.test(password);
      const hasLowerCase = /[a-z]/.test(password);
      const hasNumber = /[0-9]/.test(password);
      const hasSymbol = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
      const isLengthValid = password.length === 8;

      if (
        !(
          hasUpperCase &&
          hasLowerCase &&
          hasNumber &&
          hasSymbol &&
          isLengthValid
        )
      ) {
        errorElement.style.display = "block";
      } else {
        errorElement.style.display = "none";
      }
    });
}
