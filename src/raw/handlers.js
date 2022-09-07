import path from 'node:path';
import fs from 'node:fs/promises';
import { ipcMain } from 'electron';

const pathToDatabase = path.join(__dirname, '..', 'database');

// stdout
ipcMain.handle('stdout', (event, msg) => {
    console.log(msg);
});

// write
ipcMain.handle('db::write', async (event, node) => {
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
ipcMain.handle('db::read', async (event, id) => {
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