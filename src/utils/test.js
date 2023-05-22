import CONFIG from '../config'
import LikeButtonInitiator from './like'

export const InitLikeButtonContainer = async (restaurant) => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div>'
  const likeButtonContainer = document.querySelector('#likeButtonContainer')
  const resto = restaurant ?? { id: CONFIG.TEST_RESTAURANT_ID }

  await LikeButtonInitiator.init({
    likeButtonContainer,
    restaurant: resto
  })
}
