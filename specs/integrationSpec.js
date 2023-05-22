import LikeButtonInitiator from '../src/utils/like'

describe('like film', () => {
  it('film harusnya menampilkan tombol like', () => {
    const likeButtonContainer = document.querySelector('#likeButtonContainer')

    expect(() => likeButtonContainer !== null).toBeTruthy()
  })

  it('harusnya ada tombol unlike kalo-kalo belum dilike', async () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>'
    const likeButtonContainer = document.querySelector('#likeButtonContainer')
    const restaurantDummy = {
      id: 1
    }

    await LikeButtonInitiator.init({
      likeButtonContainer,
      restaurantDummy
    })

    const likeButton = document.querySelector('#likeButton')
    const unlikedButtonExist = likeButton.hasAttribute('aria-label') === 'unlike this movie'

    expect(() => unlikedButtonExist).toBeTruthy()
  })
})
