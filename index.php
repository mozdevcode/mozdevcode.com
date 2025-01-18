<!DOCTYPE html>
<html lang="pt-pt">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <meta name="description" content="Dev Code - Comunidade, A maior comunidade de Dev em Moçambique.">
    <meta name="keywords" content="devcode, code, programação, javascript">
    <meta name="author" content="DevCode - Comunidade">

    <!-- Definição do link canônico para evitar conteúdo duplicado -->
    <link rel="canonical" href="https://mozdevcode.com">


    <title>DevCode - Comunidade</title>

    <!-- Arquivos CSS adicionais -->
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="./assets/css/main.css">
</head>

<body>
    <!-- ***** Pré-carregador Início ***** -->
    <div id="js-preloader" class="js-preloader">
        <div class="preloader-inner">
            <span class="dot"></span>
            <div class="dots">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </div>
    <!-- ***** Pré-carregador Fim ***** -->

    <?php
  include_once 'includes/header.php';
  ?>

    <main class="body">

        <?php
    include_once 'includes/init-banner.php';

    include_once 'includes/service-section.php';
    include_once 'includes/about-us-section.php';
    include_once 'includes/metric-section.php';
    include_once 'includes/team-section.php';
    include_once 'includes/contact-section.php';
    ?>
    </main>

    <footer>
        <div class="container">
            <div class="col-lg-12">
                <p>Copyright © 2024 <strong style="color: #f8934A;">DevCode</strong> All Rights Reserved</p>
            </div>
        </div>
    </footer>

    <!-- Scripts -->
    <!-- Bootstrap core JavaScript -->
    <script src="./vendor/jquery/jquery.min.js"></script>
    <script src="./vendor/bootstrap/js/bootstrap.min.js"></script>
    <script src="./assets/js/isotope.min.js"></script>
    <script src="./assets/js/owl-carousel.js"></script>
    <script src="./assets/js/counter.js"></script>
    <script src="./assets/js/custom.js"></script>
    <script src="./assets/js/jquery.mCustomScrollbar.concat.min.js"></script>
    <script src="./assets/js/material.min.js"></script>
    <script>
    $.material.init();
    </script>

</body>

</html>