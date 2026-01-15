console.log("login.js LOADED");

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded");

  const passwordInput = document.getElementById("password-input");
  const toggleIcon = document.getElementById("password-toggle");

  console.log("passwordInput:", passwordInput);
  console.log("toggleIcon:", toggleIcon);

  if (!passwordInput || !toggleIcon) {
    console.error("❌ Elements not found");
    return;
  }

  toggleIcon.addEventListener("click", () => {
    console.log("👁️ icon clicked");

    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      toggleIcon.textContent = "visibility_off";
      console.log("Password SHOWN");
    } else {
      passwordInput.type = "password";
      toggleIcon.textContent = "visibility";
      console.log("Password HIDDEN");
    }
  });
});
