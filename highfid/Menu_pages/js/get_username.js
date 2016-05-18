function get_username() {

  console.log(localStorage.getItem("LS_username"));

  $('.username-submit').click(function() {
    var username = $('.username-input').val();

    if (!username){
      username = "Guest";
    }

    localStorage.setItem("LS_username", username);

    console.log(localStorage.getItem("LS_username"));

  });

  if (localStorage.getItem("LS_username")) {

    $('.username').html(localStorage.getItem("LS_username"));

    //console.log(localStorage.getItem('savedBuses'));
  }
}
