 $(function(){

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

   $(".header__content-btn").click(function(){
     $('html').css('overflow-y','hidden');
     $('.js-overlay-dilivery').fadeIn();
     $('.js-overlay-dilivery').addClass('disabled');
   })

   $('.popup__close').click(function(){
     $('.js-overlay-dilivery').fadeOut();
     $('html').css('overflow-y','auto');
   })

   $('.popup__btn').click(function(){
     $('.js-overlay-dilivery').fadeOut();
     $('html').css('overflow-y','auto');
   })
  });
  