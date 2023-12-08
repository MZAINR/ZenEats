import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/api-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const Detail = {
  async render() {
    return `

        <div class="resto">
          <div id="restaurant" class="restaurant"></div>
          <div id="likeButtonContainer"></div>
        </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.getRestaurantDetail(url.id);
    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    const heroHidden = document.querySelector('.hero');
    if (heroHidden) {
      heroHidden.classList.add('hero__little');
    }

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant,
    });
  },
};

export default Detail;
