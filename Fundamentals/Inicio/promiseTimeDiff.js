function endTime() {
    let inicio = new Date();
    return new Promise(resolve => {
        for(let i=0; i< 1000000000; i++) {

        }
        let final = new Date();
        resolve((final-inicio)/1000);
        console.log(resolve)
        // console.log("Final ->" + final)
        // console.log(diff);
    });
}


function handlePromise() {
    // let inicio = new Date();

    };

    handlePromise().then(result => console.log(endTime()));




console.log(handlePromise());