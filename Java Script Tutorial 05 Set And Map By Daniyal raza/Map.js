// Maps 
// map is and itrable 

// Srore Data In Ordered Faishion 

// Store Key Value Paire Like Object 
// Duplicate keys are not allowed like object 

// diffrent between maps and objects

// object can have only key or symbol 
// as key

// I Map You Can Use Anything As A Key 
// like arra, number, string...


// const person = {
//     firstName:"Daniyal",
//     age:15,
//     Gender:"Male",
    
// };
// console.log(person.firstName);
// console.log(person["Gender"]);

// object llitral ki jo keys hoti hain wo 2 type ki hoti ha 
// 1) String ----99% use in object
// 2) Symbol ----1% Use in Object.



// const person = {
//     firstName:"Daniyal",
//     age:15,
//     Gender:"Male",
//     1:"One",
// };

// for(let key in person){
//     console.log(typeof key);
// };

// console.log(person[typeof '1']);

// key value paire 

// const person = new Map();
// person.set("FisrtName", "Daniyal");
// person.set("Age:", 15);
// person.set("Gender","Male");
// person.set(1,"One");
// person.set([1,2,3,5],"One");
// person.set({Name:"Daniyal"},"One");


// console.log(person);
// console.log(person.get("FisrtName"));
// console.log(person.get("Gender"));
// console.log(person.get(1));
// console.log(person.keys())
// for(let num of person.keys()){
//     console.log(num);
// }

// Map Mein Kisi Bhi Type Ki Key Rakhsakte Hain .
// Key Ki Khuch Bhi Data Type Hosakti Hai!


// const person = new Map();
// person.set("First Name", "Daniyal");
// person.set("Gender","Male");
// person.set("Age", 15);

// for (let num of person){
//     console.log(Array.isArray (num))
// };

// destructure karne ke liye for of loop me array use karte hain 

// const person = new Map();
// person.set("First Name", "Daniyal");
// person.set("Gender","Male");
// person.set("Age", 15);

// for(let [key,value] of person){
//     console.log(key, value);
// };

// const user = new Map([["Name" , "Daniyal Raza"], ["Age", 14], ["Gender", "Male"]]);
// console.log(user);

const person = {
    Id:1,
    firstName:"Daiyal Raza",
};

const UserInfo = new Map();
UserInfo.set(person , {GENDE:"MALE", num:15})
console.log(UserInfo);
console.log(person.Id);
console.log(UserInfo.get(person).GENDE);
console.log(UserInfo.get(person).num)
