// 1. var vs let vs const

console.log("--Var vs Let vs Cosnt");
var x = 10;

{
    let x = 2;
    console.log("Block scoped x is: " + x)
}

console.log("Global scoped x is: " + x)

{
    const x = 3;
    console.log("Block scoped constant x is: " + x)
}

console.log("Global scoped x is still: " + x)

// 2. Spread operator

console.log();
console.log("--Spread operator");

const sum = (a, b, c) => {
    return a + b + c;
}

let arr = [1, 2, 3];
console.log("Using spread operator, sum of elements in array is: " + sum(...arr));

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
console.log("Using spread operator, concat of " + arr1 + " and " + arr2 + " is: "
    + [...arr1, ...arr2])

// 3. Objects
console.log();
console.log("--Objects");

const box = {
    width: 2,
    length: 3,
    height: 4,
    producer: {
        id: 40,
        location: "Bucharest"
    }
};

console.log("Iterate through box object using for loop");
for (const key in box)
    console.log(`${key}: ${box[key]}`);

console.log("Iterate through box object using forEach loop");
Object.entries(box).forEach(([k, v]) => console.log(`${k}: ${v}`));

console.log("Shallow copy using Object.assign and spread");

const varToString = varObj => Object.keys(varObj)[0];
function printRecursiveObj(obj) {
    for (var key in obj) {
        if (typeof obj[key] === "object") {
            printRecursiveObj(obj[key]);
        } else {
            console.log(key + ": " + obj[key]);
        }
    }
}

const shallowAssignBox = Object.assign({}, box);
const shallowSpreadBox = {...box}
const deepCopyBox = JSON.parse(JSON.stringify(box));

box.producer.id = 39;

console.log(varToString({shallowSpreadBox}) + " : "); 
printRecursiveObj(shallowSpreadBox)

console.log(varToString({deepCopyBox}) + " : "); 
printRecursiveObj(deepCopyBox)

// 4. Arrays - accessors, mutators, iterators
console.log()
console.log("--Arrays")

let romanianGreeting = ["buna", "ziua"];
let englishGreeting = ["hello", "world"];
let germanGreeting = ["hallo", "welt"];

let combinedGreeting = romanianGreeting.concat(englishGreeting);
let joinedGreeting = germanGreeting.join()

console.log("Combined greeting using concat accessor: " + combinedGreeting);
console.log("Joined greeting using join accessor: " + joinedGreeting);

let numbers = [2, 3, 4, 1];

console.log("numbers before applying sort mutator: " + numbers);
numbers.sort((a, b) => a - b);
console.log("numbers after applying sort mutator: " + numbers);

console.log("numbers before applying reverse mutator: " + numbers);
numbers.reverse();
console.log("numbers after applying reverse mutator: " + numbers);

console.log("Iterate in numbers using for loop");
for (const n of numbers)
    console.log(n);

console.log("Iterate in numbers using forEach");
numbers.forEach(n => console.log(n))

// 5. Promises and callbacks
console.log()
console.log("--Promises and callbacks")

console.log("Use a promise that waits 1 second before it finishes");

let cpuIntensivePromise = new Promise((resolve, reject) => {
    let requestCode = 0;

    setTimeout(() => {
        if (requestCode == 0)
            resolve("Promise successfully finished");
        else
            reject("Promise unsuccessfully finished");
    }, 1000);
});

cpuIntensivePromise.then(
    (successMsg) => console.log(successMsg),
    (failedMsg) => console.log(failedMsg),
);

let cpuIntensivePromise1 = new Promise((resolve, reject) => {
    let requestCode = 0;

    setTimeout(() => {
        if (requestCode == 0)
            resolve("Promise successfully finished");
        else
            reject("Promise unsuccessfully finished");
    }, 1000);
});


console.log("Use a promise that waits 1 second before it finishes," +
    " but is passed to an await expression");
async function asyncFunction() {
    let awaitedPromiseValue = await cpuIntensivePromise1;
    console.log(awaitedPromiseValue)
}

asyncFunction();

// 6. Closures
console.log();
console.log("--Closures");

console.log("Use clousures to create higher order functions like derivative");
function derivative(f) {
    return function(x) {
        return (f(x + 0.01) - f(x)) / 0.01;
    }
}

const quadDerivative = derivative(x => (x ** 2 + x));
console.log("Derivative of f(2), where f(x) = x**2 + x, is: " + quadDerivative(2));

console.log("Use closures to emulate private members");
var counter = (function () {
    // private members
    var privateCounter = 0;
    function changeBy(val) {
        privateCounter += val;
    }

    // public members
    return {
        increment: function() {
            changeBy(1);
        },

        decrement: function() {
            changeBy(-1);
        },

        value: function() {
            return privateCounter;
        }
    };
})();

console.log("Private value after calling value() is: " + counter.value());
counter.increment();
console.log("Private value after calling increment() is: " + counter.value());
counter.decrement();
console.log("Private value after calling decrement() is: " + counter.value());
