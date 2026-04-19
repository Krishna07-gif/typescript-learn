// UNION Types - A value can be one of several types 
let id1: string | number;
id1 = "krishna";
console.log(id1);
id1 = 87654;
console.log(id1);
// id1 = true   // Error : boolean is not assignable to type string|number


// real-world : API responses often return string | null
function getuserName(id: number): string | null {
    if(id === 1) return "krishna";
    return null;  // user not found
}
const userName1 = getuserName(2);

if (userName1 !== null){
    console.log(userName1);
}else{
    console.log("User not found"); 
}




// LITERAL Types - exact values as types 
// this is heavily used in Angular for configuration 
type Direction = "north" | "south" | "east" | "west";
let heading: Direction = "north"
// heading = "diagonal";  // Error : not in the union
console.log(heading);

type StatusCode = 200 | 201 | 400 | 401 | 404 | 500;
let httpStatus: StatusCode = 400;
// httpStatus = 999;   // Error: not in union
console.log(httpStatus);



// Combining UNION + LITERAL
type ApiResponse = 
    | { status: "success"; data: string}
    | { status: "error"; message: string};

function handleResponse(res: ApiResponse){
    if(res.status === "success"){
        console.log(res.data);    // typescript knows .data exist here 
    }else{
        console.log(res.message);  // typescript knows .message exists here 
    }
}
// success case 
handleResponse({status: "success", data: "User fetched succesfully"});
// error case 
handleResponse({status: "error", message: "User not found"});



// Common mistake - Forgetting to Narrow Unions
// wrong
function processId(id: string|number){
    // return id.toUpperCase();   // Error, number doesnt have toUpperCase
}

// correct - type narrowing 
function processId1(id: string|number): string {
    if(typeof id === "string"){
        return id.toUpperCase();  // safe - typescript knows its a string here 
    }
    return id.toString().toUpperCase();  // number path 
}
console.log(processId1("krishna"));
console.log(processId1(6578));


// Create a type Theme with literal types "light", "dark", "system". Write a 
// function applyTheme(theme: Theme): void that logs a different message for each theme value.
type Theme = "light" | "dark" | "system";
function applyTheme(theme: Theme): void{
    if(theme === "light"){
        console.log("Light theme applied");
    } else if(theme === "dark"){
        console.log("Dark theme applied");
    } else{
        console.log("System theme applied");
    }
}
applyTheme("light");
applyTheme("dark");
applyTheme("system");