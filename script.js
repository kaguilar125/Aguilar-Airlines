$(document).ready(function () {
    $(".booking-options button").click(function () {
      $(".booking-options button").removeClass("active");
      $(this).addClass("active");
    });
  
    $(".continue").click(function () {
      let from = $(".departure").val();
      let to = $(".arrival").val();
      alert(`Searching flights from ${from} to ${to}`);
    });
  });