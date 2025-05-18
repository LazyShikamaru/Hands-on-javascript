// lessons-data.js

// This file will store all lesson content, including concepts and project details.
// Version 3: Includes expectedOutput for validation and NO solutions in starterCode.

const lessons = [
    // Week 1: Foundations (Days 1–7)
    {
        day: 1,
        title: "What is JavaScript?",
        concept: "Introduction to JavaScript, its role in web development (making websites interactive), and how it runs in the browser. Understanding the difference between static and dynamic content.",
        projects: [
            {
                id: "1-1",
                title: "My First console.log()",
                description: "Use console.log() to print \"Hello, World!\" and then \"I am learning JavaScript!\" to the console. Each message should be on a new line.",
                starterCode: "// Your code here",
                expectedOutput: ["Hello, World!", "I am learning JavaScript!"]
            },
            {
                id: "1-2",
                title: "Exploring console methods",
                description: "Use console.log() to print \"This is a log message.\", console.warn() to print \"This is a warning message.\", and console.error() to print \"This is an error message.\". Each on a new line.",
                starterCode: "// Your code here",
                expectedOutput: ["This is a log message.", "This is a warning message.", "This is an error message."]
            },
            {
                id: "1-3",
                title: "Inline vs. External Script",
                description: "(Conceptual) For this exercise, simply log the message \"External script loaded successfully!\" to the console. This simulates what an external script might confirm.",
                starterCode: "// Your code here",
                expectedOutput: ["External script loaded successfully!"]
            }
        ]
    },
    {
        day: 2,
        title: "Setup & Console",
        concept: "Choosing and setting up a code editor (e.g., VS Code). Understanding how to open the browser developer console and use it for basic debugging and running JavaScript snippets.",
        projects: [
            {
                id: "2-1",
                title: "Editor Confirmation Log",
                description: "Write a simple console.log() statement that prints \"My coding environment is ready!\" to the console.",
                starterCode: "// Your code here",
                expectedOutput: ["My coding environment is ready!"]
            },
            {
                id: "2-2",
                title: "Console Math",
                description: "Perform a simple addition (e.g., 15 + 7) and log the result to the console. The output should be just the number.",
                starterCode: "// Your code here",
                expectedOutput: ["22"]
            },
            {
                id: "2-3",
                title: "Logging a String Variable",
                description: "Declare a variable, assign it a string value like \"JavaScript is fun!\", and then log that variable to the console.",
                starterCode: "// Your code here",
                expectedOutput: ["JavaScript is fun!"]
            }
        ]
    },
    {
        day: 3,
        title: "Variables",
        concept: "Understanding variables as containers for storing data. Introduction to let, const, and var keywords, their differences (scope, reassignment, hoisting), and best practices for when to use each.",
        projects: [
            {
                id: "3-1",
                title: "Declare and Log Variables",
                description: "Declare three variables: `myName` (string), `myAge` (number), `isLearning` (boolean). Assign them the values \"Alex\", 28, and true respectively. Log each variable to the console on separate lines.",
                starterCode: "// Declare myName, myAge, and isLearning here\n\n// Log the variables here",
                expectedOutput: ["Alex", "28", "true"]
            },
            {
                id: "3-2",
                title: "Variable Reassignment Log",
                description: "Declare a variable `status` with `let` and assign it \"Pending\". Log it. Then, reassign it to \"Complete\". Log it again. The console should show both statuses on separate lines.",
                starterCode: "// Your code here",
                expectedOutput: ["Pending", "Complete"]
            },
            {
                id: "3-3",
                title: "`const` Behavior Log",
                description: "Declare a `const` variable `BIRTH_YEAR` and assign it the number 1990. Log it.",
                starterCode: "// Your code here",
                expectedOutput: ["1990"]
            }
        ]
    },
    {
        day: 4,
        title: "Data Types",
        concept: "Introduction to primitive JavaScript data types: Strings, Numbers, Booleans, Undefined, and Null. How to identify them using typeof operator.",
        projects: [
            {
                id: "4-1",
                title: "`typeof` Exploration Log",
                description: "Log the `typeof` a string (e.g., \"hello\"), a number (e.g., 123), and a boolean (e.g., false). Each `typeof` result should be on a new line.",
                starterCode: "// Your code here",
                expectedOutput: ["string", "number", "boolean"]
            },
            {
                id: "4-2",
                title: "String Concatenation Log",
                description: "Create two string variables, `greeting` with value \"Hello, \" and `name` with value \"User\". Concatenate them and log the result: \"Hello, User\".",
                starterCode: "// Your code here",
                expectedOutput: ["Hello, User"]
            },
            {
                id: "4-3",
                title: "Undefined and Null Log",
                description: "Declare a variable `uninitializedVar` without assigning a value. Log it. Declare another variable `emptyValue` and assign `null` to it. Log it. New lines for each.",
                starterCode: "// Your code here",
                expectedOutput: ["undefined", "null"]
            }
        ]
    },
    {
        day: 5,
        title: "Operators",
        concept: "Understanding arithmetic operators (+, -, *, /, %, ++, --), assignment operators (=, +=, -=, *=, /=), and comparison operators (==, ===, !=, !==, >, <, >=, <=).",
        projects: [
            {
                id: "5-1",
                title: "Basic Arithmetic Log",
                description: "Log the result of `10 + 5`, `10 - 5`, `10 * 5`, and `10 / 5`. Each result on a new line.",
                starterCode: "// Your code here",
                expectedOutput: ["15", "5", "50", "2"]
            },
            {
                id: "5-2",
                title: "Comparison Log (`===` and `!==`)",
                description: "Log the result of `5 === 5`. Log the result of `5 !== 5`. Log the result of `\"5\" === 5`. Each on a new line.",
                starterCode: "// Your code here",
                expectedOutput: ["true", "false", "false"]
            },
            {
                id: "5-3",
                title: "Logical AND (&&) Log",
                description: "Log the result of `true && true`. Log the result of `true && false`. Each on a new line.",
                starterCode: "// Your code here",
                expectedOutput: ["true", "false"]
            }
        ]
    },
    {
        day: 6,
        title: "Conditionals",
        concept: "Making decisions in code using if, else if, and else statements. Introduction to switch statements for multiple conditions.",
        projects: [
            {
                id: "6-1",
                title: "Simple `if` Log",
                description: "Declare a variable `temperature` and set it to 32. If temperature is greater than 30, log \"It's hot!\".",
                starterCode: "let temperature = 32;\n// Your if statement here",
                expectedOutput: ["It's hot!"]
            },
            {
                id: "6-2",
                title: "`if/else` Log",
                description: "Declare a variable `hour` and set it to 14. If hour is less than 12, log \"Good morning!\". Otherwise, log \"Good afternoon!\".",
                starterCode: "let hour = 14;\n// Your if/else statement here",
                expectedOutput: ["Good afternoon!"]
            },
            {
                id: "6-3",
                title: "`switch` Statement Log",
                description: "Declare a variable `fruit` and set it to \"apple\". Use a switch statement to log \"Red fruit\" if fruit is \"apple\", \"Yellow fruit\" if \"banana\". Add a default that logs \"Unknown fruit\".",
                starterCode: "let fruit = \"apple\";\n// Your switch statement here",
                expectedOutput: ["Red fruit"]
            }
        ]
    },
    {
        day: 7,
        title: "Loops",
        concept: "Automating repetitive tasks using for, while, and do...while loops. Understanding loop control (initialization, condition, increment/decrement).",
        projects: [
            {
                id: "7-1",
                title: "`for` Loop Countdown Log",
                description: "Use a `for` loop to count down from 3 to 1, logging each number. Then log \"Liftoff!\". Each on a new line.",
                starterCode: "// Your for loop here\n\n// Log Liftoff! here",
                expectedOutput: ["3", "2", "1", "Liftoff!"]
            },
            {
                id: "7-2",
                title: "`while` Loop Sum Log",
                description: "Use a `while` loop to sum numbers from 1 to 3 (1+2+3). Log the final sum (which is 6).",
                starterCode: "// Your while loop and sum calculation here",
                expectedOutput: ["6"]
            },
            {
                id: "7-3",
                title: "Looping Through an Array Log",
                description: "Declare an array `colors = [\"Red\", \"Green\", \"Blue\"];`. Loop through the array and log each color. Each color on a new line.",
                starterCode: "let colors = [\"Red\", \"Green\", \"Blue\"];\n// Your loop here",
                expectedOutput: ["Red", "Green", "Blue"]
            }
        ]
    },
    // Week 2: Functions, Arrays & Objects (Days 8–14)
    {
        day: 8,
        title: "Functions",
        concept: "Writing reusable blocks of code using function declarations and function expressions. Understanding parameters, arguments, and return values.",
        projects: [
            {
                id: "8-1",
                title: "Simple Function Call Log",
                description: "Define a function `sayHello` that logs \"Hello from function!\". Call the function.",
                starterCode: "// Define sayHello function here\n\n// Call sayHello here",
                expectedOutput: ["Hello from function!"]
            },
            {
                id: "8-2",
                title: "Function with Parameter Log",
                description: "Define a function `greetUser` that takes one parameter `name` and logs `\"Hello, [name]!\"`. Call it with \"Alice\".",
                starterCode: "// Define greetUser function here\n\n// Call greetUser here",
                expectedOutput: ["Hello, Alice!"]
            },
            {
                id: "8-3",
                title: "Function Return Value Log",
                description: "Define a function `addNumbers` that takes two parameters `a` and `b`, and returns their sum. Call it with 5 and 7, and log the returned value.",
                starterCode: "// Define addNumbers function here\n\n// Call addNumbers and log the result",
                expectedOutput: ["12"]
            }
        ]
    },
    {
        day: 9,
        title: "Scope & Hoisting",
        concept: "Understanding global scope, function (local) scope, and block scope (for let and const). Introduction to hoisting and how it affects var, let, const, and function declarations.",
        projects: [
            {
                id: "9-1",
                title: "Global vs. Local Scope Log",
                description: "Declare a global variable `globalVar` as \"Global\". Inside a function `scopeTest`, declare a local variable `localVar` as \"Local\". Log both `globalVar` and `localVar` from *inside* the function, each on a new line. Call the function.",
                starterCode: "let globalVar = \"Global\";\n\n// Define scopeTest function here\n\n// Call scopeTest here",
                expectedOutput: ["Global", "Local"]
            },
            {
                id: "9-2",
                title: "Block Scope Log",
                description: "Inside a block `{}` declare a variable `blockVar` with `let` and assign it \"In Block\". Log it from inside the block.",
                starterCode: "// Your block scope code here",
                expectedOutput: ["In Block"]
            },
            {
                id: "9-3",
                title: "Function Hoisting Log",
                description: "Call a function `hoistedFunction()` *before* its declaration. Declare `hoistedFunction` to log \"Function was hoisted!\".",
                starterCode: "// Call hoistedFunction first\n\n// Then declare hoistedFunction",
                expectedOutput: ["Function was hoisted!"]
            }
        ]
    },
    {
        day: 10,
        title: "Mini Project — Calculator App",
        concept: "Applying knowledge of variables, data types, operators, conditionals, and functions to build a simple calculator.",
        projects: [
            {
                id: "10-1",
                title: "Calculator: Add Function Log",
                description: "Create a function `add(a, b)` that returns their sum. Call `add(10, 5)` and log the result.",
                starterCode: "// Define add function here\n\n// Call add and log result",
                expectedOutput: ["15"]
            },
            {
                id: "10-2",
                title: "Calculator: Subtract Function Log",
                description: "Create a function `subtract(a, b)` that returns `a - b`. Call `subtract(10, 5)` and log the result.",
                starterCode: "// Define subtract function here\n\n// Call subtract and log result",
                expectedOutput: ["5"]
            },
            {
                id: "10-3",
                title: "Calculator: Multiply Function Log",
                description: "Create a function `multiply(a, b)` that returns `a * b`. Call `multiply(10, 5)` and log the result.",
                starterCode: "// Define multiply function here\n\n// Call multiply and log result",
                expectedOutput: ["50"]
            }
        ]
    },
    {
        day: 11,
        title: "Arrays",
        concept: "Storing ordered collections of data using arrays. Accessing elements by index, finding array length, and basic array manipulation (adding/removing elements - briefly touch on push, pop).",
        projects: [
            {
                id: "11-1",
                title: "Create and Log Array Element",
                description: "Create an array `myArray` with elements [10, 20, 30]. Log the second element (index 1) of the array.",
                starterCode: "// Your code here",
                expectedOutput: ["20"]
            },
            {
                id: "11-2",
                title: "Log Array Length",
                description: "Create an array `fruits` with elements [\"Apple\", \"Banana\", \"Cherry\"]. Log the length of the `fruits` array.",
                starterCode: "// Your code here",
                expectedOutput: ["3"]
            },
            {
                id: "11-3",
                title: "Array `push` and Log",
                description: "Create an array `numbers` with [1, 2]. Use `push()` to add 3 to it. Then log the entire `numbers` array. (Output should be like 1,2,3 - use .toString() for consistent validation).",
                starterCode: "// Your code here",
                expectedOutput: ["1,2,3"]
            }
        ]
    },
    {
        day: 12,
        title: "Array Methods",
        concept: "Mastering common array methods: .map(), .filter(), .reduce(), and .forEach() for powerful data manipulation.",
        projects: [
            {
                id: "12-1",
                title: "`.forEach()` Log Each Element",
                description: "Declare an array `data = [\"A\", \"B\", \"C\"];`. Use `.forEach()` to log each element on a new line.",
                starterCode: "let data = [\"A\", \"B\", \"C\"];\n// Your .forEach() code here",
                expectedOutput: ["A", "B", "C"]
            },
            {
                id: "12-2",
                title: "`.map()` to New Array Log",
                description: "Declare an array `nums = [1, 2, 3];`. Use `.map()` to create a new array where each number is doubled. Log the new array (use .toString() for validation, e.g., \"2,4,6\").",
                starterCode: "let nums = [1, 2, 3];\n// Your .map() code here and log result",
                expectedOutput: ["2,4,6"]
            },
            {
                id: "12-3",
                title: "`.filter()` for Even Numbers Log",
                description: "Declare an array `mix = [1, 2, 3, 4, 5, 6];`. Use `.filter()` to create a new array with only even numbers. Log the new array (use .toString() for validation, e.g., \"2,4,6\").",
                starterCode: "let mix = [1, 2, 3, 4, 5, 6];\n// Your .filter() code here and log result",
                expectedOutput: ["2,4,6"]
            }
        ]
    },
    {
        day: 13,
        title: "Objects",
        concept: "Creating structured data using key-value pairs with JavaScript objects. Accessing properties using dot notation and bracket notation. Basic object manipulation.",
        projects: [
            {
                id: "13-1",
                title: "Create and Log Object Property",
                description: "Create an object `person` with property `name` set to \"John\". Log `person.name`.",
                starterCode: "// Your code here",
                expectedOutput: ["John"]
            },
            {
                id: "13-2",
                title: "Add Property and Log",
                description: "Create an object `car = { make: \"Toyota\" }`. Add a property `model` with value \"Camry\". Log `car.model`.",
                starterCode: "let car = { make: \"Toyota\" };\n// Add model property and log it",
                expectedOutput: ["Camry"]
            },
            {
                id: "13-3",
                title: "Object Method Log",
                description: "Create an object `calculator` with a method `add` that takes `a` and `b` and returns their sum. Call `calculator.add(3, 4)` and log the result.",
                starterCode: "// Define calculator object with add method here\n\n// Call method and log result",
                expectedOutput: ["7"]
            }
        ]
    },
    {
        day: 14,
        title: "Mini Project — Product List",
        concept: "Applying knowledge of arrays and objects to build a dynamic list of products. This will involve creating an array of product objects and then displaying their information.",
        projects: [
            {
                id: "14-1",
                title: "Product Object: Log Name",
                description: "Create a `product` object: `{ id: 1, name: \"Laptop\", price: 1200 }`. Log the `name` of the product.",
                starterCode: "// Your product object and log statement here",
                expectedOutput: ["Laptop"]
            },
            {
                id: "14-2",
                title: "Array of Products: Log First Product's Price",
                description: "Create an array `products` containing two product objects: `[{ name: \"Book\", price: 20 }, { name: \"Pen\", price: 2 }]`. Log the `price` of the first product.",
                starterCode: "// Your products array and log statement here",
                expectedOutput: ["20"]
            },
            {
                id: "14-3",
                title: "Loop and Log Product Names",
                description: "Declare an array `products = [{ name: \"Mouse\" }, { name: \"Keyboard\" }]`. Loop through `products` and log each product's `name` on a new line.",
                starterCode: "let products = [{ name: \"Mouse\" }, { name: \"Keyboard\" }];\n// Your loop and log statements here",
                expectedOutput: ["Mouse", "Keyboard"]
            }
        ]
    },
    // Week 3: DOM & Events (Days 15-21)
    {
        day: 15,
        title: "DOM Basics",
        concept: "Introduction to the Document Object Model (DOM) and how JavaScript can interact with HTML elements to create dynamic web pages.",
        projects: [
            {
                id: "15-1",
                title: "Live Character Counter",
                description: "Create a textarea and a counter that updates in real-time to show how many characters have been typed. Log the current character count whenever it changes.",
                starterCode: "// Your code here to create a character counter\n// Log the count whenever it changes",
                expectedOutput: ["0"] // Initial count
            },
            {
                id: "15-2",
                title: "Color Preview Box",
                description: "Create an input for a color code and a div that changes background color based on the input. Log the current color value whenever it changes.",
                starterCode: "// Your code here to create a color preview\n// Log the color value whenever it changes",
                expectedOutput: ["#000000"] // Default color
            },
            {
                id: "15-3",
                title: "Image Swapper",
                description: "Create a button that swaps between two image URLs when clicked. Log 'Image swapped' each time the button is clicked.",
                starterCode: "// Your code here to create an image swapper\n// Log 'Image swapped' on each click",
                expectedOutput: ["Image swapped"]
            }
        ]
    },
    {
        day: 16,
        title: "Events",
        concept: "Understanding JavaScript events and how to handle user interactions like clicks, mouse movements, and keyboard input.",
        projects: [
            {
                id: "16-1",
                title: "Hover-to-Reveal Tooltip",
                description: "Create an element that shows a tooltip when hovered over. Log 'Tooltip shown' when the tooltip appears and 'Tooltip hidden' when it disappears.",
                starterCode: "// Your code here to create a hover tooltip\n// Log appropriate messages on hover events",
                expectedOutput: ["Tooltip shown", "Tooltip hidden"]
            },
            {
                id: "16-2",
                title: "Key-Logger (Last Key Display)",
                description: "Create a display that shows the last key pressed on the keyboard. Log the key code whenever a key is pressed.",
                starterCode: "// Your code here to create a key logger\n// Log the key code on each keypress",
                expectedOutput: ["Key pressed: "] // Will be followed by a key code
            },
            {
                id: "16-3",
                title: "Click Counter",
                description: "Create a button that counts how many times it has been clicked. Log the current count after each click.",
                starterCode: "// Your code here to create a click counter\n// Log the count after each click",
                expectedOutput: ["Clicks: 1"] // After first click
            }
        ]
    },
    {
        day: 17,
        title: "DOM Manipulation",
        concept: "Learning how to create, modify, and delete HTML elements dynamically using JavaScript.",
        projects: [
            {
                id: "17-1",
                title: "Dynamic List (Add/Remove)",
                description: "Create a simple list where users can add and remove items. Log 'Item added' when an item is added and 'Item removed' when an item is removed.",
                starterCode: "// Your code here to create a dynamic list\n// Log appropriate messages on add/remove",
                expectedOutput: ["Item added", "Item removed"]
            },
            {
                id: "17-2",
                title: "Live CSS Style Editor",
                description: "Create inputs that allow changing CSS properties of an element in real-time. Log the CSS property and value whenever a change is made.",
                starterCode: "// Your code here to create a CSS editor\n// Log the property and value on each change",
                expectedOutput: ["Style updated: "] // Will be followed by property and value
            },
            {
                id: "17-3",
                title: "Style Switcher (Class Toggle)",
                description: "Create a button that toggles between different CSS classes on an element. Log the current active class after each toggle.",
                starterCode: "// Your code here to create a class toggler\n// Log the active class after each toggle",
                expectedOutput: ["Active class: "] // Will be followed by class name
            }
        ]
    },
    {
        day: 18,
        title: "Forms & Validation",
        concept: "Working with HTML forms and implementing client-side validation using JavaScript.",
        projects: [
            {
                id: "18-1",
                title: "Credit-Card Formatter",
                description: "Create an input that automatically formats credit card numbers as they're typed (e.g., adds spaces every 4 digits). Log the formatted number whenever it changes.",
                starterCode: "// Your code here to create a credit card formatter\n// Log the formatted number on each change",
                expectedOutput: ["Formatted: "] // Will be followed by formatted number
            },
            {
                id: "18-2",
                title: "Password Length Checker",
                description: "Create a password input with real-time validation for minimum length. Log 'Valid password' or 'Password too short' based on the input.",
                starterCode: "// Your code here to create a password checker\n// Log validation message on each change",
                expectedOutput: ["Password too short", "Valid password"]
            },
            {
                id: "18-3",
                title: "Email Format Checker",
                description: "Create an email input that validates the format using regex. Log 'Valid email' or 'Invalid email' based on the input.",
                starterCode: "// Your code here to create an email validator\n// Log validation message on each change",
                expectedOutput: ["Invalid email", "Valid email"]
            }
        ]
    },
    {
        day: 19,
        title: "To-Do List Project",
        concept: "Building a functional to-do list application that allows users to add, edit, and delete tasks.",
        projects: [
            {
                id: "19-1",
                title: "Add/Edit/Delete Tasks",
                description: "Create the core functionality for a to-do list: adding, editing, and deleting tasks. Log the action and task name for each operation.",
                starterCode: "// Your code here to create to-do list core functionality\n// Log appropriate messages for each action",
                expectedOutput: ["Task added: ", "Task edited: ", "Task deleted: "] // Will be followed by task names
            },
            {
                id: "19-2",
                title: "Drag-and-Drop Reordering",
                description: "Add drag-and-drop functionality to reorder tasks in the to-do list. Log the task name and its new position after each reordering.",
                starterCode: "// Your code here to add drag-and-drop\n// Log task and position after reordering",
                expectedOutput: ["Task reordered: "] // Will be followed by task name and position
            },
            {
                id: "19-3",
                title: "LocalStorage Persistence",
                description: "Make the to-do list persist across page reloads using localStorage. Log 'Tasks saved' when saving to localStorage and 'Tasks loaded' when loading.",
                starterCode: "// Your code here to add localStorage persistence\n// Log appropriate messages for save/load operations",
                expectedOutput: ["Tasks saved", "Tasks loaded"]
            }
        ]
    },
    {
        day: 20,
        title: "Practice Challenge 1",
        concept: "Applying DOM manipulation and event handling skills to create practical UI components.",
        projects: [
            {
                id: "20-1",
                title: "Live Search Filter",
                description: "Create a list of items with a search input that filters the list in real-time. Log the current search term and number of matching items.",
                starterCode: "// Your code here to create a live search filter\n// Log search term and match count on each change",
                expectedOutput: ["Search: '', Matches: "] // Will be followed by count
            },
            {
                id: "20-2",
                title: "Random Quote Generator",
                description: "Create a button that displays a random quote from a predefined list when clicked. Log the selected quote each time.",
                starterCode: "// Your code here to create a quote generator\n// Log the selected quote on each click",
                expectedOutput: ["Quote: "] // Will be followed by quote text
            },
            {
                id: "20-3",
                title: "Countdown Timer",
                description: "Create a simple countdown timer that counts down from a user-specified time. Log the remaining time each second.",
                starterCode: "// Your code here to create a countdown timer\n// Log the remaining time each second",
                expectedOutput: ["Time remaining: "] // Will be followed by time
            }
        ]
    },
    {
        day: 21,
        title: "Practice Challenge 2",
        concept: "Building more complex UI components using JavaScript and DOM manipulation.",
        projects: [
            {
                id: "21-1",
                title: "Collapsible Sidebar Navigation",
                description: "Create a sidebar navigation menu that can be collapsed and expanded. Log 'Sidebar collapsed' or 'Sidebar expanded' on each toggle.",
                starterCode: "// Your code here to create a collapsible sidebar\n// Log appropriate messages on toggle",
                expectedOutput: ["Sidebar collapsed", "Sidebar expanded"]
            },
            {
                id: "21-2",
                title: "Tabbed Content Interface",
                description: "Create a tabbed interface that shows different content when different tabs are clicked. Log the active tab name after each tab switch.",
                starterCode: "// Your code here to create a tabbed interface\n// Log the active tab name on each switch",
                expectedOutput: ["Active tab: "] // Will be followed by tab name
            },
            {
                id: "21-3",
                title: "Accordion Menu",
                description: "Create an accordion menu where clicking a header expands/collapses its content section. Log the section name and its new state after each toggle.",
                starterCode: "// Your code here to create an accordion menu\n// Log section name and state on each toggle",
                expectedOutput: ["Section: '', State: "] // Will be followed by expanded/collapsed
            }
        ]
    },
    // Week 4: Modern JavaScript (Days 22-28)
    {
        day: 22,
        title: "ES6+ Features",
        concept: "Exploring modern JavaScript features introduced in ES6 and beyond, such as template literals, arrow functions, and block-scoped variables.",
        projects: [
            {
                id: "22-1",
                title: "Template-Literal Greeting Card",
                description: "Create a greeting card using template literals that includes multiple variables and spans multiple lines. Log the final greeting.",
                starterCode: "// Your code here to create a template literal greeting\n// Log the final greeting",
                expectedOutput: ["Hello, "] // Will be followed by name and greeting
            },
            {
                id: "22-2",
                title: "Block-Scoped Variable Playground",
                description: "Demonstrate the difference between var, let, and const by creating variables in different scopes. Log the accessibility of each variable.",
                starterCode: "// Your code here to demonstrate variable scoping\n// Log the accessibility of each variable",
                expectedOutput: ["var: accessible", "let: block-scoped", "const: block-scoped"]
            },
            {
                id: "22-3",
                title: "Arrow Function Rewrite",
                description: "Rewrite a traditional function expression as an arrow function and demonstrate the difference in 'this' binding. Log the results of both functions.",
                starterCode: "// Your code here to compare traditional and arrow functions\n// Log the results of both functions",
                expectedOutput: ["Traditional function: ", "Arrow function: "] // Will be followed by results
            }
        ]
    },
    {
        day: 23,
        title: "Destructuring & Spread",
        concept: "Learning how to use destructuring assignment and spread syntax to work with arrays and objects more efficiently.",
        projects: [
            {
                id: "23-1",
                title: "User Profile Editor (Object Spread)",
                description: "Create a function that updates a user profile object using the spread operator to merge changes. Log the updated profile.",
                starterCode: "// Your code here to create a profile editor\n// Log the updated profile after changes",
                expectedOutput: ["Updated profile: "] // Will be followed by profile object
            },
            {
                id: "23-2",
                title: "Fruit-Basket Array Merger",
                description: "Create two arrays of fruit names and use the spread operator to combine them into a single basket. Log the combined basket.",
                starterCode: "// Your code here to merge fruit arrays\n// Log the combined basket",
                expectedOutput: ["Combined basket: "] // Will be followed by combined array
            },
            {
                id: "23-3",
                title: "Student Report Card Merger",
                description: "Use object destructuring to extract specific grades from a student report card object. Log the extracted grades.",
                starterCode: "// Your code here to destructure a report card\n// Log the extracted grades",
                expectedOutput: ["Math: ", "Science: "] // Will be followed by grades
            }
        ]
    },
    {
        day: 24,
        title: "JavaScript Classes",
        concept: "Understanding object-oriented programming in JavaScript using ES6 classes, constructors, methods, and inheritance.",
        projects: [
            {
                id: "24-1",
                title: "Book Class (Library App)",
                description: "Create a Book class with properties for title, author, and pages. Instantiate a few books and log their details.",
                starterCode: "// Your code here to create a Book class\n// Log details of instantiated books",
                expectedOutput: ["Book: "] // Will be followed by book details
            },
            {
                id: "24-2",
                title: "Shape Class Hierarchy",
                description: "Create a base Shape class and derived classes for Circle and Rectangle with methods to calculate area. Log the areas of different shapes.",
                starterCode: "// Your code here to create shape classes\n// Log areas of different shapes",
                expectedOutput: ["Circle area: ", "Rectangle area: "] // Will be followed by areas
            },
            {
                id: "24-3",
                title: "Card Class (Deck)",
                description: "Create a Card class and a Deck class that generates a standard deck of playing cards. Log a few randomly drawn cards.",
                starterCode: "// Your code here to create card and deck classes\n// Log randomly drawn cards",
                expectedOutput: ["Card drawn: "] // Will be followed by card details
            }
        ]
    },
    {
        day: 25,
        title: "Prototypes & `this`",
        concept: "Exploring JavaScript's prototype-based inheritance and understanding the 'this' keyword in different contexts.",
        projects: [
            {
                id: "25-1",
                title: "Custom Array Method",
                description: "Extend the Array prototype with a custom method (e.g., 'sum' for number arrays). Log the result of using your custom method.",
                starterCode: "// Your code here to extend Array prototype\n// Log the result of using your custom method",
                expectedOutput: ["Custom method result: "] // Will be followed by result
            },
            {
                id: "25-2",
                title: "`this` Binding Demo",
                description: "Demonstrate how 'this' behaves differently in various contexts (global, object method, event handler). Log the value of 'this' in each context.",
                starterCode: "// Your code here to demonstrate 'this' binding\n// Log the value of 'this' in each context",
                expectedOutput: ["Global this: ", "Method this: ", "Event this: "] // Will be followed by context
            },
            {
                id: "25-3",
                title: "Prototype Inheritance Chain",
                description: "Create a chain of objects using prototype inheritance and demonstrate property lookup. Log the property values and their source in the chain.",
                starterCode: "// Your code here to create a prototype chain\n// Log property values and their source",
                expectedOutput: ["Property: ", "Source: "] // Will be followed by details
            }
        ]
    },
    {
        day: 26,
        title: "Notes App Project",
        concept: "Building a notes application that allows users to create, read, update, and delete notes using object-oriented JavaScript.",
        projects: [
            {
                id: "26-1",
                title: "Note Creation/Deletion",
                description: "Implement the core functionality for creating and deleting notes. Log the action and note title for each operation.",
                starterCode: "// Your code here to implement note CRUD operations\n// Log appropriate messages for each action",
                expectedOutput: ["Note created: ", "Note deleted: "] // Will be followed by note titles
            },
            {
                id: "26-2",
                title: "LocalStorage Integration",
                description: "Make the notes persist across page reloads using localStorage. Log 'Notes saved' when saving to localStorage and 'Notes loaded' when loading.",
                starterCode: "// Your code here to add localStorage persistence\n// Log appropriate messages for save/load operations",
                expectedOutput: ["Notes saved", "Notes loaded"]
            },
            {
                id: "26-3",
                title: "Class-Based Logic",
                description: "Refactor the notes app to use ES6 classes for Note and NotesApp. Log the class name and method being called for each operation.",
                starterCode: "// Your code here to implement class-based notes app\n// Log class and method information for each operation",
                expectedOutput: ["NotesApp.addNote", "Note.update", "NotesApp.deleteNote"] // Example method calls
            }
        ]
    },
    {
        day: 27,
        title: "Refactoring 1",
        concept: "Learning how to improve code quality by refactoring for better organization, readability, and maintainability.",
        projects: [
            {
                id: "27-1",
                title: "Reusable Form Validator",
                description: "Refactor form validation code into a reusable function or class. Log validation results for different form inputs.",
                starterCode: "// Your code here to create a reusable validator\n// Log validation results for different inputs",
                expectedOutput: ["Validating email: ", "Validating password: "] // Will be followed by results
            },
            {
                id: "27-2",
                title: "Named Callback Functions",
                description: "Refactor code with anonymous callbacks to use named functions. Log the function name being called for each callback.",
                starterCode: "// Your code here to refactor callbacks\n// Log the function name for each callback",
                expectedOutput: ["Calling: handleClick", "Calling: processData"] // Example function names
            },
            {
                id: "27-3",
                title: "Modular Style Helpers",
                description: "Refactor CSS manipulation code into a modular helper object. Log the helper method and arguments for each style change.",
                starterCode: "// Your code here to create style helpers\n// Log helper method and arguments for each change",
                expectedOutput: ["StyleHelper.setColor: ", "StyleHelper.toggleClass: "] // Will be followed by arguments
            }
        ]
    },
    {
        day: 28,
        title: "Refactoring 2",
        concept: "Continuing to improve code quality with advanced refactoring techniques and patterns.",
        projects: [
            {
                id: "28-1",
                title: "Selector Utility (DOM Queries)",
                description: "Create a utility function for DOM selection that simplifies querySelector/querySelectorAll. Log the selector and elements found for each query.",
                starterCode: "// Your code here to create a selector utility\n// Log selector and elements found for each query",
                expectedOutput: ["Selecting: .item, Found: "] // Will be followed by count
            },
            {
                id: "28-2",
                title: "Event Delegation",
                description: "Refactor multiple event listeners to use event delegation. Log the event type and target element for each delegated event.",
                starterCode: "// Your code here to implement event delegation\n// Log event type and target for each delegated event",
                expectedOutput: ["Delegated click on: "] // Will be followed by element info
            },
            {
                id: "28-3",
                title: "Switch-to-Map Refactor",
                description: "Refactor a switch statement to use a Map object for better performance and readability. Log the input and output for each lookup.",
                starterCode: "// Your code here to refactor switch to Map\n// Log input and output for each lookup",
                expectedOutput: ["Input: ", "Output: "] // Will be followed by values
            }
        ]
    },
    // Week 5: Asynchronous JavaScript (Days 29-35)
    {
        day: 29,
        title: "Callbacks & Promises",
        concept: "Understanding asynchronous JavaScript using callbacks and promises for handling operations that take time to complete.",
        projects: [
            {
                id: "29-1",
                title: "Promise-Based Timeout",
                description: "Create a function that returns a promise which resolves after a specified delay. Log messages before, during, and after the promise resolves.",
                starterCode: "// Your code here to create a promise-based timeout\n// Log messages at different stages",
                expectedOutput: ["Starting timeout...", "Promise resolved after delay"]
            },
            {
                id: "29-2",
                title: "Delayed Logger (Callbacks)",
                description: "Create a function that uses callbacks to log messages after specified delays. Log the sequence of execution.",
                starterCode: "// Your code here to create a delayed logger\n// Log the sequence of execution",
                expectedOutput: ["Starting delayed logs...", "Callback executed after delay"]
            },
            {
                id: "29-3",
                title: "Fetch Simulation Chain",
                description: "Simulate a fetch operation using promises and chain multiple operations. Log the data at each stage of the promise chain.",
                starterCode: "// Your code here to simulate fetch with promises\n// Log data at each stage of the chain",
                expectedOutput: ["Fetching data...", "Processing data...", "Data ready: "] // Will be followed by data
            }
        ]
    },
    {
        day: 30,
        title: "Async/Await",
        concept: "Using the async/await syntax to write asynchronous code that looks and behaves more like synchronous code.",
        projects: [
            {
                id: "30-1",
                title: "Fake API Call",
                description: "Create an async function that simulates an API call with a delay. Use await to handle the response and log the result.",
                starterCode: "// Your code here to create a fake API call\n// Log the result after awaiting the response",
                expectedOutput: ["Calling API...", "API response: "] // Will be followed by response data
            },
            {
                id: "30-2",
                title: "Sequential Async Tasks",
                description: "Create multiple async functions and execute them in sequence using await. Log the result of each task as it completes.",
                starterCode: "// Your code here to create sequential async tasks\n// Log the result of each task as it completes",
                expectedOutput: ["Task 1 complete: ", "Task 2 complete: ", "Task 3 complete: "] // Will be followed by results
            },
            {
                id: "30-3",
                title: "Async Timeout Rewrite",
                description: "Rewrite the promise-based timeout function from Day 29 using async/await. Log messages before, during, and after the timeout.",
                starterCode: "// Your code here to rewrite timeout with async/await\n// Log messages at different stages",
                expectedOutput: ["Starting timeout...", "Timeout complete after delay"]
            }
        ]
    },
    {
        day: 31,
        title: "Fetch API",
        concept: "Using the Fetch API to make HTTP requests and handle responses from web servers.",
        projects: [
            {
                id: "31-1",
                title: "Image Loader Gallery",
                description: "Create a function that fetches and displays images from a URL. Log the loading status and result for each image.",
                starterCode: "// Your code here to fetch and display images\n// Log loading status and result for each image",
                expectedOutput: ["Loading image from URL...", "Image loaded successfully"]
            },
            {
                id: "31-2",
                title: "Postcode Lookup",
                description: "Create a function that fetches address details from a postcode API. Log the request and response data.",
                starterCode: "// Your code here to create a postcode lookup\n// Log request and response data",
                expectedOutput: ["Looking up postcode: ", "Address found: "] // Will be followed by details
            },
            {
                id: "31-3",
                title: "User Data Display",
                description: "Fetch user data from an API and display it in a formatted list. Log the fetch status and number of users loaded.",
                starterCode: "// Your code here to fetch and display user data\n// Log fetch status and user count",
                expectedOutput: ["Fetching users...", "Loaded users: "] // Will be followed by count
            }
        ]
    },
    {
        day: 32,
        title: "Weather App (Project 1)",
        concept: "Building a weather application that fetches and displays current weather data from a weather API.",
        projects: [
            {
                id: "32-1",
                title: "City Search Input",
                description: "Create a search input that fetches weather data for a specified city. Log the search query and API response.",
                starterCode: "// Your code here to create a city search\n// Log search query and API response",
                expectedOutput: ["Searching for: ", "Weather data: "] // Will be followed by city and data
            },
            {
                id: "32-2",
                title: "Temperature Unit Toggle",
                description: "Add a toggle to switch between Celsius and Fahrenheit temperature units. Log the current unit and converted temperature.",
                starterCode: "// Your code here to create a unit toggle\n// Log current unit and converted temperature",
                expectedOutput: ["Unit changed to: ", "Temperature: "] // Will be followed by unit and temp
            },
            {
                id: "32-3",
                title: "Weather Icon Display",
                description: "Display appropriate weather icons based on the weather condition code. Log the condition and corresponding icon.",
                starterCode: "// Your code here to display weather icons\n// Log condition and corresponding icon",
                expectedOutput: ["Weather condition: ", "Icon: "] // Will be followed by condition and icon
            }
        ]
    },
    {
        day: 33,
        title: "Weather App (Project 2)",
        concept: "Enhancing the weather application with additional features like forecasts, geolocation, and data persistence.",
        projects: [
            {
                id: "33-1",
                title: "5-Day Forecast Carousel",
                description: "Add a horizontal carousel to display a 5-day weather forecast. Log the dates and temperatures being displayed.",
                starterCode: "// Your code here to create a forecast carousel\n// Log dates and temperatures being displayed",
                expectedOutput: ["Forecast for: ", "Temperature: "] // Will be followed by date and temp
            },
            {
                id: "33-2",
                title: "Geolocation Auto-Detect",
                description: "Use the Geolocation API to automatically detect the user's location and fetch local weather. Log the coordinates and detected location.",
                starterCode: "// Your code here to implement geolocation\n// Log coordinates and detected location",
                expectedOutput: ["Coordinates: ", "Detected location: "] // Will be followed by coords and location
            },
            {
                id: "33-3",
                title: "Search History (LocalStorage)",
                description: "Save recent city searches to localStorage and display them as quick-access buttons. Log when cities are added to or loaded from history.",
                starterCode: "// Your code here to implement search history\n// Log history operations",
                expectedOutput: ["Added to history: ", "Loaded history: "] // Will be followed by city and count
            }
        ]
    },
    {
        day: 34,
        title: "News App (Project 1)",
        concept: "Building a news application that fetches and displays articles from a news API.",
        projects: [
            {
                id: "34-1",
                title: "Headline Fetcher",
                description: "Create a function that fetches and displays top news headlines. Log the fetch status and number of articles loaded.",
                starterCode: "// Your code here to fetch headlines\n// Log fetch status and article count",
                expectedOutput: ["Fetching headlines...", "Loaded articles: "] // Will be followed by count
            },
            {
                id: "34-2",
                title: "Pagination Controls",
                description: "Add pagination controls to navigate through multiple pages of news articles. Log the current page and articles per page.",
                starterCode: "// Your code here to implement pagination\n// Log current page and articles per page",
                expectedOutput: ["Page: ", "Articles per page: "] // Will be followed by numbers
            },
            {
                id: "34-3",
                title: "Article Preview (New Tab)",
                description: "Create article previews with links that open the full article in a new tab. Log when an article is clicked and its URL.",
                starterCode: "// Your code here to create article previews\n// Log click events and URLs",
                expectedOutput: ["Article clicked: ", "Opening URL: "] // Will be followed by title and URL
            }
        ]
    },
    {
        day: 35,
        title: "News App (Project 2)",
        concept: "Enhancing the news application with additional features like filtering, searching, and optimized loading.",
        projects: [
            {
                id: "35-1",
                title: "Category Filter",
                description: "Add a dropdown to filter news by category (e.g., sports, technology). Log the selected category and filtered article count.",
                starterCode: "// Your code here to implement category filtering\n// Log selected category and article count",
                expectedOutput: ["Category: ", "Filtered articles: "] // Will be followed by category and count
            },
            {
                id: "35-2",
                title: "Keyword Search",
                description: "Add a search input to filter articles by keyword. Log the search term and matching article count.",
                starterCode: "// Your code here to implement keyword search\n// Log search term and matching article count",
                expectedOutput: ["Searching for: ", "Matches: "] // Will be followed by term and count
            },
            {
                id: "35-3",
                title: "Lazy-Load Thumbnails",
                description: "Implement lazy loading for article thumbnail images to improve performance. Log when images are loaded into view.",
                starterCode: "// Your code here to implement lazy loading\n// Log when images are loaded",
                expectedOutput: ["Lazy loading image: ", "Image in viewport: "] // Will be followed by image info
            }
        ]
    },
    // Week 6: Data Storage & JSON (Days 36-40)
    {
        day: 36,
        title: "LocalStorage 1",
        concept: "Learning how to use the browser's localStorage API to persist data between page reloads.",
        projects: [
            {
                id: "36-1",
                title: "Theme Switcher",
                description: "Create a theme switcher that saves the user's preference to localStorage. Log when a theme is selected and when it's loaded from storage.",
                starterCode: "// Your code here to create a theme switcher\n// Log theme operations",
                expectedOutput: ["Theme selected: ", "Theme loaded from storage: "] // Will be followed by theme name
            },
            {
                id: "36-2",
                title: "Form Input Restore",
                description: "Save form input values to localStorage and restore them when the page reloads. Log when values are saved and restored.",
                starterCode: "// Your code here to implement form persistence\n// Log save and restore operations",
                expectedOutput: ["Form values saved", "Form values restored"]
            },
            {
                id: "36-3",
                title: "Note Counter",
                description: "Create a counter that tracks how many notes a user has created across sessions. Log the current count and when it changes.",
                starterCode: "// Your code here to implement a persistent counter\n// Log the current count and changes",
                expectedOutput: ["Current note count: ", "Count updated to: "] // Will be followed by numbers
            }
        ]
    },
    {
        day: 37,
        title: "LocalStorage 2",
        concept: "Advanced techniques for working with localStorage, including storing complex data structures and managing storage limitations.",
        projects: [
            {
                id: "37-1",
                title: "Shopping Cart Saver",
                description: "Create a shopping cart that persists items between sessions using localStorage. Log cart operations and item counts.",
                starterCode: "// Your code here to implement a persistent cart\n// Log cart operations and item counts",
                expectedOutput: ["Item added to cart: ", "Cart loaded with items: "] // Will be followed by item and count
            },
            {
                id: "37-2",
                title: "\"Remember Me\" Checkbox",
                description: "Implement a \"Remember Me\" checkbox for a login form that saves the username. Log when credentials are saved and loaded.",
                starterCode: "// Your code here to implement 'Remember Me'\n// Log when credentials are saved and loaded",
                expectedOutput: ["Credentials saved", "Credentials loaded"]
            },
            {
                id: "37-3",
                title: "Sidebar State Saver",
                description: "Save the open/closed state of a sidebar menu to localStorage. Log when the state changes and when it's loaded from storage.",
                starterCode: "// Your code here to save sidebar state\n// Log state changes and loading",
                expectedOutput: ["Sidebar state changed to: ", "Sidebar state loaded: "] // Will be followed by state
            }
        ]
    },
    {
        day: 38,
        title: "JSON Deep Dive",
        concept: "Understanding JSON (JavaScript Object Notation) for data interchange, including parsing, stringifying, and working with complex data structures.",
        projects: [
            {
                id: "38-1",
                title: "JSON Formatter Tool",
                description: "Create a tool that validates and formats JSON input. Log the validation result and any errors found.",
                starterCode: "// Your code here to create a JSON formatter\n// Log validation results and errors",
                expectedOutput: ["JSON valid: ", "Formatted JSON: "] // Will be followed by true/false and JSON
            },
            {
                id: "38-2",
                title: "Nested JSON Parser",
                description: "Create a function that navigates and extracts values from deeply nested JSON objects. Log the path and extracted values.",
                starterCode: "// Your code here to create a nested JSON parser\n// Log paths and extracted values",
                expectedOutput: ["Path: ", "Value: "] // Will be followed by path and value
            },
            {
                id: "38-3",
                title: "Mock API Payload Sender",
                description: "Create a function that constructs and sends mock JSON payloads for testing. Log the constructed payload and response.",
                starterCode: "// Your code here to create a mock API sender\n// Log payloads and responses",
                expectedOutput: ["Sending payload: ", "Received response: "] // Will be followed by JSON
            }
        ]
    },
    {
        day: 39,
        title: "Expense Tracker (Project 1)",
        concept: "Building an expense tracking application that allows users to record and categorize their expenses.",
        projects: [
            {
                id: "39-1",
                title: "Income/Expense Input",
                description: "Create a form for entering income and expense transactions. Log each transaction as it's added.",
                starterCode: "// Your code here to create transaction inputs\n// Log transactions as they're added",
                expectedOutput: ["Transaction added: ", "Amount: "] // Will be followed by type and amount
            },
            {
                id: "39-2",
                title: "Total Calculator",
                description: "Calculate and display the current balance based on all transactions. Log the updated balance after each transaction.",
                starterCode: "// Your code here to calculate totals\n// Log updated balance after each transaction",
                expectedOutput: ["New transaction: ", "Updated balance: "] // Will be followed by details and balance
            },
            {
                id: "39-3",
                title: "Entry Deletion",
                description: "Add the ability to delete transactions and update the balance. Log when transactions are deleted and the new balance.",
                starterCode: "// Your code here to implement deletion\n// Log deletion and balance updates",
                expectedOutput: ["Transaction deleted: ", "New balance: "] // Will be followed by details and balance
            }
        ]
    },
    {
        day: 40,
        title: "Expense Tracker (Project 2)",
        concept: "Enhancing the expense tracker with additional features like categorization, visualization, and data export.",
        projects: [
            {
                id: "40-1",
                title: "Category Filter",
                description: "Add categories to transactions and a filter to view transactions by category. Log the selected category and filtered total.",
                starterCode: "// Your code here to implement categories\n// Log selected category and filtered total",
                expectedOutput: ["Category: ", "Filtered total: "] // Will be followed by category and amount
            },
            {
                id: "40-2",
                title: "Bar Chart Visualization",
                description: "Create a simple bar chart to visualize expenses by category. Log the data being visualized.",
                starterCode: "// Your code here to create a bar chart\n// Log the data being visualized",
                expectedOutput: ["Visualizing data: ", "Categories: "] // Will be followed by data and categories
            },
            {
                id: "40-3",
                title: "JSON Data Export",
                description: "Add a feature to export all transaction data as a JSON file. Log when data is exported and the number of transactions.",
                starterCode: "// Your code here to implement data export\n// Log export operations",
                expectedOutput: ["Exporting data...", "Exported transactions: "] // Will be followed by count
            }
        ]
    },
    // Week 7: Mini Projects (Days 41-43)
    {
        day: 41,
        title: "Quote Generator",
        concept: "Building a random quote generator that fetches quotes from an API and allows users to copy and save their favorites.",
        projects: [
            {
                id: "41-1",
                title: "API-Powered Quotes",
                description: "Fetch random quotes from a quotes API and display them. Log the fetch operation and the received quote.",
                starterCode: "// Your code here to fetch random quotes\n// Log fetch operation and received quote",
                expectedOutput: ["Fetching quote...", "Quote received: "] // Will be followed by quote text
            },
            {
                id: "41-2",
                title: "Copy-to-Clipboard",
                description: "Add a button to copy the current quote to the clipboard. Log when a quote is copied.",
                starterCode: "// Your code here to implement copy feature\n// Log when quotes are copied",
                expectedOutput: ["Copied to clipboard: "] // Will be followed by quote text
            },
            {
                id: "41-3",
                title: "Quote History",
                description: "Keep a history of previously displayed quotes and allow users to navigate through them. Log when navigating through history.",
                starterCode: "// Your code here to implement quote history\n// Log history navigation",
                expectedOutput: ["History size: ", "Viewing quote #: "] // Will be followed by size and index
            }
        ]
    },
    {
        day: 42,
        title: "Clock + Alarm",
        concept: "Creating a digital clock with alarm functionality using JavaScript's Date object and timing functions.",
        projects: [
            {
                id: "42-1",
                title: "Digital Clock",
                description: "Create a digital clock that updates in real-time. Log the current time each minute.",
                starterCode: "// Your code here to create a digital clock\n// Log the current time each minute",
                expectedOutput: ["Current time: "] // Will be followed by time
            },
            {
                id: "42-2",
                title: "Alarm Setter",
                description: "Add a form to set alarms at specific times. Log when alarms are set and the time remaining.",
                starterCode: "// Your code here to implement alarm setting\n// Log alarm operations",
                expectedOutput: ["Alarm set for: ", "Time remaining: "] // Will be followed by time and duration
            },
            {
                id: "42-3",
                title: "Alarm Notification",
                description: "Create visual and audio notifications for when alarms trigger. Log when alarms trigger and are dismissed.",
                starterCode: "// Your code here to implement alarm notifications\n// Log alarm triggers and dismissals",
                expectedOutput: ["Alarm triggered: ", "Alarm dismissed: "] // Will be followed by alarm details
            }
        ]
    },
    {
        day: 43,
        title: "Bookmark Manager",
        concept: "Building a bookmark manager that allows users to save, categorize, and access their favorite websites.",
        projects: [
            {
                id: "43-1",
                title: "Bookmark CRUD",
                description: "Implement create, read, update, and delete operations for bookmarks. Log each operation and the affected bookmark.",
                starterCode: "// Your code here to implement bookmark CRUD\n// Log operations and affected bookmarks",
                expectedOutput: ["Bookmark added: ", "Bookmark updated: ", "Bookmark deleted: "] // Will be followed by details
            },
            {
                id: "43-2",
                title: "LocalStorage Sync",
                description: "Save bookmarks to localStorage and load them when the page opens. Log save and load operations.",
                starterCode: "// Your code here to implement bookmark persistence\n// Log save and load operations",
                expectedOutput: ["Bookmarks saved: ", "Bookmarks loaded: "] // Will be followed by counts
            },
            {
                id: "43-3",
                title: "Open in New Tab",
                description: "Add functionality to open bookmarks in new tabs. Log when bookmarks are opened and the URL.",
                starterCode: "// Your code here to implement bookmark opening\n// Log when bookmarks are opened",
                expectedOutput: ["Opening bookmark: ", "URL: "] // Will be followed by title and URL
            }
        ]
    },
    // Week 8: Debugging & Error Handling (Days 44-48)
    {
        day: 44,
        title: "Debugging Basics",
        concept: "Learning essential debugging techniques using browser developer tools and console methods.",
        projects: [
            {
                id: "44-1",
                title: "Console Methods Explorer",
                description: "Create examples of different console methods (log, warn, error, table, etc.). Log the method name and its output.",
                starterCode: "// Your code here to demonstrate console methods\n// Log method names and outputs",
                expectedOutput: ["Method: console.log", "Method: console.warn", "Method: console.error"]
            },
            {
                id: "44-2",
                title: "Breakpoint Debugging",
                description: "Create a function with a bug and use breakpoints to find and fix it. Log the debugging process and solution.",
                starterCode: "// Your code here to create a function with a bug\n// Log debugging process and solution",
                expectedOutput: ["Bug identified: ", "Solution: "] // Will be followed by details
            },
            {
                id: "44-3",
                title: "Performance Timing",
                description: "Use console.time() and console.timeEnd() to measure the performance of different code approaches. Log the timing results.",
                starterCode: "// Your code here to measure performance\n// Log timing results",
                expectedOutput: ["Approach 1 time: ", "Approach 2 time: "] // Will be followed by times
            }
        ]
    },
    {
        day: 45,
        title: "Error Handling",
        concept: "Understanding how to handle errors gracefully using try/catch blocks and custom error objects.",
        projects: [
            {
                id: "45-1",
                title: "Try/Catch Implementation",
                description: "Create functions that might throw errors and handle them with try/catch blocks. Log the errors and recovery actions.",
                starterCode: "// Your code here to implement try/catch\n// Log errors and recovery actions",
                expectedOutput: ["Error caught: ", "Recovery action: "] // Will be followed by details
            },
            {
                id: "45-2",
                title: "Custom Error Types",
                description: "Create and use custom error types for different error scenarios. Log the error type and message when caught.",
                starterCode: "// Your code here to create custom errors\n// Log error types and messages",
                expectedOutput: ["Error type: ", "Message: "] // Will be followed by type and message
            },
            {
                id: "45-3",
                title: "Async Error Handling",
                description: "Implement error handling for asynchronous operations using try/catch with async/await. Log the async errors and recovery.",
                starterCode: "// Your code here to handle async errors\n// Log async errors and recovery",
                expectedOutput: ["Async error caught: ", "Async recovery: "] // Will be followed by details
            }
        ]
    },
    {
        day: 46,
        title: "Debugging DOM & Events",
        concept: "Techniques for debugging DOM-related issues and event handling problems.",
        projects: [
            {
                id: "46-1",
                title: "DOM Traversal Debugger",
                description: "Create a tool that logs the DOM hierarchy of a selected element. Log the element and its ancestors.",
                starterCode: "// Your code here to create a DOM traversal debugger\n// Log elements and their ancestors",
                expectedOutput: ["Selected element: ", "Parent: ", "Grandparent: "] // Will be followed by element info
            },
            {
                id: "46-2",
                title: "Event Listener Inspector",
                description: "Create a tool that shows all event listeners attached to an element. Log the element and its listeners.",
                starterCode: "// Your code here to create an event inspector\n// Log elements and their listeners",
                expectedOutput: ["Element: ", "Listeners: "] // Will be followed by element and listener info
            },
            {
                id: "46-3",
                title: "Event Propagation Visualizer",
                description: "Create a visualization of event bubbling and capturing. Log each phase and the elements involved.",
                starterCode: "// Your code here to visualize event propagation\n// Log phases and elements",
                expectedOutput: ["Capture phase: ", "Target phase: ", "Bubble phase: "] // Will be followed by element info
            }
        ]
    },
    {
        day: 47,
        title: "Memory & Performance",
        concept: "Understanding memory management and performance optimization in JavaScript applications.",
        projects: [
            {
                id: "47-1",
                title: "Memory Leak Detector",
                description: "Create examples of common memory leaks and a tool to detect them. Log the leak type and affected objects.",
                starterCode: "// Your code here to demonstrate memory leaks\n// Log leak types and affected objects",
                expectedOutput: ["Leak type: ", "Affected objects: "] // Will be followed by details
            },
            {
                id: "47-2",
                title: "Performance Profiler",
                description: "Create a simple profiler to measure function execution time. Log function names and their execution times.",
                starterCode: "// Your code here to create a performance profiler\n// Log function names and execution times",
                expectedOutput: ["Profiling: ", "Execution time: "] // Will be followed by function and time
            },
            {
                id: "47-3",
                title: "Resource Loading Optimizer",
                description: "Implement techniques to optimize resource loading (lazy loading, preloading). Log loading strategies and timing improvements.",
                starterCode: "// Your code here to optimize resource loading\n// Log strategies and improvements",
                expectedOutput: ["Strategy: ", "Improvement: "] // Will be followed by strategy and time saved
            }
        ]
    },
    {
        day: 48,
        title: "Testing & Validation",
        concept: "Introduction to testing JavaScript code using simple testing techniques and validation approaches.",
        projects: [
            {
                id: "48-1",
                title: "Simple Test Runner",
                description: "Create a basic test runner that validates function outputs against expected results. Log test names and pass/fail status.",
                starterCode: "// Your code here to create a test runner\n// Log test names and status",
                expectedOutput: ["Test: ", "Status: "] // Will be followed by test name and pass/fail
            },
            {
                id: "48-2",
                title: "Input Validator",
                description: "Create a validation library for common input types (email, phone, etc.). Log validation rules and results.",
                starterCode: "// Your code here to create input validators\n// Log validation rules and results",
                expectedOutput: ["Validating: ", "Rule: ", "Result: "] // Will be followed by details
            },
            {
                id: "48-3",
                title: "Mock Object Factory",
                description: "Create a factory for generating mock objects for testing. Log the mock configuration and generated objects.",
                starterCode: "// Your code here to create a mock factory\n// Log configurations and generated mocks",
                expectedOutput: ["Mock config: ", "Generated mock: "] // Will be followed by details
            }
        ]
    },
    // Week 9: Final Projects (Days 49-60)
    {
        day: 49,
        title: "Movie Search App (Project 1)",
        concept: "Building a movie search application using the OMDB API to search for and display movie information.",
        projects: [
            {
                id: "49-1",
                title: "Search Form & API Integration",
                description: "Create a search form that queries the OMDB API for movies. Log search terms and API responses.",
                starterCode: "// Your code here to create a movie search\n// Log search terms and API responses",
                expectedOutput: ["Searching for: ", "API response: "] // Will be followed by term and response
            },
            {
                id: "49-2",
                title: "Movie Card Display",
                description: "Create cards to display movie information including title, poster, and year. Log when cards are created and their data.",
                starterCode: "// Your code here to create movie cards\n// Log card creation and data",
                expectedOutput: ["Creating card for: ", "Movie data: "] // Will be followed by title and data
            },
            {
                id: "49-3",
                title: "Favorites System",
                description: "Add the ability to mark movies as favorites and save them to localStorage. Log when movies are added to or removed from favorites.",
                starterCode: "// Your code here to implement favorites\n// Log favorites operations",
                expectedOutput: ["Added to favorites: ", "Removed from favorites: "] // Will be followed by titles
            }
        ]
    },
    {
        day: 50,
        title: "Movie Search App (Project 2)",
        concept: "Enhancing the movie search application with additional features like detailed views, ratings, and advanced filtering.",
        projects: [
            {
                id: "50-1",
                title: "Movie Details Modal",
                description: "Create a modal that shows detailed information about a selected movie. Log when the modal opens and the movie details.",
                starterCode: "// Your code here to create a details modal\n// Log modal operations and movie details",
                expectedOutput: ["Opening details for: ", "Movie details: "] // Will be followed by title and details
            },
            {
                id: "50-2",
                title: "Rating System",
                description: "Add the ability for users to rate movies and save their ratings. Log when ratings are added or updated.",
                starterCode: "// Your code here to implement ratings\n// Log rating operations",
                expectedOutput: ["Rating added: ", "New rating: "] // Will be followed by title and rating
            },
            {
                id: "50-3",
                title: "Advanced Filters",
                description: "Add filters for year, type, and other movie attributes. Log the active filters and filtered results count.",
                starterCode: "// Your code here to implement advanced filters\n// Log active filters and results",
                expectedOutput: ["Active filters: ", "Filtered results: "] // Will be followed by filters and count
            }
        ]
    },
    {
        day: 51,
        title: "Portfolio Page (Project 1)",
        concept: "Building a personal portfolio website to showcase projects and skills using HTML, CSS, and JavaScript.",
        projects: [
            {
                id: "51-1",
                title: "Responsive Layout",
                description: "Create a responsive layout for the portfolio that works on different screen sizes. Log the current viewport size and active breakpoint.",
                starterCode: "// Your code here to create a responsive layout\n// Log viewport size and active breakpoint",
                expectedOutput: ["Viewport size: ", "Active breakpoint: "] // Will be followed by dimensions and breakpoint
            },
            {
                id: "51-2",
                title: "Project Cards",
                description: "Create cards to display portfolio projects with images, descriptions, and links. Log when cards are created and their data.",
                starterCode: "// Your code here to create project cards\n// Log card creation and data",
                expectedOutput: ["Creating card for: ", "Project data: "] // Will be followed by title and data
            },
            {
                id: "51-3",
                title: "Navigation Menu",
                description: "Create a navigation menu with smooth scrolling to different sections. Log navigation events and target sections.",
                starterCode: "// Your code here to create navigation\n// Log navigation events and targets",
                expectedOutput: ["Navigating to: ", "Target section: "] // Will be followed by link and section
            }
        ]
    },
    {
        day: 52,
        title: "Portfolio Page (Project 2)",
        concept: "Enhancing the portfolio website with additional features like filtering, animations, and contact form.",
        projects: [
            {
                id: "52-1",
                title: "Project Filter",
                description: "Add category filters to show different types of projects. Log the active filter and filtered projects count.",
                starterCode: "// Your code here to implement project filtering\n// Log active filter and project count",
                expectedOutput: ["Active filter: ", "Showing projects: "] // Will be followed by filter and count
            },
            {
                id: "52-2",
                title: "Scroll Animations",
                description: "Add animations that trigger as elements scroll into view. Log when animations are triggered and their targets.",
                starterCode: "// Your code here to implement scroll animations\n// Log animation triggers and targets",
                expectedOutput: ["Animation triggered: ", "Target element: "] // Will be followed by animation and element
            },
            {
                id: "52-3",
                title: "Contact Form",
                description: "Create a contact form with validation and submission handling. Log form validation and submission events.",
                starterCode: "// Your code here to create a contact form\n// Log validation and submission events",
                expectedOutput: ["Form validation: ", "Form submitted: "] // Will be followed by status and data
            }
        ]
    },
    {
        day: 53,
        title: "Pomodoro Timer (Project 1)",
        concept: "Building a Pomodoro timer application to help users manage their work and break time.",
        projects: [
            {
                id: "53-1",
                title: "Timer Display",
                description: "Create a countdown timer display that shows minutes and seconds. Log the current time remaining each minute.",
                starterCode: "// Your code here to create a timer display\n// Log time remaining each minute",
                expectedOutput: ["Time remaining: "] // Will be followed by time
            },
            {
                id: "53-2",
                title: "Start/Pause/Reset Controls",
                description: "Add buttons to start, pause, and reset the timer. Log when each control is used and the timer state.",
                starterCode: "// Your code here to implement timer controls\n// Log control usage and timer state",
                expectedOutput: ["Timer started", "Timer paused", "Timer reset"]
            },
            {
                id: "53-3",
                title: "Work/Break Cycles",
                description: "Implement alternating work and break periods. Log when cycles change and the current cycle type.",
                starterCode: "// Your code here to implement work/break cycles\n// Log cycle changes and types",
                expectedOutput: ["Cycle changed: ", "Current cycle: "] // Will be followed by change and type
            }
        ]
    },
    {
        day: 54,
        title: "Pomodoro Timer (Project 2)",
        concept: "Enhancing the Pomodoro timer with additional features like settings, notifications, and statistics.",
        projects: [
            {
                id: "54-1",
                title: "Custom Duration Settings",
                description: "Add settings to customize work and break durations. Log when settings are changed and the new values.",
                starterCode: "// Your code here to implement custom durations\n// Log setting changes and new values",
                expectedOutput: ["Setting changed: ", "New value: "] // Will be followed by setting and value
            },
            {
                id: "54-2",
                title: "Audio Notifications",
                description: "Add audio notifications for when timers end. Log when notifications are triggered and their type.",
                starterCode: "// Your code here to implement audio notifications\n// Log notification triggers and types",
                expectedOutput: ["Notification triggered: ", "Type: "] // Will be followed by trigger and type
            },
            {
                id: "54-3",
                title: "Session Statistics",
                description: "Track and display statistics about completed work and break sessions. Log when statistics are updated and the new values.",
                starterCode: "// Your code here to implement session statistics\n// Log statistic updates and values",
                expectedOutput: ["Statistic updated: ", "New value: "] // Will be followed by statistic and value
            }
        ]
    },
    {
        day: 55,
        title: "Quiz App (Project 1)",
        concept: "Building a quiz application that presents questions, accepts answers, and provides feedback.",
        projects: [
            {
                id: "55-1",
                title: "Question Display",
                description: "Create a display for showing quiz questions and answer options. Log when questions are displayed and their content.",
                starterCode: "// Your code here to create a question display\n// Log question displays and content",
                expectedOutput: ["Displaying question: ", "Options: "] // Will be followed by question and options
            },
            {
                id: "55-2",
                title: "Answer Validation",
                description: "Implement answer checking and feedback. Log when answers are submitted and whether they're correct.",
                starterCode: "// Your code here to implement answer validation\n// Log answer submissions and correctness",
                expectedOutput: ["Answer submitted: ", "Correct: "] // Will be followed by answer and true/false
            },
            {
                id: "55-3",
                title: "Quiz Navigation",
                description: "Add controls to navigate between questions and track progress. Log navigation events and current position.",
                starterCode: "// Your code here to implement quiz navigation\n// Log navigation events and position",
                expectedOutput: ["Navigation: ", "Current question: "] // Will be followed by direction and number
            }
        ]
    },
    {
        day: 56,
        title: "Quiz App (Project 2)",
        concept: "Enhancing the quiz application with additional features like scoring, timers, and different question types.",
        projects: [
            {
                id: "56-1",
                title: "Scoring System",
                description: "Implement a scoring system that awards points for correct answers. Log when scores are updated and the new total.",
                starterCode: "// Your code here to implement scoring\n// Log score updates and totals",
                expectedOutput: ["Score updated: +", "New total: "] // Will be followed by points and total
            },
            {
                id: "56-2",
                title: "Question Timer",
                description: "Add a timer for each question with time limits. Log when timers start, end, and the time taken to answer.",
                starterCode: "// Your code here to implement question timers\n// Log timer events and durations",
                expectedOutput: ["Timer started", "Time taken: "] // Will be followed by duration
            },
            {
                id: "56-3",
                title: "Multiple Question Types",
                description: "Support different question types (multiple choice, true/false, text input). Log the question type and validation method.",
                starterCode: "// Your code here to support multiple question types\n// Log question types and validation methods",
                expectedOutput: ["Question type: ", "Validation method: "] // Will be followed by type and method
            }
        ]
    },
    {
        day: 57,
        title: "Final Project Planning",
        concept: "Planning and setting up the structure for a comprehensive final project that combines multiple concepts learned throughout the course.",
        projects: [
            {
                id: "57-1",
                title: "Project Requirements",
                description: "Define the requirements and features for your final project. Log the project title and key requirements.",
                starterCode: "// Your code here to define project requirements\n// Log project title and requirements",
                expectedOutput: ["Project title: ", "Requirements: "] // Will be followed by title and requirements
            },
            {
                id: "57-2",
                title: "Component Structure",
                description: "Plan the component structure and data flow for your project. Log the components and their relationships.",
                starterCode: "// Your code here to plan component structure\n// Log components and relationships",
                expectedOutput: ["Components: ", "Relationships: "] // Will be followed by components and relationships
            },
            {
                id: "57-3",
                title: "API & Data Planning",
                description: "Identify the data sources and API endpoints needed for your project. Log the data requirements and sources.",
                starterCode: "// Your code here to plan data sources\n// Log data requirements and sources",
                expectedOutput: ["Data required: ", "Sources: "] // Will be followed by data and sources
            }
        ]
    },
    {
        day: 58,
        title: "Final Project Development 1",
        concept: "Beginning the development of your final project, focusing on core functionality and structure.",
        projects: [
            {
                id: "58-1",
                title: "Project Setup",
                description: "Set up the basic structure and files for your project. Log the project structure and initialization steps.",
                starterCode: "// Your code here to set up project structure\n// Log structure and initialization",
                expectedOutput: ["Project structure: ", "Initialization: "] // Will be followed by structure and steps
            },
            {
                id: "58-2",
                title: "Core Functionality",
                description: "Implement the core functionality of your project. Log the features being implemented and their status.",
                starterCode: "// Your code here to implement core functionality\n// Log features and status",
                expectedOutput: ["Feature: ", "Status: "] // Will be followed by feature and status
            },
            {
                id: "58-3",
                title: "Data Integration",
                description: "Integrate data sources and APIs into your project. Log the data being fetched and processed.",
                starterCode: "// Your code here to integrate data\n// Log data fetching and processing",
                expectedOutput: ["Fetching data from: ", "Processing: "] // Will be followed by source and data
            }
        ]
    },
    {
        day: 59,
        title: "Final Project Development 2",
        concept: "Continuing the development of your final project, focusing on UI/UX and additional features.",
        projects: [
            {
                id: "59-1",
                title: "UI Refinement",
                description: "Refine the user interface of your project for better usability. Log the UI components being refined and the improvements.",
                starterCode: "// Your code here to refine UI\n// Log components and improvements",
                expectedOutput: ["Refining component: ", "Improvement: "] // Will be followed by component and improvement
            },
            {
                id: "59-2",
                title: "Feature Expansion",
                description: "Add additional features to enhance your project. Log the new features being added and their implementation status.",
                starterCode: "// Your code here to add features\n// Log new features and status",
                expectedOutput: ["New feature: ", "Implementation: "] // Will be followed by feature and status
            },
            {
                id: "59-3",
                title: "Testing & Debugging",
                description: "Test your project and fix any bugs or issues. Log the tests performed and bugs fixed.",
                starterCode: "// Your code here to test and debug\n// Log tests and bug fixes",
                expectedOutput: ["Test: ", "Bug fixed: "] // Will be followed by test and bug
            }
        ]
    },
    {
        day: 60,
        title: "Final Project Completion",
        concept: "Completing and polishing your final project, ensuring it meets all requirements and is ready for presentation.",
        projects: [
            {
                id: "60-1",
                title: "Final Polishing",
                description: "Polish your project by improving performance, accessibility, and user experience. Log the areas being polished and the improvements.",
                starterCode: "// Your code here to polish your project\n// Log areas and improvements",
                expectedOutput: ["Polishing: ", "Improvement: "] // Will be followed by area and improvement
            },
            {
                id: "60-2",
                title: "Documentation",
                description: "Create documentation for your project including usage instructions and code comments. Log the documentation being created.",
                starterCode: "// Your code here to create documentation\n// Log documentation sections",
                expectedOutput: ["Documenting: ", "Section: "] // Will be followed by type and section
            },
            {
                id: "60-3",
                title: "Deployment",
                description: "Prepare your project for deployment and share it with others. Log the deployment steps and final URL.",
                starterCode: "// Your code here to prepare for deployment\n// Log deployment steps and URL",
                expectedOutput: ["Deployment step: ", "Final URL: "] // Will be followed by step and URL
            }
        ]
    }
];
