<script>
  import { onMount } from 'svelte';
  import Canvas from "./Canvas.svelte";
  import CommandLine from "./CommandLine.svelte";
  import { v4 as getUniqueId } from 'uuid';

  let register, run;

  onMount(() => {
    const superStore = createSuperStore();
    register = superStore.register;
    run = superStore.run;
  });

  function createSuperStore () {
    const apis = {};

    const commands = {
      create: async (args) => {
        // check apis
        
        // create new node
        const newNode = {
          id: getUniqueId(),
          from: undefined,
          to: undefined,
        };

        // save node
        // request electron to save file 
        db.saveNode(newNode);

        // return successfull message 
      },
      delete: (args) => {
        
      },
      edit: (args) => {

      },
      join: (args) => {

      },
    };

    return {
      register: (key, api) => {
        apis[key] = api;

        return function unregister () {
          delete apis[key];
        }
      },
      run: (command, args) => {
        commands[command](args);
      } 
    }
  }
</script>

<Canvas></Canvas>
<CommandLine></CommandLine>

<style>
</style>