
const exampleString = "Hello, world! Welcome to JavaScript programming.";

result = exampleString.charAt(7)
console.log(result); 


//concat(...strings) - Combines two or more strings
const greeting = "Hello, ";
const name = "Alice!";
console.log("Concatenated string:", greeting.concat(name)); // "Hello, Alice!"

//includes(substring) - Checks if the string contains a specified substring
console.log("Contains 'world':", exampleString.includes("world")); // true



//replace(searchValue, newValue) - Replaces the first occurrence of a substring
console.log(exampleString.replace("world", "everyone")); // "Hello, everyone! Welcome to JavaScript programming."

// 7. slice(startIndex, endIndex) - Extracts a portion of a string
console.log(exampleString.slice(7, 12)); // "world"

//split(separator) - Splits a string into an array of substrings
console.log(exampleString.split(" ")); // ["Hello,", "world!", "Welcome", "to", "JavaScript", "programming."]

// 9. toLowerCase() - Converts the entire string to lowercase
console.log(exampleString.toLowerCase()); // "hello, world! welcome to javascript programming."

// 10. toUpperCase() - Converts the entire string to uppercase
console.log(exampleString.toUpperCase()); // "HELLO, WORLD! WELCOME TO JAVASCRIPT PROGRAMMING."

// 11. trim() - Removes whitespace from both ends of a string
const whitespaceString = "   Hello, world!   ";
console.log("Trimmed string:", whitespaceString.trim()); // "Hello, world!"

// substring(startIndex, endIndex) - Returns a subset of a string
console.log("Substring from index 0 to 5:", exampleString.substring(0, 5)); // "Hello"


// Additional String Searching Methods

//search(regex) - Searches a string for a match against a regular expression and returns the index of the match
console.log("Search for 'world':", exampleString.search(/world/)); // 7

//match(regex) - Retrieves the matches when matching a string against a regular expression
console.log(exampleString.match('JavaScript')); // ["JavaScript"]

//startsWith(searchString) - Determines whether the string starts with the characters of a specified string
console.log(exampleString.startsWith("Hello")); // true

//endsWith(searchString) - Determines whether the string ends with the characters of a specified string
console.log(exampleString.endsWith("programming.")); // true

