"use strict";

var init = function init() {
  initPreLoader();
  initNavbarStickey();
  initNavbarSmooth();
  initNavbarScrollSpy();
  initBackToTop();
  initTypedText();
  initModalUrlCheck();
  homeSlider();
  scrollNav();
  scrollOppositeAnimation();
  initAnimations();
  spotifyToggle();
  initReadMore();
  initCoachingForm();
};

var initModalUrlCheck = function initModalUrlCheck() {
  var urlParams = window.location.href;

  if (urlParams.includes('#privacy-policy')) {
    $('[popovertarget="privacy-policy"]').click();
  }
};

var initPreLoader = function initPreLoader() {
  $('#status').fadeOut();
  $('#preloader').delay(350).fadeOut('slow');
  $('body').delay(350).css({
    'overflow': 'visible'
  });
}; //scroll


var initNavbarStickey = function initNavbarStickey() {
  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
      $(".sticky").addClass("stickyadd");
    } else {
      $(".sticky").removeClass("stickyadd");
    }
  });
}; //Smooth


var initNavbarSmooth = function initNavbarSmooth() {
  $('.nav-link').on('click', function (event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top - 0
    }, 500, 'easeInOutExpo');
    event.preventDefault();
  });
}; //ScrollSpy


var initNavbarScrollSpy = function initNavbarScrollSpy() {
  $("#navbarCollapse").scrollspy({
    offset: 20
  });
}; //Back To Top


var initBackToTop = function initBackToTop() {
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 100) {
      $('.back_top').addClass('show');
    } else {
      $('.back_top').removeClass('show');
    }
  });
  $('.back_top').click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, 1000);
    return false;
  });
};

var initTypedText = function initTypedText() {
  $(".element").each(function () {
    var $this = $(this);
    $this.typed({
      strings: $this.attr('data-elements').split(','),
      typeSpeed: 100,
      backDelay: 3000
    });
  });
};

var scrollOppositeAnimation = function scrollOppositeAnimation() {
  $(window).scroll(function () {
    var sw = $(window).width();
    var sh = window.outerHeight;
    var windowtop = $(this).scrollTop();
    var isDesktop = sw >= 768;
    var headerHeight = isDesktop ? 75 : 70;
    var topVisible = windowtop + headerHeight;
    var viewableHeight = sh - headerHeight;
    var halfHeight = viewableHeight / 2;
    var halfTop = topVisible + halfHeight;
    $('.scroll-opposite').each(function () {
      var centerMark = $(this).parent().find('.center-marker');
      var centerTop = centerMark.offset().top;
      var tranY = centerTop - halfTop;
      var adjustedHalf = isDesktop ? halfTop - 200 : halfTop;
      var canScroll = centerTop >= adjustedHalf;

      if (canScroll) {
        var addRotate = $(this).hasClass('rotate') ? 'rotate(-16deg) ' : '';
        $(this).css({
          transform: "".concat(addRotate, "translateY(").concat(tranY == 0 ? 0 : tranY / 4, "px)")
        });
      }
    });
  });
};

var initReadMore = function initReadMore() {
  $('.read-more').on('click', function () {
    $('.read-more-text').toggleClass('shown');

    if (!$('.read-more-text').hasClass('shown')) {
      $([document.documentElement, document.body]).animate({
        scrollTop: $("#about-col").offset().top
      }, 200);
    }

    setTimeout(function () {
      $('.read-more-p').toggleClass('show-less');
    }, 1000);
  });
};

var spotifyToggle = function spotifyToggle() {
  $('.spotify-toggle').on('click', function () {
    $('.spotify-container').toggleClass('is-open');
  });
};

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
      var window_height = screen.height;
      var window_top_position = web_window.scrollTop();
      var window_bottom_position = window_top_position + window_height;
      $.each(animation_elements, function () {
        var element = $(this);
        var element_height = element.outerHeight();
        var element_top_position = element.offset().top;
        var element_bottom_position = element_top_position + element_height;
        var isInView = element_bottom_position >= window_top_position && element_top_position < window_bottom_position;

        if (isInView && !element.hasClass('in-view')) {
          element.addClass('in-view');
        } else if (!isInView && element.hasClass('in-view')) {
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

var initCoachingForm = function initCoachingForm() {
  var waitForElm = function waitForElm(selector) {
    return new Promise(function (resolve) {
      if (document.querySelector(selector)) {
        return resolve(document.querySelector(selector));
      }

      var observer = new MutationObserver(function (mutations) {
        if (document.querySelector(selector)) {
          observer.disconnect();
          resolve(document.querySelector(selector));
        }
      });
      observer.observe(document.body, {
        childList: true,
        subtree: true
      });
    });
  };

  waitForElm('.cgf__fields').then(function (el) {
    $("<progress id=\"form-progress\" value=\"0\" max=\"5\"> 0% </progress>").insertBefore($('.cgf__content'));
    var progress = $('#form-progress');

    var updateProgress = function updateProgress() {
      setTimeout(function () {
        var activeIndex = $('.cgf__fields .cgf__section:not([disabled])').index();

        if (!$('#form-progress').length && activeIndex === 0) {
          $("<progress id=\"form-progress\" value=\"0\" max=\"5\"> 0% </progress>").insertBefore($('.cgf__content'));
          progress = $('#form-progress');
        } else if ($('#form-progress').length && progress.val() != activeIndex && activeIndex >= 0) {
          progress.val(activeIndex).text("".concat(activeIndex / 5 * 100, "%"));
        } else if (!$('#form-progress').length && activeIndex == -1 && $('.cgf__description').length) {
          $("<progress id=\"form-progress\" class=\"finish\" value=\"4\" max=\"5\"> 100% </progress>").insertBefore($('.cgf__description'));
          $('#form-progress').val(5).text('100%');
          progress = $('#form-progress');
        }
      }, 0);
    };

    $(document).on('keyup', '#regForm input[type=text]', function (e) {
      if (e.key === 'Enter') {
        $('#regForm .cgf__actions button:last-child').click();
        updateProgress();
      }
    });
    $('#regForm').on('click', function () {
      updateProgress();
    });
  });
};

init();