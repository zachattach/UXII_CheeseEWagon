$(document).foundation()
  // Your app's JS goes here
$(document).ready(function() {
  get_username();
  set_pickup_time();
  cart_handler();
  favorites();
});

// cart array structure
// -item
// --name 0
// --price 1
// --quanitity 2
