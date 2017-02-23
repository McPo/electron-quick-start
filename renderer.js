// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const sharp = require("sharp");

sharp('test.webp')
    .toBuffer()
    .catch(err => console.error(err))
    .then(data => console.log(data.toString('base64')));
