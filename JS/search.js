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
    window.location.href = "store.html?search=" + encodeURIComponent(searchInputValue);
  }
}