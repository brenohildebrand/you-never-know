<script>
  import { onMount, onDestroy } from 'svelte';

  export let register;
  export let run;

  let commandLine = undefined;
  let command = '';

  function handleCommandKeyDown (event) {
    const key = event.key; 

    if(key === 'Enter') {
      stdout(`The command is ${command}`)
      switch (command) {
        case ':create':
          stdout(`Create cmd was called!`);
          break;
        default:
          stdout(`Error: command not found!`);
      }

      command = '';
      commandLine.children[0].blur();
    } else if ( key === 'Escape' ) {
      command = '';
      commandLine.children[0].blur();
    }
  }

  function handleGlobalKeyDown (event) {
    const key = event.key;
  
    if (key === ':' && document.activeElement !== commandLine.children[0]) {
      event.preventDefault();

      commandLine.children[0].focus({ 
        preventScroll: true, 
        focusVisible: false 
      });

      command = ':';
    }
  }

  onMount(() => {
    window.addEventListener('keydown', handleGlobalKeyDown);
  })

  onDestroy(() => {
    window.removeEventListener('keydown', handleGlobalKeyDown);
  })
</script>

<div id="command-line" bind:this={commandLine}>
  <input on:keydown={handleCommandKeyDown} bind:value={command}/>
</div>

<style>
  #command-line {
    position: fixed;
    bottom: 0;

    min-height: 32px;
    width: 100vw;

    background-color: #333;

    display: flex;
    flex-direction: row;
    align-items: center;

    padding: 0 5px;
  }

  #command-line > input {
    font-size: 16px;
    color: white;

    outline: none;
    border: none;
    background: transparent;
  }
</style>