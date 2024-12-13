import FavoriteRestaurantIdb from "../../data/favorite-restaurant-db";
import { createRestaurantsListTemplate } from "../templates/template-creator";

const FavoriteRestaurants = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Restaurant yang Disukai</h2>
        <div id="restaurants" class="restaurants">
        
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllResto();
    const restaurantsContainer = document.querySelector("#restaurants");

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML +=
        createRestaurantsListTemplate(restaurant);
    });
  },
};

export default FavoriteRestaurants;
