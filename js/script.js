// Copyright (c) 2020 Batuhan Durhan All rights reserved
//
// Created by: Batuhan Durhan
// Created on: April 2022
// This file contains the JS functions for index.html

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register(
    "/ICS2O-Unit5-01-HTML-Slider-Example/sw.js",
    {
      scope: "/ICS2O-Unit5-01-HTML-Slider-Example/",
    }
  )
}

/**
 * This function updates the slider value.
 */
function updateSliderValue(valueFromSlider) {
  document.getElementById("slider-value").innerHTML = valueFromSlider
}

/**
 * This function displays the slider value.
 */
function myButtonClicked() {
  const randomNumber = Math.floor(Math.random() * 6) + 1;  // returns a random integer from 1 to 10

  if (slider.value == randomNumber) {
    document.getElementById("answer").innerHTML = "Answer is " + randomNumber + " correct"
  }

  if (slider.value != randomNumber) {
    document.getElementById("answer").innerHTML = "Answer is " + randomNumber + " wrong"
  }
}
