<script>
  import { onMount, onDestroy } from 'svelte';

  let commandLine = undefined;
  let command = '';

  function handleCommandKeyDown (event) {
    event.preventDefault();

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
      document.body.focus();
    } else if ( key === 'Escape' ) {
      command = '';
      document.body.focus();
    } else if ( key === 'Backspace' ) {
      command.slice(0, command.length() - 1);
    } else {
      command += key;
    }
  }

  function handleGlobalKeyDown (event) {
    event.preventDefault();

    const key = event.key;
  
    if (key === ':' && document.activeElement !== commandLine.children[0]) {
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
  <input on:keydown={handleCommandKeyDown} value={command}/>
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