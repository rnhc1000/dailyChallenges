console.log(1);
setTimeout(() => {
    console.log('setTimeout')},1);



const promise = new Promise(resolve => {
    resolve('any data');
    // resolve(setTimeout( (a,b) => {
    //     console.log('Promise Resolvida')},4000))
});

promise.then(data => console.log(data));

for(let i=0; i< 10; i++) {
    console.log(3);
}

// const request = require('request');
// const gitHubApi = 'https://api.github.com/users/rnhc1000/repos';
// //função assíncrona
// request(gitHubApi,{headers: {'User-Agent': 'node.js'}}, (err, res, body)=> {
//     console.log(JSON.parse(body))
// })

// const axios = require('axios');
// const gitHubApii = 'https://api.github.com/users/rnhc1000/repos';
// //função assíncrona
// axios.get(gitHubApii).then(res => {
//     console.log(res.data)
// });
// //IIFE
// ( async () => {
//     const axios = require('axios');
//     const gitHubApii = 'https://api.github.com/users/rnhc1000/repos';
//     //função assíncrona
//     const res = await axios.get(gitHubApii);
//     console.log(res.data);
// })()

(async () => {
    const axios = require('axios');
    const gitHubApix = user => `https://api.github.com/users/${user}/repos`;
    const users =['rnhc1000', 'rmanguinho', 'essentialdevelopercom']
    //função assíncrona
    console.time();
    users.forEach(async user => {
        const res = await axios.get(gitHubApix(user));
        console.log(res.status)
    })
    console.timeEnd();
})()



