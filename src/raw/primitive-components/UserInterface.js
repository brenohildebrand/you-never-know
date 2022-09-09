import { Component } from "../primitive";

const UserInterface = new Component({
    name: 'user-interface',
    tagName: 'div',
    styles: {

    },
    children: [

    ],
})

UserInterface.element.innerText = 'Hello World';

export default UserInterface;