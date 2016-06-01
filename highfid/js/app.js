$(document).foundation()
  // Your app's JS goes here
$(document).ready(function() {
  get_username();
  set_pickup_time();
  add_to_cart();
  favorites();
});

// cart array structure
// -item
// --name 0
// --price 1
// --quanitity 2
