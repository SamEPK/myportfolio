<?php
    const style = "./css/style.css";
    const manifest = "./asset/site.webmanifest";
    const title = "Portfolio - développeur front - javascript";
    const description ="Portfolio - développeur front..."
?>

<!DOCTYPE html>
<html lang="fr" dir="ltr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="<?php print description ?>">
    <title><?php print title ?></title>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="apple-touch-icon" sizes="180x180" href="./asset/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="./asset/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="./asset/favicon-16x16.png">
    <link rel="manifest" href="<?php print manifest ?>">
    <link rel="stylesheet" href="<?php print style ?>">
</head>