// ========================================
// Portfolio Website JavaScript
// ========================================


// 1. CHANGING "CURRENTLY EXPLORING" TEXT
// ========================================

const skillElement =
    document.querySelector("#changing-skill");

const skills = [
    "Software Engineering",
    "Cloud Technologies",
    "Data & Analytics",
    "Full-Stack Development"
];

let skillIndex = 0;

setInterval(() => {

    skillIndex =
        (skillIndex + 1) % skills.length;

    skillElement.style.opacity = "0";

    setTimeout(() => {

        skillElement.textContent =
            skills[skillIndex];

        skillElement.style.opacity = "1";

    }, 300);

}, 2500);


// 2. SCROLL REVEAL ANIMATION
// ========================================

const sections =
    document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                // Stop observing once the animation has happened
                observer.unobserve(entry.target);
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
// ========================================

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
// ========================================

const backToTop =
    document.createElement("button");

backToTop.textContent = "↑";

backToTop.classList.add("back-to-top");

backToTop.setAttribute(
    "aria-label",
    "Back to top"
);

document.body.appendChild(backToTop);


// Show button when scrolling

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


// Scroll to top

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// 5. UPDATE FOOTER YEAR
// ========================================

const footer =
    document.querySelector("footer p");

if (footer) {

    footer.textContent =
        `© ${new Date().getFullYear()} Yasmin Husni`;

}


// 6. ACTIVE NAVIGATION LINK
// ========================================

const navLinks =
    document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            currentSection =
                section.getAttribute("id");

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
