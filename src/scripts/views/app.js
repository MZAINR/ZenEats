import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({
    menu, drawer, utama,
  }) {
    this._menu = menu;
    this._drawer = drawer;
    this._utama = utama;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      menu: this._menu,
      drawer: this._drawer,
      utama: this.utama,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._utama.innerHTML = await page.render();

    await page.afterRender();

    const skipLinkElem = document.querySelector('.skip-link');
    skipLinkElem.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#utama').focus();
    });
  }
}

export default App;
