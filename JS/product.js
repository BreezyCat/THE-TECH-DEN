var searchButton = document.querySelector("#search-button");
searchButton.addEventListener("click", searchProducts);

var searchInputField = document.querySelector("#search-input");
searchInputField.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    searchProducts();
  }
});

function searchProducts() {
  var searchInputValue = document.querySelector("#search-input").value;
  if (searchInputValue.trim() !== "") {
    window.location.href = "/html/store.html?search=" + encodeURIComponent(searchInputValue);
  }
}

function showSearchResults(results) {
  container.textContent = '';

  if (results.length === 0) {
    var noResultsText = document.createElement('div');
    noResultsText.textContent = 'No results found.';
    container.appendChild(noResultsText);
    return;
  }

  for (var i = 0; i < results.length; i++) {
    var product = results[i];
    var storeCard = createStoreCard(product);
    container.appendChild(storeCard);
  }
}
  var urlParams = new URLSearchParams(window.location.search);
  var searchParam = urlParams.get('search');

  if (searchParam) {
    var filteredProducts = products.filter(function (product) {
      return product.productName.toLowerCase().includes(searchParam.toLowerCase());
    });

    showSearchResults(filteredProducts);
  }