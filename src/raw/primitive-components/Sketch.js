import { Component } from "../primitive";

// by pressing SPC you get to the Sketch board

const Sketch = new Component({
    name: "sketch",
    tagName: "div",
    styles: {
        width: "100vw",
        heigth: "100vh",
        position: "fixed",
        overflow: "hidden",
    }
});

export default Sketch;