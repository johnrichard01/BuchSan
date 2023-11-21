function saveData(){
    let email=document.getElementById("emailLogin").value;
    let password=document.getElementById("passwordLogin").value;

    let user_records=new Array();
    user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[];

    if(user_records.some(function(v){
        return v.email==email && v.password==password
    })){
        alert("login successful")
        let current_user=user_records.filter(function(v){
            return v.email==email && v.password==password;
        })[0]
        localStorage.setItem("name", current_user.name);
        localStorage.setItem("username", current_user.username);
        localStorage.setItem("email", current_user.email);
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
})
document.getElementById("passwordLogin").addEventListener("input",function(){
    document.getElementById("error-message").classList.remove("error-print");
    document.getElementById("in-group1").classList.remove("in-field-invalid");
    document.getElementById("in-group2").classList.remove("in-field-invalid");
})
document.getElementById("loginButton").addEventListener("click", saveData);