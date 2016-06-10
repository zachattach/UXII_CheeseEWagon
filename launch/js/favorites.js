function favorites() {

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

  remove_repeats(LS_cart);

  favs_receipt(LS_cart);

  function remove_repeats(array) {
    for (var i = 0; i < array.length; i++) {
      if (array[i][0] == array[i + 1][0]) {
        array.shift();
      }
    }
  }

  function favs_receipt(array) {
    var $favs_receipt = $('.receipt-favorites');
    $favs_receipt.append("<div class='small-push-1 small-10 centered-column row'>");
    for (var i = 0; i < array.length; i++) {
      $favs_receipt.append("<p class='small-push-1 small-10'><i data-add-favorite='true' class='favorite fa fa-heart-o' aria-hidden='true'></i> " + array[i][0] + "</span></p>").html();
    }
    $favs_receipt.append("</div>");
  }

  var favorites = $(".favorite");
  var favoritesList;
  var favoritesOnAccount = $(".favorites-list");

  favorites.click(function() {

    $(this).removeClass('fa-heart-o');
    $(this).addClass('fa-heart');

    var newFavorite = $(this).parent().text();
    alert("Added to Favorites!");
    favoritesList = [];
    favoritesList.push(newFavorite);
    $(this).parent().hide()
  });

  //localStorage.clear();

}
