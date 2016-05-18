// Your app's JS goes here

//Wait until HTML is loaded
function favorites() {
  var savedFavorites = [];
  var menuItems = $(".menu-item");
  var favorites = $(".favorite");
  var totalCell = $(".total");
  var LSCart;
  var favoritesList;
  var favoritesOnAccount = $(".favorites-list");

  favorites.click(function() {
    // check if it is a favorite icon
    var favoriteCheck = $(this).data("add-favorite");
    var favoriteStatus = $(this).hasClass('fa-heart-o');
    // apply the heart appropriately
    if (favoriteCheck && favoriteStatus) {
      $(this).removeClass('fa-heart-o');
      $(this).addClass('fa-heart');
      // target text inside of the <p> tag and add it to an array
      var newFavorite = $(this).parent().text();
      //alert(newFavorite);
      favoritesList = [];
      favoritesList.push(newFavorite);
      alert(favoritesList);
    } else if (favoriteCheck && !favoriteStatus) {
      $(this).removeClass('fa-heart');
      $(this).addClass('fa-heart-o');
    }
  });
}



//// Clear localStorage
//localStorage.clear();
