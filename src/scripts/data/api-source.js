import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {
  static async getRestaurantList() {
    const response = await fetch(API_ENDPOINT.RESTAURANT_LIST);
    const responseData = await response.json();
    return responseData.restaurants;
  }

  static async getRestaurantDetail(id) {
    const response = await fetch(API_ENDPOINT.RESTAURANT_DETAIL(id));
    const responseData = await response.json();
    return responseData.restaurant;
  }
}

export default RestaurantSource;
