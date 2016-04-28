var fs = require('fs'),
    path = require('path'),
    Promise = require('bluebird');

var readdirAsync = Promise.promisify(fs.readdir);
var statAsync = Promise.promisify(fs.stat);
function walkFiles (directory) {
    var results = [];
    return readdirAsync(directory).map(function(file) {
        file = path.join(directory, file);
        return statAsync(file).then(function(stat) {
            if (stat.isFile()) {
                return results.push(file);
            }
            return walkFiles(file).then(function(filesInDir) {
                results = results.concat(filesInDir);
            });
        });
    }).then(function() {
        return results;
    });
}

//use
walkDir("E:/Kotesh").then(function(files) {
    console.log(files);
}).catch(function(e) {
    console.error(e);
});