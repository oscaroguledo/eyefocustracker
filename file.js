const fs = require('fs');
//reading files
fs.readFile('./file.txt',(err, data) => {
    if (err) throw err;
    console.log(data.toString());
});
console.log('done');
//writing files
fs.writeFile('./file.txt', 'Hello World', (err) => {
    if (err) throw err;
    console.log('File is created successfully.');
});

//firstly check if exists
if (!fs.existsSync('./assets')) {
    //create dirs
    fs.mkdir('./assets', (err) => {
        if (err) throw err;
        console.log('Directory is created successfully.');
    });
}
else {
    //delete folders
    fs.rmdir('./assets', (err) => {
        if (err) throw err;
        console.log('Directory is deleted successfully.');
    });
}
//delete files
fs.unlink('./deleteme.txt',(err)=>{
    if (err) throw err;
    console.log('File is deleted successfully.');
})

