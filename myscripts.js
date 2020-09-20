// declare variable slide index 
var slideIndex = 1;
// call the function showSlides
showSlides(slideIndex);

// create function plusSlides that takes in a argument (n)
// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}
// This function runs immediately when the page loads. ET: LINE 4
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  // hiding all slides to start
  for (i = 0; i < slides.length; i++) { // i = i + 1 is the same as i++
      slides[i].style.display = "none";
      // what happens here? i++
  }
  // setting all dots to not be active
  for (i = 0; i < dots.length; i++) {
    // "dot active"
      dots[i].className = dots[i].className.replace(" active", "");
    // "dot" replacing any occurrence of the word active with nothing.
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
// adding active rather than replacing dot with active.

// var greetings = ["hi", "hola", "greetings"];
// var myGreeting = greetings[2];