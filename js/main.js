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
        },
      },
    ],
  });
  $(".menu__btn").on("click", function () {
    $(".menu__btn, .menu__list").toggleClass("active");
  });
});
