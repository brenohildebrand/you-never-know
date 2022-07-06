import App from './lib/App'
import './style.css'

const app = new App();

app.mount({ HTMLElement: document.querySelector('#app') });