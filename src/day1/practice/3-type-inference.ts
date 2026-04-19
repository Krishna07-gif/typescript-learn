// We dont always need to declare types - TypeScript infers them.

// TypeScript INFERS the type from the value 
let city = "India";  // typescript knows: string 
let population = 34567890;  // typescript knows: number 
let isCapital = false   // typescript knows: boolean 

// city = 42; // error - typescript rememberd the type!
city = "London";
console.log(city);


// Inference in functions
function double(n: number){
    return n*2;   // return type is INFERRED as number
}
double(5);
console.log(double(5));


// Create an array and see what TypeScript infers
let numbers = [1,2,3,4,5];
numbers.push(6);
// numbers.push("krishna");  // Error 
console.log(numbers);


// Create an array with mixed types
let data = [1, "hello", true];  // inferred as (number|string|boolean) -> typescript automatically creates union type

// Object inference - create an object and let TS infer types 
let user1 = {
    name: "krishna",
    age: 4567,
    isAdmin: true
};
// user1.age = "four five six seven";   // Error 
user1.age = 30;


// Create a function without return type.
function square(n: number){
    return n*n;     // inferred as number 
}
const result = square(4);  // inferred as number 
console.log(result);



// Function returning object (no type declared)
function createUser(name : string, age: number) {
    return{
        name,
        age,
        isAdult: age >= 18
    };
}
const user2 = createUser("krishna", 765); 
// inferred type: {name: string, age: number, isAdult: boolean}
console.log(user2);