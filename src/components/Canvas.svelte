<script>
  import * as PIXI from 'pixi.js';
  import { Viewport } from 'pixi-viewport';
  import { onMount, getContext } from 'svelte';

  let canvas;

  const { draw } = getContext('functions').canvas;

  onMount(() => {
    canvas.appendChild(app.view);
    app.stage.addChild(viewport);
  });
  
  const app = new PIXI.Application({
    width: window.innerWidth,
    height: window.innerHeight,
    resizeTo: window,
    backgroundColor: 0xffffff,
  });

  const viewport = new Viewport({
    screenWidth: window.innerWidth,
    screenHeight: window.innerHeight,
    worldWidth: 1000,
    worldHeight: 1000,

    interaction: app.renderer.plugins.interaction,
  })

  viewport
    .drag()
    .pinch()
    .wheel()
    .decelerate()

  draw.node.set((node) => {
    const { id, position } = node;

    const preset = {
      radius: 50,
    };

    // Draw Node
    const graphics = new PIXI.Graphics();
    graphics.name = id;
    graphics.drawCircle(position.x, position.y, preset.radius);
    // position.set();

    // Add to the Canvas
    app.stage.addChild(graphics);
  });
</script>

<div id="canvas" bind:this={canvas}></div>

<style>
  #canvas {
    width: 100vw;
    height: 100vh; 

    background-color: white;
    /* border: 3px solid red; */
  }  
</style>