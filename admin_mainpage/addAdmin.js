
//validation for add user
function validateAddAdmin(){
    let fname = document.getElementById('addfullnameAdmin').value;
    let uname = document.getElementById('addusernameAdmin').value;
    let email = document.getElementById('addemailAdmin').value;
    let password = document.getElementById('addpasswordAdmin').value;
    let cpassword = document.getElementById('addconfirmpasswordAdmin').value;
    let isValid= true;

    if (!onlyLetters(fname)){
        document.getElementById('adderrorAdmin1').innerHTML="Only Letters"
        document.getElementById('adderrorAdmin1').classList.add('error-print')
        document.getElementById('addinfieldAdmin1').classList.add('in-field-invalid')
        isValid=false;
    } if (space(fname)){
        document.getElementById('adderrorAdmin1').innerHTML="Please enter your full name"
        document.getElementById('adderrorAdmin1').classList.add('error-print')
        document.getElementById('addinfieldAdmin1').classList.add('in-field-invalid')
        isValid=false;
    } if (fname===""){
        document.getElementById('adderrorAdmin1').innerHTML="Please enter your full name"
        document.getElementById('adderrorAdmin1').classList.add('error-print')
        document.getElementById('addinfieldAdmin1').classList.add('in-field-invalid')
        isValid=false;
    } if (space(uname)){
        document.getElementById('adderrorAdmin2').innerHTML="Please enter your username"
        document.getElementById('adderrorAdmin2').classList.add('error-print')
        document.getElementById('addinfieldAdmin2').classList.add('in-field-invalid')
        isValid=false;
    } if (uname===""){
        document.getElementById('adderrorAdmin2').innerHTML="Please enter your username"
        document.getElementById('adderrorAdmin2').classList.add('error-print')
        document.getElementById('addinfieldAdmin2').classList.add('in-field-invalid')
        isValid=false;
    } if (!isValidEmail(email)){
        document.getElementById('adderrorAdmin3').innerHTML="Please enter a valid email"
        document.getElementById('adderrorAdmin3').classList.add('error-print')
        document.getElementById('addinfieldAdmin3').classList.add('in-field-invalid')
        isValid=false;
    } if (email===""){
        document.getElementById('adderrorAdmin3').innerHTML="Please enter your email"
        document.getElementById('adderrorAdmin3').classList.add('error-print')
        document.getElementById('addinfieldAdmin3').classList.add('in-field-invalid')
        isValid=false;
    } if (!isValidPassword(password)){
        document.getElementById('adderrorAdmin4').innerHTML="The password has to be 8 characters with atleast 1 uppercase and atleast 1 number"
        document.getElementById('adderrorAdmin4').classList.add('error-print')
        document.getElementById('addinfieldAdmin4').classList.add('in-field-invalid')
        isValid=false;
    } if (password=== ""){
        document.getElementById('adderrorAdmin4').innerHTML="Please enter a password"
        document.getElementById('adderrorAdmin4').classList.add('error-print')
        document.getElementById('addinfieldAdmin4').classList.add('in-field-invalid')
        isValid=false;
    } if (cpassword===""){
        document.getElementById('adderrorAdmin5').innerHTML="Please re-enter password"
        document.getElementById('adderrorAdmin5').classList.add('error-print')
        document.getElementById('adderrorAdmin5').style.color="red";
        document.getElementById('addinfieldAdmin5').classList.add('in-field-invalid')
        isValid=false;
    } if (!passwordsMatch(password, cpassword)){
        isValid=false;
    } if (isValid){
        saveAddAdmin()
    }
}

function checkAddPasswordAdmin(){
    document.getElementById("adderrorAdmin5").classList.remove("error-print");
    document.getElementById("addinfieldAdmin5").classList.remove("in-field-invalid");
    let newpassword= document.getElementById('addpasswordAdmin').value;
    let confirmpassword= document.getElementById('addconfirmpasswordAdmin').value;
    if (newpassword.trim() ==="" && confirmpassword.trim()===""){
        
    }else{
        if (newpassword.trim() === confirmpassword.trim()){
            document.getElementById('adderrorAdmin5').innerHTML="Password match"
            document.getElementById('adderrorAdmin5').classList.add("error-print")
            document.getElementById('adderrorAdmin5').style.color="green";
        }else{
            document.getElementById('adderrorAdmin5').innerHTML="Password does not match"
            document.getElementById('adderrorAdmin5').classList.add("error-print")
            document.getElementById('addinfieldAdmin5').classList.add("in-field-invalid")
            document.getElementById('adderrorAdmin5').style.color="red";
        }
    }
}
function saveAddAdmin(){
    let name = document.getElementById('addfullnameAdmin').value;
    let username = document.getElementById('addusernameAdmin').value;
    let email = document.getElementById('addemailAdmin').value;
    let password = document.getElementById('addpasswordAdmin').value;
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
            let search = admin_records.find(function(x){
                return sessionStorage.getItem('email')=== x.email;
            })
            if (search.type === 'main'){
                admin_records.push({
                    "name": name,
                    "username": username,
                    "email": email,
                    "password": password,
                    "profilepicture":"../images/profile-picture.png",
                    "type": 'none'
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
                    sessionStorage.setItem("admins",JSON.stringify(admin_records));
                    let sectionUser= document.getElementById('adminBody');
                    let existingRows = sectionUser.querySelectorAll('tr');
                    for (let i = existingRows.length - 1; i > 0; i--) {
                        existingRows[i].parentNode.removeChild(existingRows[i]);
                    }
                    generateSectionAdmins();
            } else {
                alert ("You don't have a permisson to add admin account!")
            }
        
    }
}
function realtimeAdmin(){
    document.getElementById("newuserpasswordAdmin").addEventListener("input",realtimeResetAdmin);
    document.getElementById("confirmuserpasswordAdmin").addEventListener("input",realtimeResetAdmin);
}
function clearAddAdmin(){
    document.getElementById('adderrorAdmin1').classList.remove('error-print')
    document.getElementById('adderrorAdmin2').classList.remove('error-print')
    document.getElementById('adderrorAdmin3').classList.remove('error-print')
    document.getElementById('adderrorAdmin4').classList.remove('error-print')
    document.getElementById('adderrorAdmin5').classList.remove('error-print')
    document.getElementById('addinfieldAdmin1').classList.remove('in-field-invalid')
    document.getElementById('addinfieldAdmin2').classList.remove('in-field-invalid')
    document.getElementById('addinfieldAdmin3').classList.remove('in-field-invalid')
    document.getElementById('addinfieldAdmin4').classList.remove('in-field-invalid')
    document.getElementById('addinfieldAdmin5').classList.remove('in-field-invalid')
    document.getElementById('addfullnameAdmin').value="";
    document.getElementById('addusernameAdmin').value="";
    document.getElementById('addemailAdmin').value="";
    document.getElementById('addpasswordAdmin').value="";
    document.getElementById('addconfirmpasswordAdmin').value="";

}

document.getElementById('addconfirmpasswordAdmin').addEventListener('input', checkAddPasswordAdmin);
document.getElementById('addpasswordAdmin').addEventListener('input', checkAddPasswordAdmin);

document.getElementById('addfullnameAdmin').addEventListener('input', function(){
    document.getElementById('adderrorAdmin1').innerHTML=""
    document.getElementById('adderrorAdmin1').classList.remove('error-print')
    document.getElementById('addinfieldAdmin1').classList.remove('in-field-invalid')
});
document.getElementById('addusernameAdmin').addEventListener('input', function(){
    document.getElementById('adderrorAdmin2').innerHTML=""
    document.getElementById('adderrorAdmin2').classList.remove('error-print')
    document.getElementById('addinfieldAdmin2').classList.remove('in-field-invalid')
});
document.getElementById('addemailAdmin').addEventListener('input', function(){
    document.getElementById('adderrorAdmin3').innerHTML=""
    document.getElementById('adderrorAdmin3').classList.remove('error-print')
    document.getElementById('addinfieldAdmin3').classList.remove('in-field-invalid')
});
document.getElementById('addpasswordAdmin').addEventListener('input', function(){
    document.getElementById('adderrorAdmin4').innerHTML=""
    document.getElementById('adderrorAdmin4').classList.remove('error-print')
    document.getElementById('addinfieldAdmin4').classList.remove('in-field-invalid')
});




