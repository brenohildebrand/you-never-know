import { v4 } from "uuid";

const create = () => {
    // wait for a click to determine position
    window.addEventListener('mousedown', async (e) => {
        const pos = {
            x: e.clientX,
            y: e.clientY,
        }

        const node = {
            id: v4(),
            from: undefined,
            to: undefined,
            position,
        }
    });
};

export { create };

window.addEventListener