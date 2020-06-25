//initial value
let sumOfDebt = 0;
let willBeCharged = 0;
let debtValue = 0;
let paymentInMonth = 0;

function setDebtValue() {
  debtValue = Math.floor(sumOfDebt - (sumOfDebt * willBeCharged) / 100);
  $(".debt-value").text(debtValue + " руб.*");
  $(".payment-in-month").text(paymentInMonth + " руб.*");
  $(".profit").text(sumOfDebt - debtValue + " руб.*");
}

$("#days").slider({
  max: 366,
  create: function () {
    $(".output-percent").text("0%");
  },
  slide: function (event, ui) {
    willBeCharged = ui.value < 360 ? 70 : 80;
    $(".output-percent").text(willBeCharged + " %");
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
    $(".installment-plan").text(ui.value);
    paymentInMonth = Math.floor(debtValue / ui.value);
    setDebtValue();
  },
});
