import RestaurantSource from '../../data/api-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
        <div class="resto">
          <h2 class="resto__label" tabindex="0">Restaurant List</h2>
          <div id="restaurant-container"></div>
        </div>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.getRestaurantList();

    const restaurantContainer = document.querySelector('#restaurant-container');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
