document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");

  // Random account generator function
  function generateRandomAccount() {
    const firstNames = [
      "John",
      "Emma",
      "Michael",
      "Sarah",
      "David",
      "Lisa",
      "James",
      "Emily",
    ];
    const lastNames = [
      "Smith",
      "Johnson",
      "Williams",
      "Brown",
      "Jones",
      "Garcia",
      "Miller",
      "Davis",
    ];

    const randomFirst =
      firstNames[Math.floor(Math.random() * firstNames.length)];
    const randomLast = lastNames[Math.floor(Math.random() * lastNames.length)];
    const randomNumber = Math.floor(Math.random() * 1000);

    return {
      name: `${randomFirst} ${randomLast}`,
      email: `${randomFirst.toLowerCase()}${randomNumber}@example.com`,
      password: `Pass${randomNumber}!${randomFirst.charAt(0)}`,
    };
  }

  // Add random fill button to register form
  if (registerForm) {
    const randomButton = document.createElement("button");
    randomButton.type = "button";
    randomButton.className = "auth-button";
    randomButton.style.marginBottom = "20px";
    randomButton.style.backgroundColor = "#4CAF50";
    randomButton.textContent = "Fill Random Account";

    registerForm.insertBefore(randomButton, registerForm.firstChild);

    randomButton.addEventListener("click", () => {
      const randomAccount = generateRandomAccount();
      document.getElementById("name").value = randomAccount.name;
      document.getElementById("email").value = randomAccount.email;
      document.getElementById("password").value = randomAccount.password;
      document.getElementById("confirmPassword").value = randomAccount.password;
    });

    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const confirmPassword = document.getElementById("confirmPassword").value;

      if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
      }

      console.log("Register attempt:", { name, email, password });
    });
  }

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      console.log("Login attempt:", { email, password });
    });
  }
});
