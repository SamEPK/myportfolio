<?php
    include_once("./pages/head.inc.php");
?>

<body>
    <header aria-labelledby="main-title">
        <h1 id="main-title"><span class="material-icons" aria-hidden="true">
            table_rows
            </span>&nbsp;Portfolio - développeur front</h1>
    </header>
 <!-- navigation -->

 <?php
    include_once "./pages/navigation.inc.php";
 ?>

    <div class="aside" id="aside" role="complementary" aria-labelledby="title">
        <h2 id="title">Présentation</h2>
    </div>
<!--créer le template -->
    <?php
        include_once "./pages/main.inc.php";
        
    ?>
    <!--end main-->
    <!--footer-->
    <?php
        require_once "./pages/footer.inc.php";
    ?>

    <script src="./js/app.js"></script>
</body>
</html>