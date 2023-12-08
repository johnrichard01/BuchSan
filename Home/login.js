


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
        
        window.location.replace("../admin.html");
    }else if(matchedUser){
        let current_user=user_records.filter(function(v){
            return v.email===email && v.password===password;
        })[0]
        sessionStorage.setItem("name", current_user.name);
        sessionStorage.setItem("username", current_user.username);
        sessionStorage.setItem("email", current_user.email);
        sessionStorage.setItem("profilepicture", current_user.profilepicture);
        sessionStorage.setItem("saved", JSON.stringify(current_user.saved));
        window.location.replace("../user_mainpage/user.html");
        
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