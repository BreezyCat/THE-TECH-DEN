var categoryLists = document.querySelectorAll('.category-list');
var container = document.querySelector('.section-card-store');
var additionalCategories = ['Casing', 'Power Supply', 'Cooler', 'Monitor'];
var audioCategories = ['Speaker', 'Headphone'];
var memoryCategories = ['HDD', 'Flashdisk'];

categoryLists.forEach(function (category) {
  category.addEventListener('click', function () {
    var selectedCategory = category.getAttribute('value');
    filterProducts(selectedCategory);

    categoryLists.forEach(function (item) {
      item.classList.remove('active');
    });

    category.classList.add('active');
  });
});

function filterProducts(category) {
  var filteredCards = products.filter(function (product) {
    if (category === 'Others') {
      return additionalCategories.includes(product.productCategory);
    } else if (category === 'Memory') {
      return memoryCategories.includes(product.productCategory);
    } else if (category === 'Audio') {
      return audioCategories.includes(product.productCategory);
    } else if (category === 'All') {
      return true;
    } else {
      return product.productCategory === category;
    }
  }).map(createStoreCard);

  container.innerHTML = '';
  filteredCards.forEach(card => container.appendChild(card));
}

function setDefaultSelection() {
  var allCategory = document.querySelector('.category-list[value="All"]');
  allCategory.classList.add('active');
  var selectedCategory = allCategory.getAttribute('value');
  filterProducts(selectedCategory);
}


document.addEventListener('DOMContentLoaded', function () {
  setDefaultSelection();
});