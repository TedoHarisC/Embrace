var $carousel = $('.gallery').flickity({
    cellAlign: 'left',
    prevNextButtons: false,
    pageDots: false
});

var flkty = $carousel.data('flickity');

$('.button--previous').on('click', function () {
    $carousel.flickity('previous');
});
// next
$('.button--next').on('click', function () {
    $carousel.flickity('next');
});