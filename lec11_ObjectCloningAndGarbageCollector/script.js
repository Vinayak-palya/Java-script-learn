let src = {
    age:12,
    wt:68,
    ht:180
};
// console.log(obj);
// obj.colour = "white";
// console.log(obj);

// let dest = {...src}; 
// let dest = src;

// let src2 = {
//     value:101,
//     name:"vinayak"
// }
let dest = {};

for(let key in src)
{
    // console.log(key);
    let newKey = key;
    let newValue  = src[key];
    dest[newKey] = newValue;
}
// let dest = Object.assign({} , src , src2);

src.age = 90;


console.log("src:" , src);
console.log("dest:" , dest);

