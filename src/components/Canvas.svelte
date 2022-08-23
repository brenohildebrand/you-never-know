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
    backgroundColor: 0xffffff,
    antialias: true,
    resizeTo: window,
  });

  const viewport = new Viewport({
    screenWidth: window.innerWidth,
    screenHeight: window.innerHeight,
    worldWidth: 1000,
    worldHeight: 1000,

    interaction: app.renderer.plugins.interaction,
  })

  window.addEventListener('resize', () => {
    viewport.resize(window.innerWidth, window.innerHeight, 1000, 1000);
  });
  
  viewport
    .drag({
      mouseButtons: 'left',
      keyToPress: ['Space'],
    })
    .pinch()
    .wheel()
    .decelerate({
      friction: 0.90, // default is 0.95
    })

  draw.node.set((node) => {
    const { id, position } = node;

    // fix position based on viewport shift
    stdout(`old position: ${position.x}, ${position.y}`);
    position.x -= viewport.position.x;
    position.y -= viewport.position.y;
    stdout(`new position: ${position.x}, ${position.y}`);

    const preset = {
      radius: 50,
    };

    function onDragStart (event) {
      this.data = event.data;
      this.alpha = 0.5;
      this.dragging = true;
    }

    function onDragEnd (event) {
      this.alpha = 1;
      this.dragging = false;
      this.data = null;
    }

    function onDragMove () {
      if (this.dragging) {
        const newPosition = this.data.getLocalPosition(this.parent);
        this.x = newPosition.x;
        this.y = newPosition.y;
      }
    }

    // Draw Node
    const graphics = new PIXI.Graphics();

    graphics.beginFill(0x000);
    graphics.drawCircle(0, 0, preset.radius);
    graphics.endFill();

    graphics.name = id;
    graphics.position.set(position.x, position.y);

    graphics.interactive = true;
    graphics.buttonMode = true;

    graphics
      .on('pointerdown', onDragStart)
      .on('pointerup', onDragEnd)
      .on('pointerupoutside', onDragEnd)
      .on('pointermove', onDragMove)

    // Add to the Canvas
    viewport.addChild(graphics);
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