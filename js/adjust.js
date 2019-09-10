$(document).ready(function() {
  if (window.outerHeight > window.outerWidth) {
    $("#i_am").css("margin-top", "0%");
  } else {
    $("#i_am").css("margin-top", "10%");
}
});

$(window).resize(function() {
    if (window.outerHeight > window.outerWidth) {
      $("#i_am").css("margin-top", "0%");
    } else {
      $("#i_am").css("margin-top", "10%");
  }
});
