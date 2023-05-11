export const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like shadow-xl">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`

export const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like shadow-xl liked">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`
