import * as PIXI from '../modules/pixi.js';

const app = document.querySelector("#app");

const canvas = new PIXI.Application({ width: 500, height: 500 });

app.appendChild(canvas.view);