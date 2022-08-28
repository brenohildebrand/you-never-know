<script>
  import { onMount, onDestroy, getContext } from 'svelte';

  let commandLine = undefined;
  let command = '';

  const { helper } = getContext('props').commandLine;
  const commands = getContext('commands');

  function handleCommandKeyDown (event) {
    const key = event.key; 

    if(key === 'Enter') {
      commands(command);

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
  <p>{$helper}</p>
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
    justify-content: space-between;

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