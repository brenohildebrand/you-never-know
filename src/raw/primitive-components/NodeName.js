import { Component } from "../primitive";
import AppStore from "../stores/AppStore";

const NodeName = new Component({
    name: 'NodeName',
    tagName: 'h2',
    styles: {
        userSelect: 'none',
        
        fontFamily: 'Roboto',
        fontWeight: '700',
        fontSize: '1.2rem',
        
        // textShadow: '0 -1px 1px #fafafa',
    },
});

NodeName.element.innerText = 'Only the Beginning of the Adventure';

AppStore.subscribe('selectedNode', (node) => {
    NodeName.element.innerText = node.name;
});

export default NodeName;