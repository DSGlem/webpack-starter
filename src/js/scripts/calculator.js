//initial value
let sumOfDebt = 0;
let days = 0;
let debtValue = 0;
let paymentInMonth = 0;

function setDebtValue() {
  debtValue = Math.floor(sumOfDebt - (sumOfDebt * days) / 100);
  $(".debt-value").text(debtValue + " руб.*");
  $(".payment-in-month").text(paymentInMonth && paymentInMonth + " руб.*");
}

$("#days").slider({
  max: 80,
  create: function () {
    $(".output-percent").text($(this).slider("value") + " %");
  },
  slide: function (event, ui) {
    $(".output-percent").text(ui.value + " %");

    // Остаток по долгу
    sumOfDebt = $("#debt").val();
    days = ui.value;
    setDebtValue();
  },
});

$("#debt").on("input", function () {
  sumOfDebt = $("#debt").val();
  setDebtValue();
});

// Рассчет платежей в месяц

$("#month").slider({
  max: 12,
  create: function () {
    $(".installment-plan").text($(this).slider("value"));
  },
  slide: function (event, ui) {
    // console.log(ui.value);s
    $(".installment-plan").text(ui.value);
    paymentInMonth = Math.floor(debtValue / ui.value);
    setDebtValue();
  },
});