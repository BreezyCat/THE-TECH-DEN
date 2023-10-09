function storeCardClick(productId) {
    window.location.href = `/html/product-detail.html?productId=${productId}`;
}


function formattedPrice(price) {
    return 'Rp ' + price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function createStar(src) {
    var star = document.createElement('img');
    star.src = src;
    return star;
}

function createRating(rating) {
    var starRating = document.createElement('div');
    starRating.classList.add('rating');

    var fullStar = Math.floor(rating);
    var halfStar = (rating % 1) !== 0;

    for (var i = 0; i < fullStar; i++) {
    starRating.appendChild(createStar('../asset/SVG/star-review-full.svg'));
    }

    if (halfStar) {
    starRating.appendChild(createStar('../asset/SVG/star-review-half.svg'));
    }

    var emptyStar = 5 - Math.ceil(rating);
    for (var j = 0; j < emptyStar; j++) {
    starRating.appendChild(createStar('../asset/SVG/star-review-empty.svg'));
    }

    var ratingText = document.createElement('p');
    ratingText.classList.add('rating-text');
    ratingText.textContent = rating;

    starRating.appendChild(ratingText);
    return starRating;
}

function createStoreCard(product) {
    var storeCard = document.createElement('div');
    storeCard.classList.add('store-card');
    storeCard.dataset.productId = product.productId;

    storeCard.innerHTML = `
    <div class="store-card-content">
        <img src="${product.productImage}" class="store-card-image">
        <div class="rec-text">
        <h6 class="store-card-title">${product.productName.toUpperCase()}</h6>
        <p class="price">${formattedPrice(product.productPrice)}</p>
        ${createRating(product.productRating).outerHTML}
        <p class="sold">sold ${product.productSold}+</p>
        </div>
    </div>
    `;

    storeCard.addEventListener('click', function () {
    storeCardClick(this.dataset.productId);
    });

    return storeCard;
}