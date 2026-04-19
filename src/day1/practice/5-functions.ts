// Basic Typed Function 
function greet(name: string, greeting: string = "Hello"): string{
    return `${greeting}, ${name}`;
}
console.log(greet("Krishna"));




// Optional Parameters (use ? suffix)
function createUser1(name: string, email?: string): object{
    return { name, email: email ?? "not provided"};
}

console.log(createUser1("Krishna"));   // email is optional 
console.log(createUser1("Krishna", "krishna@gmail.com"));




// REST Parameters -> Rest = multiple values -> converted into one array
function sum(...numbers: number[]): number{
    return numbers.reduce((total,n) => total + n, 0);
}
console.log(sum(1,2,3,4,5));   // 15

// if do without REST param
function add(a: number, b: number, c: number){
    return a+b+c;
}
console.log(add(1,2,3));
// console.log(add(1,2,3,4));   // Error: expected 3 arguments, but got  4



// Function Type Signatures 
// define what a function looks like as a type
type MathOperation = (a: number, b: number) => number;

const add1: MathOperation = (a,b) => a + b;
const multiply: MathOperation = (a,b) => a * b;
console.log(add1(2,3));
console.log(multiply(2, 3));


// OVERLOADS - Multiple signatures - Overload = define multiple ways to call a function
// Real use: format() that handles string or number differently 
function format(value: string) : string;
function format(value: number) : string;
function format(value: string | number): string{
    if(typeof value === "string") return value.trim();
    return value.toFixed(2);
}
console.log(format("  hello  "));
console.log(format(12.3456));



// Common mistake 
// can cause unexpected undefined bugs
function finduser(id: number){
    if(id > 0) return { name: "krishna"};
    // implicitely returns undefined - typescript wont warn without strict:true 
}
console.log(findUser(765));

// correct - Explicit return type makes the bug visible immediately 
function findUser(id: number): { name: string } | undefined {
    if(id > 0) return {name: "krishna" };
    return undefined;  // intentional 
}
console.log(findUser(32456));