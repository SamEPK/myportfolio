document.addEventListener("DOMContentLoaded", e => {
    e.preventDefault();
    console.log("loaded!!!");
    /* dom */
    let parents, child, i, mainTitle;
    child = ["Linux", "OS", "Android"];
    parents = document.querySelectorAll("section")[1];
    mainTitle = document.querySelector("header > h1");
    /* gestionnaire */
    mainTitle.addEventListener("click", () => {
        mainTitle.classList.toggle("color-main-title");
    });

    console.log(parents.childNodes[1]);
    for (i = 0; i < parents.childNodes.length; i++) {
        /* local */
        console.log(parents.childNodes[i]);
    }
    /* Dans le dom comment créer un élément html */
    el = document.createElement("ul");

    parents.prepend(el);
    /*for(data of child){
     el.innerHTML +=`<li>${data}</li>`;
    }*/
    for (index in child) {
        let value = child[index];
        el.innerHTML += `<li>${index} : ${value}</li>`;
    }
    /* ajouter la date dans footer par le DOM */

    /* objet date */
    const userDate = {
        datecopy: new Date(),
        lastelement: document.querySelector("footer > address > ul > li:last-child"),
        calc(n) {
            console.log(n * n);
        }
    };
    userDate.calc(10);

    console.log(userDate.datecopy.getFullYear());
    userDate.lastelement.innerText += ` ${userDate.datecopy.getFullYear()}`;

    let personnage = {
        nom: "Scarface",
        annee: 1980
    };
    console.log(personnage.nom);
    const newPersonnage = Object.create(personnage);
    newPersonnage.nom = "Batman";
    console.log(newPersonnage.nom);
});