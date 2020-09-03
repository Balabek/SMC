$(document).ready(function(){

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





});