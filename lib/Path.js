export default class Path {
    constructor (from, to) {
        // The node where this path comes from
        this.from = from;

        // The node to where this path is going for
        this.to = to;
        
        // The HTMLElement representing this path and its visual representation
        this.view = document.createElement('div');
    }
}