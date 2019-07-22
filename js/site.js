// scroll function
$(document).ready(function () {
  let scrollLink = $(".scroll");

  //smooth scrolling
  scrollLink.click(function (e) {
    e.preventDefault();
    $("body,html").animate(
      {
        scrollTop: $(this.hash).offset().top
      },
      2000
    );
  });

  //active link switching
  $(window).scroll(function () {
    let scrollbarLocation = $(this).scrollTop();
    scrollLink.each(function () {
      let sectionOffset = $(this.hash).offset().top;
      if (sectionOffset <= scrollbarLocation) {
        $(this)
          .parent()
          .addClass("active");
        $(this)
          .parent()
          .siblings()
          .removeClass("active");
      }
    });
  });
});

//Calculate Quote
function Calculate() {
  let quantity = document.getElementById("selectQuantity").value;
  let lblTotal = document.getElementById("lblTotal")
  let colors = document.getElementById("selectColors");
  let totalColors = colors.options[colors.selectedIndex].text;
  let perPiece = "0";
  switch (totalColors) {
    case "1":
      perPiece = "6";
      break;
    case "2":
      perPiece = "7";
      break;
    case "3":
      perPiece = "8";
      break;
    case "4":
      perPiece = "9";
      break;
    case "5":
      perPiece = "10";
      break;
    case "6":
      perPiece = "11";
      break;
  }
  //if the input is not a number , warn user
  if (isNaN(quantity)) {
    alert("Order Quantity invalid, please choose a number")
    return;
  }
  var total = quantity * perPiece;
  lblTotal.textContent = "Total: $" + total + ".00";
}

//load order quantity select dropdown
let select = document.getElementById("selectQuantity");
window.onload = function () {
  for (var i = 0; i < 1000; i++) {
    let newOption = new Option;
    newOption.text = i;
    newOption.value = i;
    select.options[i] = newOption;
    if (i < 24) {
      newOption.text = "Minimum Quantity is 24";
      newOption.value = "-";
      select.options[i] = newOption;
    }
  }
  select.selectedIndex = 24;
}

// prevent the default submit refresh
document.getElementById("btnCalculate").addEventListener("click", function (event) {
  event.preventDefault();
});


