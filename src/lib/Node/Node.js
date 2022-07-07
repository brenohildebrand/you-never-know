import { v4 as genUniqueID } from 'uuid';

export default class Node {
  constructor({
    title = 'Untitled',
    description = '',
    parent = undefined,
  }) {
    /* Make sure you got a parent, otherwise throws an error */
    if( parent === undefined ) {
      /* TODO: Error Handling */
    }

    // Metadata
    this.id = genUniqueID();
    this.title = title;
    this.description = description;
    
    // Parent and Children
    this.parent = parent;
    this.children = [];

    // More Properties and Features
  }
}