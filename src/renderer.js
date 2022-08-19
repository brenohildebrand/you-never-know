import App from './components/App.svelte';

const head = document.head;

const style = document.createElement('style');
style.innerHTML = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 100vw;
    height: 100vh;
    position: fixed;
    overflow: hidden;
  }
`;

head.appendChild(style);

const app = new App({
  target: document.body,
  props: {},
});