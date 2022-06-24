 $(function(){

   $('.tabs__top-item').on('click', function (e) {
     e.preventDefault();
     $('.tabs__top-item').removeClass('tabs__top-item--active');
     $(this).addClass('tabs__top-item--active');

     $('.tabs__content-item').removeClass('tabs__content-item--active');
     $($(this).attr('href')).addClass('tabs__content-item--active');

   });

   $('.slider__inner').slick({
     prevArrow: '<button type="button" class="slick-prev"><img src="images/slider/arrow-prev.svg" alt="arrow-left"></button>',
     nextArrow: '<button type="button" class="slick-next"><img src="images/slider/arrow-next.svg" alt="arrow-right"></button>',
     speed: 500,
     fade: true,
     cssEase: 'linear',
     dots: true,
   });

   $('.accordion__question').on('click', function () {
     $(this).toggleClass('question__open');
     $(this).children('.question__answer').slideToggle(400);
   });

 });
