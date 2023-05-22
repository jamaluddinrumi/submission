import CONFIG from '../src/config'
import FavoriteRestaurantIdb from '../src/utils/db'
import { InitLikeButtonContainer } from '../src/utils/test'

describe('like film:', () => {
  it('film harusnya menampilkan tombol like', async () => {
    await InitLikeButtonContainer()

    const likeButtonContainer = document.querySelector('#likeButtonContainer')

    expect(likeButtonContainer).toBeTruthy()
  })

  it('kalo belum dilike, harusnya ada tombol like', async () => {
    await InitLikeButtonContainer()

    const likeButtonExist = document.querySelector('[aria-label="like this restaurant"]')

    expect(likeButtonExist).not.toBeNull()
  })

  it('kalo belum dilike, harusnya tidak ada tombol unlike', async () => {
    await InitLikeButtonContainer()

    const likedButtonExist = document.querySelector('[aria-label="unlike this restaurant"]')

    expect(likedButtonExist).toBeNull()
  })

  it('like film', async () => {
    await InitLikeButtonContainer()

    const likeButton = document.querySelector('#likeButton')

    const restaurantId = await FavoriteRestaurantIdb.putRestaurant({ id: CONFIG.TEST_RESTAURANT_ID })

    const restaurant = await FavoriteRestaurantIdb.getRestaurant(restaurantId)

    likeButton.dispatchEvent(new Event('click'))

    expect(restaurant).toEqual({ id: CONFIG.TEST_RESTAURANT_ID })

    FavoriteRestaurantIdb.deleteRestaurant(CONFIG.TEST_RESTAURANT_ID)
  })

  it('kalo mau masukkin restaurant yg ga ada IDnya, jangan boleh', async () => {
    await InitLikeButtonContainer({})

    const likeButton = document.querySelector('#likeButton')

    likeButton.dispatchEvent(new Event('click'))

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([])
  })
})
