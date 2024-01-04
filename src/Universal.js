
function adminOne(){
    //set admin accounts
    let admin_records=new Array();
    admin_records = JSON.parse(sessionStorage.getItem("admins"))?JSON.parse(sessionStorage.getItem("admins")):[];
    // Check if the data already exists in the array
    var newData = {
        "name": "jessica Pam Velasquez",
        "username": "pam",
        "email": "pam@buchsan.com",
        "type": "main",
        "password": "ricjohn10R",
        "profilepicture":"images/profile-picture.png"
    };

    var newDataExists = admin_records.some(function (admin) {
        return admin.email === newData.email;
    });

    if (!newDataExists) {
        // Data doesn't exist, so push it into the array
        admin_records.push(newData);
        sessionStorage.setItem("admins",JSON.stringify(admin_records));
    }
}

// Repeat the process for the second set of data
function adminTwo(){
    let admin_records=new Array();
    admin_records = JSON.parse(sessionStorage.getItem("admins"))?JSON.parse(sessionStorage.getItem("admins")):[];

   let newData = {
        "name": "John Richard Vidal Sumagui",
        "username": "Richard",
        "email": "richard@buchsan.com",
        "type": "main",
        "password": "ricjohn10R",
        "profilepicture":"../images/profile-picture.png"
    };
    
   let newDataExists = admin_records.some(function (admin) {
        return admin.email === newData.email;
    });
    
    if (!newDataExists) {
        // Data doesn't exist, so push it into the array
        admin_records.push(newData);
        sessionStorage.setItem("admins",JSON.stringify(admin_records));
    }
}
adminOne();
adminTwo();


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
    let newsletter_records= new Array
    newsletter_records=JSON.parse(sessionStorage.getItem("Subscribers"))?JSON.parse(sessionStorage.getItem("Subscribers")):[];
    let email=document.getElementById("newsLetterEmail").value;

    if(isValidEmail(email)){
        sendMail();
    }else{
        event.preventDefault();
        document.getElementById("newsLetterEmail").value="Please enter a valid email.";
        document.getElementById("newsLetterEmail").classList.add("newsletter-printerror");
        document.getElementById("newsField").classList.add("newsfield-error");
    }
}

document.getElementById("subscribeBtn").addEventListener("click", validateNewsletter);

function sendMail(){
    let newsletter_records= new Array
    newsletter_records=JSON.parse(sessionStorage.getItem("Subscribers"))?JSON.parse(sessionStorage.getItem("Subscribers")):[];
    let email= document.getElementById("newsLetterEmail").value;
    let dateTime = new Date();
    let date = dateTime.toLocaleDateString();
    let time = dateTime.toLocaleTimeString();

    let parms ={
        email: document.getElementById("newsLetterEmail").value,
    }

    let searchDupe= newsletter_records.find(function(x){
        return x === email;
    })
    if (searchDupe){
        console.log("dupe")
        document.getElementById("newsLetterEmail").value="Already Subscribed"
        document.getElementById("newsLetterEmail").classList.add("newsletter-printerror");
        document.getElementById("newsField").classList.add("newsfield-error");
    }else{
        console.log('sucess')
        newsletter_records.push({
            email: email,
            date: {
                date: date,
                time: time,
            }
        });
        emailjs.send('service_pbq7erf', 'template_mmzjsll', parms);
        sessionStorage.setItem("Subscribers", JSON.stringify(newsletter_records));
        document.getElementById("newsLetterEmail").value="Thankyou for subscribing!";
        document.getElementById("newsLetterEmail").classList.add("newsletter-printsucc");
        document.getElementById("newsField").classList.add("newsfield-succ");
        setTimeout(successRemove, 3000)
    }
}