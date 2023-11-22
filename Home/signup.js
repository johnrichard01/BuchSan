



//email validation
function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
//password validation
function isValidPassword(password) {
    var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return passwordRegex.test(password);
}
function passwordsMatch(password, confirmPassword) {
    return password === confirmPassword;
  }
//whole submit validation function
function validate(event){
    let fullnameVal = document.getElementById("fullname").value;
    let usernameVal = document.getElementById("username").value;
    let emailVal = document.getElementById("email").value;
    let passwordVal = document.getElementById("password").value;
    let confirmpasswordVal = document.getElementById("confirmpassword").value;
    let empty="";
    let isValid=true;

    if (fullnameVal==empty){
        event.preventDefault();
        document.getElementById("error-message1").classList.add("error-print");
        document.getElementById("infieldError1").classList.add("in-field-invalid");
        isValid=false;
    } if (usernameVal==empty){
        event.preventDefault();
        document.getElementById("error-message2").classList.add("error-print");
        document.getElementById("infieldError2").classList.add("in-field-invalid");
    } if (emailVal==empty){
        event.preventDefault();
        document.getElementById("error-message3").classList.add("error-print");
        document.getElementById("infieldError3").classList.add("in-field-invalid");
        isValid=false;
    } if (!isValidEmail(emailVal)){
        event.preventDefault();
        document.getElementById("error-message3").classList.add("error-print");
        document.getElementById("infieldError3").classList.add("in-field-invalid");
        isValid=false;
    } if(passwordVal==empty){
        event.preventDefault();
        document.getElementById("error-message4").classList.add("error-print");
        document.getElementById("infieldError4").classList.add("in-field-invalid");
        isValid=false;
    } if(!isValidPassword(passwordVal)){
        event.preventDefault();
        document.getElementById("error-message4").classList.add("error-print");
        document.getElementById("infieldError4").classList.add("in-field-invalid");
        isValid=false;
    } if(confirmpasswordVal==empty){
        event.preventDefault();
        document.getElementById("error-message5").classList.add("error-print");
        document.getElementById("infieldError5").classList.add("in-field-invalid");
        isValid=false;
    } if(!passwordsMatch(passwordVal, confirmpasswordVal)){
        event.preventDefault();
        document.getElementById("error-message5").classList.add("error-print");
        document.getElementById("infieldError5").classList.add("in-field-invalid");
        isValid=false;
    } if(isValid){
        saveData();
    }
}
//if you put values in input remove error
document.getElementById("fullname").addEventListener("input",function(){
    document.getElementById("error-message1").classList.remove("error-print");
    document.getElementById("infieldError1").classList.remove("in-field-invalid");
});
document.getElementById("username").addEventListener("input",function(){
    document.getElementById("error-message2").classList.remove("error-print");
    document.getElementById("infieldError2").classList.remove("in-field-invalid");
    document.getElementById("error-duplicate2").classList.remove("error-print");
});
document.getElementById("email").addEventListener("input",function(){
    document.getElementById("error-message3").classList.remove("error-print");
    document.getElementById("infieldError3").classList.remove("in-field-invalid");
    document.getElementById("error-duplicate1").classList.remove("error-print");
});
document.getElementById("password").addEventListener("input",function(){
    document.getElementById("error-message4").classList.remove("error-print");
    document.getElementById("infieldError4").classList.remove("in-field-invalid");
});
document.getElementById("confirmpassword").addEventListener("input",function(){
    document.getElementById("error-message5").classList.remove("error-print");
    document.getElementById("infieldError5").classList.remove("in-field-invalid");
    let passwordVal=document.getElementById("password").value;
    let confirmpasswordVal=document.getElementById("confirmpassword").value;
    let message=document.getElementById("message")

    if(passwordVal===confirmpasswordVal){
        message.innerHTML="Password match.";
        message.style.color="green";
    } else {
        message.innerHTML="Password does not match.";
        message.style.color="red";
    }
});
//save data for local storage
function saveData(){
    let name, username, email, password;
    name=document.getElementById("fullname").value;
    username=document.getElementById("username").value;
    email=document.getElementById("email").value;
    password=document.getElementById("password").value;
    
    let user_records=new Array();
    user_records= JSON.parse(sessionStorage.getItem("users"))?JSON.parse(sessionStorage.getItem("users")):[]
    if (user_records.some(function(v){
        return v.email==email;
    })){
        document.getElementById("error-duplicate1").classList.add("error-print");
    }else {
        // Check for duplicate username before pushing the new user record
        if (user_records.some(function(v) {
            return v.username == username;
        })) {
            // Display an error message for duplicate username
            document.getElementById("error-duplicate2").classList.add("error-print");
        } else{
            user_records.push({
                "name": name,
                "username": username,
                "email": email,
                "password": password,
                "profilepicture":"images/profile-picture.png"
            })
            
            document.getElementById("fullname").value="";
            document.getElementById("username").value="";
            document.getElementById("email").value="";
            document.getElementById("password").value="";
            document.getElementById("confirmpassword").value="";
            message.innerHTML="";
            openPopup();
            sessionStorage.setItem("users",JSON.stringify(user_records));
        }
    }
}

//event for submit button
document.getElementById("submit").addEventListener("click",validate);

document.getElementById("stayonPage").addEventListener("click",closePopup);
//for popup 
let popup = document.getElementById("popup");
function openPopup(){
    popup.classList.add("popup-open");
}
function closePopup(){
    popup.classList.remove("popup-open");
}
