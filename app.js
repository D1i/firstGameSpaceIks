"use strict"
console.clear();

const fs = require("fs");



// синхронное чтение
console.log("Синхронное чтение файла")
let fileContent = fs.readFileSync("info.json", "utf8");
console.log(fileContent);

fileContent = JSON.parse(fileContent);

console.log(fileContent)

fileContent.x++;

fs.writeFile("info.json", JSON.stringify(fileContent), function(error){
    console.log("aaa " + fileContent)
    if(error) throw error; // если возникла ошибка
    console.log("Асинхронная запись файла завершена.");
});
let http = require("http");
let server = http.creatServer(function(req, res) {
    res.end("Hello World!");
}).listen(3000);