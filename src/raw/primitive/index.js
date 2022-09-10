function Component ({
    children = [],
    element  = undefined,
    name     = undefined,
    styles   = {},
    tagName  = 'div',
}) {
    // declare
    const component = {};

    // create
    component['element'] = element || (() => {
        const returnValue = document.createElement(tagName);
        returnValue.id = name;

        return returnValue;
    })();


    component['styles'] = (() => {
        const returnValue = styles;

        Object.entries(styles).forEach(([key, value]) => {
            component['element'].style[key] = value;
        })

        return returnValue;
    })();

    component['state'] = 'default';
    
    component['listeners'] = [];

    component['subscribe'] = (listener) => {
        component['listeners'].push(listener);

        return () => {
            component['listeners'] = component['listeners'].filter(l => l !== listener);
        }
    }

    component['children'] = (() => {
        const returnValue = children;

        children.forEach(childComponent => {
            component['element'].appendChild(childComponent.element);
        })

        return returnValue;
    })();

    // return
    return component;
}

export { Component };