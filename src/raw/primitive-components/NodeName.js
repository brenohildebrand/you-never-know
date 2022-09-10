import { Component } from "../primitive";

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
    children: [

    ],
});

NodeName.element.innerText = 'Only the Beginning of the Adventure';

export default NodeName;