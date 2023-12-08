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