import { Component } from "../primitive";
import AppStore from "../stores/AppStore";

const NodeDescription = new Component({
    name: 'NodeDescription',
    tagName: 'p',
    styles: {
        userSelect: 'none',

        fontFamily: 'Roboto',
        fontWeight: '400',
        fontSize: '0.8rem',

        // textShadow: '0 -1px 1px #fafafa',
    }
})

NodeDescription.element.innerText = 'This is where everything starts. Feel free to create new nodes holding the ALT key and pressing the LMB ( Left Mouse Button ).';

AppStore.subscribe('selectedNode', (node) => {
    NodeDescription.element.innerText = node.description;
});

export default NodeDescription;