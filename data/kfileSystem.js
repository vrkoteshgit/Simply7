var fs = require("fs");
var folder = "E:\/\Kotesh\/\KW\/\Simple7WS";
var express = require('express');
var restapi = express();
var exists = fs.existsSync(folder);
var filePath = folder + "\/\data\/\dirFs.js";

var path = require("path");

var readFileContent = function (sfPath) {
    fs.readFile(sfPath, function(err, data) {
      if (err) {
         console.log(err);
      }else {
        console.log(data);
        return data;  
      }
    })
}

var walk = function(dir) {
    var results = []
    var list = fs.readdirSync(dir)
    list.forEach(function(file) {
        file = dir + '/' + file
        var stat = fs.statSync(file)
        if (stat && stat.isDirectory()) results = results.concat(walk(file))
        else results.push(file)
    })
    console.log(results);
    return results;
}

readFileContent(filePath);

restapi.get('/getAllProducts', function(req, res){
    res.send("reading products");
    var products = readFileContent("E:\\Kotesh\\KW\\Simple7WS\\data\\products.json");
    console.log(products);
    res.json(products);
});


//walk(folder);



restapi.listen(3000);

console.log("Submit GET or POST to http://localhost:3000/getAllProducts");