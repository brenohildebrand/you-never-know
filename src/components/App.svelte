<script>
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';
  import Canvas from "./Canvas.svelte";
  import CommandLine from "./CommandLine.svelte";

  const props = setContext('props', {
    commandLine: {
      helper: writable(''),
    }
  });

  setContext('commands', (cmd) => {
    switch (cmd) {
      case ':create':
        stdout(`create command was called`);
        props.commandLine.helper.set('clica pra por o node');
        stdout(`create command was done executing`);
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