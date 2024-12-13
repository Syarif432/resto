// import FavoriteRestaurantIdb from "../data/favorite-restaurant-db";
// import {
//   createLikeButtonTemplate,
//   createLikedButtonTemplate,
// } from "../views/templates/template-creator";

// const LikeButtonInitiator = {
//   async init({ likeButtonContainer, restaurants }) {
//     console.log(
//       "Initializing LikeButtonInitiator with restaurant:",
//       restaurants
//     );
//     this._likeButtonContainer = likeButtonContainer;
//     this._restaurant = restaurants;

//     await this._renderButton();
//   },

//   async _renderButton() {
//     const { id } = this._restaurant;

//     if (!id) {
//       console.error("Restaurant ID is missing or invalid:", this._restaurant);
//       return; // Stop execution if ID is invalid
//     }

//     if (await this._isRestaurantExist(id)) {
//       this._renderLiked();
//     } else {
//       this._renderLike();
//     }
//   },

//   async _isRestaurantExist(id) {
//     const restaurant = await FavoriteRestaurantIdb.getResto(id);
//     return !!restaurant;
//   },

//   _renderLike() {
//     this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

//     const likeButton = document.querySelector("#likeButton");
//     likeButton.addEventListener("click", async () => {
//       await FavoriteRestaurantIdb.putResto(this._restaurant);
//       this._renderButton();
//     });
//   },

//   _renderLiked() {
//     this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

//     const likeButton = document.querySelector("#likeButton");
//     likeButton.addEventListener("click", async () => {
//       await FavoriteRestaurantIdb.deleteResto(this._restaurant.id);
//       this._renderButton();
//     });
//   },
// };

// export default LikeButtonInitiator;
