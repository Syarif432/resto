import API_ENDPOINT from "../globals/api-endpoint";

class RestaurantDbSource {
  static async getRestaurants() {
    const response = await fetch(API_ENDPOINT.RESTAURANTS);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async getFavoriteRestaurants() {
    const response = await fetch(API_ENDPOINT.FAVORITE_RESTAURANTS);
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async getRestaurantDetail(id) {
    console.log("Fetching restaurant detail with ID:", id);
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }
}

export default RestaurantDbSource;
