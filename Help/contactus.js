
function contactformValidation(event){
    let name=document.getElementById("contactusName").value;
    let email=document.getElementById("contactusEmail").value;
    let text= document.getElementById("contactusMessage").value;
    let empty="";
    let isValid=true;
    if (!isValidEmail(email)){
        event.preventDefault();
        errorEmail();
        isValid=false;
    } if (!validateName(name)){
        event.preventDefault();
        errorName();
        isValid=false;
    } if(name===empty){
        event.preventDefault();
        errorNameEmpty();
        isValid=false;
    } if (email===empty){
        event.preventDefault();
        errorEmailEmpty();
        isValid=false;
    } if (text===empty){
        event.preventDefault();
        errorText();
        isValid=false;
    } if(isValid){
        document.getElementById("contactusName").value="";
        document.getElementById("contactusEmail").value="";
        document.getElementById("contactusMessage").value="";
        successSentt();
    }
    
}

function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
function validateName(name) {
    var regex = /^[a-zA-Z\s]+$/;
    return regex.test(name);
}
function errorName(){
    document.getElementById("errormessage1").innerHTML="Invalid name."
    document.getElementById("errormessage1").classList.add("error-print");
}
function errorNameEmpty(){
    document.getElementById("errormessage1").innerHTML="Please enter your name"
    document.getElementById("errormessage1").classList.add("error-print");
}
function errorEmail(){
    document.getElementById("errormessage2").innerHTML="Invalid email."
    document.getElementById("errormessage2").classList.add("error-print");
}
function errorEmailEmpty(){
    document.getElementById("errormessage2").innerHTML="Please enter your email"
    document.getElementById("errormessage2").classList.add("error-print");
}
function errorText(){
    document.getElementById("errormessage3").innerHTML="Please enter a message."
    document.getElementById("errormessage3").classList.add("error-print");
}
function successSentt(){
    document.getElementById("errormessage3").innerHTML="Message succesfully sent."
    document.getElementById("errormessage3").classList.add("successful-print");
}
document.getElementById("contactusName").addEventListener("input",removeError);
document.getElementById("contactusEmail").addEventListener("input", removeError);
document.getElementById("contactusMessage").addEventListener("input", removeError);
function removeError(){
    document.getElementById("errormessage2").innerHTML=""
    document.getElementById("errormessage1").innerHTML=""
    document.getElementById("errormessage2").classList.remove("error-print");
    document.getElementById("errormessage3").innerHTML="";
    document.getElementById("errormessage3").classList.remove("error-print");
    document.getElementById("errormessage3").innerHTML="";
    document.getElementById("errormessage3").classList.remove("successful-print");
}
document.getElementById("contactusSubmit").addEventListener("click", contactformValidation);


