<!DOCTYPE html>
<html lang="pt-pt">

<head>
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-WZD8M47G6F"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());

        gtag('config', 'G-WZD8M47G6F');
    </script>
    <!-- ========================= -->

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <meta name="description" content="Dev Code - Comunidade, A maior comunidade de Dev em Moçambique.">
    <meta name="keywords" content="devcode, code, programação, javascript">
    <meta name="author" content="DevCode - Comunidade">

    <!-- Definição do link canônico para evitar conteúdo duplicado -->
    <link rel="canonical" href="https://mozdevcode.com">
    <link rel="icon" href="./assets/images/icon/favicon-32x32.png" type="image/png">


    <title>DevCode - Comunidade</title>

    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.3.1/css/all.min.css" rel="stylesheet">

    <!-- Arquivos CSS adicionais -->
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="./assets/css/main.css">

    <link rel="stylesheet" href="./assets/css/devcode.css">
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

        include_once 'includes/next-event-section.php';
        include_once 'includes/service-section.php';
        include_once 'includes/about-us-section.php';
        include_once 'includes/last-event-section.php';
        include_once 'includes/metric-section.php';
        include_once 'includes/team-section.php';
        include_once 'includes/contact-section.php';
        ?>
    </main>

    <?php
    include_once 'includes/footer.php';
    ?>

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