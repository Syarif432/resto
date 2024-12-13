import routes from "../routes/routes";
import UrlParser from "../routes/url-parser";
import drawerInitiator from "../utils/drawer-initiator";

class App {
  constructor({ button, drawer, content }) {
    this.button = button;
    this.drawer = drawer;
    this.content = content;

    this.initialAppShell();
  }

  initialAppShell() {
    drawerInitiator.init({
      button: this.button,
      drawer: this.drawer,
      content: this.content,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlCombiner();
    const page = routes[url];
    this.content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
