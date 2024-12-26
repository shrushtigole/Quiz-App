function signup() {
    console.log("funtion")

    var fullName = document.getElementById("Username").value ;
    var email = document.getElementById("Email").value ;
    var password = document.getElementById("Password").value ;


    //#########Validation##########//

    function validateSignup(fullName, email, password) {
        const regexname = /^[a-zA-Z]{2,50}(?: [a-zA-Z]{2,50})*(?:[-' ][a-zA-Z]{2,50})*$/;   //name: small and caps letters with size 
        const regexmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;   //email: small and caps letters berfore and after @ and .
        const regexpassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;  //password: one lowercase, one uppercase, atlest one digit, one special character.
    
        
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
    const userExists = userInfo.some(user => user.mail === email)

    var userDetail = {
        name: fullName,
        mail: email,
        password: password,
    }
    
    userInfo.push (userDetail);

    localStorage.setItem("userInfo",JSON.stringify(userInfo));
    alert("Signup Successful!")
}































