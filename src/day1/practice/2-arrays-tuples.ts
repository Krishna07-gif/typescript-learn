// Arrays 
let fruits: string[] = ["apple", "banana", "cherry", "dragon fruit"];
let cricScore: number[] = [98, 87, 76];
let flags: Array<boolean> = [true, false, true];  // alternative syntax 

// Adding items(type-safe)
fruits.push("grapes");  // correct 
// fruits.push(8765)   // error - number not assignable to string

// Tuples - fixed length arrays with known types
// Real use case: CSV row parsing, coordinates, funtion returns 
let coordinate: [number, number] = [40.7128, -74.0060];  //NYC lat/long
let userRecord: [string, number, boolean] = ["krishna", 567, true];

// Accessing tuple elements 
console.log(coordinate[1]);  // typescript knows its number
console.log(userRecord[2]);  // typescript knows its boolean 

// READONLY Arrays - Prevent mutations 
const config: readonly string[] = ["dev", "staging", "prod"];
// config.push("local");   // Error: Property 'push' does not exist on readonly array

// When to use TUPLES : Angular uses them in things like [FormControl, string] pairs.


// PRACTICE

// Create a tuple that represents an HTTP response: status code (number), message (string), 
// and success flag (boolean). Then destructure it into 3 variables.
let response: [number, string, boolean] = [200, "Ok", true];
console.log(response);

// Destructure 
let [statusCode, message, success] = response;
console.log(statusCode);
console.log(message);
console.log(success);


// Create a tuple that represent product details: id (number), name (string), price (number), 
// Increase price by 10% after destructuring.
let product: [number, string, number] = [1, "laptop", 50000];
let[id, productName, price] = product;  // destructure 
let updatedPrice = price * 1.1;
console.log(productName, updatedPrice);


// Login Response : token (string), expiresIn (number), isLogged (boolean), 
// Print message based on login status.
let loginResponse: [string, number, boolean] = ["abc12324", 5678, true];
let [token, epiresIn, isLogged] = loginResponse;  // destructure
if (isLogged){
    console.log("Welcome Krishna");
}else{
    console.log("Login failed");
}