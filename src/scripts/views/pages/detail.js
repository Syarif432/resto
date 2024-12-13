import UrlParser from "../../routes/url-parser";
import RestaurantDbSource from "../../data/restaurantdb-source";
import {
  createLikeButtonTemplate,
  createRestaurantsDetailTemplate,
} from "../templates/template-creator";
import LikeButtonInitiator from "../../utils/like-button-initiator";

const Detail = {
  async render() {
    return `
        <div id="restaurant-detail" class="restaurant-detail"></div>
        <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlNoCombiner();
    const restaurant = await RestaurantDbSource.getRestaurantDetail(url.id);
    console.log("Fetched restaurant:", restaurant);
    const restaurantContainer = document.querySelector("#restaurant-detail");
    const likeButtonContainer = document.querySelector("#likeButtonContainer");

    restaurantContainer.innerHTML = createRestaurantsDetailTemplate(restaurant);
    likeButtonContainer.innerHTML = createLikeButtonTemplate();

    console.log("Restaurant data before LikeButtonInitiator:", restaurant);
    // LikeButtonInitiator.init({
    //   likeButtonContainer: document.querySelector("#likeButtonContainer"),
    //   restaurant: {
    //     id: restaurants.id,
    //     name: restaurants.name,
    //   },
    // });
  },
};

export default Detail;
