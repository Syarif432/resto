import RestaurantDbSource from "../../data/restaurantdb-source";
import { createRestaurantsListTemplate } from "../templates/template-creator";

const Restaurants = {
  async render() {
    return `
    <div class="content">
      <h2 class="content__heading">Explore Restaurants</h2>
      <div id="restaurants" class="restaurants">
      </div>
    </div>
  `;
  },
  async afterRender() {
    const resto = await RestaurantDbSource.getRestaurants();
    const restoContainer = document.querySelector("#restaurants");
    resto.forEach((restaurants) => {
      restoContainer.innerHTML += createRestaurantsListTemplate(restaurants);
    });
  },
};

export default Restaurants;
