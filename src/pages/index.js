const Index = {
  async render () {
    return `
      <h2 class="title">Explore Restaurants</h2><div id="restaurants"></div>
    `
  },

  async afterRender () {
    const result = await fetch('https://restaurant-api.dicoding.dev/list')
    const resultJson = await result.json()
    const restaurants = await resultJson.restaurants

    const restaurantsElement = document.querySelector('#restaurants')

    restaurantsElement.innerHTML = restaurants.map((restaurant) => `
      <div class="card bg-base-100 shadow-xl">
        <a href="/#/detail/${restaurant.id}">
          <figure><img src="https://restaurant-api.dicoding.dev/images/medium/${restaurant.pictureId}" alt="Shoes" /></figure>
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
