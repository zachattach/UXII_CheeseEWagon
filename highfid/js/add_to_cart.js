function add_to_cart() {

  var LS_cart;

  function initialize_LS_cart() {
    console.log("initialize_LS_cart");
    if (localStorage.getItem("cart")) {
      LS_cart = JSON.parse(localStorage.getItem("cart"));
    } else {
      LS_cart = [];
    }
  }

  initialize_LS_cart();

  console.log(LS_cart);

  var cart_total = parseInt(localStorage.getItem("LS_cart_total"));

  if (!cart_total) {
    cart_total = 0;
  }

  function update_cart_total() {
    if (localStorage.getItem("LS_cart_total")) {
      $('.cart-total').html(localStorage.getItem("LS_cart_total"));
    }
  }

  update_cart_total();

  var $plus_one = $('.js-plus-one-quantity');

  var $minus_one = $('.js-minus-one-quantity');

  var $adding_to_cart = $('.js-add-to-cart');

  $plus_one.click(function() {
    $(this).next().find('.item-quantity').val(
      function(i, current_val) {
        return ++current_val;
      });
  });

  $minus_one.click(function() {
    $(this).prev().find('.item-quantity').val(
      function(i, current_val) {
        if (current_val > 0) {
          return --current_val;
        }
      });
  });

  $adding_to_cart.click(function() {
    var item_title = $(this).data("item");
    var item_price = $(this).data("price");
    var item_quantity = parseInt($(this).parent().prev().find('.item-quantity').val());
    var item = [item_title, item_price, item_quantity];
    alert(item);

    cart_total += item_quantity;
    localStorage.setItem("LS_cart_total", cart_total);
    update_cart_total();

    LS_cart.push(item);
    localStorage.setItem("cart", JSON.stringify(LS_cart));
  });

  //localStorage.clear();



  //   LS_cart.push(item);

  //   localStorage.setItem("LS_cart_total", cart_total);

  //   localStorage.setItem("cart", JSON.stringify(LS_cart));

  //   cart_receipt(LS_cart);

  //   favs_receipt(LS_cart);

  //   update_cart_total();

  // });

  // if (localStorage.getItem("cart")) {
  //   LS_cart = JSON.parse(localStorage.getItem("cart"));
  //   cart_receipt(LS_cart);
  //   favs_receipt(LS_cart);
  // }

  // function update_cart_total() {
  //   if (localStorage.getItem("LS_cart_total")) {

  //     $('.cart-total').html(localStorage.getItem("LS_cart_total"));

  //   }
  // }

  // function cart_receipt(array) {
  //   var total_cost = 0;

  //   var $total_cost = $('.total-cost');

  //   var $receipt = $('.receipt');

  //   for (var i = 0; i < array.length; i++) {
  //     $receipt.html("<div class='row'><div class='small-8 small-push-1 column item-in-cart'><p>" + array[i][0] + " (" + array[i][2] + ")</p></div><div class='small-3 column price-of-item'><p>$" + array[i][1] * array[i][2] + "</p></div></div>");
  //     total_cost += (array[i][1] * array[i][2]);
  //     $total_cost.html("<p>Total: <span class='needsblue'>$" + total_cost + "</span></p>");
  //   }
  // }

  // function favs_receipt(array) {

  //   var $favs_receipt = $('.receipt-favorites');

  //   for (var i = 0; i < array.length; i++) {
  //     $favs_receipt.html("<div class='small-10 centered-column row'> <input type='checkbox' class='favorites-checkbox'><label><p>" + array[i][0] + "</p></label>");
  //   }
  // }

}


/*
function add_to_cart() {

  //localStorage.clear();

  update_cart_total();

  var LS_cart;

  var cart_total = parseInt(localStorage.getItem("LS_cart_total"));

  if (!cart_total) {
    cart_total = 0;
  }

  $('.add-to-cart').click(function() {

    var checked = $(this).is(":checked");

    var item_title = $(this).data("item");
    var item_price = $(this).data("price");
    var item_quantity = parseInt($(this).parent().parent().find('.item-quantity').val());

    if (checked) {
      cart_total += item_quantity;
    } else {
      cart_total -= item_quantity;
      if (cart_total < 0) {
        cart_total = 0;
      }
    }

    LS_cart = [];

    if (localStorage.getItem("cart")) {
      LS_cart = JSON.parse(localStorage.getItem("cart"));
    }

    for (var i = 0; i < LS_cart.length; i++) {
      if (LS_cart[i][0] == item_title) {
        item_quantity += LS_cart[i][2];
        LS_cart.splice(i, 1);
      }
    }

    var item = [item_title, item_price, item_quantity];

    LS_cart.push(item);

    localStorage.setItem("LS_cart_total", cart_total);

    localStorage.setItem("cart", JSON.stringify(LS_cart));

    cart_receipt(LS_cart);

    favs_receipt(LS_cart);

    update_cart_total();

  });

  if (localStorage.getItem("cart")) {
    LS_cart = JSON.parse(localStorage.getItem("cart"));
    cart_receipt(LS_cart);
    favs_receipt(LS_cart);
  }

  function update_cart_total() {
    if (localStorage.getItem("LS_cart_total")) {

      $('.cart-total').html(localStorage.getItem("LS_cart_total"));

    }
  }

  function cart_receipt(array) {
    var total_cost = 0;

    var $total_cost = $('.total-cost');

    var $receipt = $('.receipt');

    for (var i = 0; i < array.length; i++) {
      $receipt.html("<div class='row'><div class='small-8 small-push-1 column item-in-cart'><p>" + array[i][0] + " (" + array[i][2] + ")</p></div><div class='small-3 column price-of-item'><p>$" + array[i][1] * array[i][2] + "</p></div></div>");
      total_cost += (array[i][1] * array[i][2]);
      $total_cost.html("<p>Total: <span class='needsblue'>$" + total_cost + "</span></p>");
    }
  }

  function favs_receipt(array) {

    var $favs_receipt = $('.receipt-favorites');

    for (var i = 0; i < array.length; i++) {
      $favs_receipt.html("<div class='small-10 centered-column row'> <input type='checkbox' class='favorites-checkbox'><label><p>" + array[i][0] + "</p></label>");
    }
  }
}

*/
