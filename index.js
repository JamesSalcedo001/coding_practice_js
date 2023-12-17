// // Challenge 1: Search Functionality: Implement a search bar that filters displayed data from an API call based on user input.

// const people = [
//     { name: "Alice", age: 25, occupation: "Engineer" },
//     { name: "Bob", age: 30, occupation: "Designer" },
//     { name: "Carol", age: 27, occupation: "Engineer" },
//     { name: "David", age: 32, occupation: "Teacher" },
//     { name: "Eve", age: 29, occupation: "Architect" }
// ];


// // grabbing input from the dom, and adding an event listener which only returns the names case sensitively that match what was typed into the input, ie. A returns Alice Carol David, but Al only returns Alice


// document.getElementById("searchInput").addEventListener("input", function(event) {
//     const searchTerm = event.target.value.toLowerCase();

//     const filteredPeople = people.filter(person => person.name.toLowerCase().includes(searchTerm))

//     displayResults(filteredPeople);
// })


// // function takes in the filtered out names returned as an argument, grabs the ul from the dom which displays the results, sets the text to an empty string, and then forEach filteredPeople result, creates an li and then sets the innerText of the li to the name and occupation, and finally appends the li's as children of the ul container

// function displayResults(filteredPeople) {

//     const resultsContainer = document.getElementById("searchResults");

//     resultsContainer.innerHTML = ""; // clear previous results
    
//     filteredPeople.forEach(person => {

//         const li = document.createElement("li")
//         li.innerText = `${person.name} - ${person.occupation}`;

//         resultsContainer.appendChild(li);
//     });
// }



// *****



// Challenge 2: Form Validation: demonstrates a simple form validation in JavaScript. It checks if the user input in a text field is not empty before submitting the form.
  
// grabs form from document, adds a submit event listener to it that takes an event, prevents the default form behavior which refreshes the page, sets a variable username to the form's value( anything the user types into the input), and sets another variable errorelement which is accessing the error div, takes the username and trims any excess whitespace etc, and if it strictly equals "", it sets the error text to "username is required" and then after 2 seconds sets it back to "". if it doesn't strictly equal "", then the error message is set automatically to "". Finally the text is set back to empty after submitting the form.

// document.getElementById("myForm").addEventListener("submit", function(event) {
//     event.preventDefault()
    
//     let usernameInput = document.getElementById("username");
//     let usernameValue = usernameInput.value;
//     let errorElement = document.getElementById("error")

//     if (usernameValue.trim() === '' ) {
//         errorElement.innerText = "Username is required";

//         setTimeout(() => {
//             errorElement.innerText = '';
//         }, 2000)

//     } else {
//         errorElement.innerText = '';
//         usernameInput.value = '';
//         alert("form submission successful!")
//     }

// })



// *****



// Challenge 3: Fetch API to Load Data Asynchronously: uses the Fetch API to asynchronously load data from an API and display it on the webpage.

// document.getElementById("loadData").addEventListener("click", function() {
//     fetch("https://pokeapi.co/api/v2/pokemon?limit=5&offset=0")
//     .then(res => res.json())
//     .then(json => {
//         let dataElement = document.getElementById("data");
//         dataElement.innerText = "";

//         json.results.forEach(r => {
//             dataElement.innerText += r.name + "\n";
//         })
//     })
//     .catch(err => {
//         console.error("Error:", err)
//     })
// })



// *****





// Challenge 4: Fetch API to Load Data Asynchronously: uses the Fetch API to asynchronously load data from an API and display it on the webpage. Additional challenge: make each item appear one by one in a timed manner slowly


// document.getElementById("loadData").addEventListener("click", function() {
//     fetch("https://pokeapi.co/api/v2/pokemon?limit=5&offset=0")
//     .then(res => res.json())
//     .then(json => {
//         let dataElement = document.getElementById("data");
//         dataElement.innerHTML = ''; // Clear previous data
//         json.results.forEach((r, index) => {
//             setTimeout(() => {
//                 let div = document.createElement('div');
//                 div.innerText = r.name;
//                 div.className = 'pokemon-name'; // CSS class
//                 dataElement.appendChild(div);
//             }, index * 100); // 1000 milliseconds (1 second) per name
//         });
//     })
//     .catch(err => {
//         console.error("Error:", err);
//     })
// });



// *****



// Challenge 5: JavaScript Function: How do you create a basic JavaScript function that adds two numbers and returns the result?


// function add(num1, num2) {
//     return num1 + num2;
// }

// let result = add(5, 2)

// console.log(result)



// *****


// Challenge 6: Can you write an arrow function in JavaScript that takes one parameter and returns its square?


// const squared = (num) => num * num

// const squared = (num) => Math.pow(num, 2)

// const squared = (num) => num ** 2 

// console.log(squared(5))


// *****


// Challenge 7: DOM Selection: Write the JavaScript code to select the first <div> element with the class container.


// let firstContainerDiv = document.querySelector("div.container")

// console.log(firstContainerDiv)


// *****



// Challenge 8: DOM Manipulation: How would you change the text content of an HTML element with the ID title to "Hello, World!" using JavaScript?


// let titleElement = document.getElementById("title")

// titleElement.textContent = "Hello, World!"



// *****


// Challenge 9: Event Handling: Show how you would attach an onClick event listener to a button with the ID submitBtn in JavaScript. additional challenge make the button turn red or blue when clicked


// const btn = document.getElementById("submitBtn")


// btn.addEventListener("click", function() {
//     if ( btn.style.backgroundColor === "blue") {
//         btn.style.backgroundColor = "red"
//     } else if (btn.style.backgroundColor = "red") {
//         btn.style.backgroundColor = "blue"
//     }
// })


// *****






// Challenge 10: Palindrome Checker: Write a function to check if a string is a palindrome: 


// function isPalindrome(str) {
//     // remove non-alphanumeric characters and convert to lowercase

//     let normalizedString = str.replace(/[^A-Za-z0-9]/g,'').toLowerCase();

//     // compare the normalized string with its reverse
//     return normalizedString === normalizedString.split("").reverse().join("");
// }


// console.log(isPalindrome("A man, a plan, a canal: Panama"));

// console.log(isPalindrome("racecar"));

// console.log(isPalindrome("hello"));


// *****



// Challenge 11: String Reversal: Create a function that reverses a string.


// function reversedString(str) {
//     return str.split("").reverse().join("")
// }

// console.log(reversedString("hello hello"))

// console.log(reversedString("yo yo yo whaddup?????"))



// *****



// Challenge 12: FizzBuzz: Implement the classic FizzBuzz challenge: print numbers from 1 to 100, but for multiples of 3, print "Fizz," for multiples of 5, print "Buzz," and for multiples of both, print "FizzBuzz." Do it with a timed delay of 60 seconds


// function fizzBuzz() {
//     let i = 1;  // Start with 1

//     // Function to process each number
//     function processNumber() {
//         let output = "";

//         if (i % 3 === 0) {
//             output += "Fizz";
//         }

//         if (i % 5 === 0) {
//             output += "Buzz";
//         }

//         console.log(output || i);

//         i++;  // Increment the counter
//         if (i <= 100) {
//             setTimeout(processNumber, 60);  // Schedule next call
//         }
//     }

//     processNumber();  // Start the process
// }

// fizzBuzz();


// *****



// Challenge 13: Property Finder: Create a function that takes an object and a key and returns the value of the key.


// function propertyFinder(obj, key) {
//     return obj[key]
// }

// const person = {
//     name: "John",
//     age: 30,
//     occupation: "Engineer"
// }

// console.log(propertyFinder(person, "name"))


// *****


// Challenge 14: use Array methods on the data


// const people = [
//     { name: "Alice", age: 25, occupation: "Engineer" },
//     { name: "Bob", age: 30, occupation: "Designer" },
//     { name: "Carol", age: 27, occupation: "Engineer" },
//     { name: "Dave", age: 35, occupation: "Teacher" },
//     { name: "Eve", age: 40, occupation: "Manager" }
// ];



// Map:

// const upperCaseNames = people.map(person => person.name.toUpperCase());
// console.log(upperCaseNames)


// Filter:

// const olderThan30 = people.filter(person => person.age > 30)
// console.log(olderThan30)


// Sort: 

// const sortedByAge = people.sort((a, b) => a.age - b.age);

// console.log(sortedByAge)




const people = [
    { name: "Alice", age: 25, occupation: "Engineer" },
    { name: "Bob", age: 30, occupation: "Designer" },
    { name: "Carol", age: 27, occupation: "Engineer" },
    { name: "David", age: 32, occupation: "Teacher" },
    { name: "Eve", age: 29, occupation: "Architect" }
];


// forEach:


// people.forEach(person => console.log(person.name)) 


// find: 


// const architect = people.find(person => person.occupation === "Architect")

// console.log(architect)



// reduce:

// const totalAge = people.reduce((accumulator, person) => accumulator + person.age, 0)

// const averageAge = totalAge / people.length;

// console.log(averageAge)


// every: 


// const areAllOlderThan20 = people.every(person => person.age > 20)
// console.log(areAllOlderThan20)


// some:

// const hasTeacher = people.some(person => person.occupation === "Teacher")

// console.log(hasTeacher)


// indexOf

// const names = people.map(person => person.name)
// const carolIndex = names.indexOf("Carol")

// console.log(carolIndex)


// concat:

// const morePeople = [
//     { name: "Frank", age: 35, occupation: "Botanist"}
// ]

// const combinedPeople = people.concat(morePeople)

// console.log("combined", combinedPeople)
// console.log("original", people)


