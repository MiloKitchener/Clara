$(document).ready(function() {

  // login button event listener
  $("#loginForm").submit(function(e) {
    e.preventDefault();
    signIn();
  });

  // sign up button event listener
  $("#signupPanel").submit(function(e) {
    e.preventDefault();
    signUp();
    signIn();
  });

  // resend password button event listener
  $("#forgotPWPanel").submit(function(e) {
    e.preventDefault();
    resendPW();
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

function signIn() {
  document.getElementById("splash").style.visibility = "visible";
  document.getElementById("splash").style.animation = "fadein 2s";

  setTimeout(function() {
    window.location.reload(false);
  }, 3000);
}

function signUp() {
}

function resendPW() {
  alert("forgot PW");
}
