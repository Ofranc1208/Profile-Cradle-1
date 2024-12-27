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
  
  // Add event listeners to the buttons
  document.addEventListener('DOMContentLoaded', (event) => {
    // Social media sign-up event listeners (if needed)
    // ... 
  
    // Text polishing event listener
    const polishButton = document.getElementById("polishButton");
    const inputText = document.getElementById("inputText");
    const outputDiv = document.getElementById("outputDiv");
  
    if (polishButton) {
      polishButton.addEventListener("click", (event) => {
        event.preventDefault();
        const text = inputText.value;
  
        // Simulate API call to a text polishing service (placeholder)
        setTimeout(() => {
          const polishedText = polishText(text, 150);
          outputDiv.innerText = polishedText;
        }, 1000);
      });
    }
  });
  
  // Placeholder function to simulate text polishing
  function polishText(text, maxWords) {
    const words = text.split(/\s+/);
    const numWords = Math.min(words.length, maxWords);
  
    // Generate additional words (placeholder logic)
    const additionalWords = generateRandomWords(maxWords - numWords);
  
    // Combine the original and additional words
    const allWords = [...words.slice(0, numWords), ...additionalWords];
  
    // Return the polished text
    return allWords.join(" ");
  }
  
  // Placeholder function to generate random words
  function generateRandomWords(numWords) {
    const wordList = ["lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit", "sed", "do", "eiusmod", "tempor", "incididunt", "ut", "labore", "et", "dolore", "magna", "aliqua"];
    const randomWords = [];
    for (let i = 0; i < numWords; i++) {
      randomWords.push(wordList[Math.floor(Math.random() * wordList.length)]);
    }
    return randomWords;
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
  

