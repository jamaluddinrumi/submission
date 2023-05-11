import UrlParser from './utils/url-parser'
import routes from './utils/routes'

class App {
  constructor ({ content }) {
    this._content = content
  }

  async renderPage () {
    const url = UrlParser.parseActiveUrlWithCombiner()
    const page = routes[url]
    this._content.innerHTML = await page.render()
    await page.afterRender()
    await window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

export default App
