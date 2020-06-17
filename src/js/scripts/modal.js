let closeBtn = document.querySelectorAll(".btn-close");

for (item of closeBtn) {
    item.addEventListener("click", function () {

        const layout = this.parentNode.parentNode;
        console.log(layout);
        layout.classList.remove("visible");
    })
}

// closeBtn.forEach((item) => {
//             item.addEventListener("click", function () {
//                 const layout = this.parent.parent;
//                 layout.classList.remove(".visible");
//             })


// closeBtn.addEventListener("click", function () {
//     const layout = this.parent.parent;
//     layout.classList.remove(".visible");
// })