import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import "../styles/responsive.css";
import App from "./views/app";
import swRegister from "./utils/sw-register";

const app = new App({
  button: document.querySelector("#hamburger-button"),
  drawer: document.querySelector("#drawer-nav"),
  content: document.querySelector("#mainContent"),
});

window.addEventListener("hashchange", () => {
  app.renderPage();
});

window.addEventListener("load", () => {
  app.renderPage();
  swRegister();
});
