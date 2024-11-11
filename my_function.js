function sayHello(name) {
  console.log("Hello " + name);
}

// Arrow Functions
const sayHi = (name, age) => {
  console.log("*** START ***");
  console.log("HI " + name + " " + age);
  console.log("*** END ***");
};

function addNumber(x, y) {
  x = parseInt(x);
  y = parseInt(y);
  return x + y;
}

sayHello("Bun"); // output Hello Bun
sayHi("Bun", 20); // output Hi Bun
const result = addNumber("22", 2); // output
console.log(result); // output
