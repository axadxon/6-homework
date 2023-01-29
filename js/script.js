$(document).ready(function () {
  var $btn = $(".show_hide-menu");
  var $icon = $(".fa-sign-in");
  var $menu = $(".menu");


  $btn.click(function () {
    var left = $menu.css("left");
    if (left === "-300px") {
      $menu.animate(
        {
          left: "0px",
        },
        3000
      );

      $icon.css({ transform: "rotate(180deg )", transition: ".5s" });
    } else {
      $menu.animate(
        {
          left: "-300px",
        },
        3000
      );

      $icon.css({ transform: "rotate(0deg)", transition: ".5s" });
    }
  });


});
