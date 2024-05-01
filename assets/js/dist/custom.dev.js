"use strict";

!function ($) {
  var GWY = function GWY() {}; //Preloader


  GWY.prototype.initPreLoader = function () {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
    $('body').delay(350).css({
      'overflow': 'visible'
    });
  }, //scroll
  GWY.prototype.initNavbarStickey = function () {
    $(window).on('scroll', function () {
      var scroll = $(window).scrollTop();

      if (scroll >= 50) {
        $(".sticky").addClass("stickyadd");
      } else {
        $(".sticky").removeClass("stickyadd");
      }
    });
  }, //Smooth
  GWY.prototype.initNavbarSmooth = function () {
    $('.navbar-nav a, .scroll_down a').on('click', function (event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 0
      }, 500, 'easeInOutExpo');
      event.preventDefault();
    });
  }, //ScrollSpy
  GWY.prototype.initNavbarScrollSpy = function () {
    $("#navbarCollapse").scrollspy({
      offset: 20
    });
  }, //Funfacts
  GWY.prototype.initFunFacts = function () {
    var a = 0;
    $(window).on('scroll', function () {
      var oTop = $('#counter').offset().top - window.innerHeight;

      if (a == 0 && $(window).scrollTop() > oTop) {
        $('.lan_fun_value').each(function () {
          var $this = $(this),
              countTo = $this.attr('data-count');
          $({
            countNum: $this.text()
          }).animate({
            countNum: countTo
          }, {
            duration: 2000,
            easing: 'swing',
            step: function step() {
              $this.text(Math.floor(this.countNum));
            },
            complete: function complete() {
              $this.text(this.countNum); //alert('finished');
            }
          });
        });
        a = 1;
      }
    });
  }, //Portfolio Filter
  GWY.prototype.initPortfolioFilter = function () {
    $(window).on('load', function () {
      var $container = $('.work-filter');
      var $filter = $('#menu-filter');
      $container.isotope({
        filter: '*',
        layoutMode: 'masonry',
        animationOptions: {
          duration: 750,
          easing: 'linear'
        }
      });
      $filter.find('a').on("click", function () {
        var selector = $(this).attr('data-filter');
        $filter.find('a').removeClass('active');
        $(this).addClass('active');
        $container.isotope({
          filter: selector,
          animationOptions: {
            animationDuration: 750,
            easing: 'linear',
            queue: false
          }
        });
        return false;
      });
    });
  }, //Magnificpop
  GWY.prototype.initMfpImages = function () {
    $('.img-zoom').magnificPopup({
      type: 'image',
      closeOnContentClick: true,
      mainClass: 'mfp-fade',
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1]
      }
    });
  }, //ClientSlider
  // GWY.prototype.initClientSlider = function() {
  //     $("#owl-demo").owlCarousel({
  //         autoPlay: 7000,
  //         stopOnHover: true,
  //         navigation: false,
  //         paginationSpeed: 1000,
  //         goToFirstSpeed: 2000,
  //         singleItem: true,
  //         autoHeight: true,
  //     });
  // },
  //MfpVideo
  GWY.prototype.initMfpVideo = function () {
    $('.blog_play').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false
    });
  }, //Back To Top
  GWY.prototype.initBackToTop = function () {
    $(window).on('scroll', function () {
      if ($(this).scrollTop() > 100) {
        $('.back_top').fadeIn();
      } else {
        $('.back_top').fadeOut();
      }
    });
    $('.back_top').click(function () {
      $("html, body").animate({
        scrollTop: 0
      }, 1000);
      return false;
    });
  }, GWY.prototype.initTypedText = function () {
    $(".element").each(function () {
      var $this = $(this);
      $this.typed({
        strings: $this.attr('data-elements').split(','),
        typeSpeed: 100,
        backDelay: 3000
      });
    });
  }, GWY.prototype.init = function () {
    this.initPreLoader();
    this.initNavbarStickey();
    this.initNavbarSmooth();
    this.initNavbarScrollSpy();
    this.initFunFacts();
    this.initPortfolioFilter();
    this.initMfpImages(); // this.initClientSlider();

    this.initMfpVideo();
    this.initBackToTop();
    this.initTypedText();
  }, $.GWY = new GWY(), $.GWY.Constructor = GWY;
}(window.jQuery), //initializing
function ($) {
  $.GWY.init();
}(window.jQuery);
document.addEventListener("DOMContentLoaded", function () {
  // Get the .nav-link elements
  var navLinks = document.querySelectorAll(".nav-link"); // Get the navbarCollapse element

  var navbarCollapse = document.getElementById("navbarCollapse"); // Add a click event listener to each .nav-link element

  navLinks.forEach(function (navLink) {
    navLink.addEventListener("click", function () {
      // Check if the navbarCollapse element has the 'show' class
      if (navbarCollapse.classList.contains("show")) {
        // If it has the 'show' class, remove it to hide the navbar
        navbarCollapse.classList.remove("show");
      }
    });
  });
});