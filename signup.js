// JavaScript functionality for Sign Up

// Function to handle Facebook sign-up
function facebookSignUp() {
    // Redirect to Facebook login page
    window.location.href = "https://www.facebook.com/login/";
  }
  
  // Function to handle X (formerly Twitter) sign-up
  function twitterSignUp() {
    // Redirect to Twitter (X) login page
    window.location.href = "https://twitter.com/i/flow/login";
  }
  
  // Function to handle Google sign-up
  function googleSignUp() {
    // Redirect to Google login page
    window.location.href = "https://accounts.google.com/login";
  }
  
 // Progress Bar 

<script type="text/javascript" src="https://code.jquery.com/jquery-1.12.0.min.js"></script>
 
 $(document).ready(function(){
     $('.progress-value > span').each(function(){
         $(this).prop('Counter',0).animate({
             Counter: $(this).text()
         },{
             duration: 1500,
             easing: 'swing',
             step: function (now){
                 $(this).text(Math.ceil(now));
             }
         });
     });
 });
  

