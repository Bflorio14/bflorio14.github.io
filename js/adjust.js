$(document).ready(function() {
  if (window.outerHeight > window.outerWidth) {
    $("#i_am").css("margin-top", "0%");
    $("#searchIcon").css("visibility", "hidden");
    $("#home").css("width", "70%");
  } else {
    $("#i_am").css("margin-top", "8%");
    $("#searchIcon").css("visibility", "visible");
    $("#home").css("width", "90%");
}
});

$(window).resize(function() {
  if (window.outerHeight > window.outerWidth) {
    $("#i_am").css("margin-top", "0%");
    $("#searchIcon").css("visibility", "hidden");
    $("#home").css("width", "70%");
  } else {
    $("#i_am").css("margin-top", "8%");
    $("#searchIcon").css("visibility", "visible");
    $("#home").css("width", "90%");
}
});
