//on page load call the function
// window.onload = countContacts();

var signInButton = document.getElementById("SignInButton");
var signUpButton = document.getElementById("SignUpButton");
signUpButton.addEventListener("click", function () {
  document.getElementById("ChangeClassId").classList.add("sign-up-mode");
});
signInButton.addEventListener("click", function () {
  document.getElementById("ChangeClassId").classList.remove("sign-up-mode");
});
