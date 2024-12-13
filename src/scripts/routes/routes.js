import Restaurants from "../views/pages/restaurants";
import Detail from "../views/pages/detail";
import FavoriteRestaurants from "../views/pages/favorite-restaurants";

const routes = {
  "/": Restaurants,
  "/restaurants": Restaurants,
  "/favorite-restaurants": FavoriteRestaurants,
  "/detail/:id": Detail,
};

export default routes;
