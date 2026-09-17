/* =========================================================
   KEANNA NOJARA PORTFOLIO
   JAVASCRIPT
   PART 8A
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       HAMBURGER MENU
       ===================================================== */

    const menuToggle =
        document.getElementById("menuToggle");

    const navMenu =
        document.getElementById("navMenu");


    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", function () {

            navMenu.classList.toggle("active");

            const isOpen =
                navMenu.classList.contains("active");


            menuToggle.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );


            const icon =
                menuToggle.querySelector("i");


            if (icon) {

                if (isOpen) {

                    icon.classList.remove("fa-bars");
                    icon.classList.add("fa-times");

                } else {

                    icon.classList.remove("fa-times");
                    icon.classList.add("fa-bars");

                }

            }

        });


        /* ================================================
           CLOSE MENU AFTER CLICKING A LINK
           ================================================ */

        const navLinks =
            navMenu.querySelectorAll("a");


        navLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                navMenu.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );


                const icon =
                    menuToggle.querySelector("i");


                if (icon) {

                    icon.classList.remove("fa-times");
                    icon.classList.add("fa-bars");

                }

            });

        });

    }
      /* =====================================================
       CLOSE MENU WHEN CLICKING OUTSIDE
       ===================================================== */

    if (menuToggle && navMenu) {

        document.addEventListener("click", function (event) {

            if (
                !navMenu.contains(event.target) &&
                !menuToggle.contains(event.target)
            ) {

                navMenu.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );


                const icon =
                    menuToggle.querySelector("i");


                if (icon) {

                    icon.classList.remove("fa-times");
                    icon.classList.add("fa-bars");

                }

            }

        });

    }


    /* =====================================================
       ACTIVE NAVIGATION LINK
       ===================================================== */

    const currentPage =
        window.location.pathname.split("/").pop() ||
        "index.html";


    const navigationLinks =
        document.querySelectorAll(".nav-menu a");


    navigationLinks.forEach(function (link) {

        const linkPage =
            link.getAttribute("href");


        if (linkPage === currentPage) {

            link.classList.add("active");

        }

    });
      /* =====================================================
       AUTOMATIC COPYRIGHT YEAR
       ===================================================== */

    const yearElements =
        document.querySelectorAll("#currentYear");


    const currentYear =
        new Date().getFullYear();


    yearElements.forEach(function (element) {

        element.textContent =
            currentYear;

    });
      /* =====================================================
       CONTACT FORM
       ===================================================== */

    const contactForm =
        document.getElementById("contactForm");


    const formStatus =
        document.getElementById("formStatus");


    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();


            const senderName =
                document.getElementById("senderName");

            const senderEmail =
                document.getElementById("senderEmail");

            const message =
                document.getElementById("message");


            /* =============================================
               CHECK FIELDS
               ============================================= */

            if (
                !senderName ||
                !senderEmail ||
                !message
            ) {

                return;

            }


            /* =============================================
               CHECK EMPTY FIELDS
               ============================================= */

            if (
                senderName.value.trim() === "" ||
                senderEmail.value.trim() === "" ||
                message.value.trim() === ""
            ) {

                if (formStatus) {

                    formStatus.textContent =
                        "Please complete all required fields.";

                    formStatus.classList.remove("success");

                    formStatus.classList.add("error");

                    formStatus.style.display =
                        "block";

                }

                return;

            }


            /* =============================================
               SUCCESS MESSAGE
               ============================================= */

            if (formStatus) {

                formStatus.textContent =
                    "Thank you! Your message has been prepared successfully.";

                formStatus.classList.remove("error");

                formStatus.classList.add("success");

                formStatus.style.display =
                    "block";

            }


            /* =============================================
               CLEAR FORM
               ============================================= */

            contactForm.reset();

        });

    }
      /* =====================================================
       FORM INPUT FOCUS EFFECT
       ===================================================== */

    const formInputs =
        document.querySelectorAll(
            ".form-group input, .form-group textarea"
        );


    formInputs.forEach(function (input) {

        input.addEventListener("focus", function () {

            const parent =
                this.closest(".form-group");


            if (parent) {

                parent.classList.add("focused");

            }

        });


        input.addEventListener("blur", function () {

            const parent =
                this.closest(".form-group");


            if (parent) {

                parent.classList.remove("focused");

            }

        });

    });
      /* =====================================================
       RESPONSIVE MENU RESET
       ===================================================== */

    window.addEventListener("resize", function () {

        if (!menuToggle || !navMenu) {
            return;
        }


        if (window.innerWidth >= 992) {

            navMenu.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );


            const icon =
                menuToggle.querySelector("i");


            if (icon) {

                icon.classList.remove("fa-times");
                icon.classList.add("fa-bars");

            }

        }

    });


    /* =====================================================
       SMOOTH SCROLL
       ===================================================== */

    document.querySelectorAll(
        'a[href^="#"]'
    ).forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId =
                this.getAttribute("href");


            if (
                !targetId ||
                targetId === "#"
            ) {

                return;

            }


            const target =
                document.querySelector(targetId);


            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });
      /* =====================================================
       PORTFOLIO LOADED
       ===================================================== */

    console.log(
        "Keanna Nojara Mobile First Portfolio loaded successfully."
    );

});
