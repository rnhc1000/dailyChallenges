var p = new Promise((resolve, reject)=> {
    reject(Error('Turing error message'));

});


p.catch((error: any) => console.log(error.message));
p.catch((error: any) => console.log(error.message));