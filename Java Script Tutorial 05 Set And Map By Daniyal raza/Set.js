// Sets (It Is Itrables);
// Store data 
// Sets Also Have Its Own Methods
// No Index-Based Access
// Order Is Not Guaranteed 
// Unique Items Only (No Duplicate Allowed)

// const yup = new Set([1,2,3,4,5,4,32]);
// console.log(yup);
// yup.add(1);
// yup.add(6);
// console.log(yup);

// const num = new Set([1,2,4,3,2]);
// console.log(num);

// num.add(1);
// num.add(9);
// num.add(["Item 1", "Item 2"]);
// num.add(["Item 1", "Item 2"]);
// console.log(num);

// const arr = ["Item 1", "Item 2"];
// const yup = new Set([1,2,3,5,3,2,8,7,4,]);
// yup.add(10);
// yup.add(0);
// yup.add(arr);
// yup.add(["Item 1", "Item 2"]);
// yup.add(["Item 1", "Item 2"]);
// console.log(yup);

// const user = ["Name:Daniyal" , "Age:15"];
// const nob = new Set([1,2,7,5,3,5,8,4,9]);
// nob.add(3);
// nob.add(11);
// nob.add(1002);
// nob.add(69);
// nob.add(user);
// nob.add(982);
// if(nob.has(982)){
//     console.log("1 Is present");
// }else{
//     console.log("1 Is Not Present")
// };
// console.log(nob)


// const num = new Set([192,32,1,2]);
// const user = ["Name Daniyal", "Geder:Male"];
// num.add(1);
// num.add(2);
// num.add(3);
// num.add(4);
// num.add(982);
// num.add(1986);
// num.add(2024);
// num.add(2482);
// num.add(3494);

// for(let nob of num){
//     console.log(nob);
// };


// const number = new Set(prompt("Name??"));
// console.log(number);

// Set mein duplicate allowed nahi hai (set mein 1 element sirf 1 bar hi ay ga dobara reapeat nahi hoga !!!);
//  Set Mein Index Access nahi Karsakte.......


// const my = [1,2,3,4,3,2,5,67,5,4,67,8,7,6,3,982,369,69,69,2024,1986];
// const your = new Set(my);
// console.log(your);



const my = [1,2,3,4,3,2,5,67,5,4,67,8,7,6,3,982,369,69,69,2024,1986];
const your = new Set(my);

let leng = 0;
for(let num of your){
    leng++;
};
console.log(leng);
