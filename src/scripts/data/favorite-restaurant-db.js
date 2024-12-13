import { openDB } from "idb";
import CONFIG from "../globals/config";

const { DATABASE_NAME, DATABASE_VERSION, OBJET_STORE_NAME } = CONFIG;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJET_STORE_NAME, { keyPath: "id" });
  },
});

const FavoriteRestaurantIdb = {
  async getResto(id) {
    if (!id) {
      console.error("No ID provided for getResto");
      return null; // Return null if no valid ID is provided
    }
    return (await dbPromise).get(OBJET_STORE_NAME, id);
  },
  async getAllResto() {
    return (await dbPromise).getAll(OBJET_STORE_NAME);
  },
  async putResto(resto) {
    return (await dbPromise).put(OBJET_STORE_NAME, resto);
  },
  async deleteResto(id) {
    return (await dbPromise).delete(OBJET_STORE_NAME, id);
  },
};

export default FavoriteRestaurantIdb;
