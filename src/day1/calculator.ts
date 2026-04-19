type Operator = "+" | "-" | "*" | "/";

function calculate(a: number, operator: Operator, b: number): number{
    switch(operator){
        case "+": return a + b;
        case "-": return a - b;
        case "*": return a * b;
        case "/":
            if(b===0) throw new Error("Division by zero is not allowed");
            return a / b;
        default:
            // this is unreachable if Operator type is correct 
            const _exhaustive: never = operator;
            throw new Error(`Unknown operator: ${_exhaustive}`);
    }
}

// test it 
const operations: Array<[number, Operator, number]> = [
    [10, "+", 5],
    [10, "-", 3],
    [4,  "*", 7],
    [20, "/", 4],
];

for(const [a, op, b] of operations){
    console.log(`${a} ${op} ${b} = ${calculate(a, op, b)}`);
}