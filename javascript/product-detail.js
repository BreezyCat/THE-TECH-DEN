function productDetail() {
    var urlParams = new URLSearchParams(window.location.search);
    var productId = urlParams.get('productId');
    var product = products.find(p => p.productId === productId);

    document.title = product.productName;

    var productImage = document.querySelector('.protail-image');
    var productName = document.querySelector('.protail-name');
    var productSold = document.querySelector('.protail-sold');
    var productRatingText = document.querySelector('.protail-rating');
    var productPrice = document.querySelector('.protail-price-text');
    var productDescription = document.querySelector('.protail-desc-text');

    productImage.src = product.productImage;
    productName.textContent = product.productName;
    productSold.textContent = `Sold ${product.productSold}+`;
    productPrice.textContent = formattedPrice(product.productPrice);
    productDescription.innerHTML = product.productDescription || 'No description available';

    productRatingText.innerHTML = '';
    var ratingElement = createRating(product.productRating);
    productRatingText.appendChild(ratingElement);
}

function buyNow () {
    var buyButton = document.querySelector("#buy-button");
    
    buyButton.addEventListener("click", function() {
      var urlParams = new URLSearchParams(window.location.search);
      var productId = urlParams.get("productId");
    
      window.location.href = "/html/buy-now.html?productId=" + productId;
    });
}

document.addEventListener('DOMContentLoaded', function() {
    productDetail();
    buyNow();
});