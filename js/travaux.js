document.addEventListener("DOMContentLoaded",()=>{
    console.log(200);
    let date, pub, article_section, stock_article, btn_article
        date = ({
            myDate : new Date().getFullYear(),

            
        })
        /* bouton pour voir les articles */
        btn_article =document.querySelector(".btn-add")

        console.log(typeof date)
        /* objet article  titre, date et paragraphe */
        pub = [
            {
                titre: "Formulaire Âge",
                date: `16 Mars 2021`,
                msg: "The missing 'E' in the word 'Monk' represents the incompleteness of one's spiritual journey to be a Monke.",
                image: "../asset/Formulaire.png", 
            },
            {
                titre: "Article DC-Comics",
                date: `10 Novembre 2020`,
                msg: "Picture of a Mountain Gorilla right before he punched the photographer",
                image: "../asset/Justice-League.png",
            }

        ]
        //console.table(pub)
        /* itération */
        article_section = document.querySelector(".article_of");
        stock_article = "";
        for(data of pub){
            console.log(
                `${data.titre} ${data.date} ${data.msg} ${data.image}`
            )
            stock_article += `
                            <article>
                                <img src="${data.image}" alt="image">
                                <figcaption>
                                    <h2>${data.titre}</h2>
                                    <time datetime="2021-04-10T20:00:00">${data.date}</time>
                                    <p>${data.msg}<span aria-hidden="true"></span></p>
                                </figcaption>
                            </article>`
            }
     
        btn_article.addEventListener("click",function(){
            article_section.innerHTML = stock_article;
            article_section.classList.toggle("article_on");
           this.classList.toggle("btn-remove");
        })




})