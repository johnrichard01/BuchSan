function sectionReveal(id) {
    let sections = document.querySelectorAll('section');
    sections.forEach(function (x) {
        x.classList.remove('section-active');
    });
   
    let selectedSection = document.getElementById(id);
    if (selectedSection) {
        selectedSection.classList.add('section-active');
    }
    
}

function buttonActive(id){
    let buttonArray= ['profileButton', 'passwordButton', 'addressButton'];
    buttonArray.forEach(function(x){
        let button= document.getElementById(x);
        console.log(button);
        if (button.classList.contains('btn-section-active')){
            button.classList.remove('btn-section-active')
        }else{
            console.log('class do not exist')
        }
    });

    let clicked= document.getElementById(id);
    if(clicked){
        clicked.classList.add('btn-section-active')
    }
}

function generateSection(){
    let section1= document.getElementById('section1');
    let fullname= sessionStorage.getItem('name');
    let username= sessionStorage.getItem('username');
    let email= sessionStorage.getItem('email');
    return section1.innerHTML=`
                        <section class="bg-body-tertiary py-5 section-body section-active rounded-5" id="sectionProfile">
                            <h1 class="fw-bold text-center section-title">Profile</h1>
                            <div class="container d-flex flex-wrap justify-content-center">
                                <form class="form" novalidate>
                                    <div class="ing-group d-flex flex-wrap justify-content-center">
                                        <div class="in-field" id="infieldError1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1.75rem" height="1.75rem" fill="currentColor" class="bi bi-person-fill input-icon" viewBox="0 0 16 16">
                                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                                              </svg>
                                            
                                            <input type="text" class="in-box" id="fullname" value="${fullname}" placeholder="Full name" required>
                                        </div>
                                            <div class="error-message" id="error-message1">
                                            </div>
                                        
                                        <div class="in-field" id="infieldError2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1.75rem" height="1.75rem" fill="currentColor" class="bi bi-person-fill input-icon" viewBox="0 0 16 16">
                                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                                              </svg>
                                            <input type="text" class="in-box" id="username" value="${username}" placeholder="Username" required>
                                        </div>
                                            <div class="error-message" id="error-message2">
                                            </div>
                                        <div class="in-field" id="infieldError3">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1.75rem" height="1.75rem" fill="currentColor" class="bi bi-envelope-at-fill input-icon" viewBox="0 0 16 16">
                                                <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2H2Zm-2 9.8V4.698l5.803 3.546L0 11.801Zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 9.671V4.697l-5.803 3.546.338.208A4.482 4.482 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671Z"/>
                                                <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034v.21Zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791Z"/>
                                              </svg>
                                            <input type="email" class="in-box" id="email"  value="${email}" placeholder="email" required>
                                        </div>
                                            <div class="error-message" id="error-message3">
                                            </div>
                                            <div class="error-message" id="validateMessage">
                                            </div>
                                        <div class="row w-100 mt-2">
                                            <div class="d-flex justify-content-center">
                                                <button type="button" class="btn btn-update fw-bold w-50" id="updateProfile">Update</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </section>
    `
}
generateSection();

function space(input) {
    return /^\s*$/.test(input);
}
function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
function isValidPassword(password) {
    var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return passwordRegex.test(password);
}
function passwordsMatch(password, confirmPassword) {   
    return password === confirmPassword;
}
function onlyLetters(input) {
    return /^[a-zA-Z ]+$/.test(input);
}
function successPrint(number, changed){
            document.getElementById("error-message"+number).innerHTML="";
            document.getElementById("error-message"+number).innerHTML= changed +" successfuly updated"
            document.getElementById("error-message"+number).classList.add("success-print");
            document.getElementById("infieldError"+number).classList.add("in-field-success");
            setTimeout(function(){
                successRemove(number)
            }, 3000);
}
function successRemove(number){
    document.getElementById("error-message"+number).innerHTML="";
    document.getElementById("error-message"+number).classList.remove("success-print");
    document.getElementById("infieldError"+number).classList.remove("in-field-success");
}

function validateProfile(event){
    let fullnameVal = document.getElementById("fullname").value;
    let usernameVal = document.getElementById("username").value;
    let emailVal = document.getElementById("email").value;
    let empty="";
    let isValid=true;

    if (!onlyLetters(fullnameVal)){
        event.preventDefault();
        document.getElementById("error-message1").innerHTML="";
        document.getElementById("error-message1").innerHTML="Please enter fullname with only letters"
        document.getElementById("error-message1").classList.add("error-print");
        document.getElementById("infieldError1").classList.add("in-field-invalid");
        isValid=false;
    }if (space(fullnameVal)){
        event.preventDefault();
        document.getElementById("error-message1").innerHTML="Please enter a valid fullname"
        document.getElementById("error-message1").classList.add("error-print");
        document.getElementById("infieldError1").classList.add("in-field-invalid");
        isValid=false;
    }if (fullnameVal==empty){
        event.preventDefault();
        document.getElementById("error-message1").innerHTML="Please enter your fullname"
        document.getElementById("error-message1").classList.add("error-print");
        document.getElementById("infieldError1").classList.add("in-field-invalid");
        isValid=false;
    } if (space(usernameVal)){
        event.preventDefault();
        document.getElementById("error-message2").innerHTML="Please enter a valid username"
        document.getElementById("error-message2").classList.add("error-print");
        document.getElementById("infieldError2").classList.add("in-field-invalid");
        isValid=false;
    } if (usernameVal==empty){
        event.preventDefault();
        document.getElementById("error-message2").innerHTML="Please enter a username"
        document.getElementById("error-message2").classList.add("error-print");
        document.getElementById("infieldError2").classList.add("in-field-invalid");
        isValid=false;
    }if (!isValidEmail(emailVal)){
        event.preventDefault();
        document.getElementById("error-message3").innerHTML="Please enter a valid email"
        document.getElementById("error-message3").classList.add("error-print");
        document.getElementById("infieldError3").classList.add("in-field-invalid");
        isValid=false;
    }if (space(emailVal)){
        event.preventDefault();
        document.getElementById("error-message3").innerHTML="Please enter an email"
        document.getElementById("error-message3").classList.add("error-print");
        document.getElementById("infieldError3").classList.add("in-field-invalid");
        isValid=false;
    }if (emailVal===empty){
        event.preventDefault();
        document.getElementById("error-message3").innerHTML="Please enter your email"
        document.getElementById("error-message3").classList.add("error-print");
        document.getElementById("infieldError3").classList.add("in-field-invalid");
        isValid=false;
    }
     if(isValid){
        saveProfile();
    }
}
function saveProfile(){
    let newname, newusername, newemail;
    newname=document.getElementById("fullname").value;
    newusername=document.getElementById("username").value;
    newemail=document.getElementById("email").value;
    let oldname=sessionStorage.getItem('name');
    let oldemail=sessionStorage.getItem('email');
    let oldusername=sessionStorage.getItem('username');
    let admin_records=new Array();
    admin_records = JSON.parse(sessionStorage.getItem("admins"))?JSON.parse(sessionStorage.getItem("admins")):[];
    let user_records=new Array();
    user_records= JSON.parse(sessionStorage.getItem("users"))?JSON.parse(sessionStorage.getItem("users")):[]

    if (newname.toLowerCase() === oldname.toLocaleLowerCase() && newemail.toLowerCase() === oldemail.toLocaleLowerCase() && newusername.toLowerCase() === oldusername.toLocaleLowerCase()){
        document.getElementById('validateMessage').innerHTML="Nothing changed";
        document.getElementById('validateMessage').classList.add('error-print');
        console.log('same');    
    } if (newname.toLowerCase() !== oldname.toLocaleLowerCase()){
        let findUser= user_records.find(function(x){
            return x.email === oldemail
        })
        if (findUser){
            findUser.name= newname;
            sessionStorage.setItem("users",JSON.stringify(user_records));
            sessionStorage.setItem('name', newname);
            successPrint("1","Fullname");
            
        }
    } if (newusername.toLowerCase() !== oldusername.toLocaleLowerCase()){
        let usernameDupe= user_records.some(function(x){
            return x.username.toLowerCase() === newusername.toLowerCase();
        })
        if (usernameDupe){
            document.getElementById("error-message2").innerHTML="";
            document.getElementById("error-message2").innerHTML="Username already used"
            document.getElementById("error-message2").classList.add("error-print");
            document.getElementById("infieldError2").classList.add("in-field-invalid");
        }else{
            let usernameDupe= admin_records.some(function(x){
                return x.username.toLowerCase() === newusername.toLowerCase();
            })
            if(usernameDupe){
                document.getElementById("error-message2").innerHTML="";
                document.getElementById("error-message2").innerHTML="Username already used"
                document.getElementById("error-message2").classList.add("error-print");
                document.getElementById("infieldError2").classList.add("in-field-invalid");
            }else{
                let findUser= user_records.find(function(x){
                    return x.email === oldemail
                })
                findUser.username= newusername;
                sessionStorage.setItem("users",JSON.stringify(user_records));
                sessionStorage.setItem('username', newusername);
                successPrint("2","Username");
                generateName();
            }
        }
    } if ( newemail.toLowerCase() !== oldemail.toLocaleLowerCase() ){
        let emailDupe= user_records.some(function(x){
            return x.email.toLowerCase() === newemail.toLowerCase();
        })
        if (emailDupe){
            document.getElementById("error-message3").innerHTML="";
            document.getElementById("error-message3").innerHTML="email already used"
            document.getElementById("error-message3").classList.add("error-print");
            document.getElementById("infieldError3").classList.add("in-field-invalid");
        }else{
            let emailDupe= admin_records.some(function(x){
                return x.email.toLowerCase() === newemail.toLowerCase();
            })
            if(emailDupe){
                document.getElementById("error-message3").innerHTML="";
                document.getElementById("error-message3").innerHTML="email already used"
                document.getElementById("error-message3").classList.add("error-print");
                document.getElementById("infieldError3").classList.add("in-field-invalid");
            }else{
                let findUser= user_records.find(function(x){
                    return x.email === oldemail;
                })
                findUser.email= newemail;
                sessionStorage.setItem("users",JSON.stringify(user_records));
                sessionStorage.setItem('email', newemail);
                successPrint("3","Email");
            }
        }

    }
}
document.getElementById('updateProfile').addEventListener("click", validateProfile);
function validatePassword(event){
    let oldpassword= document.getElementById('oldpassword').value;
    let newpassword= document.getElementById('newpassword').value;
    let confirmpassword= document.getElementById('confirmpassword').value;
    let empty="";
    let isValid=true;
    if (!isValidPassword(oldpassword)){
        event.preventDefault();
        document.getElementById("error-message4").innerHTML="";
        document.getElementById("error-message4").innerHTML="Please enter a valid password"
        document.getElementById("error-message4").classList.add("error-print");
        document.getElementById("infieldError4").classList.add("in-field-invalid");
        isValid=false;
    }   if (oldpassword === empty){
        event.preventDefault();
        document.getElementById("error-message4").innerHTML="";
        document.getElementById("error-message4").innerHTML="Please enter your password"
        document.getElementById("error-message4").classList.add("error-print");
        document.getElementById("infieldError4").classList.add("in-field-invalid");
        isValid=false;
    }   if (!isValidPassword(newpassword)){
        event.preventDefault();
        document.getElementById("error-message5").innerHTML="";
        document.getElementById("error-message5").innerHTML="Please enter a valid password"
        document.getElementById("error-message5").classList.add("error-print");
        document.getElementById("infieldError5").classList.add("in-field-invalid");
        isValid=false;
    }   if (newpassword === empty){
        event.preventDefault();
        document.getElementById("error-message5").innerHTML="";
        document.getElementById("error-message5").innerHTML="Please enter your password"
        document.getElementById("error-message5").classList.add("error-print");
        document.getElementById("infieldError5").classList.add("in-field-invalid");
        isValid=false;
    }   if (confirmpassword === empty){
        event.preventDefault();
        document.getElementById("error-message6").innerHTML="";
        document.getElementById("error-message6").innerHTML="Please enter your password"
        document.getElementById("error-message6").classList.add("error-print");
        document.getElementById("infieldError6").classList.add("in-field-invalid");
        isValid=false;
    }   if(confirmpassword!==newpassword){
        event.preventDefault();
        isValid=false;
    }   if (isValid) {
        savePassword();
    }
}

function savePassword(){
    let oldpassword= document.getElementById('oldpassword').value;
    let newpassword= document.getElementById('newpassword').value;
    let confirmpassword= document.getElementById('confirmpassword').value;
    let email = sessionStorage.getItem('email');
    let user_records=new Array();
    user_records= JSON.parse(sessionStorage.getItem("users"))?JSON.parse(sessionStorage.getItem("users")):[];
    let findUser= user_records.find(function(x){
        return x.email === email;
    })
    if(findUser){
       if (findUser.password === oldpassword){
            if(newpassword === findUser.password){
                document.getElementById("error-message5").innerHTML="";
                document.getElementById("error-message5").innerHTML="Same as your previous password"
                document.getElementById("error-message5").classList.add("error-print");
                document.getElementById("infieldError5").classList.add("in-field-invalid");
            }else{
                findUser.password= newpassword;
                sessionStorage.setItem("users",JSON.stringify(user_records));
                message.innerHTML="";
                document.getElementById('validatepassMessage').innerHTML="";
                document.getElementById('validatepassMessage').innerHTML="Succesfully changed password";
                document.getElementById('validatepassMessage').classList.add('success-print');
                document.getElementById("infieldError4").classList.add("in-field-success");
                document.getElementById("infieldError5").classList.add("in-field-success");
                document.getElementById("infieldError6").classList.add("in-field-success");
            setTimeout(function(){
                document.getElementById('validatepassMessage').innerHTML="";
                document.getElementById('validatepassMessage').classList.remove('success-print');
                document.getElementById("infieldError4").classList.remove("in-field-success");
                document.getElementById("infieldError5").classList.remove("in-field-success");
                document.getElementById("infieldError6").classList.remove("in-field-success");
                document.getElementById('oldpassword').value="";
                document.getElementById('newpassword').value="";
                document.getElementById('confirmpassword').value="";
            }, 3000);
            }
            
       }else{
        document.getElementById("error-message4").innerHTML="";
        document.getElementById("error-message4").innerHTML="Wrong password"
        document.getElementById("error-message4").classList.add("error-print");
        document.getElementById("infieldError4").classList.add("in-field-invalid");
       }
    }

}
function realtimeCheck(){
    document.getElementById("error-message6").classList.remove("error-print");
    document.getElementById("infieldError6").classList.remove("in-field-invalid");
    let oldpassword= document.getElementById('oldpassword').value;
    let newpassword= document.getElementById('newpassword').value;
    let confirmpassword= document.getElementById('confirmpassword').value;
    let message= document.getElementById("message");

    if (newpassword.trim() === "" && confirmpassword.trim() === "") {
        
        document.getElementById("error-message5").innerHTML="Please enter a password";
        document.getElementById("error-message5").classList.add("error-print");
        document.getElementById("infieldError5").classList.add("in-field-invalid");
    }
    else if(newpassword===confirmpassword){
        message.innerHTML="Password match.";
        message.style.color="green";
    } else {
        if(document.getElementById("infieldError6").classList.contains("in-field-invalid")){
            console.log("true");
        }else{
            document.getElementById("infieldError6").classList.add("in-field-invalid");
            message.innerHTML="Password does not match.";
            message.style.color="red";
        }
    }
};


document.getElementById('updatePassword').addEventListener("click", validatePassword);
document.getElementById("confirmpassword").addEventListener("input",realtimeCheck);
document.getElementById("newpassword").addEventListener("input",realtimeCheck);




document.getElementById("fullname").addEventListener("input",function(){
    document.getElementById("error-message1").classList.remove("error-print");
    document.getElementById("infieldError1").classList.remove("in-field-invalid");
});
document.getElementById("username").addEventListener("input",function(){
    let error1 = document.getElementById("error-message2");
    let error2 =document.getElementById("infieldError2");
    let error3=document.getElementById("error-duplicate2")
    
    if (error1.classList.contains('error-print')){
        document.getElementById("error-message2").classList.remove("error-print");
    } if (error2.classList.contains('in-field-invalid')){
            document.getElementById("infieldError2").classList.remove("in-field-invalid");
    }
    
});
document.getElementById("email").addEventListener("input",function(){
    document.getElementById("error-message3").classList.remove("error-print");
    document.getElementById("infieldError3").classList.remove("in-field-invalid");
});
document.getElementById("oldpassword").addEventListener("input",function(){
    document.getElementById("error-message4").classList.remove("error-print");
    document.getElementById("infieldError4").classList.remove("in-field-invalid");
});
document.getElementById("newpassword").addEventListener("input",function(){
    document.getElementById("error-message5").classList.remove("error-print");
    document.getElementById("infieldError5").classList.remove("in-field-invalid");
});
