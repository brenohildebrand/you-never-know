<script>
  import * as PIXI from 'pixi.js';
  import { onMount } from 'svelte';

  export let register;

  let canvas;

  onMount(() => {
    const app = new PIXI.Application({
      width: window.innerWidth,
      height: window.innerHeight,
      resizeTo: window,
    });

    canvas.appendChild(app.view);
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