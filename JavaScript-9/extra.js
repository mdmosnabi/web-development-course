// Absolute value
console.log("Math.abs(-7):", Math.abs(-7)); // 7

// Round to the nearest integer
console.log("Math.round(4.7):", Math.round(4.7)); // 5
console.log("Math.round(4.4):", Math.round(4.4)); // 4

// Round down
console.log("Math.floor(4.9):", Math.floor(4.9)); // 4

// Round up
console.log("Math.ceil(4.1):", Math.ceil(4.1)); // 5

// Maximum value
console.log("Math.max(3, 7, 1, 9):", Math.max(3, 7, 1, 9)); // 9

// Minimum value
console.log("Math.min(3, 7, 1, 9):", Math.min(3, 7, 1, 9)); // 1

// Random number between 0 and 1
console.log("Math.random():", Math.random()); // Random number

// Square root
console.log("Math.sqrt(16):", Math.sqrt(16)); // 4

// Power
console.log("Math.pow(2, 3):", Math.pow(2, 3)); // 8

// Truncate decimal part
console.log("Math.trunc(4.9):", Math.trunc(4.9)); // 4

// Math constants
console.log("Math.PI:", Math.PI); // 3.141592653589793
console.log("Math.E:", Math.E); // 2.718281828459045


let num = 123.456;

// toString
console.log("num.toString():", num.toString()); // "123.456"

// toFixed
console.log("num.toFixed(2):", num.toFixed(2)); // "123.46"

// toExponential
console.log("num.toExponential(2):", num.toExponential(2)); // "1.23e+2"

// toPrecision
console.log("num.toPrecision(4):", num.toPrecision(4)); // "123.5"

// isInteger
console.log("Number.isInteger(123):", Number.isInteger(123)); // true
console.log("Number.isInteger(123.45):", Number.isInteger(123.45)); // false

// isNaN
console.log("Number.isNaN(NaN):", Number.isNaN(NaN)); // true
console.log("Number.isNaN(123):", Number.isNaN(123)); // false

// parseFloat
console.log("Number.parseFloat('123.45'):", Number.parseFloat("123.45")); // 123.45

// parseInt
console.log("Number.parseInt('123.45'):", Number.parseInt("123.45")); // 123

// isFinite
console.log("Number.isFinite(123):", Number.isFinite(123)); // true
console.log("Number.isFinite(Infinity):", Number.isFinite(Infinity)); // false

// Number conversion
console.log("Number('123'):", Number('123')); // 123
console.log("Number(true):", Number(true));  // 1



// Largest possible number
console.log("Number.MAX_VALUE:", Number.MAX_VALUE); // 1.7976931348623157e+308

// Smallest possible number
console.log("Number.MIN_VALUE:", Number.MIN_VALUE); // 5e-324

// Positive Infinity
console.log("Number.POSITIVE_INFINITY:", Number.POSITIVE_INFINITY); // Infinity

// Negative Infinity
console.log("Number.NEGATIVE_INFINITY:", Number.NEGATIVE_INFINITY); // -Infinity

// Not-a-Number (NaN)
console.log("Number.NaN:", Number.NaN); // NaN

// Smallest difference between two representable numbers
console.log("Number.EPSILON:", Number.EPSILON); // 2.220446049250313e-16

// Maximum safe integer
console.log("Number.MAX_SAFE_INTEGER:", Number.MAX_SAFE_INTEGER); // 9007199254740991

// Minimum safe integer
console.log("Number.MIN_SAFE_INTEGER:", Number.MIN_SAFE_INTEGER); // -9007199254740991
