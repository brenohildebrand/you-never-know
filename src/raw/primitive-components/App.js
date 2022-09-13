import { Component } from '../primitive/index';
import { Shortcut } from '../shortcuts';
import AppStore from '../stores/AppStore';
import Canvas from './Canvas';
import Sketch from './Sketch';
import UserInterface from './UserInterface';

const App = new Component({
    name: 'app',
    tagName: 'div',
    styles: {
        width: '100%',
        height: '100%',
    },
    children: [
        Canvas,
        UserInterface,
    ],
});

Shortcut({
    mode: 'default',
    keys: ['Control', 'Space'],
    callback: () => {
        AppStore.setProp('mode', 'sketch');
        App.setChildren([Sketch]);
    }
});

Shortcut({
    mode: 'sketch',
    keys: ['Control', 'Space'],
    callback: () => {
        AppStore.setProp('mode', 'default');
        App.setChildren([Canvas, UserInterface]);
    }
})

export default App;