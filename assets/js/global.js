$(document).ready(() => {
    homeSlider();
    scrollNav()
    initAnimations();
});

const homeSlider = () => {
    setInterval(function(){ 
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
    $(window).scroll(function(){
        const sw = $(this).width();
        const windowtop = $(this).scrollTop();
        const headerHeight = sw >= 768 ? 75 : 70;
        const $activeSection = $('.section')
            .filter(function(){ return (windowtop > ($(this).offset().top - headerHeight)); })
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
    $(document).ready(function() {
        let animation_elements = $.find('.animation-element');
        let web_window = $(window);
        function check_if_in_view() {
          let window_height = web_window.height();
          let window_top_position = web_window.scrollTop();
          let window_bottom_position = (window_top_position + window_height);
          $.each(animation_elements, function() {
            let element = $(this);
            let element_height = $(element).outerHeight();
            let element_top_position = $(element).offset().top;
            let element_bottom_position = (element_top_position + element_height);
            console.log('vals', element_bottom_position, window_top_position, element_top_position, window_bottom_position);
            if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
              element.addClass('in-view');
            } else {
              element.removeClass('in-view');
            }
          });
        }
        $(window).on('scroll resize', function() {
            check_if_in_view();
        });
        $(window).trigger('scroll');
    });
};