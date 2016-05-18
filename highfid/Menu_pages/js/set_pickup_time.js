function set_pickup_time() {
  $('.pickup-time-submit').click(function() {
    var time_set = $("input:radio[name=pickup_time]:checked").val();
    var time_add = parseInt(time_set);

    var current_time = new Date();
    hour = current_time.getHours();
    min = current_time.getMinutes();
    min += time_add;

    // if the pickup time goes over
    if (min > 59) {
      hour++;
      min -= 60;
    }

    // check if minutes is below 10, then give it a zero at the beginning
    if (min < 10) {
      min = "0" + min;
    }

    // if the time is in the afternoon, convert it from military time
    if (hour > 11) {
      hour -= 12;
      var pickup_time = hour + ":" + min + " PM";
    } else {
      var pickup_time = hour + ":" + min + " AM";
    }

    localStorage.setItem("LS_pickup_time", pickup_time);
  });

  if (localStorage.getItem("LS_pickup_time")) {
    $('.pickup-time').html(localStorage.getItem("LS_pickup_time"));
  }

}
