function set_pickup_time() {
  $('.pickup-time-submit').click(function() {
    var time_set = $("input:radio[name=pickup_time]:checked").val();
    var time_add = parseInt(time_set);
    var pickup_time;

    var current_time = new Date();
    hour = current_time.getHours();
    min = current_time.getMinutes();
    min += time_add;

    // if the pickup time goes over the hour
    if (min > 59) {
      hour++;
      min -= 60;
    }

    // check if minutes is below 10, then give it a zero at the beginning
    if (min < 10) {
      min = "0" + min;
    }

    // if the time is 1:00pm - 11:59pm
    if (hour >= 13) {
      hour -= 12;
      pickup_time = hour + ":" + min + " PM";
    }
    // if the time is 12:00pm - 12:59 pm
    else if (hour == 12) {
      pickup_time = hour + ":" + min + " PM";
    }
    // if the time is 1:00am - 11:59pm
    else if (hour < 12 && hour > 0) {
      pickup_time = hour + ":" + min + " AM";
    }
    // if the time is 12:00am - 12:59am
    else {
      pickup_time = 12 + ":" + min + " AM";
    }

    localStorage.setItem("LS_pickup_time", pickup_time);
  });

  if (localStorage.getItem("LS_pickup_time")) {
    $('.pickup-time').html(localStorage.getItem("LS_pickup_time"));
  }

}
