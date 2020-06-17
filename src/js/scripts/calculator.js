$(".dropdown-toggle").click(function () {
  $(this).next().css({ display: "block" });
});

$(".dropdown-item").click(function () {
  const val = $(this).text();
  $(".dropdown-input").val(val);
  $(".dropdown-menu").css({ display: "none" });
});
