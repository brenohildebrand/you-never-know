const fs = require('fs/promises');
const path = require('path');

const exe = (async () => {
    const pathToDatabase = path.join('src', 'database');
    const files = await fs.readdir(pathToDatabase);
    console.log(files);
})();