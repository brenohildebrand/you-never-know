<script>
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';
  import { v4 as uniqueID } from 'uuid';
  import Canvas from "./Canvas.svelte";
  import CommandLine from "./CommandLine.svelte";

  const props = setContext('props', {
    commandLine: {
      helper: writable(''),
    }
  });

  const functions = setContext('functions', {
    canvas: {
      draw: {
        node: writable(undefined),
      }
    }
  });

  const draw = {
    node: undefined,
  };

  functions.canvas.draw.node.subscribe((value) => {
    draw.node = value;
  });

  setContext('commands', async (cmd) => {
    switch (cmd) {
      case ':create':
        stdout(`running command: create`);

        // Wait for a click to determine the position
        const position = {
          x: undefined,
          y: undefined,
        };

        window.addEventListener('mousedown', async (event) => {
          position.x = event.clientX;
          position.y = event.clientY;

          props.commandLine.helper.set('');

          // create a new node
          const newNode = {
            id: uniqueID(),
            from: undefined,
            to: undefined,
            position,
          }

          const response = await db.write(newNode);

          if (response && draw.node) {
            // draw node
            // $functions.canvas.draw.node(newNode);
            draw.node(newNode);
            stdout(`done`);
          } else {
            stdout(`oh-ow, something went wrong!`);
          }
        }, { once: true });

        props.commandLine.helper.set('click to insert node');
        break;
      case ':delete':
        break;
      case ':edit':
        break;
      case ':join':
        break;
      default:
        stdout(`command not found`);
    }
  });
</script>

<Canvas></Canvas>
<CommandLine></CommandLine>

<style>
</style>