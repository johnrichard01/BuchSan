let profilePicture= document.getElementById("profile-display");
let fullName=document.getElementById("name-display");


function generateProfile(){
    return profilePicture.innerHTML= `
    <img src=${localStorage.getItem("profilepicture")} width="60px"  alt="profile picture">
    `
}
generateProfile();
function generateName(){
    return fullName.innerHTML= `Hi!  ${localStorage.getItem("username")}`;
}
generateName();