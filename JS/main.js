$(document).ready(function () {
    menu();
    slider();
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

const slider = () => {
    const width = window.innerWidth;
    console.log(width);
    $('.slider__arrow').on('click', function () {
        const click = $(this).data('direction');
        console.log(click);
        if (click == 'left') {
            const sliderPos = $('.slider').css('left');
            console.log(sliderPos);
            $('.slider').css('left', width + 'px');
        } else if (click == 'right') {
            const sliderPos = $('.slider').css('left');
            console.log(sliderPos);
            $('.slider').css('left', width + 'px')
        }
        console.log()
    })
}