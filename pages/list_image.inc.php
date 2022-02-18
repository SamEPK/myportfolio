<ul class="grid-logo">
<?php
    //tester un tableau 
    const logos = [
        1=>'./asset/file_type_html_icon_130541.png" alt="logo html 5"',
        2=>'./asset/php-programmation-file-black-interface-symbol_icon-icons.com_57653.png" alt="logo php"',
        3=>'./asset/css_original_wordmark_logo_icon_146576.png" alt="logo css"',
        4=>'./asset/sql-document_icon-icons.com_57634.png" alt="logo sql"'

    ];
    foreach (logos as $key => $value) {
       print  '<li><img src="'.$value.'"></li>';
    }

?>
</ul>