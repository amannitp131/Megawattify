document.addEventListener("DOMContentLoaded", function () {
    const preloader = document.querySelector(".preloader");
    const content = document.querySelector(".content");
  
    // Hide preloader and show content after 2 seconds
    setTimeout(function () {
      preloader.style.display = "none";
      content.style.display = "block";
    }, 2000); // Adjust the timeout (in milliseconds) as needed
  });

const navbarMenu = document.getElementById("menu");
const burgerMenu = document.getElementById("burger");
const headerMenu = document.getElementById("header");

// Open Close Navbar Menu on Click Burger
if (burgerMenu && navbarMenu) {
   burgerMenu.addEventListener("click", () => {
      burgerMenu.classList.toggle("is-active");
      navbarMenu.classList.toggle("is-active");
   });
}

// Close Navbar Menu on Click Menu Links
document.querySelectorAll(".menu-link").forEach((link) => {
   link.addEventListener("click", () => {
      burgerMenu.classList.remove("is-active");
      navbarMenu.classList.remove("is-active");
   });
});

// Change Header Background on Scrolling
window.addEventListener("scroll", () => {
   if (this.scrollY >= 85) {
      headerMenu.classList.add("on-scroll");
   } else {
      headerMenu.classList.remove("on-scroll");
   }
});

// Fixed Navbar Menu on Window Resize
window.addEventListener("resize", () => {
   if (window.innerWidth > 768) {
      if (navbarMenu.classList.contains("is-active")) {
         navbarMenu.classList.remove("is-active");
      }
   }
});
document.addEventListener("DOMContentLoaded", function () {
  const controls = document.querySelectorAll('input[name="slider-control"]');
  const indicators = document.querySelectorAll(".js-slider-indi");
  let currentIndex = 0;
  const slideInterval = 4000;

  // Function to go to a specific slide
  function goToSlide(index) {
    controls[index].checked = true;
    currentIndex = index;
  }

  // Function to go to the next slide
  function nextSlide() {
    let newIndex = currentIndex + 1;
    if (newIndex >= controls.length) {
      newIndex = 0;
    }
    goToSlide(newIndex);
  }

  // Set up automatic slide cycling
  let autoSlide = setInterval(nextSlide, slideInterval);

  // Pause auto sliding when mouse is over the slider
  document
    .querySelector(".js-slider")
    .addEventListener("mouseenter", function () {
      clearInterval(autoSlide);
    });

  // Resume auto sliding when mouse leaves the slider
  document
    .querySelector(".js-slider")
    .addEventListener("mouseleave", function () {
      autoSlide = setInterval(nextSlide, slideInterval);
    });

  // Add keyboard navigation
  document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowRight") {
      nextSlide();
    } else if (event.key === "ArrowLeft") {
      let newIndex = currentIndex - 1;
      if (newIndex < 0) {
        newIndex = controls.length - 1;
      }
      goToSlide(newIndex);
    }
  });
});