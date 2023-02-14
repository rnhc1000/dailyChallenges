let data = [1,2,6,1,2,5,9,'33','33'];

let result = data.filter((item,index)=>{
  return data.indexOf(item) === index;
})
console.log(result); //[1,2,6,5,9,'33']
                  

let datax = [1,2,6,1,2,5,9,'33','33'];

const dataArr = new Set(datax);

let resultx = [...dataArr];

console.log(resultx); //[1,2,6,5,9,'33'] O(nlog(n))


let dataw = [1,2,6,1,2,5,9,'33','33'];

const resultw = dataw.reduce((acc,item)=>{
  if(!acc.includes(item)){
    acc.push(item);
  }
  return acc;
},[])

console.log(resultw); //[1,2,6,5,9,'33']

let dataz = [1,2,6,1,2,5,9,'33','33'];

const resultz = [];
dataz.forEach((item)=>{
    //pushes only unique element
    if(!dataz.includes(item)){
        dataz.push(item);
    }
})
console.log(resultz); //[1,2,6,5,9,'33']O(n2)