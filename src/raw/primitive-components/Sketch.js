import { Component } from "../primitive";

// by pressing SPC you get to the Sketch board

const Sketch = new Component({
    name: "sketch",
    tagName: "canvas",
    styles: {
        width: "100vw",
        height: "100vh",
        position: "fixed",
        overflow: "hidden",
    }
});

const context = Sketch.element.getContext("2d");

context.canvas.width = window.innerWidth;
context.canvas.height = window.innerHeight;

let isPainting = false;

Sketch.element.addEventListener('pointerdown', (e) => {
    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY);
}, { once: true });

Sketch.element.addEventListener('pointerdown', (e) => {
    isPainting = true;
});

Sketch.element.addEventListener('pointerup', (e) => {
    isPainting = false;
    context.stroke();
    context.beginPath();
});

Sketch.element.addEventListener('pointermove', (e) => {
    if (isPainting) {
        context.lineWidth = 3;
        context.lineCap = 'round';
    
        context.lineTo(e.clientX, e.clientY);
        context.stroke();
    }
});

window.addEventListener('resize', () => {
    context.canvas.width = window.innerWidth;
    context.canvas.height = window.innerHeight;
});

export default Sketch;