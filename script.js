var currentSlide = 0;
var totalImages = 53;
var images = [];

function initGallery() {
  var gallery = document.getElementById("gallery");
  for (var i = 1; i <= totalImages; i++) {
    var img = document.createElement("img");
    // Generate image path with leading zeros and correct sequence number
    var number = i.toString().padStart(4, "0").slice(1); // Ensure the format is as WA0001, WA0002, till WA0053
    img.src = "assets/IMG-20240227-WA0" + number + ".jpg"; // Concatenate generated number into the image path <sup className="rounded-full text-xs cursor-pointer [&>*]:!text-white h-4 w-4 px-1 bg-slate-400 hover:bg-slate-500 dark:bg-slate-700 hover:dark:bg-slate-600">[5](https://www.w3schools.com/cssref/pr_background-image.php)</sup>
    img.style.display = "none"; // Hide the image at start
    gallery.appendChild(img);
    images.push(img);
  }
  images[0].style.display = "block"; // Display the first image
}

function moveSlide(step) {
  images[currentSlide].style.display = "none"; // Hide the current image
  currentSlide += step; // Move the currentSlide position
  if (currentSlide >= images.length) currentSlide = 0;
  if (currentSlide < 0) currentSlide = images.length - 1;
  images[currentSlide].style.display = "block"; // Show the new image
}

window.onload = initGallery;
