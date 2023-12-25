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
    let buttonArray= ['usersButton', 'adminButton','orderButton', 'booksButton', 'newsButton', 'messagesButton'];
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
//admin template literals
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
        let orderNone= document.getElementById('sectionOrders');
        if (totalOrder_records.length === 0){
            return orderNone.innerHTML=`
             NOTHING TO SHOW
            `
        }else{
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
    details.innerHTML=`
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

    newsbody.innerHTML += newsletter_records.map(function(x,y){
        return `
        <tr>
                                            <td class="text-center">${y +1}</td>
                                            <td class="text-center">${x.email}</td>
                                            <td class="text-center">${x.date.date}</td>
                                            <td class="d-flex flex-wrap justify-content-center">
                                                <a type="button" class="btn btn-remove">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
                                                    </svg>
                                                </a>
                                            </td>
                                        </tr>
        `
    })
    
}
generateNewsletter();


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


