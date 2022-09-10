import { Component } from "../primitive";
import NodeBox from "./NodeBox";
import Shortcuts from "./Shortcuts";
import WeekDay from "./WeekDay";

const Box = new Component({
    name: 'box',
    tagName: 'div',
    styles: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    children: [
        NodeBox,
        WeekDay,
    ]
});

const UserInterface = new Component({
    name: 'user-interface',
    tagName: 'div',
    styles: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',

        width: '100vw',
        height: '100vh',
        position: 'fixed',
        overflow: 'hidden',
        pointerEvents: 'none',
        padding: '32px 44px',
    },
    children: [
        Box,
        Shortcuts,
    ],
});

export default UserInterface;