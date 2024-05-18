"use strict";

$(document).ready(function () {
  homeSlider();
  scrollNav();
  initAnimations();
});

var homeSlider = function homeSlider() {
  setInterval(function () {
    var current = document.querySelector('.slide.active');

    if (current.nextElementSibling) {
      current.nextElementSibling.classList.add('active');
    } else {
      current.parentElement.firstElementChild.classList.add('active');
    }

    ;
    current.classList.remove('active');
  }, 6000);
};

var scrollNav = function scrollNav() {
  $(window).scroll(function () {
    var sw = $(this).width();
    var windowtop = $(this).scrollTop();
    var headerHeight = sw >= 768 ? 75 : 70;
    var $activeSection = $('.section').filter(function () {
      return windowtop > $(this).offset().top - headerHeight;
    }).last();
    var sectionId = $activeSection.data('nav');
    var $navItem = $(".nav-".concat(sectionId));

    if (!$navItem.hasClass('active')) {
      $('.nav-item.active').removeClass('active');
      $navItem.addClass('active');
    }
  });
};

var initAnimations = function initAnimations() {
  $(document).ready(function () {
    var animation_elements = $.find('.animation-element');
    var web_window = $(window);

    function check_if_in_view() {
      var window_height = web_window.height();
      var window_top_position = web_window.scrollTop();
      var window_bottom_position = window_top_position + window_height;
      $.each(animation_elements, function () {
        var element = $(this);
        var element_height = $(element).outerHeight();
        var element_top_position = $(element).offset().top;
        var element_bottom_position = element_top_position + element_height;
        console.log('vals', element_bottom_position, window_top_position, element_top_position, window_bottom_position);

        if (element_bottom_position >= window_top_position && element_top_position <= window_bottom_position) {
          element.addClass('in-view');
        } else {
          element.removeClass('in-view');
        }
      });
    }

    $(window).on('scroll resize', function () {
      check_if_in_view();
    });
    $(window).trigger('scroll');
  });
};