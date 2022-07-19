export default class App {
  constructor (query) {
    this.states = {};

    // The HTMlElement that contains the app.
    this.view = document.querySelector(query);
    this.view.style.width = '100%';
    this.view.style.minHeight = '100vh';
  }

  addEventListener (keyOfWindowEventMap, listener) {
    this.view.addEventListener(keyOfWindowEventMap, listener);
  }

  removeEventListener (keyOfWindowEventMap, listener) {
    this.view.window.removeEventListener(keyOfWindowEventMap, listener);
  }
}