function signup() {
    console.log("funtion")
    var fullName = document.getElementById("Username").value ;
    var email = document.getElementById("Email").value ;
    var password = document.getElementById("Password").value ;


    // localStorage.setItem("userName",fullName);
    // localStorage.setItem("userEmail",email);
    // localStorage.setItem("userPassword",password);

    let userInfo = JSON.parse(localStorage.getItem("userInfo")) || [];

    var userDetail = {
        name: fullName,
        mail: email,
        password: password,
    }
    
    userInfo.push (userDetail);

    localStorage.setItem("userInfo",JSON.stringify(userInfo));
}
 
//#########Validation##########//

function validateSignup(name, email, password) {
    const regexname = /^[a-zA-Z]{2,50}(?: [a-zA-Z]{2,50})*(?:[-' ][a-zA-Z]{2,50})*$/;   //name: small and caps letters with size 
    const regexmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;   //email: small and caps letters berfore and after @ and .
    const regexpassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;  //password: one lowercase, one uppercase, atlest one digit, one special character.

    
    const isnameValid = regexname.test(fullName);
    const isemailValid = regexmail.test(email);
    const ispasswordValid = regexpassword.test(password);

    return isnameValid && isemailValid && ispasswordValid;

    if(name === !isnameValid) {
       alert("Name can't be empty") 
    }
    
    if(email === !isemailValid){
        alert("Email can't be empty")
    }

    if(password === !ispasswordValid){
        alert("Email can't be empty")
    }
}





























