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
document.addEventListener('contextmenu', event => event.preventDefault());
// Function to check if elements are wrapping and apply a class
function checkForWrapping() {
    const heroSection = document.querySelector('.hero-section');
    const elements = heroSection.querySelectorAll('.fw-bold, .lead, .btn'); // Select elements to watch

    elements.forEach(element => {
        if (isElementWrapping(element)) {
            element.classList.add('wrapped');
        } else {
            element.classList.remove('wrapped');
        }
    });
}

// Helper function to determine if an element is wrapping
function isElementWrapping(element) {
    const elementRect = element.getBoundingClientRect();
    const parentRect = element.parentElement.getBoundingClientRect();
    return elementRect.right > parentRect.right; 
}

// Initial check on page load
checkForWrapping();

// Check for wrapping on window resize
window.addEventListener('resize', checkForWrapping);

// Combined animateHeading function
function animateHeading() {
    const heading = document.querySelector('.hero-section h1');
    heading.classList.add('animate__animated', 'animate__fadeInUp'); 
}

// Trigger the animation on page load
window.addEventListener('load', animateHeading);