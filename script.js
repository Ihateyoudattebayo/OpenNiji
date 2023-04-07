document.addEventListener('DOMContentLoaded', () => {
    const green = document.querySelector('.green');
    const text = document.querySelector('.text');
    const preloader = document.querySelector('.preloader');
    const mainSite = document.querySelector('.main-site');

    // Green slide-in animation
    green.animate([
        { left: '-100%' },
        { left: '0%' }
    ], {
        duration: 1000,
        fill: 'forwards'
    });

    // Text animation
    setTimeout(() => {
        text.animate([
            { opacity: 0, transform: 'translateY(50px)' },
            { opacity: 1, transform: 'translateY(0)' }
        ], {
            duration: 500,
            fill: 'forwards'
        });
    }, 1000);

    // Green slide-out and main site reveal
    setTimeout(() => {
        green.animate([
            { left: '0%', opacity: 1 },
            { left: '100%', opacity: 0 }
        ], {
            duration: 1000,
            fill: 'forwards',
            easing: 'ease-in-out'
        });

        preloader.animate([
            { opacity: 1 },
            { opacity: 0 }
        ], {
            duration: 1000,
            fill: 'forwards',
            easing: 'ease-in-out'
        });

        setTimeout(() => {
            preloader.style.display = 'none';
            mainSite.style.display = 'block';
        }, 1000);
    }, 4000);
});
// Add this to the existing script.js
// Replace the existing image and text change logic in script.js with this code

const headerImages = document.querySelectorAll('.header-image');
let currentImageIndex = 0;

function changeImageAndText() {
    headerImages[currentImageIndex].style.opacity = 0;

    currentImageIndex = (currentImageIndex + 1) % headerImages.length;

    headerImages[currentImageIndex].style.opacity = 1;
}

// Initial 10-second delay
setTimeout(() => {
    setInterval(changeImageAndText, 5000); // Change image and text every 10 seconds
}, 5000);


// Add this code to the existing script.js
// Replace the existing parallax code in script.js with this code


// Replace the existing parallax code in script.js with this code
// Replace the existing parallax code in script.js with this code

// Replace the existing parallax code in script.js with this code



//javascript for navigation bar effects on scroll
const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
  
    burger.addEventListener("click", () => {
      // toggle nav
      nav.classList.toggle("nav-active");
      // Animate Links
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.25
          }s`;
        }
      });
      // burger animation
      burger.classList.toggle("toggle");
    });
  };
  
  navSlide();

const header = document.querySelector('.header');
const parallaxHeaderImages = document.querySelector('.header-images');
const contentWrapper = document.querySelector('.content-wrapper');

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Adjust the speed of the parallax effect
  const headerSpeed = 0.5;

  // Apply the parallax effect
  parallaxHeaderImages.style.transform = `translateY(${scrollTop * headerSpeed}px)`;

  // Apply the blur effect to the header
  const blurAmount = Math.min(scrollTop / 100, 5);
  parallaxHeaderImages.style.filter = `blur(${blurAmount}px)`;
});

