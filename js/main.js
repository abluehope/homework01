$(function () {
  $(".main_slide").slick({
    arrows: false,
    autoplay: true,
    pauseOnHover: false,
    pauseOnFocus: false,
  });

  $(".main_visual .dots li").on("mouseenter", function () {
    let idx = $(this).index();

    $(".main_slide").slick("slickGoTo", idx, true);
  });

  $(".main_visual .arrows .left").on("click", function () {
    $(".main_slide").slick("slickPrev");
  });

  $(".main_visual .arrows .right").on("click", function () {
    $(".main_slide").slick("slickNext");
  });
});
