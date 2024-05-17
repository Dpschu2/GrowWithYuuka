$(document).ready(() => {
    setInterval(() => {
        let current = $(".item.current");
        let next = current.is(":last-child") ? $(".item").first() : current.next();
        let onDeck = next.is(":last-child") ? $(".item").first() : next.next();
        current.addClass('last').removeClass("current");
        next.removeClass('onDeck').addClass("current");
        onDeck.addClass("onDeck").removeClass('last');
    }, 6000);
    signUpForm();
    $(window).scroll(function(){
        const sw = $(this).width();
        const windowtop = $(this).scrollTop();
        const headerHeight = sw >= 768 ? 70 : 65;
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
    elementInView();
});
const elementInView = () => {
    /*Interactivity to determine when an animated element in in view. In view elements trigger our animation*/
    $(document).ready(function() {

        //window and animation items
        var animation_elements = $.find('.animation-element');
        var web_window = $(window);

        //check to see if any animation containers are currently in view
        function check_if_in_view() {
          //get current window information
          var window_height = web_window.height();
          var window_top_position = web_window.scrollTop();
          var window_bottom_position = (window_top_position + window_height);

          //iterate through elements to see if its in view
          $.each(animation_elements, function() {

            //get the element sinformation
            var element = $(this);
            var element_height = $(element).outerHeight();
            var element_top_position = $(element).offset().top;
            var element_bottom_position = (element_top_position + element_height);

            //check to see if this current container is visible (its viewable if it exists between the viewable space of the viewport)
            if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
              element.addClass('in-view');
            } else {
              element.removeClass('in-view');
            }
          });

        }

        //on or scroll, detect elements in view
        $(window).on('scroll resize', function() {
            check_if_in_view()
          })
          //trigger our scroll event on initial load
        $(window).trigger('scroll');

      });
};
const signUpForm = () => {
    document.addEventListener("DOMContentLoaded", function () { 
        console.log('content loaded');
        const progressListItems = document.querySelectorAll("#progressbar li"); 
        const progressBar = document.querySelector(".progress-bar"); 
        let currentStep = 0; 

        const updateProgress = () => { 
            const percent = (currentStep / (progressListItems.length - 1)) * 100; 
            progressBar.style.width = percent + "%"; 
            progressListItems.forEach((item, index) => { 
                if (index === currentStep) { 
                    item.classList.add("active"); 
                } else { 
                    item.classList.remove("active"); 
                } 
            }); 
        };

        const showStep = (stepIndex) => { 
            const steps = 
                document.querySelectorAll(".step-container fieldset"); 
            steps.forEach((step, index) => { 
                if (index === stepIndex) { 
                    step.style.display = "block"; 
                } else { 
                    step.style.display = "none"; 
                } 
            }); 
        };

        const nextStep = () => { 
            console.log('next step');
            if (currentStep < progressListItems.length - 1) { 
                currentStep++; 
                showStep(currentStep); 
                updateProgress(); 
            } 
        };

        const prevStep = () => { 
            if (currentStep > 0) { 
                currentStep--; 
                showStep(currentStep); 
                updateProgress(); 
            } 
        };

        const nextStepButtons = 
            document.querySelectorAll(".next-step"); 
        const prevStepButtons = 
            document.querySelectorAll(".previous-step"); 

        nextStepButtons.forEach((button) => { 
            button.addEventListener("click", nextStep); 
        }); 

        prevStepButtons.forEach((button) => { 
            button.addEventListener("click", prevStep); 
        }); 
    });
}