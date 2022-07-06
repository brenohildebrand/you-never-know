export default class Storage {
  // Static properties are macros that are going to be used in this class and
  // don't need to be recreated for each instance.
  static KEY_ROOTS = 'ROOTS';
  static STATUS_NORMAL = 'NORMAL';
  static STATUS_LOADING = 'LOADING';
  static STATUS_SAVING = 'SAVING';

  /* Private Properties */
  #STATUS;

  constructor() {
    // Initialize the status
    this.#STATUS = STATUS_NORMAL;
    
    // Get the roots from the local storage.
    this._getRoots();
  }

  // This function does not need to be async, but once we use a database like
  // MongoDB we'll need to treat this as async. Considering it's better for
  // scalability, let's stick with async for now.
  async save({ roots = 'undefined' }) {
    // Save the current state of the storage object in the localStorage.
    // If there's any error in the app, don't save anything. Keep the last save.

    // If roots are undefined, handle the error.
    if(roots == 'undefined') {
      /* TODO: Error Handling */
    }

    // Set status to STATUS_SAVING.
    this.#STATUS = STATUS_SAVING;

    // Save roots to local storage.
    window.localStorage.setItem(KEY_ROOTS, roots);
    
    // Reset status to STATUS_NORMAL.
    this.#STATUS = STATUS_NORMAL;
  }

  // This function does not need to be async, but once we use a database like
  // MongoDB we'll need to treat this as async. Considering it's better for
  // scalability, let's stick with async for now.
  async _getRoots() {
    // Get the state from the storage object in the localStorage.
    // Should be called just once, unless there's some error.
    
    // Set status to STATUS_LOADING.
    this.#STATUS = STATUS_LOADING;
    
    // Get roots from local storage.
    let roots = window.localStorage.getItem(KEY_ROOTS);

    // If the roots were not created yet, create'em.
    if(roots === null) {
      roots = {
        version: 
      }
    }

    // Reset status to STATUS_NORMAL.
    this.#STATUS = STATUS_NORMAL;

    // Update the roots property
    this.roots = roots;
  }

  get status() {
    return this.#STATUS;
  }

  get roots() {
    return this.roots;
  }
}