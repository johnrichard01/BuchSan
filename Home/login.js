


function saveData(){
    let email=document.getElementById("emailLogin").value;
    let password=document.getElementById("passwordLogin").value;

    let user_records=new Array();
    user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[];
    let admin_records=new Array();
    admin_records = JSON.parse(localStorage.getItem("admins"))?JSON.parse(localStorage.getItem("admins")):[];


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
        localStorage.setItem("name", current_admin.name);
        localStorage.setItem("username", current_admin.username);
        localStorage.setItem("email", current_admin.email);
        window.location.href="../admin.html";
    }else if(matchedUser){
        let current_user=user_records.filter(function(v){
            return v.email===email && v.password===password;
        })[0]
        localStorage.setItem("name", current_user.name);
        localStorage.setItem("username", current_user.username);
        localStorage.setItem("email", current_user.email);
        localStorage.setItem("profilepicture", current_user.profilepicture);
        window.location.href="../user.html";
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