import { Component } from "../primitive";
import NodeDescription from "./NodeDescription";
import NodeName from "./NodeName";

const NodeBox = new Component({
    name: 'NodeBox',
    tagName: 'div',
    styles: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: '16px',

        maxWidth: '550px',
    },
    children: [
        NodeName,
        NodeDescription,
    ]
});

export default NodeBox;