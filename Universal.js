let admin_records=new Array();
function adminOne(){
    //set admin accounts
    admin_records = JSON.parse(sessionStorage.getItem("admins"))?JSON.parse(sessionStorage.getItem("admins")):[];
    // Check if the data already exists in the array
    var newData = {
        "name": "jessica Pam Velasquez",
        "username": "pam",
        "email": "pam@buchsan.com",
        "password": "12345678",
        "profilepicture":"/images/profile-picture.png"
    };

    var newDataExists = admin_records.some(function (admin) {
        return admin.username === newData.username && admin.email === newData.email;
    });

    if (!newDataExists) {
        // Data doesn't exist, so push it into the array
        admin_records.push(newData);
    }
}

// Repeat the process for the second set of data
function adminTwo(){
    
   let newData = {
        "name": "John Richard Vidal Sumagui",
        "username": "Richard",
        "email": "richard@buchsan.com",
        "password": "12345678",
        "profilepicture":"/images/profile-picture.png"
    };
    
   let newDataExists = admin_records.some(function (admin) {
        return admin.username === newData.username && admin.email === newData.email;
    });
    
    if (!newDataExists) {
        // Data doesn't exist, so push it into the array
        admin_records.push(newData);
    }
}
adminOne();
adminTwo();
sessionStorage.setItem("admins",JSON.stringify(admin_records));

//for newsletter form validation
function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
function successRemove(){
    document.getElementById("newsLetterEmail").value="";
    document.getElementById("newsLetterEmail").classList.remove("newsletter-printsucc");
    document.getElementById("newsField").classList.remove("newsfield-succ");
}
function newserrorRemove(){
    let email=document.getElementById("newsLetterEmail").value;
    if (document.getElementById("newsLetterEmail").classList.contains("newsletter-printerror")){
        document.getElementById("newsLetterEmail").value="";
        document.getElementById("newsLetterEmail").classList.remove("newsletter-printerror");
        document.getElementById("newsField").classList.remove("newsfield-error");
    }else{
        console.log(false);
    }
    
}
document.getElementById("newsLetterEmail").addEventListener("click",newserrorRemove);
function validateNewsletter(event){
    let email=document.getElementById("newsLetterEmail").value;

    if(isValidEmail(email)){
        document.getElementById("newsLetterEmail").value="Thankyou for subscribing!";
        document.getElementById("newsLetterEmail").classList.add("newsletter-printsucc");
        document.getElementById("newsField").classList.add("newsfield-succ");
        setTimeout(successRemove, 3000)
    }else{
        event.preventDefault();
        document.getElementById("newsLetterEmail").value="Please enter a valid email.";
        document.getElementById("newsLetterEmail").classList.add("newsletter-printerror");
        document.getElementById("newsField").classList.add("newsfield-error");
    }
}

document.getElementById("subscribeBtn").addEventListener("click", validateNewsletter);