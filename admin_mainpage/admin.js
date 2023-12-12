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
    let buttonArray= ['usersButton', 'adminButton', 'booksButton', 'newButton', 'newsButton', 'messagesButton'];
    buttonArray.forEach(function(x){
        let button= document.getElementById(x);
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
function removeActive(){
    let buttonArray= ['usersButton', 'adminButton', 'booksButton', 'newButton', 'newsButton', 'messagesButton'];
    buttonArray.forEach(function(x){
        let button= document.getElementById(x);
        if (button.classList.contains('btn-section-active')){
            button.classList.remove('btn-section-active')
        }else{
            console.log('class do not exist')
        }
    });
}

function accountReveal(id) {
    let sections = ['sectionProfile', 'sectionPassword'];
    sections.forEach(function (x) {
        let section =document.getElementById(x);
        section.classList.remove('account-active');
    });
    let selectedSection = document.getElementById(id);
    if (selectedSection) {
        selectedSection.classList.add('account-active');
    }
}
function accountremove(id){
    let buttonArray= ['profileButton', 'passwordButton'];
    buttonArray.forEach(function(x){
        let button= document.getElementById(x);
        console.log(button);
        if (button.classList.contains('account-nav-active')){
            button.classList.remove('account-nav-active')
        }else{
            console.log('class do not exist')
        }
    });

    let clicked= document.getElementById(id);
    if(clicked){
        clicked.classList.add('account-nav-active')
    }
}
//for login logout admin
let profilePicture= document.getElementById("profile-display");
let fullName=document.getElementById("name-display");

function generateProfile(){
    return profilePicture.innerHTML= `
    <img src=${sessionStorage.getItem("profilepicture")} width="60px"  alt="profile picture">
    `
}
generateProfile();
function generateName(){
    return fullName.innerHTML= `Hi!  ${sessionStorage.getItem("username")}`;
}
generateName();


function logOut(){
    let user_records=new Array();
    user_records= JSON.parse(sessionStorage.getItem("users"))?JSON.parse(sessionStorage.getItem("users")):[]
    let saved_records= new Array
    saved_records= JSON.parse(sessionStorage.getItem("saved"))?JSON.parse(sessionStorage.getItem("saved")):[]
    let email=sessionStorage.getItem("email")
    let findUser= user_records.find(function(x){
        return email === x.email;
    })
    if (findUser){
        findUser.saved=saved_records;
        sessionStorage.setItem("users",JSON.stringify(user_records));
    }
    sessionStorage.removeItem("saved")
    sessionStorage.removeItem("name");
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("profilepicture");
    window.location.href="../index.html";

}
document.getElementById("logOut").addEventListener("click",logOut);

//generate section for users
function generateSectionUsers(){
    let sectionUser= document.getElementById('usersBody');
    let user_records=new Array();
    user_records= JSON.parse(sessionStorage.getItem("users"))?JSON.parse(sessionStorage.getItem("users")):[]
    sectionUser.innerHTML += user_records.map(function(x){
        return ` 
        <tr>
            <td class="text-center">${x.name}</td>
            <td class="text-center">${x.username}</td>
            <td class="text-center">${x.email}</td>
            <td class="d-flex flex-wrap justify-content-center"><button class="btn btn-remove">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
                </svg>
            </button></td>
        </tr>`
    }).join("")
}
generateSectionUsers();
function generateSectionAdmins(){
    let sectionAdmin= document.getElementById('adminBody');
    let admin_records=new Array();
    admin_records= JSON.parse(sessionStorage.getItem("admins"))?JSON.parse(sessionStorage.getItem("admins")):[]
    sectionAdmin.innerHTML += admin_records.map(function(x){
        return ` 
        <tr>
            <td class="text-center">${x.name}</td>
            <td class="text-center">${x.username}</td>
            <td class="text-center">${x.email}</td>
            <td class="d-flex flex-wrap justify-content-center"><button class="btn btn-remove">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
                </svg>
            </button></td>
        </tr>`
    }).join("")
}
generateSectionAdmins();





//validation for account settings
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
        let findUser= admin_records.find(function(x){
            return x.email === oldemail
        })
        if (findUser){
            findUser.name= newname;
            sessionStorage.setItem("admins",JSON.stringify(admin_records));
            sessionStorage.setItem('name', newname);
            successPrint("1","Fullname");
            
        }
    } if (newusername.toLowerCase() !== oldusername.toLocaleLowerCase()){
        let usernameDupe= admin_records.some(function(x){
            return x.username.toLowerCase() === newusername.toLowerCase();
        })
        if (usernameDupe){
            document.getElementById("error-message2").innerHTML="";
            document.getElementById("error-message2").innerHTML="Username already used"
            document.getElementById("error-message2").classList.add("error-print");
            document.getElementById("infieldError2").classList.add("in-field-invalid");
        }else{
            let usernameDupe= user_records.some(function(x){
                return x.username.toLowerCase() === newusername.toLowerCase();
            })
            if(usernameDupe){
                document.getElementById("error-message2").innerHTML="";
                document.getElementById("error-message2").innerHTML="Username already used"
                document.getElementById("error-message2").classList.add("error-print");
                document.getElementById("infieldError2").classList.add("in-field-invalid");
            }else{
                let findUser= admin_records.find(function(x){
                    return x.email === oldemail
                })
                findUser.username= newusername;
                sessionStorage.setItem("admins",JSON.stringify(admin_records));
                sessionStorage.setItem('username', newusername);
                successPrint("2","Username");
                generateName();
            }
        }
    } if ( newemail.toLowerCase() !== oldemail.toLocaleLowerCase() ){
        let emailDupe= admin_records.some(function(x){
            return x.email.toLowerCase() === newemail.toLowerCase();
        })
        if (emailDupe){
            document.getElementById("error-message3").innerHTML="";
            document.getElementById("error-message3").innerHTML="email already used"
            document.getElementById("error-message3").classList.add("error-print");
            document.getElementById("infieldError3").classList.add("in-field-invalid");
        }else{
            let emailDupe= user_records.some(function(x){
                return x.email.toLowerCase() === newemail.toLowerCase();
            })
            if(emailDupe){
                document.getElementById("error-message3").innerHTML="";
                document.getElementById("error-message3").innerHTML="email already used"
                document.getElementById("error-message3").classList.add("error-print");
                document.getElementById("infieldError3").classList.add("in-field-invalid");
            }else{
                let findUser= admin_records.find(function(x){
                    return x.email === oldemail;
                })
                findUser.email= newemail;
                sessionStorage.setItem("admins",JSON.stringify(admin_records));
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
    let admin_records=new Array();
    admin_records = JSON.parse(sessionStorage.getItem("admins"))?JSON.parse(sessionStorage.getItem("admins")):[];
    let findUser= admin_records.find(function(x){
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
                sessionStorage.setItem("admins",JSON.stringify(admin_records));
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
    console.log("why")
});
document.getElementById("username").addEventListener("input",function(){
    document.getElementById("error-message2").classList.remove("error-print");
    document.getElementById("infieldError2").classList.remove("in-field-invalid");

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
