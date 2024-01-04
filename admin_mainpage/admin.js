//for sections and buttons
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
    let buttonArray= ['usersButton', 'adminButton','orderButton', 'booksButton', 'newsButton', 'messagesButton','homeButton'];
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
    let buttonArray= ['usersButton', 'adminButton','orderButton', 'booksButton','newsButton', 'messagesButton'];
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
    let user_records=new Array();
    user_records= JSON.parse(sessionStorage.getItem("users"))?JSON.parse(sessionStorage.getItem("users")):[];
    let sectionUser= document.getElementById('usersBody');
    let nothingContainer = document.querySelector('.remove-container1');
    if (user_records.length===0){
        document.getElementById('headerUser').classList.add('header-hide');
         sectionUser.innerHTML+=
        `
        <div class="container nothing-container remove-container1 d-flex flex-wrap align-items-center justify-content-center">
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="20rem" height="20rem" fill="currentColor" class="bi bi-person-fill-slash" viewBox="0 0 16 16">
                <path d="M13.879 10.414a2.501 2.501 0 0 0-3.465 3.465zm.707.707-3.465 3.465a2.501 2.501 0 0 0 3.465-3.465m-4.56-1.096a3.5 3.5 0 1 1 4.949 4.95 3.5 3.5 0 0 1-4.95-4.95ZM11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-9 8c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4"/>
            </svg>
        </div>
    </div>`
    }else{
        document.getElementById('headerUser').classList.remove('header-hide');
        if(nothingContainer){
            nothingContainer.remove();
        }
        sectionUser.innerHTML += user_records.map(function(x){
            return ` 
            <tr>
                <td class="text-center">${x.name}</td>
                <td class="text-center">${x.username}</td>
                <td class="text-center">${x.email}</td>
                <td  class="text-center dropdown-center">
                    <button class="btn orders-action dropdown-toggle" data-bs-toggle="dropdown">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16">
                        <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
                        <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>
                    </svg>
                </button>
                <ul class="dropdown-menu dropdown-orders">
                    <li>
                        <button onclick="resetModal('${x.email}');realtimeEvent();openModal6();"  class="orders-hover dropdown-item d-flex justify-content-center fw-bold">Reset Password</button>
                    </li>
                    <li>
                        <button onclick="deleteUserConfirmation(event,'${x.email}')"  class="orders-hover dropdown-item d-flex justify-content-center fw-bold">Delete</button>
                    </li>
                </ul>
                </td>
            </tr>`
        }).join("")
    }
}
generateSectionUsers();
//modal for password reset
function resetModal(email){
    let modal = document.getElementById('modalReset')
    modal.innerHTML=`
    <div class="container d-flex flex-wrap justify-content-center">
                        <form class="form" novalidate>
                            <div class="ing-group d-flex flex-wrap justify-content-center">
                                <div class="in-field" id="resetPassword1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.75rem" height="1.75rem" fill="currentColor" class="bi bi-shield-lock-fill input-icon" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm0 5a1.5 1.5 0 0 1 .5 2.915l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99A1.5 1.5 0 0 1 8 5z"/>
                                      </svg>
                                    <input type="password" class="in-box" id="newuserpassword" placeholder="New Password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required>
                                    
                                </div>
                                    <div class="error-message" id="reseterror1">
                                    </div>
                                <div class="in-field" id="resetPassword2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.75rem" height="1.75rem" fill="currentColor" class="bi bi-shield-lock-fill input-icon" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm0 5a1.5 1.5 0 0 1 .5 2.915l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99A1.5 1.5 0 0 1 8 5z"/>
                                      </svg>
                                    <input type="password" class="in-box" id="confirmuserpassword" placeholder="Confirm Password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required>
                                </div>
                                    <p id="message"></p>
                                    <div class="error-message" id="reseterror2">
                                    </div>
                                    <div class="error-message" id="validateuserMessage">
                                    </div>
                                <div class="row w-100 mt-4">
                                    <div class="d-flex justify-content-center">
                                        <button type="button" class="btn btn-update fw-bold w-50" onclick=" validateReset('${email}');" >Confirm</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
    `
    document.getElementById("newuserpassword").addEventListener("input",realtimeReset);
    document.getElementById("confirmuserpassword").addEventListener("input",realtimeReset);
    document.getElementById("newuserpassword").addEventListener("input",function(){
        document.getElementById('reseterror1').innerHTML=""
        document.getElementById('reseterror1').classList.remove('error-print');
        document.getElementById('resetPassword1').classList.remove('in-field-invalid')
    });
}

//for deleting user
function deleteUser(email){
    
    let user_records=new Array();
    user_records= JSON.parse(sessionStorage.getItem("users"))?JSON.parse(sessionStorage.getItem("users")):[]

    let filter= user_records.filter(function(x){
        return x.email !== email ;
    })
    sessionStorage.setItem("users", JSON.stringify(filter));
}
function deleteUserConfirmation(event, email){
    let sectionUser= document.getElementById('usersBody');
    let result =confirm('are you sure ?');
    if (result === false){
        console.log('canceled')
        event.preventDefault();
    }else{
        deleteUser(email);
        let existingRows = sectionUser.querySelectorAll('tr');
        for (let i = existingRows.length - 1; i > 0; i--) {
            existingRows[i].parentNode.removeChild(existingRows[i]);
        }
        generateSectionUsers();
        generateHome();
    }
}
function openModal6() {
    let modal = document.getElementById('staticBackdrop6');
    let modalInstance = new bootstrap.Modal(modal);
    modalInstance.show();
}
//validation for reset password
function space(input) {
    return /^\s*$/.test(input);
}
function isValidPassword(password) {
    var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return passwordRegex.test(password);
}
function passwordsMatch(password, confirmPassword) {   
    return password === confirmPassword;
}

function validateReset(email){
    let isValid = true;
    let newpass= document.getElementById('newuserpassword').value;
    let confirmnew= document.getElementById('confirmuserpassword').value;

    if (!isValidPassword(newpass)){
        document.getElementById('reseterror1').innerHTML="Please enter a valid password"
        document.getElementById('reseterror1').classList.add('error-print');
        document.getElementById('resetPassword1').classList.add('in-field-invalid')
        isValid= false;
    } if (newpass === ""){
        document.getElementById('reseterror1').innerHTML="Please enter a password"
        document.getElementById('reseterror1').classList.add('error-print');
        document.getElementById('resetPassword1').classList.add('in-field-invalid')
        isValid= false;
    }  if (confirmnew === ""){
        document.getElementById('reseterror2').innerHTML="Please enter a the same password"
        document.getElementById('reseterror2').classList.add('error-print');
        document.getElementById('reseterror2').style.color="red"
        document.getElementById('resetPassword2').classList.add('in-field-invalid')
        isValid= false;
    }if (confirmnew === ""){
        document.getElementById('reseterror2').innerHTML="Please enter the same password"
        document.getElementById('reseterror2').classList.add('error-print');
        document.getElementById('reseterror2').style.color="red";
        document.getElementById('resetPassword2').classList.add('in-field-invalid')
        isValid= false;
    } if (isValid){
        
        resetPassword(email);
    }
}
function realtimeReset(){
    document.getElementById("reseterror2").classList.remove("error-print");
    document.getElementById("resetPassword2").classList.remove("in-field-invalid");
    let newpassword= document.getElementById('newuserpassword').value;
    let confirmpassword= document.getElementById('confirmuserpassword').value;
    if (newpassword.trim() ==="" && confirmpassword.trim()===""){
        
    }else{
        if (newpassword.trim() === confirmpassword.trim()){
            document.getElementById('reseterror2').innerHTML="Password match"
            document.getElementById('reseterror2').classList.add("error-print")
            document.getElementById('reseterror2').style.color="green";
        }else{
            document.getElementById('reseterror2').innerHTML="Password does not match"
            document.getElementById('reseterror2').classList.add("error-print")
            document.getElementById('resetPassword2').classList.add("in-field-invalid")
            document.getElementById('reseterror2').style.color="red";
        }
    }
}
function clearReset(){
  document.getElementById('newuserpassword').value="";
  document.getElementById('confirmuserpassword').value="";
  document.getElementById('reseterror2').classList.remove("error-print")
  document.getElementById('reseterror1').classList.remove("error-print")
  document.getElementById('resetPassword1').classList.remove('in-field-invalid')
  document.getElementById('resetPassword2').classList.remove('in-field-invalid')
}


//for restting password
function resetPassword(email){
    let newpassword= document.getElementById('newuserpassword').value;
    let confirmpassword= document.getElementById('confirmuserpassword').value;

    let user_records=new Array();
    user_records= JSON.parse(sessionStorage.getItem("users"))?JSON.parse(sessionStorage.getItem("users")):[]
    
    let search = user_records.find(function(x){
        return x.email === email;
    })
    search.password= newpassword;
    sessionStorage.setItem('users', JSON.stringify(user_records));
    document.getElementById('confirmuserpassword').value="";
    document.getElementById('newuserpassword').value="";
    document.getElementById('reseterror2').innerHTML="Succesfully Changed"
    document.getElementById('reseterror2').classList.add('error-print');
    document.getElementById('reseterror2').style.color="green";
    setTimeout(function(){
        document.getElementById('reseterror2').innerHTML=""
        document.getElementById('reseterror2').classList.remove('error-print');
    }, 2000)
}
//adding user
function openModal7() {
    let modal = document.getElementById('staticBackdrop7');
    let modalInstance = new bootstrap.Modal(modal);
    modalInstance.show();
}
//admin template literals
function generateSectionAdmins(){
    let sectionAdmin= document.getElementById('adminBody');
    let admin_records=new Array();
    admin_records= JSON.parse(sessionStorage.getItem("admins"))?JSON.parse(sessionStorage.getItem("admins")):[];
    let nothingContainer = document.querySelector('.remove-container2');
    if (admin_records.length===0){
        document.getElementById('headerAdmin').classList.add('header-hide');
        return sectionAdmin.innerHTML +=
        `
        <div class="container nothing-container remove-container2 d-flex flex-wrap align-items-center justify-content-center">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="20rem" height="20rem" fill="currentColor" class="bi bi-person-fill-slash" viewBox="0 0 16 16">
                    <path d="M13.879 10.414a2.501 2.501 0 0 0-3.465 3.465zm.707.707-3.465 3.465a2.501 2.501 0 0 0 3.465-3.465m-4.56-1.096a3.5 3.5 0 1 1 4.949 4.95 3.5 3.5 0 0 1-4.95-4.95ZM11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-9 8c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4"/>
                </svg>
            </div>
        </div>`
    }else{
        document.getElementById('headerAdmin').classList.remove('header-hide');
        if(nothingContainer){
            nothingContainer.remove();
        }
         sectionAdmin.innerHTML += admin_records.map(function(x){
            return ` 
            <tr>
                <td class="text-center">${x.name}</td>
                <td class="text-center">${x.username}</td>
                <td class="text-center">${x.email}</td>
                <td  class="text-center dropdown-center">
                        <button class="btn orders-action dropdown-toggle" data-bs-toggle="dropdown">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16">
                            <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
                            <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>
                        </svg>
                    </button>
                    <ul class="dropdown-menu dropdown-orders">
                        <li>
                            <button onclick="resetModalAdmin('${x.email}');realtimeAdmin();openModal8();"  class="orders-hover dropdown-item d-flex justify-content-center fw-bold">Reset Password</button>
                        </li>
                        <li>
                            <button onclick="deleteAdminConfirmation(event, '${x.email}')"  class="orders-hover dropdown-item d-flex justify-content-center fw-bold">Delete</button>
                        </li>
                    </ul>
            </tr>`
        }).join("")
    }
    
}
generateSectionAdmins();
function openModal8() {
    let modal = document.getElementById('staticBackdrop8');
    let modalInstance = new bootstrap.Modal(modal);
    modalInstance.show();
}
//for resetting admin password
function resetModalAdmin(email){
    let modal = document.getElementById('modalResetAdmin')
    modal.innerHTML=`
    <div class="container d-flex flex-wrap justify-content-center">
                        <form class="form" novalidate>
                            <div class="ing-group d-flex flex-wrap justify-content-center">
                                <div class="in-field" id="resetPasswordAdmin1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.75rem" height="1.75rem" fill="currentColor" class="bi bi-shield-lock-fill input-icon" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm0 5a1.5 1.5 0 0 1 .5 2.915l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99A1.5 1.5 0 0 1 8 5z"/>
                                      </svg>
                                    <input type="password" class="in-box" id="newuserpasswordAdmin" placeholder="New Password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required>
                                    
                                </div>
                                    <div class="error-message" id="reseterrorAdmin1">
                                    </div>
                                <div class="in-field" id="resetPasswordAdmin2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.75rem" height="1.75rem" fill="currentColor" class="bi bi-shield-lock-fill input-icon" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm0 5a1.5 1.5 0 0 1 .5 2.915l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99A1.5 1.5 0 0 1 8 5z"/>
                                      </svg>
                                    <input type="password" class="in-box" id="confirmuserpasswordAdmin" placeholder="Confirm Password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required>
                                </div>
                                    <p id="message"></p>
                                    <div class="error-message" id="reseterrorAdmin2">
                                    </div>
                                    <div class="error-message" id="validateuserMessage">
                                    </div>
                                <div class="row w-100 mt-4">
                                    <div class="d-flex justify-content-center">
                                        <button type="button" class="btn btn-update fw-bold w-50" onclick=" validateResetAdmin('${email}');" >Confirm</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
    `
    document.getElementById("newuserpasswordAdmin").addEventListener("input",realtimeResetAdmin);
    document.getElementById("confirmuserpasswordAdmin").addEventListener("input",realtimeResetAdmin);
    document.getElementById("newuserpasswordAdmin").addEventListener("input",function(){
        document.getElementById('reseterrorAdmin1').innerHTML=""
        document.getElementById('reseterrorAdmin1').classList.remove('error-print');
        document.getElementById('resetPasswordAdmin1').classList.remove('in-field-invalid')
    });
}
function validateResetAdmin(email){
    let isValid = true;
    let newpass= document.getElementById('newuserpasswordAdmin').value;
    let confirmnew= document.getElementById('confirmuserpasswordAdmin').value;
    if (!isValidPassword(newpass)){
        document.getElementById('reseterrorAdmin1').innerHTML="Please enter a valid password"
        document.getElementById('reseterrorAdmin1').classList.add('error-print');
        document.getElementById('resetPasswordAdmin1').classList.add('in-field-invalid')
        isValid= false;
    } if (newpass === ""){
        document.getElementById('reseterrorAdmin1').innerHTML="Please enter a password"
        document.getElementById('reseterrorAdmin1').classList.add('error-print');
        document.getElementById('resetPasswordAdmin1').classList.add('in-field-invalid')
        isValid= false;
    }  if (confirmnew === ""){
        document.getElementById('reseterrorAdmin2').innerHTML="Please enter a the same password"
        document.getElementById('reseterrorAdmin2').classList.add('error-print');
        document.getElementById('reseterrorAdmin2').style.color="red"
        document.getElementById('resetPasswordAdmin2').classList.add('in-field-invalid')
        isValid= false;
    }if (confirmnew === ""){
        document.getElementById('reseterrorAdmin2').innerHTML="Please enter the same password"
        document.getElementById('reseterrorAdmin2').classList.add('error-print');
        document.getElementById('reseterrorAdmin2').style.color="red";
        document.getElementById('resetPasswordAdmin2').classList.add('in-field-invalid')
        isValid= false;
    } if (isValid){
        resetPasswordAdmin(email);
    }
}
function realtimeResetAdmin(){
    document.getElementById("reseterrorAdmin2").classList.remove("error-print");
    document.getElementById("resetPasswordAdmin2").classList.remove("in-field-invalid");
    let newpassword= document.getElementById('newuserpasswordAdmin').value;
    let confirmpassword= document.getElementById('confirmuserpasswordAdmin').value;
    if (newpassword.trim() ==="" && confirmpassword.trim()===""){
        
    }else{
        if (newpassword.trim() === confirmpassword.trim()){
            document.getElementById('reseterrorAdmin2').innerHTML="Password match"
            document.getElementById('reseterrorAdmin2').classList.add("error-print")
            document.getElementById('reseterrorAdmin2').style.color="green";
        }else{
            document.getElementById('reseterrorAdmin2').innerHTML="Password does not match"
            document.getElementById('reseterrorAdmin2').classList.add("error-print")
            document.getElementById('resetPasswordAdmin2').classList.add("in-field-invalid")
            document.getElementById('reseterrorAdmin2').style.color="red";
        }
    }
}
function clearResetAdmin(){
  document.getElementById('newuserpasswordAdmin').value="";
  document.getElementById('confirmuserpasswordAdmin').value="";
  document.getElementById('reseterrorAdmin2').classList.remove("error-print")
  document.getElementById('reseterrorAdmin1').classList.remove("error-print")
  document.getElementById('resetPasswordAdmin1').classList.remove('in-field-invalid')
  document.getElementById('resetPasswordAdmin2').classList.remove('in-field-invalid')
}

//for resetting admin password
function resetPasswordAdmin(email){
    let newpassword= document.getElementById('newuserpasswordAdmin').value;
    let confirmpassword= document.getElementById('confirmuserpasswordAdmin').value;

    let admin_records=new Array();
    admin_records= JSON.parse(sessionStorage.getItem("admins"))?JSON.parse(sessionStorage.getItem("admins")):[]
    
    let search = admin_records.find(function(x){
        return x.email === email;
    })
    search.password= newpassword;
    sessionStorage.setItem('admins', JSON.stringify(admin_records));
    document.getElementById('confirmuserpasswordAdmin').value="";
    document.getElementById('newuserpasswordAdmin').value="";
    document.getElementById('reseterrorAdmin2').innerHTML="Succesfully Changed"
    document.getElementById('reseterrorAdmin2').classList.add('error-print');
    document.getElementById('reseterrorAdmin2').style.color="green";
    setTimeout(function(){
        document.getElementById('reseterrorAdmin2').innerHTML=""
        document.getElementById('reseterrorAdmin2').classList.remove('error-print');
    }, 2000)
}
//for deleting admin
function deleteAdmin(email){
    let admin_records=new Array();
    admin_records= JSON.parse(sessionStorage.getItem("admins"))?JSON.parse(sessionStorage.getItem("admins")):[]
    let filter= admin_records.filter(function(x){
        return x.email !== email ;
    })
    sessionStorage.setItem("admins", JSON.stringify(filter));
}
function deleteAdminConfirmation(event, email){
    let admin_records=new Array();
    admin_records= JSON.parse(sessionStorage.getItem("admins"))?JSON.parse(sessionStorage.getItem("admins")):[]
    let currentAdmin= sessionStorage.getItem('email')
    let sectionUser= document.getElementById('adminBody');
    let result =confirm('are you sure ?');
    if (result === false){
        console.log('canceled')
        event.preventDefault();
    }else{
        let search= admin_records.find(function(x){
            return currentAdmin === x.email;
        })
        if (sessionStorage.getItem('email')=== email ){
            alert('You are currently using this account! Cannot be deleted!')
        }else{
            if (search.type !== 'main'){
                alert('Only the main admin can delete admin accounts!')
            }else {
                deleteAdmin(email);
                let existingRows = sectionUser.querySelectorAll('tr');
                for (let i = existingRows.length - 1; i > 0; i--) {
                    existingRows[i].parentNode.removeChild(existingRows[i]);
                }
                generateSectionAdmins();
            }
        }
    }
}
// modal for add admin
function openModal9() {
    let modal = document.getElementById('staticBackdrop9');
    let modalInstance = new bootstrap.Modal(modal);
    modalInstance.show();
}
// template literals for books
function generateBooks(){
    let book_records=new Array();
    book_records=JSON.parse(sessionStorage.getItem("Books"))?JSON.parse(sessionStorage.getItem("Books")):[];
    let sectionBooks= document.getElementById('booksBody');
    sectionBooks.innerHTML += book_records.map(function(x,y){
        return `
        <tr>
                                            <td>
                                                <div class="d-flex flex-wrap justify-content-center">
                                                    ${y+1}
                                                </div>
                                            </td>
                                            <td>
                                                <div class="cart-info d-flex flex-wrap justify-content-start align-items-center">
                                                    <img src="../${x.cover}">
                                                    <div>
                                                        <p id="booksCategory">Title : ${x.title}</p>
                                                        <p id="booksCategory">Author : ${x.author}</p>
                                                        <small> Genre: ${x.genre}</small>
                                                        <br>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div class="d-flex flex-wrap justify-content-center">
                                                    &#8369;  ${x.price}
                                                </div>
                                            </td>
                                            <td class="iremove text-center">
                                                <div class="d-flex flex-wrap justify-content-center">
                                                    ${x.rating}
                                                </div>
                                            </td>
                                            <td>
                                                <a type="button" class="btn btn-remove d-flex justify-content-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
                                                    </svg>
                                                </a>
                                            </td>
                                        </tr>
        `
    }).join("")
}
generateBooks();
//generate orders info
function generateOrders(){
    let totalOrder_records= new Array;
        totalOrder_records=JSON.parse(sessionStorage.getItem("totalOrders"))?JSON.parse(sessionStorage.getItem("totalOrders")):[];
        let orderbody= document.getElementById('adminOrders');
        let nothingContainer=document.querySelector('.remove-container4');
        if (totalOrder_records.length === 0){
            document.getElementById('headerOrder').classList.add('header-hide');
            return orderbody.innerHTML+=
            `
            <div class="container nothing-container remove-container4 d-flex flex-wrap align-items-center justify-content-center">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20rem" height="20rem" fill="currentColor" class="bi bi-box-seam-fill" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M15.528 2.973a.75.75 0 0 1 .472.696v8.662a.75.75 0 0 1-.472.696l-7.25 2.9a.75.75 0 0 1-.557 0l-7.25-2.9A.75.75 0 0 1 0 12.331V3.669a.75.75 0 0 1 .471-.696L7.443.184l.01-.003.268-.108a.75.75 0 0 1 .558 0l.269.108.01.003 6.97 2.789ZM10.404 2 4.25 4.461 1.846 3.5 1 3.839v.4l6.5 2.6v7.922l.5.2.5-.2V6.84l6.5-2.6v-.4l-.846-.339L8 5.961 5.596 5l6.154-2.461z"/>
                    </svg>
                </div>
            </div>`
        }else{
            document.getElementById('headerOrder').classList.remove('header-hide');
            if(nothingContainer){
                nothingContainer.remove();
            }
            orderbody.innerHTML+= totalOrder_records.map(function(x,y){
                if (x.status === 'TO SHIP'){
                    return`
                    <tr>
                    <td class="text-center">${y+1}</td>
                    <td class="text-center">${x.orderId}</td>
                    <td class="text-center">${x.payerEmail}</td>
                    <td class="text-center">&#8369; ${x.total}.00</td>
                    <td class="text-center">
                        <select name="status" onchange="selectedStatus('${x.orderId}',this)">
                            <option value="TO SHIP" selected>TO SHIP</option>
                            <option value="SHIPPED">SHIPPED</option>
                            <option value="COMPLETED">COMPLETED</option>
                            <option value="CANCELED">CANCELED</option>
                        </select>
                    </td>
                    <td  class="text-center dropdown-center">
                        <button class="btn orders-action dropdown-toggle" data-bs-toggle="dropdown">
                           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16">
                               <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
                               <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>
                           </svg>
                       </button>
                       <ul class="dropdown-menu dropdown-orders">
                           <li class="">
                               <button onclick="generateDetails('${x.orderId}'); openModal3();"  class="orders-hover dropdown-item d-flex justify-content-center fw-bold">View Details</button>
                           </li>
                       </ul>
                   </td>
                   </tr>
                   `
                }else if(x.status === 'SHIPPED'){
                    return`
                    <tr>
                    <td class="text-center">${y+1}</td>
                    <td class="text-center">${x.orderId}</td>
                    <td class="text-center">${x.payerEmail}</td>
                    <td class="text-center">&#8369; ${x.total}.00</td>
                    <td class="text-center">
                        <select name="status" onchange="selectedStatus('${x.orderId}',this)">
                            <option value="TO SHIP">TO SHIP</option>
                            <option value="SHIPPED" selected>SHIPPED</option>
                            <option value="COMPLETED">COMPLETED</option>
                            <option value="CANCELED">CANCELED</option>
                        </select>
                    </td>
                    <td  class="text-center dropdown-center">
                        <button class="btn orders-action dropdown-toggle" data-bs-toggle="dropdown">
                           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16">
                               <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
                               <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>
                           </svg>
                       </button>
                       <ul class="dropdown-menu dropdown-orders">
                           <li class="">
                               <button onclick="generateDetails('${x.orderId}'); openModal3();"  class="orders-hover dropdown-item d-flex justify-content-center fw-bold">View Details</button>
                           </li>
                       </ul>
                   </td>
                   </tr>
                   `
                }else if (x.status === 'COMPLETED'){
                    return`
                    <tr>
                    <td class="text-center">${y+1}</td>
                    <td class="text-center">${x.orderId}</td>
                    <td class="text-center">${x.payerEmail}</td>
                    <td class="text-center">&#8369; ${x.total}.00</td>
                    <td class="text-center">
                        <select name="status" onchange="selectedStatus('${x.orderId}',this)">
                            <option value="TO SHIP">TO SHIP</option>
                            <option value="SHIPPED">SHIPPED</option>
                            <option value="COMPLETED" selected>COMPLETED</option>
                            <option value="CANCELED">CANCELED</option>
                        </select>
                    </td>
                    <td  class="text-center dropdown-center">
                        <button class="btn orders-action dropdown-toggle" data-bs-toggle="dropdown">
                           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16">
                               <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
                               <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>
                           </svg>
                       </button>
                       <ul class="dropdown-menu dropdown-orders">
                           <li class="">
                               <button onclick="generateDetails('${x.orderId}'); openModal3();"  class="orders-hover dropdown-item d-flex justify-content-center fw-bold">View Details</button>
                           </li>
                       </ul>
                   </td>
                   </tr>
                   `
                }else if(x.status === 'CANCELED'){
                    return`
                    <tr>
                    <td class="text-center">${y+1}</td>
                    <td class="text-center">${x.orderId}</td>
                    <td class="text-center">${x.payerEmail}</td>
                    <td class="text-center">&#8369; ${x.total}.00</td>
                    <td class="text-center">
                        <select name="status" onchange="selectedStatus('${x.orderId}',this)">
                            <option value="TO SHIP">TO SHIP</option>
                            <option value="SHIPPED">SHIPPED</option>
                            <option value="COMPLETED">COMPLETED</option>
                            <option value="CANCELED" selected>CANCELED</option>
                        </select>
                    </td>
                    <td  class="text-center dropdown-center">
                        <button class="btn orders-action dropdown-toggle" data-bs-toggle="dropdown">
                           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16">
                               <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
                               <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>
                           </svg>
                       </button>
                       <ul class="dropdown-menu dropdown-orders">
                           <li class="">
                               <button onclick="generateDetails('${x.orderId}'); openModal3();"  class="orders-hover dropdown-item d-flex justify-content-center fw-bold">View Details</button>
                           </li>
                       </ul>
                   </td>
                   </tr>
                   `
                }
            }).join("")
        }
}
generateOrders();
//orders selected onchange
function selectedStatus(id, element){
    let totalOrder_records= new Array;
        totalOrder_records=JSON.parse(sessionStorage.getItem("totalOrders"))?JSON.parse(sessionStorage.getItem("totalOrders")):[];
    let user_records=new Array();
        user_records= JSON.parse(sessionStorage.getItem("users"))?JSON.parse(sessionStorage.getItem("users")):[]
        let order_records= new Array;
        order_records=JSON.parse(sessionStorage.getItem("Orders"))?JSON.parse(sessionStorage.getItem("Orders")):[];
    let search=totalOrder_records.find(function(x){
        return x.orderId === id;
    })
    let findUser= user_records.find(function(x){
        return x.email === search.payerEmail;
    })
     let findOrder= findUser.Orders.find(function(x){
        return x.orderId === search.orderId;
     })
        search.status= element.value;
        findOrder.status=element.value;
        sessionStorage.setItem("totalOrders",JSON.stringify(totalOrder_records));
        sessionStorage.setItem("users",JSON.stringify(user_records));
    }
//modal for orders
function generateDetails(id){
    let totalOrder_records= new Array;
        totalOrder_records=JSON.parse(sessionStorage.getItem("totalOrders"))?JSON.parse(sessionStorage.getItem("totalOrders")):[];
    let book_records=new Array();
        book_records=JSON.parse(sessionStorage.getItem("Books"))?JSON.parse(sessionStorage.getItem("Books")):[];
    let address= document.getElementById('address-body');
    let items = document.getElementById('items-body');
    let total= document.getElementById('total-body');
    let details= document.getElementById('moreDetails');

    let search=totalOrder_records.find(function(x){
        return id === x.orderId;
    })
    let existingDate= search.date.date;
    let newdate= new Date(existingDate);
    newdate.setDate(newdate.getDate()+ 10);
    let expected= newdate.toLocaleDateString();
    address.innerHTML=`
    <p class="fw-bold">${search.payerName}</p>
    <p class="fw-bold">${search.phone}</p>
    <p class="fw-bold">${search.shippingAddress.street}, Brgy. ${search.shippingAddress.barangay}, ${search.shippingAddress.city} City, ${search.shippingAddress.province}, ${search.shippingAddress.zipcode}</p>
    `
    items.innerHTML=search.items.map(function(x){
        let findItems=   book_records.find(function(y){
            return x.id === y.id;
        })
        if (findItems.genre != 'sale'){
            return `
            <tr class="tr-modal">
                        <td class="col-10">
                            <div class="d-flex flex-wrap">
                                <div>
                                    <img src="../${findItems.cover}"  alt="">
                                </div>
                                <div class="col-6">
                                    <div class="d-flex flex-wrap">
                                        <div class="d-flex flex-wrap">${findItems.title}</div>
                                    </div>
                                    <div class="mt-2">${findItems.author}</div>
                                    <div class="mt-2">&#8369; ${findItems.price}</p>
                                </div>
                            </div>
                        </td>
                        <td  class="col-2">
                            x ${x.items}
                        </td>
                </tr>
        `
        }else{
            return `
            <tr class="tr-modal">
                        <td class="col-10">
                            <div class="d-flex flex-wrap">
                                <div>
                                    <img src="../${findItems.cover}"  alt="">
                                </div>
                                <div class="col-6">
                                    <div class="d-flex flex-wrap">
                                        <div class="d-flex flex-wrap">${findItems.title}</div>
                                    </div>
                                    <div class="mt-2">${findItems.author}</div>
                                    <div class="mt-2">&#8369; ${(findItems.price)-(findItems.price*(findItems.saleprice/100))}  <span><del> &#8369; ${findItems.price}</p>
                                </div>
                            </div>
                        </td>
                        <td  class="col-2">
                            x ${x.items}
                        </td>
                    </tr>
        `
        }
    }).join("")
    total.innerHTML=`
    <div class="product-tot d-flex justify-content-between align-items-center mt-3">
                          <h6 class="fw-bold">Order Total</h6>
                          <p class="fw-bold">&#8369; ${search.total}.00</p>
                      </div>
                      <div class="product-tot d-flex justify-content-between align-items-center">
                        <h6 class="fw-bold">Payment Status</h6>
                        <p class="fw-bold">${search.payment}</p>
                    </div>
    `
    if (search.status === 'COMPLETED'){
        details.innerHTML=
        `
    <div class=" d-flex justify-content-between align-items-center">
                    <h6 class="fw-bold">Order ID</h6>
                    <p class="fw-bold">${search.orderId}</p>
                 </div>
                 <div class=" d-flex justify-content-between align-items-center">
                    <h6 class="fw-bold">Status</h6>
                    <p class="fw-bold fs-6">${search.status}</p>
                 </div>
                 <div class=" d-flex justify-content-between align-items-center">
                    <h6 class="fw-bold">Date Placed</h6>
                    <p class="lead fs-6">${search.date.date}</p>
                 </div>
                 <div class=" d-flex justify-content-between align-items-center">
                    <h6 class="fw-bold">Expected Delivery</h6>
                    <p class="lead fs-6">COMPLETED</p>
                 </div>
    `
    }else if (search.status === 'CANCELED'){
        details.innerHTML=
        `
    <div class=" d-flex justify-content-between align-items-center">
                    <h6 class="fw-bold">Order ID</h6>
                    <p class="fw-bold">${search.orderId}</p>
                 </div>
                 <div class=" d-flex justify-content-between align-items-center">
                    <h6 class="fw-bold">Status</h6>
                    <p class="fw-bold fs-6">${search.status}</p>
                 </div>
                 <div class=" d-flex justify-content-between align-items-center">
                    <h6 class="fw-bold">Date Placed</h6>
                    <p class="lead fs-6">${search.date.date}</p>
                 </div>
                 <div class=" d-flex justify-content-between align-items-center">
                    <h6 class="fw-bold">Expected Delivery</h6>
                    <p class="lead fs-6">CANCELED</p>
                 </div>
    `
    }else{
        details.innerHTML=
        `
    <div class=" d-flex justify-content-between align-items-center">
                    <h6 class="fw-bold">Order ID</h6>
                    <p class="fw-bold">${search.orderId}</p>
                 </div>
                 <div class=" d-flex justify-content-between align-items-center">
                    <h6 class="fw-bold">Status</h6>
                    <p class="fw-bold fs-6">${search.status}</p>
                 </div>
                 <div class=" d-flex justify-content-between align-items-center">
                    <h6 class="fw-bold">Date Placed</h6>
                    <p class="lead fs-6">${search.date.date}</p>
                 </div>
                 <div class=" d-flex justify-content-between align-items-center">
                    <h6 class="fw-bold">Expected Delivery</h6>
                    <p class="lead fs-6">${expected}</p>
                 </div>
    `
    }
}
function openModal3() {
    var modal = document.getElementById('staticBackdrop3');
    var modalInstance = new bootstrap.Modal(modal);
    modalInstance.show();
}
//template literals for newsletter
function generateNewsletter(){
    let newsletter_records= new Array
    newsletter_records=JSON.parse(sessionStorage.getItem("Subscribers"))?JSON.parse(sessionStorage.getItem("Subscribers")):[];
    let newsbody= document.getElementById('newsBody');
    let nothingContainer=document.querySelector('.remove-container3');
    if (newsletter_records.length===0){
        document.getElementById('headerNews').classList.add('header-hide');
         return newsbody.innerHTML+=
        `
            <div class="container nothing-container remove-container3 d-flex flex-wrap align-items-center justify-content-center">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20rem" height="20rem" fill="currentColor" class="bi bi-envelope-open-fill" viewBox="0 0 16 16">
                        <path d="M8.941.435a2 2 0 0 0-1.882 0l-6 3.2A2 2 0 0 0 0 5.4v.314l6.709 3.932L8 8.928l1.291.718L16 5.714V5.4a2 2 0 0 0-1.059-1.765l-6-3.2ZM16 6.873l-5.693 3.337L16 13.372v-6.5Zm-.059 7.611L8 10.072.059 14.484A2 2 0 0 0 2 16h12a2 2 0 0 0 1.941-1.516M0 13.373l5.693-3.163L0 6.873v6.5Z"/>
                    </svg>
                </div>
            </div>`
    }else {
        document.getElementById('headerNews').classList.remove('header-hide');
        if(nothingContainer){
            nothingContainer.remove();
        }
        newsbody.innerHTML += newsletter_records.map(function(x,y){
            return `
            <tr>
                                                <td class="text-center">${y +1}</td>
                                                <td class="text-center">${x.email}</td>
                                                <td class="text-center">${x.date.date}</td>
                                                <td class="d-flex flex-wrap justify-content-center">
                                                    <a type="button" class="btn btn-remove" onclick="newsletterConfirmation('${x.email}')">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
                                                        </svg>
                                                    </a>
                                                </td>
                                            </tr>
            `
        }).join("")
    }
    
    
}
generateNewsletter();

function removeNewsLetter(email){
    let newsletter_records= new Array
    newsletter_records=JSON.parse(sessionStorage.getItem("Subscribers"))?JSON.parse(sessionStorage.getItem("Subscribers")):[];

    let filter= newsletter_records.filter(function(x){
        return email !== x.email;
    })
    sessionStorage.setItem('Subscribers', JSON.stringify(filter));
    generateHome();
}
function newsletterConfirmation(email){
    let message= document.getElementById('newsBody');
    let result =confirm('are you sure?');
    if (result === false){
        console.log('canceled')
        event.preventDefault();
    }else{
        removeNewsLetter(email);
        let existingRows = message.querySelectorAll('tr');
        for (let i = existingRows.length - 1; i > 0; i--) {
            existingRows[i].parentNode.removeChild(existingRows[i]);
        }
        generateNewsletter();
    }
}

var myOffcanvas = new bootstrap.Offcanvas(document.getElementById('offcanvasScrolling'));
myOffcanvas.show();
// function generate admin profile settings
function generateProfileSettings(){
    let container = document.getElementById('adminProfile')
    let name = sessionStorage.getItem('name')
    let uname = sessionStorage.getItem('username')
    let email= sessionStorage.getItem('email')

    container.innerHTML=`
    <form class="form" novalidate>
                                                        <div class="ing-group d-flex flex-wrap justify-content-center">
                                                            <div class="in-field" id="infieldError1">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="1.75rem" height="1.75rem" fill="currentColor" class="bi bi-person-fill input-icon" viewBox="0 0 16 16">
                                                                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                                                                  </svg>
                                                                
                                                                <input type="text" class="in-box" id="fullname" value="${name}" placeholder="Full name" required>
                                                            </div>
                                                                <div class="error-message" id="error-message1">
                                                                </div>
                                                            
                                                            <div class="in-field" id="infieldError2">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="1.75rem" height="1.75rem" fill="currentColor" class="bi bi-person-fill input-icon" viewBox="0 0 16 16">
                                                                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                                                                  </svg>
                                                                <input type="text" class="in-box" id="username" value="${uname}" placeholder="Username" required>
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
    `
}
generateProfileSettings();

//for going back
function replacePage(){
    let user_records=new Array();
    user_records=JSON.parse(sessionStorage.getItem("users"))?JSON.parse(sessionStorage.getItem("users")):[];
    let admin_records=new Array();
    admin_records = JSON.parse(sessionStorage.getItem("admins"))?JSON.parse(sessionStorage.getItem("admins")):[];
    let email=sessionStorage.getItem('email');
    if (email === null){
        window.location.replace('../index.html')
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
                return;
            }else{
                return;
            }
        }
    }
 }
 replacePage();

 function generateHome(){
    let total=document.getElementById('totalMoney')
    let users= document.getElementById('totalUsers')
    let orders= document.getElementById('totalOrders')
    let subs= document.getElementById('totalSubs')
    let totalSum=0;
    let user_records=new Array();
    user_records=JSON.parse(sessionStorage.getItem("users"))?JSON.parse(sessionStorage.getItem("users")):[];
    let newsletter_records= new Array
    newsletter_records=JSON.parse(sessionStorage.getItem("Subscribers"))?JSON.parse(sessionStorage.getItem("Subscribers")):[];
    let totalOrder_records= new Array;
    totalOrder_records=JSON.parse(sessionStorage.getItem("totalOrders"))?JSON.parse(sessionStorage.getItem("totalOrders")):[];

    for( let i=0; i < totalOrder_records.length; i++){
        totalSum += totalOrder_records[i].total;
    }
    total.innerHTML='&#8369; '+totalSum+'.00';
    users.innerHTML=user_records.length;
    orders.innerHTML=totalOrder_records.length;
    subs.innerHTML=newsletter_records.length;
 }
 generateHome();