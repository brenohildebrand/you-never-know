import { Component } from '../primitive/index';
import Canvas from './Canvas';
import Sketch from './Sketch';
import UserInterface from './UserInterface';

const App = new Component({
    name: 'app',
    tagName: 'div',
    styles: {
        
    },
    children: [
        // Canvas,
        // UserInterface,
        Sketch,
    ],
});

export default App;