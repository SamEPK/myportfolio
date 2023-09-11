document.addEventListener("DOMContentLoaded", () => {
    console.log("loaded");
    let btn = document.querySelector(".burger");
    let el = document.querySelector("header div");
    let down = document.querySelector("nav ul");

    btn.addEventListener("click", () => {
        el.style.transition = "opacity 1s ease-in-out, transform 1 ease-in-out";
        el.classList.toggle("open-menu");
        btn.innerHTML === `<i class="fa-solid fa-bars"></i>` ? btn.innerHTML = `<i class="fa-solid fa-x"></i>` : btn.innerHTML = `<i class="fa-solid fa-bars"></i>`;
    });

    down.addEventListener("click", () => {
        el.style.transition = "opacity 1s ease-in-out, transform 1 ease-in-out";
        el.classList.toggle("open-menu");
        btn.innerHTML === `<i class="fa-solid fa-bars"></i>` ? btn.innerHTML = `<i class="fa-solid fa-x"></i>` : btn.innerHTML = `<i class="fa-solid fa-bars"></i>`;
    });
    const userDate = {
        datecopy: new Date(),
        lastelement: document.querySelector("footer > address > ul > li:last-child")

    };
    userDate.lastelement.innerText += ` ${userDate.datecopy.getFullYear()}`;
});