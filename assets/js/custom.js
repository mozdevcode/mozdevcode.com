(function ($) {
    "use strict";

    $('.cadastrar-btn').on('click', function (event) {
        event.preventDefault(); // Evita o envio real do formulário         
        alert('Cadastro realizado com sucesso!');
    });


    $('#cadastrar').on('click', function (event) {
        event.preventDefault(); // Evita o envio real do formulário         

        if (document.getElementById('cadastrar')) {
            document.getElementById('cadastrar').remove(); // Remove o nav cadastro

            // Adiciona novos botões
            let login = document.createElement('li');
            login.className = 'scroll-to-section';
            login.id = 'login';

            let loginLink = document.createElement('a');
            loginLink.href = 'login.html';
            loginLink.textContent = 'Entrar';

            login.appendChild(loginLink);
            document.getElementById('navbar').appendChild(login);

            $('#signup-tab').removeClass('hidden');
            $('#login-form').addClass('hidden');
        }
    });

    // Função para iniciar o carregamento da página
    function initPageLoader() {
        $(window).on('load', function () {
            const preloader = $('#js-preloader');
            const preloaderContainer = $("#preloader");

            preloader.addClass('loaded');
            preloaderContainer.animate({ opacity: '0' }, 600, function () {
                setTimeout(function () {
                    preloaderContainer.css("visibility", "hidden").fadeOut();
                }, 300);
            });

            // Verifique se a seção com o atributo 'data-image' existe antes de aplicar o parallax
            if ($('.cover').length && $.fn.parallax) {
                $('.cover').parallax({
                    imageSrc: $('.cover').data('image'),
                    zIndex: '1',
                });
            }
        });
    }

    // Chamada da função
    initPageLoader();


    // Função para manipular o cabeçalho ao rolar a página
    function handleHeaderScroll() {
        $(window).scroll(function () {
            const scroll = $(window).scrollTop();
            const boxHeight = $('.header-text').height();
            const headerHeight = $('header').height();

            if (scroll >= boxHeight - headerHeight) {
                $("header").addClass("background-header");
            } else {
                $("header").removeClass("background-header");
            }
        });
    }

    // Função para recarregar a página ao redimensionar a janela
    function handleWindowResize() {
        const initialWidth = $(window).width();
        $(window).resize(function () {
            const currentWidth = $(window).width();
            if ((initialWidth > 767 && currentWidth < 767) || (initialWidth < 767 && currentWidth > 767)) {
                location.reload();
            }
        });
    }

    // Função para iniciar Isotope e filtro de eventos
    function initIsotope() {
        const elem = document.querySelector('.event_box');
        const filtersElem = document.querySelector('.event_filter');

        if (elem) {
            const rdn_events_list = new Isotope(elem, {
                itemSelector: '.event_outer',
                layoutMode: 'masonry'
            });

            if (filtersElem) {
                filtersElem.addEventListener('click', function (event) {
                    if (!matchesSelector(event.target, 'a')) return;

                    const filterValue = event.target.getAttribute('data-filter');
                    rdn_events_list.arrange({ filter: filterValue });

                    filtersElem.querySelector('.is_active').classList.remove('is_active');
                    event.target.classList.add('is_active');
                    event.preventDefault();
                });
            }
        }
    }

    // Função para inicializar o Owl Carousel
    function initOwlCarousel() {
        const owlOptions = {
            center: true,
            items: 1,
            loop: true,
            nav: true,
            margin: 30,
            autoplay: true,
            autoplayTimeout: 10000,
            responsive: {
                992: { items: 1 },
                1200: { items: 1 }
            }
        };

        $('.owl-banner').owlCarousel(owlOptions);
        $('.owl-testimonials').owlCarousel(owlOptions);
    }

    // Função para o menu dropdown
    function initMenuDropdown() {
        if ($('.menu-trigger').length) {
            $(".menu-trigger").on('click', function () {
                $(this).toggleClass('active');
                $('.header-area .nav').slideToggle(200);
            });
        }

        const dropdownOpener = $('.main-nav ul.nav .has-sub > a');
        if (dropdownOpener.length) {
            dropdownOpener.each(function () {
                const _this = $(this);
                _this.on('tap click', function (e) {
                    const thisItemParent = _this.parent('li');
                    const thisItemParentSiblingsWithDrop = thisItemParent.siblings('.has-sub');
                    const submenu = thisItemParent.find('> ul.sub-menu');

                    if (submenu.is(':visible')) {
                        submenu.slideUp(450, 'easeInOutQuad');
                        thisItemParent.removeClass('is-open-sub');
                    } else {
                        thisItemParent.addClass('is-open-sub');
                        thisItemParentSiblingsWithDrop.removeClass('is-open-sub').find('.sub-menu').slideUp(250, 'easeInOutQuad', function () {
                            submenu.slideDown(250, 'easeInOutQuad');
                        });
                    }
                    e.preventDefault();
                });
            });
        }
    }

    // Função para a animação do menu elevador
    function initMenuElevator() {
        $('.scroll-to-section a[href*=\\#]:not([href=\\#])').on('click', function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                let target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    const width = $(window).width();
                    if (width < 767) {
                        $('.menu-trigger').removeClass('active');
                        $('.header-area .nav').slideUp(200);
                    }
                    $('html,body').animate({ scrollTop: (target.offset().top) - 80 }, 700);
                    return false;
                }
            }
        });

        $(document).ready(function () {
            $(document).on("scroll", onScroll);
            $('.scroll-to-section a[href^="#"]').on('click', function (e) {
                e.preventDefault();
                $(document).off("scroll");

                $('.scroll-to-section a').removeClass('active');
                $(this).addClass('active');

                const target = $(this.hash);
                $('html, body').stop().animate({ scrollTop: (target.offset().top) - 79 }, 500, 'swing', function () {
                    window.location.hash = target;
                    $(document).on("scroll", onScroll);
                });
            });
        });
    }

    function onScroll(event) {
        const scrollPos = $(document).scrollTop();
        $('.nav a').each(function () {
            const currLink = $(this);
            const refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('.nav ul li a').removeClass("active");
                currLink.addClass("active");
            } else {
                currLink.removeClass("active");
            }
        });
    }


    // Função para mostrar um alerta de sucesso
    function initFormSubmitAlert() {
        document.getElementById('form-submit').addEventListener('click', function (event) {
            event.preventDefault(); // Evita o envio real do formulário
            alert('Seu formulário foi enviado com sucesso!');
        });
    }

    // Inicializando todas as funções
    function init() {
        initPageLoader();
        handleHeaderScroll();
        handleWindowResize();
        initIsotope();
        initOwlCarousel();
        initMenuDropdown();
        initMenuElevator();
        initFormClear();
        initFormSubmitAlert();
    }

    // Chamando a função de inicialização
    $(document).ready(init);

})(window.jQuery);