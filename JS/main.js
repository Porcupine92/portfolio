$(document).ready(function () {
    menu();
});

const menu = () => {
    $('.burger-menu').on('click', () => {
        const state = $('.navigation').hasClass("navigation--open");
        if (state) {
            $('.navigation').removeClass('navigation--open');
        } else {
            $('.navigation').addClass('navigation--open');
        }
    })
}