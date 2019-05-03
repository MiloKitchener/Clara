$(document).ready(function() {

  // login button event listener
  $("#loginForm").submit(function(e) {
    e.preventDefault();
    var form = document.forms["loginForm"];
    signIn(form.elements["username"].value, form.elements["password"].value);
  });

  // sign up button event listener
  $("#signupPanel").submit(function(e) {
    e.preventDefault();
    var form = document.forms["signupPanel"];
    signUp(form.elements["username"].value, form.elements["password"].value, form.elements["email"].value);
    signIn(form.elements["username"].value, form.elements["password"].value);
  });

  // resend password button event listener
  $("#forgotPWPanel").submit(function(e) {
    e.preventDefault();
    var form = document.forms["forgotPWPanel"];
    resendPW(form.elements["email"].value);
  });

  // forgot password listener
  document.getElementById("forgotPW").addEventListener("click", function() {
    document.getElementById("forgotPWPanel").style.display = "block";
    document.getElementById("loginForm").style.display = "none";
  });

  // sign up back button event listener
  document.getElementById("backBtn1").addEventListener("click", function() {
    document.getElementById("signupPanel").style.display = "none";
    document.getElementById("loginForm").style.display = "block";
  });

  // forgotpw back button event listener
  document.getElementById("backBtn2").addEventListener("click", function() {
    document.getElementById("forgotPWPanel").style.display = "none";
    document.getElementById("loginForm").style.display = "block";
  });

  // sign up button event listener
  document.getElementById("signUpBtn").addEventListener("click", function() {
    document.getElementById("loginForm").style.display = "none";

    var signupForm = document.getElementById("signupPanel");
    signupForm.style.animation = "fadein 2s";
    signupForm.style.display = "block";
  });
});


/************************************
  FUNCTIONS
************************************/


// signs in to main site
function signIn(username, password) {
  console.log("Logging in as user: " + username + ", with password: " + password);

  // login animation
  document.getElementById("splash").style.visibility = "visible";
  document.getElementById("splash").style.animation = "fadein 2s";

  // reload page, change to load new page if login successful
  setTimeout(function() {
    window.location.reload(false);
  }, 3000);
}


// creates a new account
function signUp(username, password, emailAddress) {
  console.log("Registering user: " + username + ", with password: " + password + ", and email: " + emailAddress);
}


// resends the password associated with the user's email
function resendPW(emailAddress) {
  console.log("Resending password to " + emailAddress);
}
