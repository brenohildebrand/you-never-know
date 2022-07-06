import { v4 as genUniqueID } from 'uuid';

export default class Node {
  constructor({
    title = 'Untitled',
    description = '',
  }) {
    this.id = genUniqueID();
    this.title = title;
    this.description = description;
    this.children = [];
  }
}