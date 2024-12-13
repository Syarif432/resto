import CONFIG from "./config";

const API_ENDPOINT = {
  RESTAURANTS: `${CONFIG.BASE_URL}/list?language=${CONFIG.DEFAULT_LANGUAGE}&page=1`,
  FAVORITE_RESTAURANTS: `${CONFIG.BASE_URL}/favorite-restaurants`,
  DETAIL: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
};

export default API_ENDPOINT;
