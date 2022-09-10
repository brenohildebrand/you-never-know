import { Component } from "../primitive";
import { Viewport } from 'pixi-viewport';
import * as PIXI from 'pixi.js';

// Pixi
const pixi = new PIXI.Application({
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: 0xf0f0f0,
    antialias: true,
    resizeTo: window,
});

// Viewport
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

// Resize
window.addEventListener('resize', () => {
    viewport.resize(window.innerWidth, window.innerHeight, 1000, 1000);
});

// Canvas 
const Canvas = new Component({
    name: 'canvas',
    element: pixi.view,
    styles: {
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        overflow: 'hidden',
    },
});

// Draw
const graphics = new PIXI.Graphics();
graphics.beginFill(0x000);
graphics.drawCircle(0, 0, 100);
graphics.endFill();

graphics.interactive = true;
graphics.buttonMode = true;

viewport.addChild(graphics);

export default Canvas;