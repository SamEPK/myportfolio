document.addEventListener("DOMContentLoaded",()=>{ //DOMContentLoaded
console.log("ok")
let x, y, key
x = 10;
y = "10";
console.log(typeof y)
 x===y ? console.log("vrai") : console.log("faux")
const table_1 = ["html","css", "js", true]
const table_2 = ["python", "C","xml", false]
const table_global = [...table_1, ...table_2]
console.table(table_1)
 for(key in table_global){
     let value = table_global[key]
     console.log(key+" "+value)
 }
 const tab_film =[
        {
            titre: "Scarface",
            acteur: "Al Pacino"
        },
        {
            titre: "King Kong",
            acteur: "Belle"
        }
        
    ]
console.table(tab_film)
/*for(let data of tab_film){
    
     console.log("titre : "+data.titre)
 }*/
 tab_film.forEach((data, cle) =>{
     console.log(cle+" "+data.acteur+" "+data.titre)
     
 })

})
//https://github.com/giusmili/Cours_SIO_developpement