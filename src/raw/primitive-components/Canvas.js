import { Component } from "../primitive";
import { Viewport } from 'pixi-viewport';
import * as PIXI from 'pixi.js';

// Pixi
const pixi = new PIXI.Application({
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: 0xff0000,
    antialias: true,
    resizeTo: window,
});

const viewport = new Viewport({
    screenWidth: window.innerWidth,
    screenHeight: window.innerHeight,
    worldWidth: 1000,
    worldHeight: 1000,
    
    interaction: pixi.renderer.plugins.interaction,
});

viewport
    .drag({
        mouseButtons: 'left',
        keyToPress: ['Space'],
    })
    .decelerate({
        friction: 0.90,
    })

pixi.stage.addChild(viewport);

// The Canvas Component
const Canvas = new Component({
    name: 'canvas',
    element: pixi.view,
    styles: {
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        zIndex: '0',
    },
});

// handle resize
window.addEventListener('resize', () => {
    viewport.resize(window.innerWidth, window.innerHeight, 1000, 1000);
});

export default Canvas;