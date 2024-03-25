const fs = require('fs');
//reading files

const readStream = fs.createReadStream('./large.txt', {encoding: 'utf-8'});
const writeStream = fs.createWriteStream('./large2.txt');
//raw way-------------
readStream.on('data', (chunk) => {
    console.log("NEW CHUNK=----");
    console.log(`${chunk} \n`);
    writeStream.write('\nNEW CHUNK\n');
    writeStream.write(chunk);
});

//using pipe-----------------
readStream.pipe(writeStream);