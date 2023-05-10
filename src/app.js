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
  }
}

export default App
