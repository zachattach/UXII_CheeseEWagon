$(document).foundation()

$("i").click(function() {

    var favoriteCheck = $(this).data("add-favorite");
    var favoriteStatus = $(this).hasClass('fa-heart-o');
    if (favoriteCheck && favoriteStatus) {
        $(this).removeClass('fa-heart-o');
        $(this).addClass('fa-heart');
    } else if (favoriteCheck && !favoriteStatus) {
        $(this).removeClass('fa-heart');
        $(this).addClass('fa-heart-o');
    }
});
