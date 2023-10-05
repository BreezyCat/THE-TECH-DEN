var container = document.querySelector('.section-card-category');
var additionalCategories = ['Casing', 'Power Supply', 'Cooler', 'Monitor'];
var audioCategories = ['Speaker', 'Headphone'];
var memoryCategories = ['HDD', 'Flashdisk'];

const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get('category');

document.title = category;

function filterProducts(category) {
    var filteredCards = products.filter(function (product) {
      if (category === 'Others') {
        return additionalCategories.includes(product.productCategory);
      } else if (category === 'Memory') {
        return memoryCategories.includes(product.productCategory);
      } else if (category === 'Audio') {
        return audioCategories.includes(product.productCategory);
      } else {
        return product.productCategory === category;
      }
    }).map(createStoreCard);

    container.innerHTML = '';
    filteredCards.forEach(card => container.appendChild(card));

    var totalResult = document.querySelector('.total-result');
    totalResult.textContent = 'Total of ' + filteredCards.length + ' results has been found';
}

function setLink(category) {
    var firstLink = document.getElementById('category-first');
    var secondLink = document.getElementById('category-second');
    var thirdLink = document.getElementById('category-third');
    var categoryTitle = document.querySelector('.category-title');
  
    if (firstLink) {
      firstLink.textContent = 'STORE';
      firstLink.href = '../html/store.html';
    }
  
    if (secondLink) {
      if (['CPU', 'Motherboard', 'VGA', 'RAM', 'SSD'].includes(category)) {
        secondLink.textContent = 'PC';
        secondLink.href = '../html/product-cat-master.html?type=PC';
      } else if (['Keyboard', 'Mouse', 'Memory', 'Audio', 'Others'].includes(category)) {
        secondLink.textContent = 'ACCESSORIES';
        secondLink.href = '../html/product-cat-master.html?type=Accessories';
      } else {
        secondLink.textContent = '';
        secondLink.removeAttribute('href');
      }
    }
  
    if (thirdLink) {
      thirdLink.textContent = category ? category.toUpperCase() : '';
    }
  
    if (categoryTitle) {
      categoryTitle.textContent = category ? category.toUpperCase() : '';
    }
  }
  

document.addEventListener('DOMContentLoaded', function () {
    filterProducts(category);
    setLink(category);
});