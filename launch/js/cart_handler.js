function cart_handler() {

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

  function tip_remember() {
    if (localStorage.getItem("tip")) {
      if ((localStorage.getItem("tip")) == 0) {
        $('.js-tip-percent').html("no ");
      } else {
        $('.js-tip-percent').html("a " + (localStorage.getItem("tip") + "% "));

      }
    }
  }

  tip_remember();

  function total_cost_remember() {
    if (localStorage.getItem("total-cost--tip")) {
      $('.total-cost--tip').html("<p>Total: <span class='needsblue'>$" + localStorage.getItem("total-cost--tip") + "</span></p>");
    }
  }

  total_cost_remember();


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
    alert("Added to your bag!");

    cart_total += item_quantity;
    localStorage.setItem("LS_cart_total", cart_total);
    update_cart_total();

    LS_cart.push(item);
    localStorage.setItem("cart", JSON.stringify(LS_cart));
  });

  cart_receipt(LS_cart);

  var total_cost;

  function cart_receipt(array) {
    total_cost = 0;

    var $total_cost = $('.total-cost');

    var $receipt = $('.receipt');

    for (var i = 0; i < array.length; i++) {
      $receipt.append("<div class='row'><div class='small-8 small-push-1 column item-in-cart'><p>" + array[i][0] + " (" + array[i][2] + ")</p></div><div class='small-3 column price-of-item'><p>$" + array[i][1] * array[i][2] + "</p></div></div>").html();
      total_cost += (array[i][1] * array[i][2]);
      $total_cost.html("<p>Total: <span class='needsblue'>$" + total_cost + "</span></p>");
    }

    adding_tip();

    function adding_tip() {
      var $total_cost_tip = $('.total-cost--tip');
      var old_price = total_cost;
      //alert("total_cost before: " + total_cost);
      $('.js-tip-adder').click(function() {
        total_cost = old_price;
        //alert("total_cost going in: " + total_cost);
        var tipPercent = parseInt($(this).val());

        localStorage.setItem("tip", tipPercent);

        var tip = parseInt((total_cost * (tipPercent / 100)).toPrecision(3));
        total_cost += tip;
        //alert("total_cost after tip: " + total_cost);
        $total_cost.html("<p>Total: <span class='needsblue js-tip-added'>$" + total_cost + "</span></p>");
        //alert("total_cost in the receipt: " + total_cost);

        localStorage.setItem("total-cost--tip", total_cost);
      });

    }
  }

  //localStorage.clear();

}
