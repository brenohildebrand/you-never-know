import path from 'node:path';
import fs from 'node:fs/promises';
import { ipcMain } from 'electron';

const pathToDatabase = path.join(__dirname, '..', 'database');

// stdout
ipcMain.handle('stdout', (event, msg) => {
    console.log(msg);
});

// fetch
ipcMain.handle('database::fetch', async (event) => {
    try {
        const nodes = {};

        const fileNames = await fs.readdir(pathToDatabase);

        for(const fileName of fileNames) {
            const pathToFile = path.join(pathToDatabase, fileName);
            const file = await fs.readFile(pathToFile, { encoding: 'utf-8' });
            const node = JSON.parse(file);
            
            nodes[fileName] = {
                ...node,
                position: {
                    x: Number(node.position.x),
                    y: Number(node.position.y),
                }
            };
        }

        return nodes;
    } 
    catch (err) {
        console.log(err);
        return 1;
    }
});

// write
ipcMain.handle('database::write', async (event, node) => {
    // TODO: check if the node is valid

    try {
        const { id } = node;
        const str = JSON.stringify(node);
        const pathToFile = path.join(pathToDatabase, id);
        
        await fs.writeFile(pathToFile, str);

        return 0;
    }
    catch ( err ) {
        console.log(err);
        return 1;
    }
});

// read
ipcMain.handle('database::read', async (event, id) => {
    try {
        const pathToFile = path.join(pathToDatabase, id);
        const str = await fs.readFile(pathToFile, { encoding: 'utf-8' })
        const node = JSON.parse(str);

        return node;
    }
    catch ( err ) {
        console.log(err);
        return 1;
    }
});

// readAll
ipcMain.handle('database::readAll', async (event) => {
    try {

    } catch ( err ) {
        console.log(err);
        return 1;
    }
})