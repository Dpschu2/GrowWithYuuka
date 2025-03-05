
const init = () => {
    includeHTML();
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
}
const initModalUrlCheck = () => {
    const urlParams = window.location.href;
    if (urlParams.includes('#privacy-policy')) {
        $('[popovertarget="privacy-policy"]').click();
    }
}

const initPreLoader = () => {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
    $('body').delay(350).css({
        'overflow': 'visible'
    });
}

//scroll
const initNavbarStickey = () => {
    $(window).on('scroll',function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 50) {
            $(".sticky").addClass("stickyadd");
        } else {
            $(".sticky").removeClass("stickyadd");
        }
    });
}

//Smooth
const initNavbarSmooth = () => {
    $('.nav-link').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 0
        }, 500, 'easeInOutExpo');
        event.preventDefault();
    });
}

//ScrollSpy
const initNavbarScrollSpy = () => {
    $("#navbarCollapse").scrollspy({
        offset: 20
    });
}

//Back To Top
const initBackToTop = () => {
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
}

const initTypedText = () => {
    $(".element").each(function() {
        var $this = $(this);
        $this.typed({
            strings: $this.attr('data-elements').split(','),
            typeSpeed: 100,
            backDelay: 3000
        });
    });
}
const scrollOppositeAnimation = () => {
    $(window).scroll(function () {
      const sw = $(window).width();
      const sh = window.outerHeight;
      const windowtop = $(this).scrollTop();
      const isDesktop = sw >= 768;
      const headerHeight = isDesktop ? 75 : 70;
      const topVisible = windowtop + headerHeight;
      const viewableHeight = sh - headerHeight;
      const halfHeight = viewableHeight / 2;
      const halfTop = topVisible + halfHeight;
      $('.scroll-opposite').each(function() {
        const centerMark = $(this).parent().find('.center-marker');
        const centerTop = centerMark.offset().top;
        let tranY = centerTop - halfTop;
        const adjustedHalf = isDesktop ? halfTop - 200 : halfTop;
        const canScroll = centerTop >= adjustedHalf;
        if (canScroll) {
            const addRotate = $(this).hasClass('rotate') ? 'rotate(-16deg) ' : '';
            $(this).css({ 
                transform: `${addRotate}translateY(${tranY == 0 ? 0 : (tranY / 4)}px)`
            });
        }
      });
    });
}
const initReadMore = () => {
    $('.read-more').on('click', () => {
        $('.read-more-text').toggleClass('shown');
        if (!$('.read-more-text').hasClass('shown')) {
            $([document.documentElement, document.body]).animate({
                scrollTop: $("#about-col").offset().top
            }, 200);
        }
        setTimeout(function(){
            $('.read-more-p').toggleClass('show-less');
        }, 1000);
    });
}
const spotifyToggle = () => {
    $('.spotify-toggle').on('click', function () {
        $('.spotify-container').toggleClass('is-open');
    });
}
const homeSlider = () => {
    setInterval(function () {
        let current = document.querySelector('.slide.active');
        if (current.nextElementSibling) {
            current.nextElementSibling.classList.add('active');
        } else {
            current.parentElement.firstElementChild.classList.add('active');
        };
        current.classList.remove('active');
    }, 6000);
}
const scrollNav = () => {
    $(window).scroll(function () {
        const sw = $(this).width();
        const windowtop = $(this).scrollTop();
        const headerHeight = sw >= 768 ? 75 : 70;
        const $activeSection = $('.section')
            .filter(function () {
                return (windowtop > ($(this).offset().top - headerHeight));
            })
            .last();
        const sectionId = $activeSection.data('nav');
        const $navItem = $(`.nav-${sectionId}`);
        if (!$navItem.hasClass('active')) {
            $('.nav-item.active').removeClass('active');
            $navItem.addClass('active');
        }
    });
}
const initAnimations = () => {
    $(document).ready(function () {
        let animation_elements = $.find('.animation-element');
        let web_window = $(window);

        function check_if_in_view() {
            let window_height = screen.height;
            let window_top_position = web_window.scrollTop();
            let window_bottom_position = (window_top_position + window_height);
            $.each(animation_elements, function () {
                let element = $(this);
                let element_height = element.outerHeight();
                let element_top_position = element.offset().top;
                let element_bottom_position = (element_top_position + element_height);
                const isInView = (element_bottom_position >= window_top_position) && (element_top_position < window_bottom_position);
                if (isInView && !element.hasClass('in-view')) {
                    element.addClass('in-view');
                }
                else if (!isInView && element.hasClass('in-view')) {
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
const initCoachingForm = () => {
    const waitForElm = (selector) => {
        return new Promise(resolve => {
            if (document.querySelector(selector)) {
                return resolve(document.querySelector(selector));
            }
            const observer = new MutationObserver(mutations => {
                if (document.querySelector(selector)) {
                    observer.disconnect();
                    resolve(document.querySelector(selector));
                }
            });
            observer.observe(document.body, {
                childList: true,
                subtree: true,
            });
        });
    }
    waitForElm('.cgf__copy').then(function(el){
        el.remove();
    });
    waitForElm('.cgf__fields').then(function(el){
        $("<progress id=\"form-progress\" value=\"0\" max=\"5\"> 0% </progress>").insertBefore($('.cgf__content'));
        let progress = $('#form-progress');
        
        const updateProgress = () => {
            setTimeout(() => {
                const activeIndex = $('.cgf__fields .cgf__section:not([disabled])').index();
                if (!$('#form-progress').length && activeIndex === 0) {
                    $("<progress id=\"form-progress\" value=\"0\" max=\"5\"> 0% </progress>").insertBefore($('.cgf__content'));
                    progress = $('#form-progress');
                }
                else if ($('#form-progress').length && progress.val() != activeIndex && activeIndex >= 0) {
                    progress.val(activeIndex).text(`${(activeIndex/5)*100}%`);
                }
                else if (!$('#form-progress').length && activeIndex == -1 && $('.cgf__description').length) {
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

        $('#regForm').on('click', () => {
            updateProgress();
        });
    });
}
const includeHTML = () => {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}
init();