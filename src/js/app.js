import 'bootstrap';
import 'moment/moment';
import '../styles/style.scss';
import '@fortawesome/fontawesome-free/js/all';
import $ from 'jquery';
import 'slick-carousel';
window.jQuery = $;
window.$ = $;

$(document).ready(function () {
  /* ====== Slider Header Block Main Page ====== */
  let slickSlider = $('.slider');
  $(slickSlider).slick({
    autoplay: false,
    arrows: false,
    dots: true,
    speed: 500,
    fade: true,
    cssEase: 'ease-in-out',
    customPaging: function (slider, i) {
      return '<a>0' + (i + 1) + '</a>';
    },
    responsive: [{
      breakpoint: 500,
      settings: {
        dots: true,
        arrows: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });
  // custom function showing current slide
  let $slickElement = $(slickSlider);
  $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    // currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    let i = (currentSlide || 0) + 1;
    console.log(i);
  });
  if ($(window).width() >= 320 || ($(window).width() <= 2560)) {
    let dots = $('.slick-dots');
    $('.order-12').prepend($(dots));
    $(dots).addClass('d-inline-block m-0');
  }
  /* ====== End of Slider Header Block Main Page ====== */
  /* ====== Accordion Marketing Block====== */
  $('.accordion_head').click(function () {
    let accordionBody = $('.accordion_body');
    let plusminus = $('.plusminus');
    if ($(accordionBody).is(':visible')) {
      $(accordionBody).slideUp(300);
      $(plusminus).text('+');
    }
    if ($(this).next('.accordion_body').is(':visible')) {
      $(this).next('.accordion_body').slideUp(300);
      $(this).children('.plusminus').text('+');
    } else {
      $(this).next('.accordion_body').slideDown(300);
      $(this).children('.plusminus').text('-');
    }
  });
  /* ====== End of Accordion Marketing Block====== */
  /* ====== Block Scroll When Menu Open ====== */
  $('#menuToggle').on('click', function () {
    if ($('input[name="openMenu"]').is(':checked')) {
      $('body').addClass('stop-scrolling');
    } else {
      $('body').removeClass('stop-scrolling');
    }
  });
  /* ====== End of Block Scroll When Menu Open ====== */
  /* ====== Form filled - if input filled >= 3 ====== */
  $('.input').blur(function () {
    if ($(this).val().length >= 3) {
      $(this).css('border-bottom', '1px solid #1AA0ED');
    }
  });
  /* ====== End of Form filled - if input filled >= 3 ====== */
  /* ====== Hover effect on button ====== */
  $('.form-sendbtn').html((i, html) => {
    return '<span><i>' + $.trim(html).split('').join('</i><i>') + '</i></span>';
  });
  /* ====== End of Hover effect on button ====== */

  /* If hover - show link  */
  // $(".portfolio-list__link").hide();
  // $('.grayscale-hover').hover(function () {
  //   $('.portfolio-list__link').fadeToggle('slow');
  // })
});
