"use strict";

$(document).ready(function () {
  $(".simple-text-rotate").textrotator({
    animation: "fade",
    speed: 3500
  });
  signUpForm();
});

var signUpForm = function signUpForm() {
  console.log('test');
  document.addEventListener("DOMContentLoaded", function () {
    var progressListItems = document.querySelectorAll("#progressbar li");
    var progressBar = document.querySelector(".progress-bar");
    var currentStep = 0;

    var updateProgress = function updateProgress() {
      var percent = currentStep / (progressListItems.length - 1) * 100;
      progressBar.style.width = percent + "%";
      progressListItems.forEach(function (item, index) {
        if (index === currentStep) {
          item.classList.add("active");
        } else {
          item.classList.remove("active");
        }
      });
    };

    var showStep = function showStep(stepIndex) {
      var steps = document.querySelectorAll(".step-container fieldset");
      steps.forEach(function (step, index) {
        if (index === stepIndex) {
          step.style.display = "block";
        } else {
          step.style.display = "none";
        }
      });
    };

    var nextStep = function nextStep() {
      if (currentStep < progressListItems.length - 1) {
        currentStep++;
        showStep(currentStep);
        updateProgress();
      }
    };

    var prevStep = function prevStep() {
      if (currentStep > 0) {
        currentStep--;
        showStep(currentStep);
        updateProgress();
      }
    };

    var nextStepButtons = document.querySelectorAll(".next-step");
    var prevStepButtons = document.querySelectorAll(".previous-step");
    nextStepButtons.forEach(function (button) {
      button.addEventListener("click", nextStep);
    });
    prevStepButtons.forEach(function (button) {
      button.addEventListener("click", prevStep);
    });
  });
};