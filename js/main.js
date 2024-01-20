"use strict";

// Variables
let navbarSelector = $("#navbar");
let navWidth = $("#navbar .content").outerWidth();
let homeHeight = $("#home").outerHeight();
let openIcon = $("#navbar .icon");

// NavBar Default Position
navbarSelector.css({
  transform: `translateX(${-navWidth}px)`,
});

// Open NavBar
$("#navbar .icon").on("click", function () {
  navbarSelector.css({
    transform: `translateX(0)`,
    transition: " 2s",
  });
});

// Close NavBar
$("#navbar .content .close-icon").on("click", function () {
  navbarSelector.css({
    transform: `translateX(${-navWidth}px)`,
    transition: " 2s",
  });
});

// Toggle Display for NavBar Open icon
$(window).on("scroll", function () {
  let scrollTopValue = $(this).scrollTop();
  if (scrollTopValue > 250) {
    openIcon.addClass("d-none");
  } else {
    openIcon.removeClass("d-none");
  }
});

//Accordion
$("#accordion p").hide();
$("#accordion h3").on("click", function () {
  $("#accordion p").not($(this).next()).slideUp(500);
  $(this).next().slideToggle(500);
});

// Counter
window.onload = function () {
  counterDown("25 october 2024 10:00:00");
};

function counterDown(countTo) {
  let countData = new Date(countTo);
  countData = countData.getTime() / 1000;

  let countHere = new Date();
  countHere = countHere.getTime() / 1000;

  let countChanges = countData - countHere;

  let days = Math.floor(countChanges / (24 * 60 * 60));
  let hours = Math.floor((countChanges - days * (24 * 60 * 60)) / 3600);
  let mins = Math.floor(
    (countChanges - days * (24 * 60 * 60) - hours * 3600) / 60
  );
  let secs = Math.floor(
    countChanges - days * (24 * 60 * 60) - hours * 3600 - mins * 60
  );

  $(".days").html(`${days} D`);
  $(".hours").html(`${hours} h`);
  $(".minutes").html(`${mins} m`);
  $(".seconds").html(`${secs} s`);

  setInterval(function () {
    counterDown(countTo);
  }, 1000);
}

// Textarea Letters Counters
let counterNum = 100;
$("textarea").keyup(function () {
  let countDo = $(this).val().length;
  let sumCount = counterNum - countDo;
  if (sumCount <= 0) {
    $("#counter").text("your available character finished");
  } else {
    $("#counter").text(sumCount);
  }
});
