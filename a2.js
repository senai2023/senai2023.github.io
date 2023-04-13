const loginButton = document.getElementById("login-button");

loginButton.addEventListener("click", function(e) {
  e.preventDefault();
  loginButton.style.transform = "scale(0.9)";
  setTimeout(function() {
    loginButton.style.transform = "scale(1)";
  }, 200);
});

