import CONFIG from "../../globals/config";

const createRestaurantsListTemplate = (restaurants) => `
    <div class="restaurant-item">
        <div class="restaurant-image-container">
            <img class="restaurant-image" src="${CONFIG.IMAGE_BASE_URL}small/${restaurants.pictureId}" alt="${restaurants.name}">
        </div>
        <h3><a href="/#/detail/${restaurants.id}">${restaurants.name}</a></h3>
        <div class="restaurant-info">
            <h4>Informasi</h4>
            <p class="restaurant-location"><strong>Lokasi:</strong> ${restaurants.city}</p>
            <p class="restaurant-rating"><strong>Rating:</strong> ${restaurants.rating}</p>
            <p class="restaurant-description">${restaurants.description}</p>
        </div> 
    </div>
`;

const createRestaurantsDetailTemplate = (restaurant) => `
    <h2 class="restaurant-name">${restaurant.name || "No Name Available"}</h2>
    <div class="detail-items">
        <img class="restaurant-image" src="${CONFIG.IMAGE_BASE_URL}medium/${
  restaurant.pictureId || "default.jpg"
}" alt="${restaurant.name || "No Name"}">
        <div class="restaurant-details">
            <p class="description"><strong>Description:</strong> ${
              restaurant.description || "No Description Available"
            }</p>
            <p><strong>City:</strong> ${restaurant.city || "Unknown"}</p>
            <p><strong>Address:</strong> ${restaurant.address || "Unknown"}</p>
            <p><strong>Rating:</strong> ${restaurant.rating || "No Rating"}</p>
            <div class="categories">
                <strong>Categories:</strong>
                <ul>
                    ${
                      restaurant.categories
                        ? restaurant.categories
                            .map((category) => `<li>${category.name}</li>`)
                            .join("")
                        : "<li>No Categories Available</li>"
                    }
                </ul>
            </div>
            <div class="menu-section">
                <h3>Foods:</h3>
                <ul>
                    ${
                      restaurant.menus?.foods
                        ? restaurant.menus.foods
                            .map((food) => `<li>${food.name}</li>`)
                            .join("")
                        : "<li>No Foods Available</li>"
                    }
                </ul>
                <h3>Drinks:</h3>
                <ul>
                     ${
                       restaurant.menus?.drinks
                         ? restaurant.menus.drinks
                             .map((drink) => `<li>${drink.name}</li>`)
                             .join("")
                         : "<li>No Drinks Available</li>"
                     }
                </ul>
            </div>
        </div>
    </div>
    <div class="reviews">
        <h3>Customer Reviews:</h3>
        <ul>
            ${
              restaurant.customerReviews
                ? restaurant.customerReviews
                    .map(
                      (review) => `
                    <li>
                        <p><strong>${review.name}</strong> (${review.date}):</p>
                        <p>${review.review}</p>
                    </li>
                `
                    )
                    .join("")
                : "<li>No Reviews Available</li>"
            }
        </ul>
    </div>
`;

const createLikeButtonTemplate = () => `
    <button aria-label="like this movie" id="likeButton" class="like">
        <i class="fa fa-heart-o" aria-hidden="true"></i>
    </button>
`;

const createLikedButtonTemplate = () => `
    <button aria-label="unlike this movie" id="likeButton" class="like">
        <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
`;

export {
  createRestaurantsListTemplate,
  createRestaurantsDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
