const questions =
[
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers:{
            a: "<script>",
            b: "<scripting>",
            c: "<javascript>",
            d: "<js>",
        },
        correctAnswer: "a"
    },
    {
        question: "What is the correct Javascript syntax to change the content of the HTMl element below?",
        answers:{
            a: "#demo.innerHTML = “Hello World!”;",
            b: "document.getElementById(“demo”).innerHTML = “Hello World!”;",
            c: "document.getElementByName(“p”).innerHTML = “Hello World!”;",
            d: "document.getElement(“p”).innerHTML = “Hello World!”;",
        },
        correctAnswer: "b"
    },
    {
        question: "Where is the correct place to insert JavaScript?",
        answer:{
            a: "The <head> section",
            b: "The <body> section",
            c: "Both the <head> section and the <body> section are correct",
        },
        correctAnswer: "c"
    },
    {
        question: "What is the correct syntax for referring to an external script called “xxx.js”?",
        answer:{
            a: "<script src=”xxx.js”>",
            b: "<script href=”xxx.js”>",
            c: "<script name=”xxx.js”>",
        },
        correctAnswer: "a"
    },
    {
        question: "The external JavaScript file must contain the <script> tag.",
        answer:{
            a: "True",
            b: "False",
        },
        correctAnswer: "b"
    },
    {
        question: "How do you write “Hello World” in an alert box?",
        answer:{
            a: "alertBox(“Hello World”);",
            b: "msgBox(“Hello World”);",
            c: "alert(“Hello World”);",
            d: "msg(“Hello World”);"
        },
        correctAnswer: "c"
    },
    {
        question: "How do you create a function in JavaScript?",
        answer:{
            a: "function = myFunction()",
            b: "function myFunction()",
            c: "function:myFunction()"
        },
        correctAnswer: "b"
    },
    {
        question: "How do you call a function named “myFunction”?",
        answer:{
            a: "call myFunction()",
            b: "call function myFunction()",
            c: "myFunction()"
        },
        correctAnswer: "c"
    },
    {
        question: "How to write an IF statement in JavaScript?",
        answer:{
            a: "if (i == 5)",
            b: "if i == 5 then",
            c: "if i = then",
            d: "if i = 5"
        },
        correctAnswer: "a"
    },
    {
        question: "How to write an IF statement for executing some code if “i” is NOT equal to 5?",
        answer:{
            a: "if i =! 5 then",
            b: "if (i != 5)",
            c: "if (i <> 5)",
            d: "if i <> 5"
        },
        correctAnswer: "b"
    },
    {
        question: "How does a WHILE loop start?",
        answer:{
            a: "while (i <= 10; i++)",
            b: "while (i <= 10)",
            c: "while i = 1 to 10",
        },
        correctAnswer: "b"
    },
    {
        question: "How does a FOR loop start?",
        answer:{
            a: "for (i <= 5; i++)",
            b: "for (i = 0; i <= 5)",
            c: "for i = 1 to 5",
            d: "for (i = 0; i <= 5; i++)"
        },
        correctAnswer: "d"
    },
    {
        question: "How can you add a comment in JavaScript?",
        answer:{
            a: "<!-- This is a comment -->",
            b: "‘This is a comment",
            c: "//This is a comment"
        },
        correctAnswer: "c"
    },
    {
        question: "What is the correct way to write a JavaScript array?",
        answer:{
            a: "var colors = “red”, “green”, “blue”",
            b: "var colors = [“red”, “green”, “blue”]",
            c: "var colors = 1 = (“red”), 2 = (“green”), blue =(“blue”)",
            d: "var colors = (1:“red”, 2:”green”, 3:”blue”)"
        },
        correctAnswer: "b"
    },
    {
        question: "How do you round the number 7.25, to the nearest integer?",
        answer:{
            a: "round(7.25)",
            b: "Math.rnd(7.25)",
            c: "rnd(7.25)",
            d: "Math.round(7.25)"
        },
        correctAnswer: "d"
    },
    {
        question: "How do you find the number with the highest value of x and y?",
        answer:{
            a: "ceil(x, y)",
            b: "top(x, y)",
            c: "Math.ceil(x, y)",
            d: "Math.max(x, y)"
        },
        correctAnswer: "d"
    },
    {
        question: "What is the correct Javascript syntax for opening a new window called “w2”?",
        answer:{
            a: "w2 = window.new(“http://www.w3wschools.com”);",
            b: "w2 = window.open(“http://www.w3wschools.com”);"
        },
        correctAnswer: "b"
    },
    {
        question: "JavaScript is the same as Java.",
        answer:{
            a: "True",
            b: "False",
        },
        correctAnswer: "b"
    },
    {
        question: "How can you detect the client’s browser name?",
        answer:{
            a: "client.navName",
            b: "browser.name",
            c: "navigator.appName"
        },
        correctAnswer: "c"
    },
    {
        question: "Which event occurs when the user clicks on an HTML elements?",
        answer:{
            a: "onclick",
            b: "onmouseclick",
            c: "onchange",
            d: "onmouseover"
        },
        correctAnswer: "a"
    },
    {
        question: "How do you declare a javaScipt variable?",
        answer:{
            a: "var carName;",
            b: "v carName;",
            c: "variable carName;"
        },
        correctAnswer: "a"
    },
    {
        question: "Which operator is used to assign a value to a variable?",
        answer:{
            a: "X",
            b: "*",
            c: "-",
            d: "="
        },
        correctAnswer: "d"
    },
    {
        question: "What will the following code return: Boolean(10>9)",
        answer:{
            a: "true",
            b: "false",
            d: "NaN"
        },
        correctAnswer: "a"
    },
    {
        question: "Is JavaScript case-sensitive?",
        answer:{
            a: "yes",
            b: "no"
        },
        correctAnswer: "a"
    }
]