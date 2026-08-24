document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector("#menu-icon");
    const navlist = document.querySelector(".navlist");
    const navLinks = document.querySelectorAll(".navlist a");
    const sections = document.querySelectorAll("section");

    // Toggle Mobile Navigation Menu
    menuIcon.addEventListener("click", () => {
        menuIcon.classList.toggle("bx-x");
        navlist.classList.toggle("open");
    });

    // Close Mobile Menu on Nav Item Click
    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            menuIcon.classList.remove("bx-x");
            navlist.classList.remove("open");
        });
    });

    // Highlight Navigation Links on Scroll
    window.addEventListener("scroll", () => {
        let currentSection = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.clientHeight;

            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${currentSection}`) {
                link.classList.add("active");
            }
        });
    });
});