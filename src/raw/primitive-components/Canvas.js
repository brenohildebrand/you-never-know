import { Component } from "../primitive";
import { Viewport } from 'pixi-viewport';
import * as PIXI from 'pixi.js';
import AppStore from "../stores/AppStore";

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

// init
(async function initialize () {
    // fetch database
    const nodes = await database.fetch();
    
    // draw nodes
    draw(nodes);
})();


// draw function
function draw (nodes) {
    for (const nodeName in nodes) {
        const node = nodes[nodeName];
        const { childID, position } = node;
        const child = nodes[childID];

        // draw circle
        node.graphics = new PIXI.Graphics();
        node.graphics.interactive = true;
        node.graphics.buttonMode = true;

        node.graphics.on('pointerdown', () => {
            // restore
            const previousNode = AppStore.getProp('selectedNode');
            previousNode?.graphics
                .clear()
                .beginFill(0x949494)
                .drawCircle(0, 0, 24)
                .endFill()

            // create border
            AppStore.setProp('selectedNode', node);
            node.graphics
                .clear()
                .lineStyle(3, 0x484848, 1)
                .beginFill(0x949494)
                .drawCircle(0, 0, 24)
                .endFill()
        });

        node.graphics
            .beginFill(0x949494)
            .drawCircle(0, 0, 24)
            .endFill()
        
        node.graphics.position.set(position.x, position.y);

        viewport.addChild(node.graphics);

        // draw connections from parent to child
        if ( child ) {
            const dx = Math.abs(position.x - child.position.x);
            const dy = Math.abs(position.y - child.position.y);
            const width = Math.sqrt(dx * dx + dy * dy);
            const height = 7;
            const graphics = new PIXI.Graphics();

            graphics.pivot.set(0, (height / 2));
            graphics.rotation = - Math.atan(dy / dx);
            // const addToRotation = () => graphics.rotation += 0.1;
            // setInterval(addToRotation, 1000);

            graphics.beginFill(0x949494);
            graphics.drawRect(
                0,
                0, 
                width,
                height,
            );
            graphics.endFill();

            graphics.position.set(position.x, position.y);

            viewport.addChild(graphics);
        } 
    }
}

// shift position based on viewport shift
// position.x -= viewport.position.x;
// position.y -= viewport.position.y;
//     // drag functions
//     function onDragStart(event) {
//         this.data = event.data;
//         this.alpha = 0.5;
//         this.dragging = true;
//     }

//     function onDragEnd (event) {
//         this.alpha = 1;
//         this.dragging = false;
//         this.data = null;
//     }

//     function onDragMove () {
//         if (this.dragging) {
//             const newPosition = this.data.getLocalPosition(this.parent);
//             this.x = newPosition.x;
//             this.y = newPosition.y;
//         }
//     }
//     graphics
//         .on('pointerdown', onDragStart)
//         .on('pointerup', onDragEnd)
//         .on('pointerupoutside', onDragEnd)
//         .on('pointermove', onDragMove)

export default Canvas;