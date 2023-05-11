import UrlParser from './utils/url-parser'
import routes from './utils/routes'
import Hero from './hero'

class App {
  constructor ({ content }) {
    this._content = content
  }

  async renderPage () {
    const url = UrlParser.parseActiveUrlWithCombiner()
    const page = routes[url]
    const hero = document.querySelector('#hero') ?? null
    if (hero !== null) {
      if (url === '/') {
        hero.innerHTML = Hero
      } else hero.innerHTML = ''
    }
    this._content.innerHTML = await page.render()
    await page.afterRender()
    await window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

export default App
