import UrlParser from '../utils/url-parser'
import LikeButtonInitiator from '../utils/like'

const Detail = {
  async render () {
    return `
      <div id="restaurant">
        <div class="placeholder"></div>
      </div>
    `
  },

  async afterRender () {
    const url = UrlParser.parseActiveUrlWithoutCombiner()

    const result = await fetch(`https://restaurant-api.dicoding.dev/detail/${url.id}`)
    const resultJson = await result.json()
    const restaurant = await resultJson.restaurant

    const renderReviews = (reviews) => {
      return reviews.map((review) =>
        `
        <div class="review">
          <div class="date">${review.date}</div>
          <div class="name font-semibold">${review.name}</div>
          <div class="content">"${review.review}"</div>
        </div>
        `
      ).join('')
    }

    const renderMenus = (menus) => {
      return menus.map((menu) =>
        `
        <li class="name"><span class="name">${menu.name}</span></li>
      `).join('')
    }

    const restaurantElement = document.querySelector('#restaurant')

    restaurantElement.innerHTML = `
    <div class="hero-detail">
      <picture>
        <source 
          srcset="https://restaurant-api.dicoding.dev/images/small/${restaurant.pictureId}" 
          media="(max-width: 767px)" 
        />
        <source 
          srcset="https://restaurant-api.dicoding.dev/images/medium/${restaurant.pictureId}" 
          media="(max-width: 1199px)" 
        />
        <img 
          src="https://restaurant-api.dicoding.dev/images/large/${restaurant.pictureId}" 
          alt="${restaurant.name}" 
          crossorigin="anonymous" 
        />
      </picture>
    </div>
    <div class="card">
      <div class="rating">
        <span class="font-semibold">Rating:</span> ${restaurant.rating}
      </div>
      <div class="header">
        <div>
          <h1 class="mb-2">${restaurant.name}</h3>
          <div class="address">
            <img class="icon-maps" src="/icons/IonIosLocation.svg" alt="pin location icon" />
            <address>${restaurant.address}</address>
          </div>
        </div>
        <div id="likeButtonContainer"></div>
      </div>
      <p class="description">${restaurant.description}</p>
      <div class="menus">
        <div>
          <h2>Foods</h2>
          <ul class="foods">${renderMenus(restaurant.menus.foods)}</ul>
        </div>
        <div>
          <h2>Drinks</h2>
          <ul class="drinks">${renderMenus(restaurant.menus.drinks)}</ul>
        </div>
      </div>
      <h2>Reviews</h2>
      <div class="reviews">${renderReviews(restaurant.customerReviews)}</div>
    </div>
    `

    const likeButtonContainer = document.querySelector('#likeButtonContainer')

    LikeButtonInitiator.init({
      likeButtonContainer,
      restaurant
    })
  }
}

export default Detail
