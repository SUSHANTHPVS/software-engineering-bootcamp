let a = 5;

function first() {
    console.log("Inside First");
    second();
}

function second() {
    console.log("Inside Second");
}

console.log("Start");
first();
console.log("End");