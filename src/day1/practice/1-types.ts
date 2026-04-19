// Primititve type 
let username: string = "Krishna";
let age: number = 100;
let isLoggedIn: boolean = true;

// Special Type 
let nothing: null = null;
let notDefined: undefined = undefined;

// ANY - the escape hatch(avoid in production)
let dynamicValue: any = "hello krishna";
dynamicValue = 42;    // Allowed, but dangerous
dynamicValue = true;  // Typescript wont catch bugs here 

// UNKNOWN - the safe ulternative to ANY
let userInput: unknown = "hello krishna"
// must CHECK TYPE before using it
if(typeof userInput == "string"){
    console.log(userInput.toUpperCase());
}

// VOID - for functions that return nothing 
function logMessage(msg: string): void{
    console.log(msg);
    // no return statement needed
}

// NEVER - for functions that never complete 
// Use never when function always throws an error(like validation fails, critical error,stop execution immediately)
function throwError(message: string): never {
    throw new Error(message);
}

/* 
Analogy : Think of "ANY" as "accepting cash from anyone"
Think of "UNKNOWN" as "accepting cash but counting it before trusting it"
Use UNKNOWN over ANY
*/

// Common mistake 
// let score: number;
// console.log(score);  // variable score is used before being assigned.

let score: number = 0;
// Or
let scores: number | undefined;


// Declare 5 variables: a user's name, email, age, whether they're an admin, and their 
// last login date as a string. Use correct types for each.

let userName: string = "Krishna";
let email: string = "krishna@gmail.com";
let ages: number = 5678;
let isAdmin: boolean = true;
let lastLogin: "2026-04-13";

// in object form 
let user: {
    userName: string,
    email: string;
    ages: number;
    isAdmin: boolean;
    lastLogin: string;
} = {
    userName: "Krishna",
    email: "krishna@gmail.com",
    ages: 7654,
    isAdmin: true,
    lastLogin: "2026-04-13"
}
