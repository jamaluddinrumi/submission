import CONFIG from '../src/config'
import FavoriteRestaurantIdb from '../src/utils/db'
import { InitLikeButtonContainer } from '../src/utils/test'

describe('unlike film:', () => {
  beforeEach(async () => {
    await FavoriteRestaurantIdb.putRestaurant({ id: CONFIG.TEST_RESTAURANT_ID })

    await InitLikeButtonContainer()

    const likeButton = document.querySelector('#likeButton')

    likeButton.dispatchEvent(new Event('click'))
  })

  afterEach(async () => {
    await FavoriteRestaurantIdb.deleteRestaurant(CONFIG.TEST_RESTAURANT_ID)
  })

  it('film harusnya menampilkan tombol unlike', async () => {
    const likeButtonContainer = document.querySelector('#likeButtonContainer')

    expect(likeButtonContainer).toBeTruthy()
  })

  it('kalo sudah dilike, harusnya ada tombol unlike', async () => {
    const likeButtonContainer = document.querySelector('#likeButtonContainer')

    const unlikeButtonExist = document.querySelector('[aria-label="unlike this restaurant"]')

    expect(unlikeButtonExist).not.toBeNull()
  })

  it('kalo sudah dilike, harusnya tidak ada tombol like', async () => {
    const likedButtonExist = document.querySelector('[aria-label="like this restaurant"]')

    expect(likedButtonExist).toBeNull()
  })

  it('unlike film', async () => {
    const likeButton = document.querySelector('#likeButton')

    likeButton.dispatchEvent(new Event('click'))

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([])
  })

  it('kalo masukkin restaurant yg ga ada di DB, ga bikin error', async () => {
    const likeButton = document.querySelector('#likeButton')

    await FavoriteRestaurantIdb.deleteRestaurant(CONFIG.TEST_RESTAURANT_ID)

    likeButton.dispatchEvent(new Event('click'))

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([])
  })
})
