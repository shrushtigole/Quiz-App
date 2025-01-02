function signup() {
    console.log("funtion")

    var fullName = document.getElementById("Username").value ;
    var email = document.getElementById("Email").value ;
    var password = document.getElementById("Password").value ;


    //#########Validation##########//

    function validateSignup(fullName, email, password) {
        const regexname = /^[a-zA-Z]{2,50}(?: [a-zA-Z]{2,50})*(?:[-' ][a-zA-Z]{2,50})*$/;   //name: small and caps letters with size 
        const regexmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;   //email: small and caps letters berfore and after @ and .
        const regexpassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;  //password: one lowercase, one uppercase, atlest one digit, one special character.
    
        
        const isnameValid = regexname.test(fullName);
        const isemailValid = regexmail.test(email);
        const ispasswordValid = regexpassword.test(password);
    
        if(!isnameValid) {
           alert("Name is Invalid") 
           return false;
        }
        
        if(!isemailValid){
            alert("Email is Invalid")
            return false;
        }
    
        if(!ispasswordValid){
            alert("Password is Invalid")
            return false;
        }

        return true;
    }

    // Call validateSignup before proceeding
    if (!validateSignup(fullName, email, password)) {
        return; // If validation fails, exit the signup function
    }
    


    // localStorage.setItem("userName",fullName);
    // localStorage.setItem("userEmail",email);
    // localStorage.setItem("userPassword",password);


    //Retrieve the existing user information from local storage
    let userInfo = JSON.parse(localStorage.getItem("userInfo")) || [];

    //Check if the user already exist based on Email   
    const userExists = userInfo.some(user => user.mail === email);
    if (userExists){
        alert("This Email Already Exists");
        return;
    }

    var userDetail = {
        name: fullName,
        mail: email,
        password: password,
    }
    
    userInfo.push (userDetail);

    localStorage.setItem("userInfo",JSON.stringify(userInfo));
    alert("Signup Successful!");

    window.location="/Pages/login.html";
}



//#########################Login page###########################//

function login(){
    console.log("function")
    
    var email = document.getElementById("Email").value;
    var password = document.getElementById("Password").value;
    
    let userInfo = JSON.parse(localStorage.getItem("userInfo")) || [];
    const user = userInfo.find(user => user.mail === email);

    if(!user){
        alert("Invalid Email !");
        return;
    }

    if(user.password === password){
        alert("Login Successfull !");
        window.location="/Pages/Starting-quiz.html";
    }
    else{
        alert("Incorrect Password !");
    }
}


//#######################Start Quiz Page#########################//

function startQuiz(){
    alert("Do you want to start the Quiz?");
    window.location="/Pages/Quiz.html";
}

//#####################Quiz Page###############################//


const quizContent =[
    {
        question: "Which of the following is an output device?",
        answer:[
            {option:"Keyboard", correct:false},
            {option:"Joystick", correct:false},
            {option:"Printer", correct:true},
            {option:"None of the above", correct:false}
            ]
    },
    {
        question: "Which software must first be installed to a new computer from a manufacturer",
        answer:[
            {option:"Device Driver", correct:false},
            {option:"Operating System", correct:true},
            {option:"Application Software", correct:false},
            {option:"Utilities", correct:false}
        ]
    },
    {
        question: "A program that can copy itself and infect a computer without permission or knowledge of the owner is called what?",
        answer:[
            {option:"Floppy", correct:false},
            {option:"Virus", correct:true},
            {option:"Java", correct:false},
            {option:"Monitor", correct:false}
        ]
    },
    {
        question: "Instructions written by a programer for a computer use is called?",
        answer:[
            {option:"Hardware", correct:false},
            {option:"Software Instruction", correct:false},
            {option:"Software", correct:true},
            {option:"System Software", correct:false}
        ]
    },
    {
        question: "A Supervisor is a central component of",
        answer:[
            {option:"Software", correct:false},
            {option:"Operating System", correct:true},
            {option:"Device Driver", correct:false},
            {option:"Utilities", correct:false}
        ]
    },
    {
        question: "What does HTTP stands for?",
        answer:[
            {option:"Hypertext Transfer Protocol", correct:true},
            {option:"Hypertext Transfer Plotter", correct:false},
            {option:"Head Tail Tranfer Plot", correct:false},
            {option:"Head Tail Transfer Protocol", correct:false}
        ]
    },
    {
        question: "The software which provides specific services to its end user is called?",
        answer:[
            {option:"Application Software", correct:true},
            {option:"System Software", correct:false},
            {option:"Device driver", correct:false},
            {option:"Microsoft Office", correct:false}
        ]
    },
    {
        question: "What is normally used to configure a windows installation",
        answer:[
            {option:"System Configuration", correct:true},
            {option:"Safe mode", correct:false},
            {option:"Start up", correct:false},
            {option:"Live Mode", correct:false}
        ]
    },
    {
        question: "Which was the first Web browser?",
        answer:[
            {option:"WorldWideWeb", correct:true},
            {option:"Netscape Navigator", correct:false},
            {option:"Internet Explorer", correct:false},
            {option:"Safari", correct:false}
        ]
    },
    {
        question: "Which Operating Systems Source code is visible to its users?",
        answer:[
            {option:"Linux", correct:false},
            {option:"Ubuntu", correct:true},
            {option:"Windows", correct:false},
            {option:"Mac OS", correct:false}
        ]
    },
]

var quizWrapper = document.getElementById("quizContainer")
quizWrapper.innerHTML=
`<div class="questionHeading">
    <h1> Question 1 of 10 </h1>
</div>
<div id="quizWrapper">
    <p id="questionElement"> </p>
    <p id="answerOption"> </p>
</div>
`
let question = document.getElementById("questionElement") 
let answer = document.getElementById("answerOption")
let submit = document.getElementById("submit")
 
function submitAnswers(){
    let randomQuiz = quizContent[Math.floor(Math.random()*quizContent.length)] 
    
    question.innerHTML=randomQuiz.question
    answer.innerHTML=randomQuiz.answer
}































