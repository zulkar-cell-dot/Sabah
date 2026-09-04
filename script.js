/* ==================================================
   MENU NAVIGATION
================================================== */

function toggleMenu() {

    const menu = document.getElementById("navMenu");

    if (menu) {
        menu.classList.toggle("show");
    }

}


/* ==================================================
   BACKGROUND MUSIC
================================================== */

function toggleMusic() {

    const music =
        document.getElementById("backgroundMusic");

    const button =
        document.getElementById("musicButton");


    if (!music || !button) {
        return;
    }


    // Jika muzik sedang berhenti
    if (music.paused) {

        music.volume = 0.20;

        music.play()
            .then(function () {

                button.innerHTML = "🔊";
                button.title = "Matikan bunyi latar";

            })
            .catch(function () {

                alert(
                    "Sila klik pada halaman terlebih dahulu untuk menghidupkan bunyi."
                );

            });

    }

    // Jika muzik sedang dimainkan
    else {

        music.pause();

        button.innerHTML = "🔇";
        button.title = "Hidupkan bunyi latar";

    }

}


/* ==================================================
   AUTOMATIC BACKGROUND MUSIC
================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const music =
        document.getElementById("backgroundMusic");

    const button =
        document.getElementById("musicButton");


    if (!music || !button) {
        return;
    }


    // Tetapkan kelantangan
    music.volume = 0.20;


    // Cuba memainkan muzik
    music.play()
        .then(function () {

            button.innerHTML = "🔊";
            button.title = "Matikan bunyi latar";

        })
        .catch(function () {

            // Browser mungkin menyekat autoplay
            button.innerHTML = "🔇";
            button.title = "Hidupkan bunyi latar";

        });

});


/* ==================================================
   START MUSIC AFTER FIRST USER CLICK
================================================== */

document.addEventListener("click", function startMusic() {

    const music =
        document.getElementById("backgroundMusic");

    const button =
        document.getElementById("musicButton");


    if (!music || !button) {
        return;
    }


    if (music.paused) {

        music.volume = 0.20;

        music.play()
            .then(function () {

                button.innerHTML = "🔊";
                button.title = "Matikan bunyi latar";

            })
            .catch(function () {

                button.innerHTML = "🔇";

            });

    }

}, { once: true });


/* ==================================================
   CLOSE MOBILE MENU AFTER CLICKING LINK
================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const menu =
        document.getElementById("navMenu");

    const links =
        document.querySelectorAll("#navMenu a");


    links.forEach(function (link) {

        link.addEventListener("click", function () {

            if (menu) {

                menu.classList.remove("show");

            }

        });

    });

});


/* ==================================================
   ACTIVE MENU
================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const currentPage =
        window.location.pathname.split("/").pop();

    const links =
        document.querySelectorAll("#navMenu a");


    links.forEach(function (link) {

        const linkPage =
            link.getAttribute("href");


        if (
            linkPage === currentPage ||
            (currentPage === "" && linkPage === "index.html")
        ) {

            link.classList.add("active");

        }

    });

});