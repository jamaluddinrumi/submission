import FavoriteRestaurantIdb from '../utils/db'
import { emptyFavorite } from '../template'

const Index = {
  async render () {
    return `
      <h2 class="title"></h2>
      <div id="restaurants" class="favorites">
        <div></div>
        <div class="placeholder"></div>
        <div></div>
      </div>
    `
  },

  async afterRender () {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants()

    const pageTitleElement = document.querySelector('h2.title')
    const restaurantsElement = document.querySelector('#restaurants')

    pageTitleElement.textContent = 'Favorite'
    restaurantsElement.innerHTML = restaurants.length === 0
      ? emptyFavorite()
      : restaurants.map((restaurant) => `
      <div class="restaurant card bg-base-100 shadow-xl">
        <a href="/#/detail/${restaurant.id}">
          <figure>
            <img class="lazyload" data-src="https://restaurant-api.dicoding.dev/images/small/${restaurant.pictureId}" alt="${restaurant.name}" crossorigin="anonymous" />
          </figure>
        </a>
        <div class="city font-semibold shadow-md">${restaurant.city}</div>
        <div class="card-body">
          <div class="rating">
            <span class="font-semibold">Rating:</span> ${restaurant.rating}
          </div>
          <a href="/#/detail/${restaurant.id}">
            <h2 class="card-title">${restaurant.name}</h2>
          </a>
          <p class="line-clamp-3">${restaurant.description}</p>
        </div>
      </div>`).join('')
  }
}

export default Index
