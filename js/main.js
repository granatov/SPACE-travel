$(function () {
  $(".slider__box").slick({
    prevArrow:
      '<img class="slider__arrow slider_arrow-left" src="template/arrow_prev.svg" alt="left arrow" />',
    nextArrow:
      '<img class="slider__arrow slider_arrow-right" src="template/arrow_next.svg"  alt="right arrow"/>',
    responsive: [
      {
        breakpoint: 481,
        settings: {
          arrows: false,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
    ],
  });
  $(".menu__btn").on("click", function () {
    $(".menu__btn, .menu__list").toggleClass("active");
  });
});

$(document).ready(function () {
  $("#menu").on("click", "a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке

    event.preventDefault();

    //забираем идентификатор бока с атрибута href

    var id = $(this).attr("href"),
      //узнаем высоту от начала страницы до блока на который ссылается якорь

      top = $(id).offset().top;

    //анимируем переход на расстояние - top за 1500 мс

    $("body,html").animate({ scrollTop: top }, 1500);
  });
});
