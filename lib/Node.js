import svg from '../assets/node.svg';

export default class Node {
  constructor (position) {
    // this.parent = null;
    // this.children = [];

    this.position = position;

    //
    this.view = document.createElement('img');
    this.view.src = svg;
  }
}
