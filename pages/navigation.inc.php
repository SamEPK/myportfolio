
<nav>
        <ul>
<?php
    const nav = array(
        1=>'<a href="#formation">Formation</a>',
        2=>'<a href="#competence">Competences</a>',
        3=>'<a href="#web">Web</a>',
        4=>'<a href="#experience">Expériences</a>',
        5=>'<a href="#profil">Profil</a>'
    );
    foreach (nav as $key => $value) {
        print '<li>'.$value.'</li>';
    }
?>



           
        </ul>
</nav>