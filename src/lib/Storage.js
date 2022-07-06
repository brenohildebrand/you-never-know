export default class Storage {
  #STATUS;

  constructor() {
    // The roots of each isolated 
    this.roots = new Object();
  }

  // This function does not need to be async, but once we use a database like
  // MongoDB we'll need to treat this as async. Considering it's better for
  // scalability, let's stick with async for now.
  async init() {
    // Get the state from the storage object in the localStorage.
    // Should be called just once, unless there's some error.
    this.#STATUS = 'loading';
  }

  // This function does not need to be async, but once we use a database like
  // MongoDB we'll need to treat this as async. Considering it's better for
  // scalability, let's stick with async for now.
  async save() {
    // Save the current state of the storage object in the localStorage.
    this.#STATUS = 'saving';
  }

  get status() {
    return this.#STATUS;
  }
}