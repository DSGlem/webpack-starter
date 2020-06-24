let closeBtn = document.querySelectorAll(".btn-close");

for (item of closeBtn) {
  item.addEventListener("click", function () {
    const layout = this.parentNode.parentNode;
    console.log(layout);
    layout.classList.remove("visible");
  });
}

document.addEventListener("click", function (e) {
  console.log($(e.currentTarget).find(".video"));
  const src = $(e.currentTarget).find(".video").attr("src");
  $(e.currentTarget).find(".video").attr("src", src);
});
