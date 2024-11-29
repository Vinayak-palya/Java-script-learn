// let obj = {
//     name: "Vinayak",
//     // we use double inverted commas in obj when we need name containing spaces
//     // "first name": "vinayak"
//     age : 25,
//     height :"6ft 1in",
//     greet: function (){
//         console.log("hello World")
//     }

// };
// console.log(obj)
// obj.greet();

// console.log(typeof(obj));
// let obj2 = obj;

// creation of arrays
// let arr = [1,2,3,4,5];
// console.log(arr);

// // using array constructor
// let brr = new Array("love" ,1 ,true);
// // console.log(brr);
// // console.log(typeof(arr) , typeof(brr));
// // let crr = ['love' , 'babbar'];
// // console.log(crr);
// // console.log(brr[3]);
// brr.push("babbar");
// brr.pop();
// brr.shift();
// console.log(brr);
// brr.unshift(4);
// console.log(brr);
// brr.push(20);
// brr.push(40);
// brr.push(70);

// // console.log(brr.slice(2,4));
// console.log(brr);
// brr.splice(1 , 0 , "kunal");
// console.log(brr);

// let arr = [10 , 20 ,30];
// let ans = arr.map((number) => {
//     return number* number;
// })
// console.log(ans);
// arr.map((number , index)=>{
//     console.log(number + 1);
//     console.log(index);
// })

// let arr = [10 , 20 , 30 , 11 , 21 , 44 ,51];
//  let even = arr.filter((ap)=> {
//     return ap%2 === 0;
//     // if(ap%2 === 0)
//     // {
//     //     return true;
//     // }
//     // else{
//     //     return false;
//     // }
// })
// console.log(even);

// let arr = [1, 2 ,'love' , 'kunal' , null , true];
// let ans = arr.filter((value)=>{
//     if(typeof(value) == "string")
//     {
//         return true;
//     }
//     else{
//         return false;
//     }
// });
// console.log(ans);

// reduce
// let arr = [10 , 20 , 30  ,40];
// let ans  = arr.reduce((acc , curr)=>{
//     return acc + curr;
// },0);
// console.log(ans);

// sort in ascending
// let arr = [9 ,1 ,7 , 4 , 2 ,8];
// arr.sort();

// console.log(arr);

// sort in descending order
// let arr = [9 , 1 , 7 ,4, 2 ,8];

// arr.sort((a, b) => b-a);
// console.log(arr);

// indexof
// let arr = [5 ,1, 7,9 ,2 ,9];
// console.log(arr.indexOf(9));

// find

// const arr = [10, 15, 20, 25, 30];

// // Finding the first number greater than 18
// const found = arr.find(element => element > 18);

// console.log(found);  // Output: 20

// let arr = [10 , 20 , 30];
// let len = arr.length;
// console.log("length: " , len);
// // traditional loop
// for(let index = 0;index < len;index++)
// {
//     console.log(arr[index]);
// }

// arr.forEach((value , index)=> {
//      console.log("number : " , value , "Index : " , index);
// }) ;

// for in loop

// let obj = {
//     name: "Vinayak",
//     // we use double inverted commas in obj when we need name containing spaces
//     // "first name": "vinayak"
//     age : 25,
//     height :"6ft 1in",
//     greet: function (){
//         console.log("hello World")
//     }

// };

// for(let key in obj)
// {
//     console.log(key , " "  , obj[key]);
// }

// let arr = [10 , 20 , 30  ,40];
// for(let value of arr)
// {
//     console.log(value);
// }

// let fullName = "Vinayak";
// for(let val of fullName)
// {
//     console.log(val);
// }

// let arr = [10 , 20 , 30  ,40 , 50];

// function getSum(arr){
//     let Len = arr.length;
//     let sum = 0;
//     // for(let index = 0; index < Len;index ++)
//     // {
//     //     sum =  sum + arr[index];
//     // }
//     // return sum;
//     arr.forEach(value => {
//         sum  = sum + value;
//     });
//     return sum;
// }

// let totalSum = getSum(arr);
// console.log(totalSum);