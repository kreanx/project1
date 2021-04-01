$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        prevArrow: '<button type="button" class="slick-prev"><img src="../img/prev_arr.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../img/next_arr.svg"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    dots: true
                }
            }
        ]
    });
  });