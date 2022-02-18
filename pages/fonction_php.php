<?php
    //fonctions nommées
    function def(){
        $_nom ="Ledorf"; //variables locales
        $_prenom = "Rasmus";
        $_serv  = $_SERVER['HTTP_USER_AGENT']; //variable d'environnement php
        echo "<p> je m'appelle : ", $_nom, " ", $_prenom,//concaténation par la,
        " Vous êtes sur ", $_serv, "</p>";
    }
    $_printf = def();
    print "<br>";
    function userWeb(string $nom, string $prenom, int $age){
        print "je m'appelle ".$nom." ".$prenom." et j'ai ".$age. " ans";
    }
    userWeb("Montana","Tony", 35);
    
    //fonction anonyme
    $_print = function(string $_anonymous){
        print "Je suis ".$_anonymous;

    };
    $_print("Toi");


?>
<script>
    let user = (anonyme)=>{
        console.log("je suis "+anonyme)
    }
    user("Tom");
</script>