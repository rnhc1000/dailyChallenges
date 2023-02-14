var p = new Promise(function (resolve, reject) {
    reject(Error('Turing error message'));
});
p["catch"](function (error) { return console.log(error.message); });
p["catch"](function (error) { return console.log(error.message); });
