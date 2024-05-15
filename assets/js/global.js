$(document).ready(() => {
    setInterval(homeSlider, 6000);
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
});

const homeSlider = (flag, num) => {
    let current = $(".item.current"),
        next,
        index;
    if (!flag) {
        next = current.is(":last-child") ? $(".item").first() : current.next();
        index = next.index();
    } else if (flag === 'dot') {
        next = $(".item").eq(num);
        index = num;
    } else {
        next = current.is(":first-child") ? $(".item").last() : current.prev();
        index = next.index();
    }
    next.addClass("current");
    current.removeClass("current");
}
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