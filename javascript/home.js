function bannerSlider() {

    var screenWidth = window.innerWidth;

    var carouselItems = document.querySelectorAll('.carousel-item');
    var totalSlides = carouselItems.length;
    var slideWidth = screenWidth;

    carouselItems.forEach(function (slider) {
        slider.style.width = screenWidth + 'px';
    });

    var sliderContainer = document.getElementById('slider');

    let currentIndex = 0;

    function slideNext() {
        currentIndex = (currentIndex + 1) % totalSlides;
        sliderContainer.style.transform = 'translateX(' + (-currentIndex * slideWidth) + 'px)';
    }

    var slideInterval = setInterval(slideNext, 3000);

    document.querySelector('.right').addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % totalSlides;
        sliderContainer.style.transform = 'translateX(' + (-currentIndex * slideWidth) + 'px)';
        resetSlideInterval();
    });

    document.querySelector('.left').addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        sliderContainer.style.transform = 'translateX(' + (-currentIndex * slideWidth) + 'px)';
        resetSlideInterval();
    });

    function resetSlideInterval() {
        clearInterval(slideInterval);
        slideInterval = setInterval(slideNext, 3000);
    }
}

function popularSlider() {
    var sliderContainer = document.querySelector(".popular-slider");
    var products = document.querySelectorAll(".popular-product");
    var currentIndex = 0;
    var delay = 3000;

    function showNextProduct() {
        products[currentIndex].classList.remove("active");
        currentIndex++;

        if (currentIndex >= products.length) {
            currentIndex = 0;
        }

        products[currentIndex].classList.add("active");
        sliderContainer.style.transform = "translateX(-" + (currentIndex * 100) + "%)";
    }

    products[currentIndex].classList.add("active");

    setInterval(showNextProduct, delay);
}

function populateProducts(products) {
    var popularSlider = document.querySelector('.popular-slider');

    products.sort((a, b) => b.productSold - a.productSold);

    products.forEach(function(product) {
        var popularProduct = document.createElement('div');
        popularProduct.className = 'popular-product';
        popularProduct.innerHTML = `
            <img src="${product.productImage}" class="pop-image">
            <div class="popular-text">
                <p class="popular-title">${product.productName}</p>
                <p class="popular-price">Rp ${product.productPrice.toLocaleString()}</p>
            </div>
        `;

        popularSlider.appendChild(popularProduct);
    });
}

function categoryClick() {
    const categoryCards = document.querySelectorAll('.cat-card');

    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            const category = card.getAttribute('value');
            window.location.href = `product-category.html?category=${category}`;
        });
    });
}

const container = document.querySelector('.section-card-home');

products.sort((a, b) => b.productRating - a.productRating);

const topProducts = products.slice(0, 10).map(createStoreCard);
topProducts.forEach(card => container.appendChild(card));

  document.addEventListener("DOMContentLoaded", function() {
    bannerSlider();
    populateProducts(products);
    popularSlider();
    categoryClick();
});
