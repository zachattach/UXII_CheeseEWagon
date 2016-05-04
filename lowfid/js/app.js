$(document).foundation()

// Your app's JS goes here

//Wait until HTML is loaded
$(document).ready(function() {
    var menuItems = $(".menu-item");
    var favorites = $(".favorite");
    var totalCell = $(".total");
    var LSCart;
    var favoritesList;
    var favoritesOnAccount = $(".favorites-list");

    // cart array structure
    // -item
    // --name 0
    // --price 1
    // --quanitity 2

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

    menuItems.click(function() {
        var itemName = $(this).data('menu-item');
        var itemPrice = $(this).data('menu-price');
        var itemQuantity = 1;
        LSCart = [];

        $('.cart').html('<tr><td>Total</td><td></td><td class="total"></td></tr>');

        if (localStorage.getItem("cart")) {
            LSCart = JSON.parse(localStorage.getItem("cart"));
        }

        for (var i = 0; i < LSCart.length; i++) {
            if (LSCart[i][0] == itemName) {
                itemQuantity += LSCart[i][2];
                LSCart.splice(i, 1);
            }
        }

        var item = [itemName, itemPrice, itemQuantity];

        LSCart.push(item);

        localStorage.setItem("cart", JSON.stringify(LSCart));

        populateCart(LSCart, totalCell);

    });

    localStorage.setItem("favoritesList", JSON.stringify(favoritesList));

    if (localStorage.getItem("favoritesList")) {
        favoritesList = JSON.parse(localStorage.getItem("favoritesList"));
        favoritesOnAccount.html(favoritesList);
    }

    if (localStorage.getItem("cart")) {
        LSCart = JSON.parse(localStorage.getItem("cart"));
        populateCart(LSCart, totalCell);
    }

    $('.favoritesList').text(favoritesList);


});

function populateCart(array, total) {

    var totalCost = 0;

    for (var i = 0; i < array.length; i++) {
        $('.cart').prepend("<tr><td>" + array[i][0] + "</td><td>" + array[i][2] + "</td><td>" + (array[i][2] * array[i][1]) + "</td></tr>");

        totalCost += (array[i][2] * array[i][1]);
        total.html(totalCost);
    }
}


//// Clear localStorage
//localStorage.clear();
