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
//passowrd matching
function passwordsMatch(password, confirmPassword) {
        return password === confirmPassword;
  }
//test for only spaces
function space(input) {
    return /^\s*$/.test(input);
}
//only letters
function onlyLetters(input) {
    return /^[a-zA-Z ]+$/.test(input);
}

//validation for add user
function validateAddUser(){
    let fname = document.getElementById('addfullname').value;
    let uname = document.getElementById('addusername').value;
    let email = document.getElementById('addemail').value;
    let password = document.getElementById('addpassword').value;
    let cpassword = document.getElementById('addconfirmpassword').value;
    let isValid= true;

    if (!onlyLetters(fname)){
        document.getElementById('adderror1').innerHTML="Only Letters"
        document.getElementById('adderror1').classList.add('error-print')
        document.getElementById('addinfield1').classList.add('in-field-invalid')
        isValid=false;
    } if (space(fname)){
        document.getElementById('adderror1').innerHTML="Please enter your full name"
        document.getElementById('adderror1').classList.add('error-print')
        document.getElementById('addinfield1').classList.add('in-field-invalid')
        isValid=false;
    } if (fname===""){
        document.getElementById('adderror1').innerHTML="Please enter your full name"
        document.getElementById('adderror1').classList.add('error-print')
        document.getElementById('addinfield1').classList.add('in-field-invalid')
        isValid=false;
    } if (space(uname)){
        document.getElementById('adderror2').innerHTML="Please enter your username"
        document.getElementById('adderror2').classList.add('error-print')
        document.getElementById('addinfield2').classList.add('in-field-invalid')
        isValid=false;
    } if (uname===""){
        document.getElementById('adderror2').innerHTML="Please enter your username"
        document.getElementById('adderror2').classList.add('error-print')
        document.getElementById('addinfield2').classList.add('in-field-invalid')
        isValid=false;
    } if (!isValidEmail(email)){
        document.getElementById('adderror3').innerHTML="Please enter a valid email"
        document.getElementById('adderror3').classList.add('error-print')
        document.getElementById('addinfield3').classList.add('in-field-invalid')
        isValid=false;
    } if (email===""){
        document.getElementById('adderror3').innerHTML="Please enter your email"
        document.getElementById('adderror3').classList.add('error-print')
        document.getElementById('addinfield3').classList.add('in-field-invalid')
        isValid=false;
    } if (!isValidPassword(password)){
        document.getElementById('adderror4').innerHTML="The password has to be 8 characters with atleast 1 uppercase and atleast 1 number"
        document.getElementById('adderror4').classList.add('error-print')
        document.getElementById('addinfield4').classList.add('in-field-invalid')
        isValid=false;
    } if (password=== ""){
        document.getElementById('adderror4').innerHTML="Please enter a password"
        document.getElementById('adderror4').classList.add('error-print')
        document.getElementById('addinfield4').classList.add('in-field-invalid')
        isValid=false;
    } if (cpassword===""){
        document.getElementById('adderror5').innerHTML="Please re-enter password"
        document.getElementById('adderror5').classList.add('error-print')
        document.getElementById('adderror5').style.color="red";
        document.getElementById('addinfield5').classList.add('in-field-invalid')
        isValid=false;
    } if (!passwordsMatch(password, cpassword)){
        isValid=false;
    } if (isValid){
        saveAddUser()
    }
}

function checkAddPassword(){
    document.getElementById("adderror5").classList.remove("error-print");
    document.getElementById("addinfield5").classList.remove("in-field-invalid");
    let newpassword= document.getElementById('addpassword').value;
    let confirmpassword= document.getElementById('addconfirmpassword').value;
    if (newpassword.trim() ==="" && confirmpassword.trim()===""){
        
    }else{
        if (newpassword.trim() === confirmpassword.trim()){
            document.getElementById('adderror5').innerHTML="Password match"
            document.getElementById('adderror5').classList.add("error-print")
            document.getElementById('adderror5').style.color="green";
        }else{
            document.getElementById('adderror5').innerHTML="Password does not match"
            document.getElementById('adderror5').classList.add("error-print")
            document.getElementById('addinfield5').classList.add("in-field-invalid")
            document.getElementById('adderror5').style.color="red";
        }
    }
}
function saveAddUser(){
    let name = document.getElementById('addfullname').value;
    let username = document.getElementById('addusername').value;
    let email = document.getElementById('addemail').value;
    let password = document.getElementById('addpassword').value;
    let admin_records=new Array();
    admin_records = JSON.parse(sessionStorage.getItem("admins"))?JSON.parse(sessionStorage.getItem("admins")):[];
    let user_records=new Array();
    user_records= JSON.parse(sessionStorage.getItem("users"))?JSON.parse(sessionStorage.getItem("users")):[];
    let isValid= true;

    if (user_records.some(function(v){
        return v.email.toLowerCase()==email.toLowerCase();
    })){
        document.getElementById("adderror3").innerHTML="Email already used"
        document.getElementById("adderror3").classList.add("error-print");
        isValid=false;
    }if (user_records.some(function(v) {
        return v.username.toLowerCase() == username.toLowerCase();
    })) {
        // Display an error message for duplicate username
        document.getElementById("adderror2").innerHTML="Username already used";
        document.getElementById("adderror2").classList.add("error-print");
        isValid=false;
    } if (admin_records.some(function(v){
        return v.email.toLowerCase() === email.toLowerCase();
    })){
        document.getElementById("adderror3").innerHTML="Email already used"
        document.getElementById("adderror3").classList.add("error-print");
        isValid= false;
    }if(admin_records.some(function(v){
        return v.username.toLowerCase() === username.toLowerCase();
    })){
        document.getElementById("adderror2").innerHTML="Username already used";
       document.getElementById("adderror2").classList.add("error-print"); 
       isValid= false;
    } if (isValid){
            user_records.push({
        "name": name,
        "username": username,
        "email": email,
        "password": password,
        "profilepicture":"../images/profile-picture.png"
        })
        
        document.getElementById("addfullname").value="";
        document.getElementById("addusername").value="";
        document.getElementById("addemail").value="";
        document.getElementById("addpassword").value="";
        document.getElementById("addconfirmpassword").value="";
        document.getElementById('adderror5').innerHTML="Successfully added user"
        document.getElementById('adderror5').classList.add("error-print")
        document.getElementById('adderror5').style.color="green";
        setTimeout(function(){
            document.getElementById('adderror5').innerHTML=""
            document.getElementById('adderror5').classList.remove("error-print")
        },3000)
        sessionStorage.setItem("users",JSON.stringify(user_records));
        let sectionUser= document.getElementById('usersBody');
        let existingRows = sectionUser.querySelectorAll('tr');
        for (let i = existingRows.length - 1; i > 0; i--) {
            existingRows[i].parentNode.removeChild(existingRows[i]);
        }
        generateSectionUsers();
        
    }
}
function realtimeEvent(){
    document.getElementById("newuserpassword").addEventListener("input",realtimeReset);
    document.getElementById("confirmuserpassword").addEventListener("input",realtimeReset);
}
function clearAdduser(){
    document.getElementById('adderror1').classList.remove('error-print')
    document.getElementById('adderror2').classList.remove('error-print')
    document.getElementById('adderror3').classList.remove('error-print')
    document.getElementById('adderror4').classList.remove('error-print')
    document.getElementById('adderror5').classList.remove('error-print')
    document.getElementById('addinfield1').classList.remove('in-field-invalid')
    document.getElementById('addinfield2').classList.remove('in-field-invalid')
    document.getElementById('addinfield3').classList.remove('in-field-invalid')
    document.getElementById('addinfield4').classList.remove('in-field-invalid')
    document.getElementById('addinfield5').classList.remove('in-field-invalid')
    document.getElementById('addfullname').value="";
    document.getElementById('addusername').value="";
    document.getElementById('addemail').value="";
    document.getElementById('addpassword').value="";
    document.getElementById('addconfirmpassword').value="";

}

document.getElementById('addconfirmpassword').addEventListener('input', checkAddPassword);
document.getElementById('addpassword').addEventListener('input', checkAddPassword);

document.getElementById('addfullname').addEventListener('input', function(){
    document.getElementById('adderror1').innerHTML=""
    document.getElementById('adderror1').classList.remove('error-print')
    document.getElementById('addinfield1').classList.remove('in-field-invalid')
});
document.getElementById('addusername').addEventListener('input', function(){
    document.getElementById('adderror2').innerHTML=""
    document.getElementById('adderror2').classList.remove('error-print')
    document.getElementById('addinfield2').classList.remove('in-field-invalid')
});
document.getElementById('addemail').addEventListener('input', function(){
    document.getElementById('adderror3').innerHTML=""
    document.getElementById('adderror3').classList.remove('error-print')
    document.getElementById('addinfield3').classList.remove('in-field-invalid')
});
document.getElementById('addpassword').addEventListener('input', function(){
    document.getElementById('adderror4').innerHTML=""
    document.getElementById('adderror4').classList.remove('error-print')
    document.getElementById('addinfield4').classList.remove('in-field-invalid')
});




