const Index = {
  async render () {
    return `
      <h2 class="title"></h2>
      <div id="restaurants">
        <div></div>
        <div class="placeholder"></div>
        <div></div>
      </div>
    `
  },

  async afterRender () {
    const result = await fetch('https://restaurant-api.dicoding.dev/list')
    const resultJson = await result.json()
    const restaurants = await resultJson.restaurants

    const pageTitleElement = document.querySelector('h2.title')
    const restaurantsElement = document.querySelector('#restaurants')

    pageTitleElement.textContent = 'Explore Restaurants'
    restaurantsElement.innerHTML = restaurants.map((restaurant) => `
      <div class="restaurant card bg-base-100 shadow-xl">
        <a href="/#/detail/${restaurant.id}">
        <figure>
          <picture>
            <source data-srcset="https://restaurant-api.dicoding.dev/images/small/${restaurant.pictureId}, 415w" media="(max-width: 415px)" />
            <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://restaurant-api.dicoding.dev/images/medium/${restaurant.pictureId}" alt="${restaurant.name}" class="lazyload" crossorigin="anonymous" />
          </picture>
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
