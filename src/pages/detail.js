import UrlParser from '../utils/url-parser'

const Detail = {
  async render () {
    return `
      <h2 class="title">Restaurant Detail</h2>
      <div id="restaurant"></div>
    `
  },

  async afterRender () {
    const url = UrlParser.parseActiveUrlWithoutCombiner()

    const result = await fetch(`https://restaurant-api.dicoding.dev/detail/${url.id}`)
    const resultJson = await result.json()
    const restaurant = await resultJson.restaurant

    const titleElement = document.querySelector('h2.title')
    titleElement.textContent = restaurant.name

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
      <figure>
        <img class="photo" src="https://restaurant-api.dicoding.dev/images/large/${restaurant.pictureId}" alt="${restaurant.name}" />
      </figure>
      <div class="card">
        <div class="rating">
          <span class="font-semibold">Rating:</span> ${restaurant.rating}
        </div>
        <h3 class="mb-2">${restaurant.name}</h3>
        <div class="address">
          <img class="icon-maps" src="/images/IonIosLocation.svg" />
          <address>${restaurant.address}</address>
        </div>
        <p class="description">${restaurant.description}</p>
        <div class="menus">
          <div>
            <h4>Foods</h4>
            <ul class="foods">${renderMenus(restaurant.menus.foods)}</ul>
          </div>
          <div>
            <h4>Drinks</h4>
            <ul class="drinks">${renderMenus(restaurant.menus.drinks)}</ul>
          </div>
        </div>
        <h4>Reviews</h4>
        <div class="reviews">${renderReviews(restaurant.customerReviews)}</div>
      </div>
    `
  }
}

export default Detail
