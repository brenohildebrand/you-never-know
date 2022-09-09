// import App from './components/App.svelte';

// const app = new App({
//   target: document.body,
//   props: {},
// });

import App from './primitive-components/App.js';

document.body.appendChild(App.element);