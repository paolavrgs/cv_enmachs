WebFont.load({
  google: {
    families: ['Lato:300,400,700,900']
  }
});

$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav',
  centerMode: true
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  centerMode: true,
  focusOnSelect: true
});

$(function() {
  $('[data-toggle="tooltip"]').tooltip()
})