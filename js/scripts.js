
$(document).ready(function() {
  var age = parseInt(prompt("How old are you?"));
  if (age >= 18) {
    $('#over-18').show();
  } else {
    $('#under-18').show();
  }

  // issue with which image is clicked on first vs second, not sure how to differentiate
    $(".clickable").click(function() {
    $(".elephant-showing").toggle();
    $(".elephant-hidden").toggle();
    $(".clickable").click(function() {
    $(".donkey-showing").toggle();
    $(".donkey-hidden").toggle();

       event.preventDefault();
  });
});
});
