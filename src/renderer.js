import * as PIXI from 'pixi.js';

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

// And here starts the app...
//

const body = document.body;

const canvas = new PIXI.Application({
  width: window.innerWidth,
  height: window.innerHeight,
  resizeTo: window,
});

body.appendChild(canvas.view);

const commandLine = document.createElement('div');
const input = document.createElement('input');

commandLine.style.position = "fixed";
commandLine.style.bottom = "0";
commandLine.style.minHeight = "32px";
commandLine.style.width = "100vw";
commandLine.style.backgroundColor = "#333";
commandLine.style.display = "flex";
commandLine.style.flexDirection = "row";
commandLine.style.alignItems = "center";
commandLine.style.padding = "0 5px";

input.style.color = "#fff";
input.style.fontSize = "16px";
input.style.outline = "none";
input.style.border = "none";
input.style.background = "transparent";

commandLine.appendChild(input);

body.appendChild(commandLine);

function handleInputKeyDown (event) {
  const key = event.key;
  
  switch (key) {
    case "Enter":
      dispatch(input.value);  
      input.value = '';
      input.blur();
      break;
    case "Escape":
      input.value = '';
      input.blur();
  }
}

function handleGlobalKeyDown (event) {
  const key = event.key;

  if (key === ':' && document.activeElement !== input) {
    event.preventDefault();

    input.focus({ focusVisible: false });
    input.value = ':';
  }
}

input.addEventListener('keydown', handleInputKeyDown);
window.addEventListener('keydown', handleGlobalKeyDown);

function dispatch (str) {
  const command = str;

  switch (command) {
    case ":create":
      stdout('The create command was called!');
      break;
    case ":delete":
      stdout('The delete command was called!');
      break;
    case ":edit":
      stdout('The edit command was called!');
      break;
    case ":join":
      stdout('The join command was called!');
      break;
  } 
}