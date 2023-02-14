var greet = function (nome) { console.log("Olá " + nome); };
greet("Ricardo");
var promptt = require('prompt');
var callMe = function (callback) {
    promptt.get(['username'], function (err, result) {
        var nome = result.username;
        callback(nome);
    });
};
callMe(greet);
