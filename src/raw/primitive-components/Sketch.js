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
let isPainting = false;

Sketch.element.addEventListener('pointerdown', (e) => {
    isPainting = true;
    console.log('down');
});

Sketch.element.addEventListener('pointerup', (e) => {
    isPainting = false;
    context.stroke();
    context.beginPath();
    console.log('up');
});

Sketch.element.addEventListener('pointermove', (e) => {
    if (isPainting) {
        context.lineWidth = 3;
        context.lineCap = 'round';
    
        context.lineTo(e.clientX, e.clientY);
        context.stroke();
    }
});

export default Sketch;