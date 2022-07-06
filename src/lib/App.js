import * as PIXI from 'pixi.js';

export default class App {
  constructor() {
    // The app is a 'main' HTML element that contains a canvas inside
    // (from PIXI) and UI elements as needed.
    this.app = document.createElement('main');
    
    
    // Create the canvas (from PIXI)
    this.canvas = new PIXI.Application({ 
      width: window.innerWidth, 
      height: window.innerHeight 
    });

    // Append the canvas (from PIXI) to the 'main' element
    this._append({ HTMLElement: this.canvas.view });
  }

  _append({ HTMLElement }) {
    // Append the HTMLElement to the 'main' element.
    this.app.append(HTMLElement);
  }

  mount({ HTMLElement }) {
    // Append the 'main' element to the HTMLElement. In other words... mount
    // the 'main' element in the HTMLElement.
    HTMLElement.append(this.app);
  }
}