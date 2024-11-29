


// // let firstPromise = new Promise((resolve , reject) =>{
// //     setTimeout(function sayMyName()
// // {
// //     console.log("My name is Vinayak Palya");
// // } , 10000);
// // resolve(1)
// // });


// let promise1 = new Promise((resolve , reject)=>{
//     let success = false;
//     if(success)
//     {
//         resolve("promise fullfilled");
//     }
//     else{
//         reject("Promise rejected");
//     }
// });

// promise1.then((message)=>{
//     console.log("Then ka message is " + message);
// }).catch(error => {
//     console.log("Error: " + error);
// });


// // promise1.then((message)=> {
// //     console.log("first msg: " + message);
// //     return "promise fullfilled second message";
// // }).then((message)=>{
// //     console.log("second message : " + message);
// //     return "promise fulfilled second message";
// // }).then((message)=>{
// //     console.log("third message : " + message);
// //     return "promise fulfilled third message";

// // }).then((message)=>{
// //     console.log("third message: " + message);
// //     return "promise fulfilled fourth message";
// // });


// promise1.then((message)=> {
//     console.log("first msg: " + message);
//     return "promise fullfilled second message";
// }).then((message)=>{
//     console.log("second message : " + message);
//     return "promise fulfilled second message";
// }).then((message)=>{
//     console.log("third message : " + message);
// }).catch((error)=>{
//     console.error(error);
// }).finally((message)=>{
//     console.log("Main to final hu chalunga hii");
// });


let promise1 = new Promise((resolve , reject)=>{
    setTimeout(resolve , 1000 , "First");
})
let promise2 = new Promise((resolve , reject)=>{
    setTimeout(resolve , 2000 , "Second");
})
let promise3 = new Promise((resolve , reject)=>{
    setTimeout(resolve , 3000 , "Third");
})
Promise.all([promise1 , promise2 , promise3])
.then((values)=>{
    console.log(values);
})