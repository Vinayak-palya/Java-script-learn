
// compile time error
// syntax error
// console.log(1



// run time error
// refernce error
// console.log(x);


// try{
//     console.log("try block starts here");
//     // error->refernce error
//     console.log(x);
//     console.log("try block ends here")
    
//     // a

//     // b

//     // c
// }
// catch(e){
//     // define krte h , error k saath aap kya karna chahte ho
//     // retry logic
//     // fallback mechanism
//     // custom error
//     // logging
//     console.log("I am Inside catch Block");
//     console.log("your error is here" , e);
// }
// finally{
//     console.log("I will run every time everytime , as i am finally block")
// }

// lets create a custom error
// try{
//     // refernce error
//     console.log(x);
    
// }
// catch(err)
// {
//     throw new Error("Bhai pehle declare kardo , fir print karana");
// }
let errorCode = 100;
if(errorCode == 100)
{
    throw new Error("Invalid Json");
}