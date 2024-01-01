//template literals for Message
function generaeMessageList(){
    let message_records= new Array;
    message_records=JSON.parse(sessionStorage.getItem("Messages"))?JSON.parse(sessionStorage.getItem("Messages")):[];
    let message= document.getElementById('adminMessage');
    let nothingContainer= document.querySelector('.remove-container5')
    if (message_records.length === 0){
        document.getElementById('headerMess').classList.add('header-hide');
        message.innerHTML+= 
        `
            <div class="container nothing-container remove-container5 d-flex flex-wrap align-items-center justify-content-center">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20rem" height="20rem" fill="currentColor" class="bi bi-envelope-open-fill" viewBox="0 0 16 16">
                        <path d="M8.941.435a2 2 0 0 0-1.882 0l-6 3.2A2 2 0 0 0 0 5.4v.314l6.709 3.932L8 8.928l1.291.718L16 5.714V5.4a2 2 0 0 0-1.059-1.765l-6-3.2ZM16 6.873l-5.693 3.337L16 13.372v-6.5Zm-.059 7.611L8 10.072.059 14.484A2 2 0 0 0 2 16h12a2 2 0 0 0 1.941-1.516M0 13.373l5.693-3.163L0 6.873v6.5Z"/>
                    </svg>
                </div>
            </div>`
    }else{
        document.getElementById('headerMess').classList.remove('header-hide');
        if(nothingContainer){
            nothingContainer.remove();
        }
        message.innerHTML+= message_records.map(function(x){
            if (x.type === 'unread'){
                return `
                <tr class="message-unread" id="unread'${x.time}'">
                <td class="text-center">${x.time}</td>
                <td class="text-center">${x.name}</td>
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
                        <button onclick="removeUnread('${x.time}'); generateMessageContent('${x.time}'); openModal4();"  class="orders-hover dropdown-item d-flex justify-content-center fw-bold">View Mesage</button>
                    </li>
                    <li>
                        <button onclick="forConfirmation(event, '${x.time}' );"  class="orders-hover dropdown-item d-flex justify-content-center fw-bold">Delete</button>
                    </li>
                </ul>
                </td>
            </tr> 
            `
            }else{
                return `
            <tr>
            <td class="text-center">${x.time}</td>
            <td class="text-center">${x.name}</td>
            <td class="text-center">${x.email}</td>
            <td  class="text-center dropdown-center">
                <button class="btn orders-action dropdown-toggle" data-bs-toggle="dropdown">
                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16">
                       <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
                       <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>
                   </svg>
               </button>
               <ul class="dropdown-menu dropdown-orders">
                   <li class="">
                       <button onclick="generateMessageContent('${x.time}'); openModal4();"  class="orders-hover dropdown-item d-flex justify-content-center fw-bold">View Mesage</button>
                   </li>
                   <li>
                        <button onclick="forConfirmation(event, '${x.time}');"  class="orders-hover dropdown-item d-flex justify-content-center fw-bold">Delete</button>
                    </li>
               </ul>
           </td>
            </tr> 
            `
            }
        }).join("")
    }
}
generaeMessageList();
function openModal4() {
    let modal = document.getElementById('staticBackdrop4');
    let modalInstance = new bootstrap.Modal(modal);
    modalInstance.show();
}
function openModal5() {
    let modal = document.getElementById('staticBackdrop5');
    let modalInstance = new bootstrap.Modal(modal);
    modalInstance.show();
}
//for reply content
function generateMessageContent(time){
    let message_records= new Array;
    message_records=JSON.parse(sessionStorage.getItem("Messages"))?JSON.parse(sessionStorage.getItem("Messages")):[];
    let message= document.getElementById("modalMessage");
    let reply = document.getElementById("modalReply");
    let search = message_records.find(function(x){
        return time === x.time;
    })
    message.innerHTML= `
    <form novalidate>
    <div class="in-group">
    <div class="input-field">
        <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" class="input-icon bi bi-people-fill" viewBox="0 0 16 16">
            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
          </svg>
        <input class="contactusName in-box" type="text" placeholder="Name" value="${search.name}" readonly>
    </div>
        
    <div class="input-field ">
        <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" class="input-icon bi bi-envelope-at-fill" viewBox="0 0 16 16">
            <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546L0 11.801Zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 9.671V4.697l-5.803 3.546.338.208A4.482 4.482 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671"/>
            <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791Z"/>
          </svg>
        <input class="contactusEmail in-box" type="email" placeholder="Email" value="${search.email}" readonly>
    </div>
        
    <div class="input-field">
        <textarea class="contactusTMessage in-box"  placeholder="Type your message here" id="" cols="30" rows="4" readonly>${search.message}</textarea>  
    </div>
        
</div>
</form>
    <div class="modal-footer">
        <button type="button" class="btn btn-reply d-flex flex-wrap align-items-center" data-bs-dismiss="modal" onclick="openModal5();" >
            Reply &nbsp;
            <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" fill="currentColor" class="bi bi-reply" viewBox="0 0 16 16">
                <path d="M6.598 5.013a.144.144 0 0 1 .202.134V6.3a.5.5 0 0 0 .5.5c.667 0 2.013.005 3.3.822.984.624 1.99 1.76 2.595 3.876-1.02-.983-2.185-1.516-3.205-1.799a8.74 8.74 0 0 0-1.921-.306 7.404 7.404 0 0 0-.798.008h-.013l-.005.001h-.001L7.3 9.9l-.05-.498a.5.5 0 0 0-.45.498v1.153c0 .108-.11.176-.202.134L2.614 8.254a.503.503 0 0 0-.042-.028.147.147 0 0 1 0-.252.499.499 0 0 0 .042-.028zM7.8 10.386c.068 0 .143.003.223.006.434.02 1.034.086 1.7.271 1.326.368 2.896 1.202 3.94 3.08a.5.5 0 0 0 .933-.305c-.464-3.71-1.886-5.662-3.46-6.66-1.245-.79-2.527-.942-3.336-.971v-.66a1.144 1.144 0 0 0-1.767-.96l-3.994 2.94a1.147 1.147 0 0 0 0 1.946l3.994 2.94a1.144 1.144 0 0 0 1.767-.96v-.667z"/>
            </svg>
        </button>
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    </div>
    `
    reply.innerHTML=`
    <form novalidate>
                        <div class="in-group">
                            <div class="input-field">
                                <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" class="input-icon bi bi-people-fill" viewBox="0 0 16 16">
                                    <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
                                  </svg>
                                <input class="contactusName in-box" type="text" id="contactusName" placeholder="Name" value="${search.name}" readonly>
                            </div>
                                <div class="error-message d-flex flex-wrap justify-content-center" id="replyerror1" >
                                </div>
                            <div class="input-field ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" class="input-icon bi bi-envelope-at-fill" viewBox="0 0 16 16">
                                    <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546L0 11.801Zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 9.671V4.697l-5.803 3.546.338.208A4.482 4.482 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671"/>
                                    <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791Z"/>
                                  </svg>
                                <input class="contactusEmail in-box" type="email" id="contactusEmail" placeholder="Email" value="${search.email}" readonly>
                            </div>
                                <div class="error-message d-flex flex-wrap justify-content-center" id="replyerror2">
                                </div>
                            <div class="input-field">
                                <textarea class="contactusTMessage in-box" id="contactusMessage" placeholder="Type your message here" id="" cols="30" rows="4"></textarea>  
                            </div>
                                <div class="error-message d-flex flex-wrap justify-content-center" id="replyerror3" required>
                                </div>
                        </div>
                    </form>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-reply d-flex flex-wrap align-items-center" onclick="contactfirmValidation(event);">
                            Send &nbsp;
                            <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
                                <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
                              </svg>
                        </button>
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" >Close</button>
                    </div>
    `
    eventGen();
    removeMessHistory();
}

//for reply
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

function sendReply(){
    let name=document.getElementById("contactusName").value;
    let email=document.getElementById("contactusEmail").value;
    let message= document.getElementById("contactusMessage").value;
    let date = new Date();
    let time = date.toLocaleString();
    let params={
        name: name,
        email: email,
        message: message,
        time:time,
    }
    emailjs.send('service_qhmi07j', 'template_dfiovy8', params);
}
//validation for reply
function contactfirmValidation(event){
    let name=document.getElementById("contactusName").value;
    let email=document.getElementById("contactusEmail").value;
    let text= document.getElementById("contactusMessage").value;
    let empty="";
    let isValid=true;
    if (!isValidEmail(email)){
        event.preventDefault();
        errorEmail();
        isValid=false;
    } if (!validateName(name)){
        event.preventDefault();
        errorName();
        isValid=false;
    } if(name===empty){
        event.preventDefault();
        errorNameEmpty();
        isValid=false;
    } if (email===empty){
        event.preventDefault();
        errorEmailEmpty();
        isValid=false;
    } if (text===empty){
        event.preventDefault();
        event.stopPropagation();
        errorText();
        isValid=false;
    }if (text===space){
        event.preventDefault();
        event.stopPropagation();
        errorText();
        isValid=false;
    } if(isValid){
        sendReply();
        setTimeout(removeError, 2000);
        successSentt();
    }
    
}
function validateName(name) {
    var regex = /^[a-zA-Z\s]+$/;
    return regex.test(name);
}
function errorName(){
    document.getElementById("replyerror1").innerHTML="Invalid name."
    document.getElementById("replyerror1").classList.add("error-print");
}
function errorNameEmpty(){
    document.getElementById("replyerror1").innerHTML="Please enter your name"
    document.getElementById("replyerror1").classList.add("error-print");
}
function errorEmail(){
    document.getElementById("replyerror2").innerHTML="Invalid email."
    document.getElementById("replyerror2").classList.add("error-print");
}
function errorEmailEmpty(){
    document.getElementById("replyerror2").innerHTML="Please enter your email"
    document.getElementById("replyerror2").classList.add("error-print");
}
function errorText(){
    document.getElementById("replyerror3").innerHTML="Please enter a message."
    document.getElementById("replyerror3").classList.add("error-print");
}
function successSentt(){
    document.getElementById("replyerror3").innerHTML="Message succesfully sent."
    document.getElementById("replyerror3").classList.add("successful-print");
    
}
function eventGen(){
    document.getElementById("contactusMessage").addEventListener("input", removeError);
}
function removeError(){
    document.getElementById("replyerror3").innerHTML="";
    document.getElementById("replyerror3").classList.remove("successful-print");
}
function removeMessHistory(){
    document.getElementById('contactusMessage').value="";
}
//remove unread
function removeUnread(id){
    let message_records= new Array;
    message_records=JSON.parse(sessionStorage.getItem("Messages"))?JSON.parse(sessionStorage.getItem("Messages")):[];
    let message= document.getElementById('adminMessage');
    let search= message_records.find(function(x){
        return id === x.time;
    })
    search.type= "read";
    sessionStorage.setItem("Messages", JSON.stringify(message_records));
        let existingRows = message.querySelectorAll('tr');
        for (let i = existingRows.length - 1; i > 0; i--) {
            existingRows[i].parentNode.removeChild(existingRows[i]);
        }
    generaeMessageList();
    countUnread();
}
//funuction for counter unread
function countUnread(){
    let message_records= new Array;
    message_records=JSON.parse(sessionStorage.getItem("Messages"))?JSON.parse(sessionStorage.getItem("Messages")):[];
    let counter= document.getElementById('messCounter');

    let unread= message_records.filter(function(x){
        return x.type === 'unread';
    })
    if (unread.length===0){
        counter.style.display='none';
    }else{
        counter.innerHTML= unread.length;
    }
}
countUnread();
//for deleting messages
function deleteMessage(id){
    let message_records= new Array;
    message_records=JSON.parse(sessionStorage.getItem("Messages"))?JSON.parse(sessionStorage.getItem("Messages")):[];

    let filter= message_records.filter(function(x){
        return x.time !== id;
    })
    sessionStorage.setItem('Messages', JSON.stringify(filter));
}
function forConfirmation(event, id){
    let message= document.getElementById('adminMessage');
    let result =confirm('are you sure ?');
    if (result === false){
        console.log('canceled')
        event.preventDefault();
    }else{
        deleteMessage(id);
        let existingRows = message.querySelectorAll('tr');
        for (let i = existingRows.length - 1; i > 0; i--) {
            existingRows[i].parentNode.removeChild(existingRows[i]);
        }
        generaeMessageList();
    }
}
