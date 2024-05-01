! function($) {

    var GWY = function() {};

    //Preloader
    GWY.prototype.initPreLoader = function() {
        $('#status').fadeOut();
        $('#preloader').delay(350).fadeOut('slow');
        $('body').delay(350).css({
            'overflow': 'visible'
        });
    },

    //scroll
    GWY.prototype.initNavbarStickey = function() {
        $(window).on('scroll',function() {
            var scroll = $(window).scrollTop();

            if (scroll >= 50) {
                $(".sticky").addClass("stickyadd");
            } else {
                $(".sticky").removeClass("stickyadd");
            }
        });
    },

    //Smooth
    GWY.prototype.initNavbarSmooth = function() {
        $('.navbar-nav a, .scroll_down a').on('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 0
            }, 500, 'easeInOutExpo');
            event.preventDefault();
        });
    },

    //ScrollSpy
    GWY.prototype.initNavbarScrollSpy = function() {
        $("#navbarCollapse").scrollspy({
            offset: 20
        });
    },

    //Back To Top
    GWY.prototype.initBackToTop = function() {
        $(window).on('scroll',function(){
            if ($(this).scrollTop() > 100) {
                $('.back_top').addClass('show');
            } else {
                $('.back_top').removeClass('show');
            }
        }); 
        $('.back_top').click(function(){
            $("html, body").animate({ scrollTop: 0 }, 1000);
            return false;
        });
    },

    GWY.prototype.initTypedText = function() {
        $(".element").each(function() {
            var $this = $(this);
            $this.typed({
                strings: $this.attr('data-elements').split(','),
                typeSpeed: 100,
                backDelay: 3000
            });
        });
    },  

    GWY.prototype.init = function() {
        this.initPreLoader();
        this.initNavbarStickey();
        this.initNavbarSmooth();
        this.initNavbarScrollSpy();
        this.initBackToTop();
        this.initTypedText();
    },

    $.GWY = new GWY, $.GWY.Constructor = GWY
}(window.jQuery),

//initializing
function($) {
    $.GWY.init();
}(window.jQuery);

document.addEventListener("DOMContentLoaded", function () {
    // Get the .nav-link elements
    const navLinks = document.querySelectorAll(".nav-link");

    // Get the navbarCollapse element
    const navbarCollapse = document.getElementById("navbarCollapse");

    // Add a click event listener to each .nav-link element
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