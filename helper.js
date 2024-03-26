const fs = require('fs');
const zlib = require('zlib');

function mediaToString(videoFilePath, outputFilePath) {
    // Read the video file as a Buffer
    const mediaBuffer = fs.readFileSync(videoFilePath);
    // Compress the Buffer using gzip
    const base64mediaString = mediaBuffer.toString('base64');
    fs.writeFileSync('basemedaipic.txt', base64mediaString);

    const compressedBuffer = zlib.gzipSync(base64mediaString);
    // Convert the compressed Buffer to a base64-encoded string
    
    // Write the base64 string to the output file
    fs.writeFileSync(outputFilePath, compressedBuffer);
    return base64mediaString;
}

//const mediaFilePath = "C:\\Users\\HP\\Videos\\Movies\\Blue.Beetle.2023.480p.WEBRip.x265.[9jaRocks.Com].mkv";
//const outputFilePath = "base64video2.txt.gz";
const mediaFilePath = "C:\\Users\\HP\\Pictures\\Wallpapers\\132648.jpg";
const outputFilePath = "basemedaipic.txt.gz";

const base64mediaString = mediaToString(mediaFilePath, outputFilePath);

console.log("Base64-encoded video saved to:", outputFilePath);



module.exports = {
  videoToString
};
