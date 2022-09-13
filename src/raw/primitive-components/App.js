import { Component } from '../primitive/index';
import Canvas from './Canvas';
import UserInterface from './UserInterface';

const App = new Component({
    name: 'app',
    tagName: 'div',
    styles: {
        
    },
    children: [
        Canvas,
        UserInterface,
    ],
});

export default App;