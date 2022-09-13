function Component ({
    children = [],
    element  = undefined,
    name     = undefined,
    styles   = {},
    tagName  = 'div',
}) {
    // create
    this.element = (() => {
        if (element) {
            return element;
        } else {
            const element = document.createElement(tagName);
            element.id = name;

            return element;
        }
    })();

    // styles
    this.styles = (() => {
        Object.entries(styles).forEach(([key, value]) => {
            this.element.style[key] = value;
        });

        return styles;
    })();

    // children
    this.children = (() => {
        children.forEach(childComponent => {
            this.element.appendChild(childComponent.element);
        });

        return children;
    })();

    // setChildren
    this.setChildren = (children) => {
        for (const childComponent of this.children) {
            childComponent.element.remove();
        } 

        this.children = children;

        children.forEach(childComponent => {
            this.element.appendChild(childComponent.element);
        })
    }
}

export { Component };