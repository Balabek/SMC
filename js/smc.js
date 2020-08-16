$(document).ready(function(){

    // Dropdown behavior correction
    $(document).on('click', '.dropdown-menu', function (e) {
        e.stopPropagation();
    });

    // Animating the standard hamburger-menu
    $(".navbar-toggle").on("click", function () {
        $(this).toggleClass("active");
    });

});