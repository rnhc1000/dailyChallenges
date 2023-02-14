const greet = (nome:string) => { console.log("Olá " + nome) };

greet("Ricardo");

var promptt: string = require('prompt');

var callMe = function (callback) {
    promptt.get(['username'], function(err,result) {
        var nome:string = result.username
    callback(nome);
});
}
callMe(greet);

