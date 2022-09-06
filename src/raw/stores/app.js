function createStateStore () {
    const states = {};
    const listeners = {};

    const subscribe = (state, listener) => {
        if (listeners[state] === null) listeners[state] = [];
        listeners[state].push(listener);
        
        return () => listeners[state] = listeners[state].filter(l => l !== listener);
    }

    const setState = (state, value) => {
        states[state] = value;
        if (listeners[state]) {
            listeners[state].forEach(l => l(value));
        }
    }

    const getState = (state) => {
        return states[state];
    }

    return {
        subscribe,
        setState,
        getState,
    }
}

const app = createStateStore();

// Set Default States
app.setState('version', '1.0.0');

export default app;