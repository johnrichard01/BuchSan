


function saveData(){
    let email=document.getElementById("emailLogin").value;
    let password=document.getElementById("passwordLogin").value;

    let user_records=new Array();
    user_records=JSON.parse(sessionStorage.getItem("users"))?JSON.parse(sessionStorage.getItem("users")):[];
    let admin_records=new Array();
    admin_records = JSON.parse(sessionStorage.getItem("admins"))?JSON.parse(sessionStorage.getItem("admins")):[];
    

    if (!email || !password) {
        document.getElementById("error-enter").innerHTML="Please enter both email and password";
        return;
    }

    let matchedUser = user_records.some(function (v) {
        return v.email === email && v.password === password;
    });

    let matchedAdmin = admin_records.some(function (v) {
        return v.email === email && v.password === password;
    });

    if(matchedAdmin){
        let current_admin=admin_records.filter(function(v){
            return v.email=== email && v.password === password;
        })[0]
        sessionStorage.setItem("name", current_admin.name);
        sessionStorage.setItem("username", current_admin.username);
        sessionStorage.setItem("email", current_admin.email);
        sessionStorage.setItem("profilepicture", current_admin.profilepicture);
        window.location.href="../admin_mainpage/admin.html";
    }else if(matchedUser){
        let current_user=user_records.filter(function(v){
            return v.email===email && v.password===password;
        })[0]
        sessionStorage.setItem("name", current_user.name);
        sessionStorage.setItem("username", current_user.username);
        sessionStorage.setItem("email", current_user.email);
        sessionStorage.setItem("profilepicture", current_user.profilepicture);
        sessionStorage.setItem("saved", JSON.stringify(current_user.saved||[]));
        sessionStorage.setItem("Cart", JSON.stringify(current_user.Cart||[]));
        sessionStorage.setItem("Orders", JSON.stringify(current_user.Orders||[]));
        sessionStorage.setItem("Address", JSON.stringify(current_user.Address||[]));
        window.location.href="../user_mainpage/user.html";
        
    } else {
        document.getElementById("error-message").classList.add("error-print");
        document.getElementById("in-group1").classList.add("in-field-invalid");
        document.getElementById("in-group2").classList.add("in-field-invalid");
    }
}
document.getElementById("emailLogin").addEventListener("input",function(){
    document.getElementById("error-message").classList.remove("error-print");
    document.getElementById("in-group1").classList.remove("in-field-invalid");
    document.getElementById("in-group2").classList.remove("in-field-invalid");
    document.getElementById("error-enter").innerHTML="";
})
document.getElementById("passwordLogin").addEventListener("input",function(){
    document.getElementById("error-message").classList.remove("error-print");
    document.getElementById("in-group1").classList.remove("in-field-invalid");
    document.getElementById("in-group2").classList.remove("in-field-invalid");
    document.getElementById("error-enter").innerHTML="";
})
document.getElementById("loginButton").addEventListener("click", saveData);

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
        return  admin.email === newData.email;
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

function replacePage(){
    let user_records=new Array();
    user_records=JSON.parse(sessionStorage.getItem("users"))?JSON.parse(sessionStorage.getItem("users")):[];
    let admin_records=new Array();
    admin_records = JSON.parse(sessionStorage.getItem("admins"))?JSON.parse(sessionStorage.getItem("admins")):[];
    let email=sessionStorage.getItem('email');
    if (email === null){

        console.log('dont replace')
        return
    }else{
        let find= user_records.find(function(x){
            return x.email === email;
        })
        if (find){
            window.location.replace('../user_mainpage/user.html')
        }else{
            let find= admin_records.find(function(x){
                return x.email === email;
            })
            if (find){
                window.location.replace('../admin_mainpage/admin.html')
            }
        }
    }
 }
 replacePage();
 window.onunload = function(){};