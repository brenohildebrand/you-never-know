import { writable } from 'svelte/store';

const { subscribe, set, update } = writable([]);

export default {
  subscribe,
  dispatch: (command) => update(n => n.push(command)),
}

function createStore () {
  const listeners = [];

  const dispatch = (command, args) => {
    run(command, args);
  }

  const commands = {};
  const addCommand = (key, value) => commands[key] = value;
  const removeCommand = (key) => commands[key] = null;

  const run = (command, args) => {
    commands[command](args);
  }

  return {
    subscribe,
    dispatch,
  }
}

































const createSuperstore = (commands) => {
  let refs = {};
  
  const create = (args) => {
    // check for refs

    const name = args[0];

    // wait for a click
    // instantiate a new node with the positions from the click
    // save it

    // return success message
  }

  return {
    register: (key, ref) => {
      refs[key] = ref;

      return function unregister () {
        delete refs[key];
      }
    },
    run: (command, args) => {
      commands[command](args);
    }
  }
}

createSuperstore({
  create: (args) => {

  },
  edit: (args) => {

  },
  delete: (args) => {

  },
  join: (args) => {

  }
});