const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");

const progressBarFront = document.querySelector(".progress-bar-front");

const steps = document.querySelectorAll(".step");
const forms = document.querySelectorAll(".form");

let currentStep = 1;

nextButton.addEventListener("click", () => {
    currentStep++;
    if (currentStep > steps.length) {
        currentStep = steps.length;
    }
    updateProg();
});

prevButton.addEventListener("click", () => {
    currentStep--;
    if (currentStep < 1) {
        currentStep = 1;
    }
    updateProg();
});

function updateProg() {
    steps.forEach((step, index) => {
        if (index < currentStep) {
            step.classList.add("checked");
        } else {
            step.classList.remove("checked");
        }
    });

    const progressPercentage = ((currentStep - 1) / (steps.length - 1)) * 100;
    progressBarFront.style.width = `${progressPercentage}%`;

    prevButton.hidden = currentStep === 1;
    nextButton.textContent = currentStep === steps.length ? "Submit" : "Next";

    updateFormVisibility();
}

function updateFormVisibility() {
    forms.forEach((form, index) => {
        form.style.display = index + 1 === currentStep ? "block" : "none";
    });
}

updateProg();