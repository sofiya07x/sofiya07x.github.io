/* =========================================
   SOFIYA'S CAT HOUSE
   Website JavaScript
========================================= */


/* ---------- MOBILE MENU ---------- */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {

        navLinks.classList.toggle("show");

        if (navLinks.classList.contains("show")) {
            menuToggle.textContent = "✕";
        } else {
            menuToggle.textContent = "☰";
        }

    });

}


/* ---------- CLOSE MENU AFTER CLICK ---------- */

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        if (navLinks) {
            navLinks.classList.remove("show");
        }

        if (menuToggle) {
            menuToggle.textContent = "☰";
        }

    });

});


/* ---------- CURRENT YEAR ---------- */

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


/* ---------- SIMPLE SCROLL ANIMATION ---------- */

const animatedElements = document.querySelectorAll(
    ".feature-card, .cat-card, .value-card, .info-box"
);

const observer = new IntersectionObserver(
    function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.1
    }
);


animatedElements.forEach(function(element) {

    element.style.opacity = "0";
    element.style.transform = "translateY(20px)";
    element.style.transition = "opacity 0.6s ease, transform 0.6s ease";

    observer.observe(element);

});
