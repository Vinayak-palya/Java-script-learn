// function getAge()
// {
//     return 190;
// }

// function utility(name = "Love" , age =getAge())
// {
//     console.log(name ," " , age);
// }
// utility();
// function solve(value = {age:14 , wt:99 , ht:199})
// {
//     console.log("Hello Ji" , value);
// }

// solve(undefined);
// function sayName(fName = "Vinayak" , LName = fName.toUpperCase())
// {
//     console.log("My name is " , fName + " " + LName);
// }

// sayName();



// class Human{
//     // properties
//     age = 13;// public
//     #weight = 68;//private
//     ht = 180;


//     constructor(newAge , newHeight ,newWeight)
//     {
//         this.age = newAge;
//         this.ht = newHeight;
//         this.#weight = newWeight;

//     }

//     // behaviour

//     walking()
//     {
//         console.log("I am walking " , this.#weight);
//     }


//     running()
//     {
//         console.log("I am Running");
//     }
//     get fetchWeight()
//     {
//         return this.#weight;
//     }
//     set modifyWeight(val)
//     {
//         this.#weight = val;
//     }
// }

// let obj = new Human(50 , 190 , 101);

// console.log(obj.age);
// console.log(obj.ht);
// console.log(obj.fetchWeight);

// // // console.log(obj.#weight);
// // console.log(obj.fetchWeight);
// // // obj.walking();
// // obj.modifyWeight = 50;
// // console.log(obj.fetchWeight);

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     greet() {
//         console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
//     }
// }
// let obj = new Person("A" , 15);
// obj.greet();
// console.log(obj.age);

