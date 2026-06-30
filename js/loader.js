// ===============================
// Premium Loader
// ===============================

const loader = document.getElementById("loader");

window.addEventListener("load", () => {

    document.body.classList.add("no-scroll");

    setTimeout(() => {

        loader.classList.add("hide");

        document.body.classList.remove("no-scroll");

    }, 2500);

});


// ===============================
// Smooth Page Fade
// ===============================

document.querySelectorAll("a").forEach(link => {

    const href = link.getAttribute("href");

    if (
        href &&
        !href.startsWith("#") &&
        !href.startsWith("tel") &&
        !href.startsWith("mailto") &&
        !href.startsWith("https://wa.me")
    ) {

        link.addEventListener("click", function (e) {

            e.preventDefault();

            loader.classList.remove("hide");

            document.body.classList.add("no-scroll");

            setTimeout(() => {

                window.location.href = href;

            }, 700);

        });

    }

});


// ===============================
// Hero Fade Animation
// ===============================

window.addEventListener("load", () => {

    const hero = document.querySelector(".hero");

    if (hero) {

        hero.style.opacity = "0";

        hero.style.transform = "scale(1.05)";

        setTimeout(() => {

            hero.style.transition = "all 1.2s ease";

            hero.style.opacity = "1";

            hero.style.transform = "scale(1)";

        }, 2200);

    }

});


// ===============================
// Mouse Glow Effect
// ===============================

const glow = document.createElement("div");

glow.className = "cursor-glow";

document.body.appendChild(glow);

document.addEventListener("mousemove", (e) => {

    glow.style.left = e.clientX + "px";

    glow.style.top = e.clientY + "px";

});


// ===============================
// Page Loaded Class
// ===============================

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});
