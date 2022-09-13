import AppStore from "./stores/AppStore";

const shortcuts = {};

shortcuts['default'] = {};
shortcuts['sketch'] = {};

function Shortcut ({ mode, keys, callback }) {
    const shortcut = keys.join('-');
    shortcuts[mode][shortcut] = callback;

    return () => { 
        shortcuts[mode][shortcut] = null;
    }
};

// Event
let keys = [];

window.addEventListener('keydown', (e) => {
    if(e.key === ' ') keys.push('Space');
    else keys.push(e.key);

    console.log(keys.join('-'));

    const mode = AppStore.getProp('mode');
    const shortcut = keys.join('-');
    
    if (shortcuts[mode][shortcut]) 
        shortcuts[mode][shortcut].call();
});

window.addEventListener('keyup', (e) => {
    if (e.key === ' ')
        keys = keys.filter(key => key !== 'Space');
    else
        keys = keys.filter(key => key !== e.key);
});

export { Shortcut };