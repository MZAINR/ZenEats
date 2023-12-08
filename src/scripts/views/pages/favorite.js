import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
        <div class="resto">
          <h2 class="resto__label" tabindex="0">Your Favorites!</h2>
          <div id="no-favorite">No liked restaurant</div>
          <div id="restaurant-container" class="restaurant"></div>
        </div>
      `;
  },

  async afterRender() {
    const heroHidden = document.querySelector('.hero');

    if (heroHidden) {
      heroHidden.classList.add('hero__little');
    }

    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#restaurant-container');

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });

    const noFavoriteMessage = document.querySelector('#no-favorite');

    if (restaurants.length > 0) {
      noFavoriteMessage.style.display = 'none';
    } else {
      noFavoriteMessage.style.display = 'block';
    }
  },
};

export default Favorite;
