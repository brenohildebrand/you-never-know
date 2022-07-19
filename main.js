import './style.css'
import App from './lib/App';
import Node from './lib/Node';
import Path from './lib/Path';

// const app = new App('#app');
// 
// Add the event listener to put nodes once the user clicks the screen
// app.addEventListener('click', (e) => {
//     const position = {x: e.clientX, y: e.clientY};
    
//     // Create the objects
//     const node = new Node(position);
//     const path = new Path(app.states.lastNode, node);

//     // Update states
//     app.states.lastNode = node;

//     // Append the objects' view to the app
//     app.view.appendChild(node.view, path.view);
// });