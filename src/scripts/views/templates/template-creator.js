import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="resto__label" tabindex="0">${restaurant.name}</h2>
  <div class="details">
  <picture>
    <source media="(max-width: 600px)" data-srcset="${CONFIG.BASE_SMALL_IMAGE_URL + restaurant.pictureId}">
    <img class="lazyload restaurant__image" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
  </picture>
    
    <div class="restaurant__info">
      <h3>Information</h3>
      <h4>City</h4>
      <p>${restaurant.city}</p>
      <h4>Address</h4>
      <p>${restaurant.address}</p>
      <h4>Rating</h4>
      <p>${restaurant.rating}</p>
      <h4>Categories</h4>
      <ul>${restaurant.categories.map((category) => `<li>${category.name}</li>`).join('')}</ul>
    </div>
    
    <div class="restaurant__menu">
      <h3>Menus</h3>
      <div class="restaurant__menu__container">
        <div class="restaurant__menu__section">
          <h4>Foods</h4>
          <ul>${restaurant.menus.foods.map((food) => `<li>${food.name}</li>`).join('')}</ul>
        </div>
        <div class="restaurant__menu__section">
          <h4>Drinks</h4>
          <ul>${restaurant.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')}</ul>
        </div>
      </div>
    </div>
    </div>
  
  <p class="post-item__description" tabindex="0">${restaurant.description}</p>
      <div class="customer-reviews">
      <h3>Customer Reviews</h3>
      <ul>
        ${restaurant.customerReviews.map((review) => `
          <li>
            <p><b>${review.name}</b> Mengatakan:</p>
            <p>"${review.review}"</p>
            <br>
            <p class="date">Dibuat pada, <b>${review.date}</b></p>
          </li>
        `).join('')}
      </ul>
    </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-card">
  <picture>
    <source media="(max-width: 600px)" data-srcset="${CONFIG.BASE_SMALL_IMAGE_URL + restaurant.pictureId}">
    <img class="lazyload restaurant__image" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
  </picture>
    <p class="info">⭐️ ${restaurant.rating} | ${restaurant.city}</p>
    <h3 class="post-item__title"><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
    <div id="likeButtonContainer"></div>
    <p class="post-item__description" tabindex="0">${restaurant.description}</p>
  </div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
