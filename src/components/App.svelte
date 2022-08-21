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

  setContext('commands', async (cmd) => {
    switch (cmd) {
      case ':create':
        stdout(`create command was called`);
        const newNode = {
          id: uniqueID(),
          from: undefined,
          to: undefined,
          position: {
            x: undefined,
            y: undefined,
          }
        }

        props.commandLine.helper.set('clica pra por o node');
        const response = await db.write(newNode);
        
        stdout(`create command was done executing with the following response: \n${response}`);
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