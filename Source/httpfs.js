const Log = require("./Common/Log");
const ArrayReader = require("./Common/ArrayReader");

function readFile(path, cb)
{
    Log.log("read file" + path);
    let xhr = new XMLHttpRequest();
    xhr.open('GET', path, true);
    xhr.responseType = "arraybuffer";
    xhr.onload = function() { cb(xhr.status != 200, new ArrayReader(xhr.response)); }
    xhr.onerror = function(e) { cb(e, null); };
    xhr.send();
}

module.exports = {
    readFile
};