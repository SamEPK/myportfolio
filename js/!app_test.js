let number_1, number_2, calc, lang, key, person, film
number_1 = 10;
number_2 = "10";
//condition sur les variables

number_1 == number_2 ? console.log(true) : console.log(false);

calc = (n)=>{
    return n * n;
}
let print_out = calc(number_1)
console.log(print_out)
//tableaux
lang = ["html", "css", "js", true];
person = ["Lee","Heich", "Ledorf",false];
person_lang = [...lang, ...person];//spread operator
console.table(lang)
for(key in person_lang){
    let value = person_lang[key]
    console.log(`${key} : ${person_lang[key]}`)
}

console.log(typeof person_lang)
//tableau à 2 dimensions
film = [
    {
        titre :"Scarface",
        acteur : "Al Pacino"
        
    },
      {
        titre : "king Kong",
        acteur : "Gorille"
        
    }
]
console.table(film)

film.forEach((data, el)=>{
    console.log(el+" "+data.titre)
    
})
for(data of film){
    console.log(data.titre)
}
//l'objet
let produit = ({
     marque: "Samsung",
     prix: 700,
     dispo: true
})
console.table(produit)
for(let label in produit){
    
    let value = produit[label]
    console.log(`${label} : ${value}`)
    value==true ? console.log("produit disponible") : false;
    
}
