function Component ({
    children = [],
    element = undefined,
    name = undefined, 
    styles = {},
    tagName = 'div', 
}) {
    const component = {};

    component.element = element || document.createElement(tagName);

    if (element) {
        component.element = element;
    } else {
        component.element = document.createElement(tagName);
        component.element.id = name; 
    }

    component.styles = styles;
    Object.entries(styles).forEach(([key, value]) => {
        component.element.style[key] = value;
    })

    component.state = 'default';
    component.listeners = [];
    component.subscribe = (listener) => {
        component.listeners.push(listener);

        return function unsubscribe () {
            component.listeners = component.listeners.filter(l => l !== listener);
        }
    }

    component.children = children;
    children.forEach(childComponent => {
        component.element.appendChild(childComponent.element);
    })

    return component;
}

export { Component };