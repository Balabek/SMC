$(document).ready(function(){

    // Most popular products slider
    $('.most_popular_slider').slick({
        dots: true,
        arrows: true,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: true,
                    dots: true
                }
            },
            {
                breakpoint: 690,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });


    // Dropdown behavior correction
    $(document).on('click', '.dropdown-menu', function (e) {
        e.stopPropagation();
    });

    // Animating the standard hamburger-menu
    $(".navbar-toggle").on("click", function () {
        $(this).toggleClass("active");
    });


    // Sequence steps toggle
    $(".toggle_stripe").on("click", function(){
        $(this).find(".fa-caret-down").toggleClass("fa-caret-up");
    });


    // Subtle fade-in animation for the mentioned elements ('All Programs' page)
    ScrollReveal().reveal('.program_card_outerbox', {delay: 100});

    // Subtle fade-in animation for the mentioned elements ('About' page)
    ScrollReveal().reveal('.about_statbox', {delay: 150});
    ScrollReveal().reveal('.schweiz', {delay: 200, duration: 1300});
    ScrollReveal().reveal('.structurebox', {delay: 100});

    // Subtle fade-in animation for the mentioned elements ('Contact' page)
    ScrollReveal().reveal('.map_box', {delay: 200});

    // Subtle fade-in animation for the mentioned elements ('Program Box' elements)
    ScrollReveal().reveal('.program_box', {delay: 100});

    // Subtle fade-in animation for the mentioned elements ('Enterprise' page)
    ScrollReveal().reveal('.process_circle', {delay: 150});
    ScrollReveal().reveal('.custom_trainings_abstract', {delay: 200, duration: 1300});
    ScrollReveal().reveal('.arrow_one', {delay: 300, duration: 1600});
    ScrollReveal().reveal('.arrow_two', {delay: 300, duration: 1600});

    // Subtle fade-in animation for the mentioned elements ('Application' page)
    ScrollReveal().reveal('.journey_image', {delay: 300}, {duration: 1300});

    // Subtle fade-in animation for the mentioned elements (Homepage)
    ScrollReveal().reveal('.featurebox', {delay: 200});
    ScrollReveal().reveal('.stat_circle', {delay: 300});
    ScrollReveal().reveal('.distance_programbox', {delay: 200});
    ScrollReveal().reveal('.smc_devices', {delay: 300}, {duration: 1300});
    ScrollReveal().reveal('.smc_laptop', {delay: 300}, {duration: 1300});
    ScrollReveal().reveal('.adv_icon', {delay: 300}, {duration: 1300});
    ScrollReveal().reveal('.red_ghost_circle', {delay: 300}, {duration: 1300});
    ScrollReveal().reveal('.wordcloud', {delay: 600}, {duration: 6000});
    ScrollReveal().reveal('.explorebox', {delay: 200}, {duration: 1300});
    ScrollReveal().reveal('.exploreboxlink', {delay: 400}, {duration: 1300});

    // Subtle fade-in animation for the mentioned elements ('Agents' page)
    ScrollReveal().reveal('.represent_image', {delay: 400});
    ScrollReveal().reveal('.represent_textual_area', {delay: 100});
    ScrollReveal().reveal('.general_offers_holder', {delay: 200});
    ScrollReveal().reveal('.op_box', {delay: 300},{duration: 800});

    // Subtle fade-in animation for the mentioned elements ('Methodology' page)
    ScrollReveal().reveal('.methods_circles_holder', {delay: 300});
    ScrollReveal().reveal('.holistic_image', {delay: 300},{duration: 1100});

    // Subtle fade-in animation for the mentioned elements ('Accreditation' page)
    ScrollReveal().reveal('.accr_box', {delay: 300},{duration: 800});

    // Subtle fade-in animation for the mentioned elements ('Academic Team' page)
    ScrollReveal().reveal('.academic_card', {delay: 200});


    let uploadButton = $('.upload_btn');

    let fileInput = document.getElementsByClassName('maskedInput');
    fileInput.onchange = function () {

        let input = this.files[1];

        if (input) {
            //process input.
            this(uploadButton).element.classList.add("selected");

        } else {
            alert("Please select a file.");
        }
    };



});