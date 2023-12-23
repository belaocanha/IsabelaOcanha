var slideshow = document.querySelector(".slideshow");
var images = slideshow.querySelectorAll(".slideshow-images li");

var currentImage = 0;

function nextImage() {
  currentImage = (currentImage + 1) % images.length;
  images[currentImage].style.display = "block";
  images[currentImage - 1].style.display = "none";
}

setInterval(nextImage, 1000);
