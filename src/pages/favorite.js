const Favorite = {
  async render () {
    return `
      <h2 class="title"></h2>
      <div class="placeholder"></div>
    `
  },

  async afterRender () {
    const pageTitleElement = document.querySelector('h2.title')

    pageTitleElement.textContent = 'Favorite'
  }
}

export default Favorite
