export const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like shadow-xl">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`

export const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like shadow-xl liked">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`

export const emptyFavorite = () => `
  <div></div>
  <h3 class="mx-auto">😭 kamu belum ngelike!</h3>
  <div></div>
`
