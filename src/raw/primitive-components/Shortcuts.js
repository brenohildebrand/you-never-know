import { Component } from "../primitive";

const A = new Component({
    name: 'A',
    tagName: 'p',
    styles: {},
    children: [],
});

A.element.innerText = 'CTRL + RMB | Create Node';

const B = new Component({
    name: 'B',
    tagName: 'p',
    styles: {},
    children: [],
});

B.element.innerText = 'CTRL + SHIFT + RMB | Delete Node';

const Shortcuts = new Component({
    name: 'Shortcuts',
    tagName: 'div',
    styles: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: '16px',

        padding: '6px 12px',
        borderRadius: '30px',
        color: '#949494',
        backgroundColor: '#484848',
        minHeight: '24px',

        fontSize: '0.6rem',
    },
    children: [
        A,
        B,
    ],
})

export default Shortcuts;