// Simple arrow function
const greet = (name) => {
    return `Hello, ${name}!`;
};
console.log(greet('John')); // "Hello, John!"

// Arrow function with implicit return (for single expression functions)
const sum = (a, b) => a + b;
console.log(sum(3, 5)); // 8

// Arrow function with no parameters
const sayHello = () => console.log("Hello!");
sayHello(); // "Hello!"

// Arrow function with multiple parameters
const multiply = (x, y) => x * y;
console.log(multiply(2, 3)); // 6

// Arrow function demonstrating lexical 'this'
const obj = {
    name: 'Arrow Function Example',
    printName: function() {
        setTimeout(() => {
            console.log(this.name); // 'this' refers to the object due to lexical binding
        }, 1000);
    }
};
obj.printName(); // "Arrow Function Example"
