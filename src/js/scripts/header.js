$("#menu-switch").click(function () {
  if ($(this).parent().hasClass("menu-opened")) {
    $(this).parent().removeClass("menu-opened");
    return;
  }
  $(this).parent().addClass("menu-opened");
});
