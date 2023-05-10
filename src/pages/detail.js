import UrlParser from '../utils/url-parser'

const Detail = {
  async render () {
    return `
      <h2 class="title">Detail Restoran</h2>
    `
  },

  async afterRender () {
    const url = UrlParser.parseActiveUrlWithoutCombiner()

    const result = await fetch(`https://restaurant-api.dicoding.dev/detail/${url.id}`)
    const resultJson = await result.json()
    const restaurant = await resultJson.restaurant
    console.log(restaurant)
  }
}

export default Detail
