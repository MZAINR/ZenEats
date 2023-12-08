Feature('Liking and Unliking a Restaurants');

const assert = require('assert');

Scenario('Liking a restaurant', async ({ I }) => {
  // Menyiapkan halaman
  I.amOnPage('/#/home');
  I.seeInCurrentUrl('/#/home');
  I.click(locate('li.nav__item').find('a').withText('Favorite'));
  I.seeElement('#no-favorite');
  I.click(locate('li.nav__item').find('a').withText('Home'));

  I.seeElement('.post-item__title a');
  const firstRestaurant = locate('.post-item__title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.see(firstRestaurantTitle);
  I.click(firstRestaurantTitle);

  I.seeElement('#likeButton');
  I.seeElement('.fa.fa-heart-o');
  I.click('#likeButton');
  I.seeElement('.fa.fa-heart');

  I.click(locate('li.nav__item').find('a').withText('Favorite'));
  const likedRestaurantTitle = await I.grabTextFrom('.post-item__title a');
  I.see(likedRestaurantTitle);
  I.dontSeeElement('#no-favorite');
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('Unliking a restaurant', async ({ I }) => {
  I.amOnPage('/#/home');
  const firstRestaurant = locate('.post-item__title a').first();
  I.click(firstRestaurant);
  I.click('#likeButton');

  I.click(locate('li.nav__item').find('a').withText('Favorite'));

  const likedRestaurantTitle = await I.grabTextFrom('.post-item__title a');
  I.dontSeeElement('#no-favorite');
  I.see(likedRestaurantTitle);

  I.click(firstRestaurant);

  I.seeElement('.fa.fa-heart');
  I.click('#likeButton');
  I.seeElement('.fa.fa-heart-o');

  I.click(locate('li.nav__item').find('a').withText('Favorite'));
  I.seeElement('#no-favorite');
});

Scenario('Membaca beberapa Detail Restaurant', async ({ I }) => {
  I.amOnPage('/#/home');

  const RestaurantTitle2 = await I.grabTextFrom(locate('.post-item__title').at(2));
  I.click(RestaurantTitle2);
  I.seeElement('.restaurant__info','.customer-reviews');

  I.click(locate('li.nav__item').find('a').withText('Home'));
  const RestaurantTitle11 = await I.grabTextFrom(locate('.post-item__title').at(11));
  I.click(RestaurantTitle11);
  I.seeElement('.restaurant__info','.customer-reviews');

  I.click(locate('li.nav__item').find('a').withText('Home'));
  const RestaurantTitle7 = await I.grabTextFrom(locate('.post-item__title').at(7));
  I.click(RestaurantTitle7);
  I.seeElement('.restaurant__info','.customer-reviews');
});
