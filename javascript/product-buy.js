function populateBuy() {
    var urlParams = new URLSearchParams(window.location.search);
    var productId = urlParams.get("productId");
    var product = products.find(item => item.productId === productId);

    if (product) {
        document.title = `BUY ${product.productName.toUpperCase()} NOW`;

        document.querySelector(".product-buy-img").src = product.productImage;
        document.querySelector(".product-buy-title").textContent = product.productName;
        document.querySelector(".price-buy").textContent = `${formattedPrice(product.productPrice)}`;
    }

    var shippingOption = document.querySelector(".shipping-opt");

    shippingOption.addEventListener("change", function() {
        calculateTotal();
    });

    calculateTotal();
}

function setCounter() {
    var qtyCounter = document.querySelector(".qty");
    var minQtyButton = document.querySelector(".min");
    var maxQtyButton = document.querySelector(".max");
  
    var counter = 1;
  
    function updateCounter() {
      qtyCounter.textContent = counter;
      document.querySelector("#quan").textContent = "(" + counter + " pcs)";
      calculateTotal();
    }
  
    function handleMinQtyClick() {
      if (counter > 1) {
        counter--;
        updateCounter();
      }
    }
  
    function handleMaxQtyClick() {
      counter++;
      updateCounter();
    }   
  
    minQtyButton.addEventListener("click", handleMinQtyClick);
    maxQtyButton.addEventListener("click", handleMaxQtyClick);
  
    updateCounter();
}

function calculateTotal() {
    var counter = parseInt(document.querySelector(".qty").textContent);
    var productPrice = parseInt(document.querySelector(".price-buy").textContent.replace(/\D/g, ""));
    var shippingOption = document.querySelector(".shipping-opt").value;
    var shippingPrice = getShippingPrice(shippingOption);
    var serviceFee = 1500;
    var handlingFee = 1500;

    var orderSubtotal = counter * productPrice;
    var totalPayment = orderSubtotal + shippingPrice + serviceFee + handlingFee;

    localStorage.setItem('totalAmount', totalPayment.toString());

    document.querySelector("#order-sub").textContent = formattedPrice(orderSubtotal);
    document.querySelector("#shipping").textContent = formattedPrice(shippingPrice);
    document.querySelector("#service-fee").textContent = formattedPrice(serviceFee);
    document.querySelector("#handling-fee").textContent = formattedPrice(handlingFee);
    document.querySelector(".price-now.total").textContent = formattedPrice(totalPayment);
}

function getShippingPrice(shippingOption) {
    switch (shippingOption) {
        case "same-day":
            return 55000;
        case "next-day":
            return 40000;
        case "regular":
            return 20000;
        case "cargo":
            return 30000;
        default:
            return 0;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    populateBuy();
    setCounter();
});