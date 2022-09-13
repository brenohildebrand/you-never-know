function PropsStore () {
    const props = {};
    const listeners = {};

    const subscribe = (prop, listener) => {
        if (!listeners[prop]) listeners[prop] = [];
        listeners[prop].push(listener);
        
        return () => listeners[prop] = listeners[prop].filter(l => l !== listener);
    }

    const setProp = (prop, value) => {
        props[prop] = value;
        if (listeners[prop]) {
            listeners[prop].forEach(l => l(value));
        }
    }

    const getProp = (prop) => {
        return props[prop];
    }

    return {
        subscribe,
        setProp,
        getProp,
    }
}

export { PropsStore };