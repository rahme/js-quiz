const questions =
[
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answer:{
            a: "script",
            b: "scripting",
            c: "javascript",
            d: "js",
        },
        correctAnswer: "script"
    },
    {
        question: "What is the correct Javascript syntax to change the content of the HTMl element below?",
        answer:{
            a: "#demo.innerHTML = “Hello World!”;",
            b: "document.getElementById(“demo”).innerHTML = “Hello World!”;",
            c: "document.getElementByName(“p”).innerHTML = “Hello World!”;",
            d: "document.getElement(“p”).innerHTML = “Hello World!”;",
        },
        correctAnswer: "document.getElementById(“demo”).innerHTML = “Hello World!”;"
    },
    {
        question: "Where is the correct place to insert JavaScript?",
        answer:{
            a: "The head> section",
            b: "The body> section",
            c: "The footer> section",
            d: "Both the head> section and the body> section are correct",
        },
        correctAnswer: "Both the head> section and the body> section are correct"
    },
    {
        question: "What is the correct syntax for referring to an external script called “xxx.js”?",
        answer:{
            a: "script src=”xxx.js”>",
            b: "script href=”xxx.js”>",
            c: "script name=”xxx.js”>",
            d: "script link=”xxx.js”>",
        },
        correctAnswer: "script src=”xxx.js”>"
    },
    {
        question: "How do you write “Hello World” in an alert box?",
        answer:{
            a: "alertBox(“Hello World”);",
            b: "msgBox(“Hello World”);",
            c: "alert(“Hello World”);",
            d: "msg(“Hello World”);"
        },
        correctAnswer: "alert(“Hello World”);"
    },
    {
        question: "How do you create a function in JavaScript?",
        answer:{
            a: "function = myFunction()",
            b: "function myFunction()",
            c: "function:myFunction()",
            d: "fucntion myFunction{}"
        },
        correctAnswer: "function myFunction()"
    },
    {
        question: "How do you call a function named “myFunction”?",
        answer:{
            a: "call myFunction()",
            b: "call function myFunction()",
            c: "myFunction()",
            d: "myFunction"
        },
        correctAnswer: "myFunction()"
    },
    {
        question: "How to write an IF statement in JavaScript?",
        answer:{
            a: "if (i == 5)",
            b: "if i == 5 then",
            c: "if i = then",
            d: "if i = 5"
        },
        correctAnswer: "if (i == 5)"
    },
    {
        question: "How to write an IF statement for executing some code if “i” is NOT equal to 5?",
        answer:{
            a: "if i =! 5 then",
            b: "if (i != 5)",
            c: "if (i <> 5)",
            d: "if i <> 5"
        },
        correctAnswer: "if (i != 5)"
    },
    {
        question: "How does a WHILE loop start?",
        answer:{
            a: "while (i <= 10; i++)",
            b: "while (i <= 10)",
            c: "while i = 1 to 10",
            d: "while i = 1 => 10"
        },
        correctAnswer: "while (i <= 10)"
    },
    {
        question: "How does a FOR loop start?",
        answer:{
            a: "for (i <= 5; i++)",
            b: "for (i = 0; i <= 5)",
            c: "for i = 1 to 5",
            d: "for (i = 0; i <= 5; i++)"
        },
        correctAnswer: "for (i = 0; i <= 5; i++)"
    },
    {
        question: "How can you add a comment in JavaScript?",
        answer:{
            a: "<!-- This is a comment -->",
            b: "‘This is a comment",
            c: "//This is a comment",
            d: ".This is a comment"
        },
        correctAnswer: "//This is a comment"
    },
    {
        question: "What is the correct way to write a JavaScript array?",
        answer:{
            a: "var colors = “red”, “green”, “blue”",
            b: "var colors = [“red”, “green”, “blue”]",
            c: "var colors = 1 = (“red”), 2 = (“green”), blue =(“blue”)",
            d: "var colors = (1:“red”, 2:”green”, 3:”blue”)"
        },
        correctAnswer: "var colors = [“red”, “green”, “blue”]"
    },
    {
        question: "How do you round the number 7.25, to the nearest integer?",
        answer:{
            a: "round(7.25)",
            b: "Math.rnd(7.25)",
            c: "rnd(7.25)",
            d: "Math.round(7.25)"
        },
        correctAnswer: "Math.round(7.25)"
    },
    {
        question: "How do you find the number with the highest value of x and y?",
        answer:{
            a: "ceil(x, y)",
            b: "top(x, y)",
            c: "Math.ceil(x, y)",
            d: "Math.max(x, y)"
        },
        correctAnswer: "Math.max(x, y)"
    },
    {
        question: "How can you detect the client’s browser name?",
        answer:{
            a: "client.navName",
            b: "browser.name",
            c: "navigator.appName",
            d: "internet.name"
        },
        correctAnswer: "navigator.appName"
    },
    {
        question: "Which event occurs when the user clicks on an HTML elements?",
        answer:{
            a: "onclick",
            b: "onmouseclick",
            c: "onchange",
            d: "onmouseover"
        },
        correctAnswer: "onclick"
    },
    {
        question: "How do you declare a javaScipt variable?",
        answer:{
            a: "var carName;",
            b: "v carName;",
            c: "variable carName;",
            d: "int carName;"
        },
        correctAnswer: "var carName;"
    },
    {
        question: "Which operator is used to assign a value to a variable?",
        answer:{
            a: "X",
            b: "*",
            c: "-",
            d: "="
        },
        correctAnswer: "="
    },
]

var questionNum = 0;
var score = 0;
var answer = ''


var button1 = document.getElementById("q1")
var button2 = document.getElementById("q2")
var button3 = document.getElementById("q3")
var button4 = document.getElementById("q4")

let body = document.getElementById("body")
let mainbody = document.getElementById("mainbody")
let timer = document.getElementById("countdown")


function startQuiz(){
    body.innerText = questions[questionNum].question

    button1.innerText = questions[questionNum].answer.a
    button2.innerText = questions[questionNum].answer.b
    button3.innerText = questions[questionNum].answer.c
    button4.innerText = questions[questionNum].answer.d
}

function clickStart(){
    //Title and Explanation Gets Removed
    document.getElementById("title").remove();
    document.getElementById("startBtn").remove();

    button1.removeAttribute("hidden")
    button2.removeAttribute("hidden")
    button3.removeAttribute("hidden")
    button4.removeAttribute("hidden")

    startQuiz();
    countdowntimer();
}

function scorer(){
    var correct = questions[questionNum].correctAnswer
    //console.log(correct)

    if (correct === answer){
        score++
    }
    console.log(score)

    if (questionNum === 19){alert("End of Quiz!")}

    questionNum++;
    
    startQuiz();
}

function countdowntimer() {
    var seconds = 30;

    var interval = setInterval(function() {
        timer.textContent = seconds
        seconds--;

        if (seconds === 0){
            alert("Quiz Time Over")
        }
    }, 1000);
}

var startBtn = document.querySelector("#startBtn");
startBtn.addEventListener("click", clickStart);

button1.addEventListener("click", function(){
    answer = button1.innerText
    console.log(answer)
    scorer(answer)
})
button2.addEventListener("click", function(){
    answer = button2.innerText
    console.log(answer)
    scorer(answer)
})
button3.addEventListener("click", function(){
    answer = button3.innerText
    console.log(answer)
    scorer(answer)
})
button4.addEventListener("click", function(){
    answer = button4.innerText
    console.log(answer)
    scorer(answer)
})

// console.log(questions[1].answers.b);

// {
//     question: "",
//     answer:{
//         a: "",
//         b: "",
//         c: "",
//         d: ""
//     },
//     correctAnswer: ""
// },
