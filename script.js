// ========================================
// Portfolio Website JavaScript
// ========================================


// 1. ROTATING HERO TEXT
// ----------------------------------------

const heroDescription = document.querySelector(".hero-description");

const descriptions = [
    "Computer Science student at Monash University, interested in software development, data, and building practical technology solutions.",
    "I enjoy turning ideas into practical software and learning how systems work.",
    "Currently exploring software engineering, cloud technologies, and data."
];

let descriptionIndex = 0;

function changeDescription() {
    descriptionIndex =
        (descriptionIndex + 1) % descriptions.length;

    heroDescription.style.opacity = "0";

    setTimeout(() => {
        heroDescription.textContent =
            descriptions[descriptionIndex];

        heroDescription.style.opacity = "1";
    }, 300);
}

setInterval(changeDescription, 5000);


// 2. SCROLL REVEAL ANIMATION
// ----------------------------------------

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }

        });

    },
    {
        threshold: 0.15
    }
);

sections.forEach((section) => {
    section.classList.add("hidden");
    observer.observe(section);
});


// 3. PROJECT CARD HOVER EFFECT
// ----------------------------------------

const projectCards =
    document.querySelectorAll(".project-card");

projectCards.forEach((card) => {

    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-4px)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
    });

});


// 4. BACK TO TOP BUTTON
// ----------------------------------------

const backToTop = document.createElement("button");

backToTop.textContent = "↑";

backToTop.classList.add("back-to-top");

document.body.appendChild(backToTop);


// Show button after scrolling

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }

});


// Scroll to top when clicked

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// 5. UPDATE FOOTER YEAR AUTOMATICALLY
// ----------------------------------------

const footer = document.querySelector("footer p");

if (footer) {
    footer.textContent =
        `© ${new Date().getFullYear()} Yasmin Husni`;
}


// 6. ACTIVE NAVIGATION LINK
// ----------------------------------------

const navLinks =
    document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {
            link.classList.add("active");
        }

    });

});
