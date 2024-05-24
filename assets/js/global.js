const init = () => {
    homeSlider();
    scrollNav();
    scrollOppositeAnimation();
    initAnimations();
    spotifyToggle();
    initReadMore();
    initCoachingForm();
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
        const tranY = centerTop - halfTop;
        const scrollBelowCenter = centerTop < halfTop;
        if (isDesktop || (!isDesktop && !scrollBelowCenter)) {
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
init();