// Colen Ussing Object.assign

// const obj = {
//     key1:"Daniyal",
//     key2:"Raza",
// };

// console.log(obj);

// const obj2 = obj;
// console.log(obj2);

// obj.key3 = "value 3";

// console.log(obj);
// console.log(obj2);

const obj = {
    key1:"dani",
    key2:"raza",
};

console.log(obj);

// const obj2 = {...obj };
const obj2 = Object.assign({}, obj);
console.log(obj2.key1);

obj.key3 = "yup";
console.log(obj);
console.log(obj2);