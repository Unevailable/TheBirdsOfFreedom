// This code helps with being able to use the hamburger menu
$(document).on('click', '.header__burgerMenu__button, .header__layer', function() {
    $('header').toggleClass('menuOpen');
});
