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
    let buttonArray= ['profileButton', 'passwordButton', 'addressButton','ordersButton'];
    buttonArray.forEach(function(x){
        let button= document.getElementById(x);
        console.log(button);
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
//genereat section profile
function generateSection(){
    let section1= document.getElementById('section1');
    let fullname= sessionStorage.getItem('name');
    let username= sessionStorage.getItem('username');
    let email= sessionStorage.getItem('email');
     section1.innerHTML=`
                        <section class="bg-body-tertiary py-5 section-body section-active rounded-5" id="sectionProfile">
                            <h1 class="fw-bold text-center section-title">Profile</h1>
                            <div class="container d-flex flex-wrap justify-content-center">
                                <form class="form" novalidate>
                                    <div class="ing-group d-flex flex-wrap justify-content-center">
                                        <div class="in-field" id="infieldError1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1.75rem" height="1.75rem" fill="currentColor" class="bi bi-person-fill input-icon" viewBox="0 0 16 16">
                                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                                              </svg>
                                            
                                            <input type="text" class="in-box" id="fullname" value="${fullname}" placeholder="Full name" required>
                                        </div>
                                            <div class="error-message" id="error-message1">
                                            </div>
                                        
                                        <div class="in-field" id="infieldError2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1.75rem" height="1.75rem" fill="currentColor" class="bi bi-person-fill input-icon" viewBox="0 0 16 16">
                                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                                              </svg>
                                            <input type="text" class="in-box" id="username" value="${username}" placeholder="Username" required>
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
                            </div>
                        </section>
    `
}
generateSection();
//generate section address
function generateAddress(){
    let sectionAddress= document.getElementById('section3');
    let address_records= new Array;
    address_records=JSON.parse(sessionStorage.getItem("Address"))?JSON.parse(sessionStorage.getItem("Address")):[];
    
    if (address_records.length === 0 ){
        sectionAddress.innerHTML=
        `
        <section class="bg-body-tertiary section-body py-5 rounded-5" id="sectionAddress">
                            <h1 class="fw-bold text-center section-title">Delivery Address</Address></h1>
                            <div class="container d-flex flex-wrap justify-content-center">
                                <form class="form w-100" novalidate>
                                    
                                    <div class="ing-group d-flex flex-wrap justify-content-center">
                                        <div class="row w-100">
                                            <div class=" col-12 col-lg">
                                                <div class="in-field ms-0 ms-lg-5" id="infieldAdress1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.75rem" height="1.75rem" fill="currentColor" class="bi bi-telephone-fill input-icon" viewBox="0 0 16 16">
                                                        <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                                                      </svg>
                                                    
                                                    <input type="number" class="in-box input-number" id="phoneNumber" placeholder="Phone number" required>
                                                </div>
                                                    <div class="error-message col-12 col-lg text-center" id="address-error1">
                                                    </div>
                                            </div>
                                            <div class="col-12 col-lg">
                                                <div class="in-field ms-0 ms-lg-5" id="infieldAdress2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.75rem" height="1.75rem" fill="currentColor" class="bi bi-house-check-fill input-icon" viewBox="0 0 16 16">
                                                        <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z"/>
                                                        <path d="m8 3.293 4.712 4.712A4.5 4.5 0 0 0 8.758 15H3.5A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z"/>
                                                        <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.707l.547.547 1.17-1.951a.5.5 0 1 1 .858.514Z"/>
                                                      </svg>
                                                    <input type="text" class="in-box" id="streetHouse" placeholder=" Steet Name, House No." required>
                                                </div>
                                                    <div class="error-message col-12 col-lg text-center" id="address-error2">
                                                    </div>
                                            </div>
                                            
                                        </div>
                                        <div class="row w-100">
                                            <div class="col-12 col-lg">
                                                <div class="in-field ms-0 ms-lg-5" id="infieldAdress3">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.75rem" height="1.75rem" fill="currentColor" class="input-icon bi bi-geo-fill" viewBox="0 0 16 16">
                                                        <path fill-rule="evenodd" d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411"/>
                                                    </svg>
                                                    <input type="text" class="in-box" id="province" placeholder="Province" required>
                                                </div>
                                                    <div class="error-message col-12 col-lg text-center" id="address-error3">
                                                    </div>
                                            </div>
                                            
                                            <div class="col-12 col-lg">
                                                <div class="in-field ms-0 ms-lg-5" id="infieldAdress4">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.75rem" height="1.75rem" fill="currentColor" class="input-icon bi bi-geo-fill" viewBox="0 0 16 16">
                                                        <path fill-rule="evenodd" d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411"/>
                                                    </svg>
                                                    <input type="text" class="in-box" id="city" placeholder="City" required>
                                                </div>
                                                    <div class="error-message col-12 col-lg text-center" id="address-error4">
                                                    </div>
                                            </div>
                                        </div>
                                        <div class="row w-100">
                                            <div class="col-12 col-lg">
                                                <div class="in-field ms-0 ms-lg-5" id="infieldAdress5">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.75rem" height="1.75rem" fill="currentColor" class="input-icon bi bi-geo-fill" viewBox="0 0 16 16">
                                                        <path fill-rule="evenodd" d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411"/>
                                                    </svg>
                                                    <input type="text" class="in-box" id="barangay" placeholder="Barangay" required>
                                                </div>
                                                    <div class="error-message col-12 col-lg text-center" id="address-error5">
                                                    </div>
                                            </div>
                                            
                                            <div class="col-12 col-lg">
                                                <div class="in-field  ms-0 ms-lg-5" id="infieldAdress6">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.75rem" height="1.75rem" fill="currentColor" class="input-icon bi bi-mailbox" viewBox="0 0 16 16">
                                                        <path d="M4 4a3 3 0 0 0-3 3v6h6V7a3 3 0 0 0-3-3m0-1h8a4 4 0 0 1 4 4v6a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V7a4 4 0 0 1 4-4m2.646 1A3.99 3.99 0 0 1 8 7v6h7V7a3 3 0 0 0-3-3z"/>
                                                        <path d="M11.793 8.5H9v-1h5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.354-.146l-.853-.854zM5 7c0 .552-.448 0-1 0s-1 .552-1 0a1 1 0 0 1 2 0"/>
                                                      </svg>
                                                    <input type="number" class="in-box" id="zipcode" placeholder="Zip code" required>
                                                </div>
                                                <div class="error-message col-12 col-lg text-center" id="address-error6">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="pt-3 text-center" id="addressmessage"></div>
                                        <div class="row w-100">
                                            <div class="d-flex justify-content-center">
                                                <button type="button" class="btn btn-update fw-bold w-25" onclick="validateAddress();" id="saveAddress">Save</button>
                                            </div>
                                </div>
                            </div>
                        </form>
                 </div>
            </section>
        `
    }else{
        return;
    }
}
generateAddress();
regenAddress();
//regenerate address
function regenAddress(){
    let sectionAddress= document.getElementById('section3');
    let address_records= new Array;
    address_records=JSON.parse(sessionStorage.getItem("Address"))?JSON.parse(sessionStorage.getItem("Address")):[];

    if (address_records.length != 0){
        sectionAddress.innerHTML= `
        <section class="bg-body-tertiary section-body py-5 rounded-5" id="sectionAddress">
                            <h1 class="fw-bold text-center section-title">Delivery Address</Address></h1>
                            <div class="container d-flex flex-wrap justify-content-center">
                                <form class="form w-100" novalidate>
                                    
                                    <div class="ing-group d-flex flex-wrap justify-content-center">
                                        <div class="row w-100">
                                            <div class=" col-12 col-lg">
                                                <div class="in-field ms-0 ms-lg-5" id="infieldAdress1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.75rem" height="1.75rem" fill="currentColor" class="bi bi-telephone-fill input-icon" viewBox="0 0 16 16">
                                                        <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                                                      </svg>
                                                    
                                                    <input type="number" value="${address_records.phonenumber}" class="in-box input-number" id="phoneNumber" placeholder="Phone number" required>
                                                </div>
                                                    <div class="error-message col-12 col-lg text-center" id="address-error1">
                                                    </div>
                                            </div>
                                            <div class="col-12 col-lg">
                                                <div class="in-field ms-0 ms-lg-5" id="infieldAdress2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.75rem" height="1.75rem" fill="currentColor" class="bi bi-house-check-fill input-icon" viewBox="0 0 16 16">
                                                        <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z"/>
                                                        <path d="m8 3.293 4.712 4.712A4.5 4.5 0 0 0 8.758 15H3.5A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z"/>
                                                        <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.707l.547.547 1.17-1.951a.5.5 0 1 1 .858.514Z"/>
                                                      </svg>
                                                    <input type="text" value="${address_records.street}" class="in-box" id="streetHouse" placeholder=" Steet Name, House No." required>
                                                </div>
                                                    <div class="error-message col-12 col-lg text-center" id="address-error2">
                                                    </div>
                                            </div>
                                            
                                        </div>
                                        <div class="row w-100">
                                            <div class="col-12 col-lg">
                                                <div class="in-field ms-0 ms-lg-5" id="infieldAdress3">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.75rem" height="1.75rem" fill="currentColor" class="input-icon bi bi-geo-fill" viewBox="0 0 16 16">
                                                        <path fill-rule="evenodd" d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411"/>
                                                    </svg>
                                                    <input type="text" value="${address_records.province}" class="in-box" id="province" placeholder="Province" required>
                                                </div>
                                                    <div class="error-message col-12 col-lg text-center" id="address-error3">
                                                    </div>
                                            </div>
                                            
                                            <div class="col-12 col-lg">
                                                <div class="in-field ms-0 ms-lg-5" id="infieldAdress4">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.75rem" height="1.75rem" fill="currentColor" class="input-icon bi bi-geo-fill" viewBox="0 0 16 16">
                                                        <path fill-rule="evenodd" d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411"/>
                                                    </svg>
                                                    <input type="text" value="${address_records.city}" class="in-box" id="city" placeholder="City" required>
                                                </div>
                                                    <div class="error-message col-12 col-lg text-center" id="address-error4">
                                                    </div>
                                            </div>
                                        </div>
                                        <div class="row w-100">
                                            <div class="col-12 col-lg">
                                                <div class="in-field ms-0 ms-lg-5" id="infieldAdress5">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.75rem" height="1.75rem" fill="currentColor" class="input-icon bi bi-geo-fill" viewBox="0 0 16 16">
                                                        <path fill-rule="evenodd" d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411"/>
                                                    </svg>
                                                    <input type="text" value="${address_records.barangay}" class="in-box" id="barangay" placeholder="Barangay" required>
                                                </div>
                                                    <div class="error-message col-12 col-lg text-center" id="address-error5">
                                                    </div>
                                            </div>
                                            
                                            <div class="col-12 col-lg">
                                                <div class="in-field  ms-0 ms-lg-5" id="infieldAdress6">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.75rem" height="1.75rem" fill="currentColor" class="input-icon bi bi-mailbox" viewBox="0 0 16 16">
                                                        <path d="M4 4a3 3 0 0 0-3 3v6h6V7a3 3 0 0 0-3-3m0-1h8a4 4 0 0 1 4 4v6a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V7a4 4 0 0 1 4-4m2.646 1A3.99 3.99 0 0 1 8 7v6h7V7a3 3 0 0 0-3-3z"/>
                                                        <path d="M11.793 8.5H9v-1h5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.354-.146l-.853-.854zM5 7c0 .552-.448 0-1 0s-1 .552-1 0a1 1 0 0 1 2 0"/>
                                                      </svg>
                                                    <input type="number" value="${address_records.zipcode}" class="in-box" id="zipcode" placeholder="Zip code" required>
                                                </div>
                                                <div class="error-message col-12 col-lg text-center" id="address-error6">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="pt-3 text-center" id="addressmessage"></div>
                                        <div class="row w-100">
                                            <div class="d-flex justify-content-center">
                                                <button type="button" class="btn btn-update fw-bold w-25" onclick="validateAddress();" id="updateAddress">Update</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </section>
        `

    }
    
}
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
        let findUser= user_records.find(function(x){
            return x.email === oldemail
        })
        if (findUser){
            findUser.name= newname;
            sessionStorage.setItem("users",JSON.stringify(user_records));
            sessionStorage.setItem('name', newname);
            successPrint("1","Fullname");
            
        }
    } if (newusername.toLowerCase() !== oldusername.toLocaleLowerCase()){
        let usernameDupe= user_records.some(function(x){
            return x.username.toLowerCase() === newusername.toLowerCase();
        })
        if (usernameDupe){
            document.getElementById("error-message2").innerHTML="";
            document.getElementById("error-message2").innerHTML="Username already used"
            document.getElementById("error-message2").classList.add("error-print");
            document.getElementById("infieldError2").classList.add("in-field-invalid");
        }else{
            let usernameDupe= admin_records.some(function(x){
                return x.username.toLowerCase() === newusername.toLowerCase();
            })
            if(usernameDupe){
                document.getElementById("error-message2").innerHTML="";
                document.getElementById("error-message2").innerHTML="Username already used"
                document.getElementById("error-message2").classList.add("error-print");
                document.getElementById("infieldError2").classList.add("in-field-invalid");
            }else{
                let findUser= user_records.find(function(x){
                    return x.email === oldemail
                })
                findUser.username= newusername;
                sessionStorage.setItem("users",JSON.stringify(user_records));
                sessionStorage.setItem('username', newusername);
                successPrint("2","Username");
                generateName();
            }
        }
    } if ( newemail.toLowerCase() !== oldemail.toLocaleLowerCase() ){
        let emailDupe= user_records.some(function(x){
            return x.email.toLowerCase() === newemail.toLowerCase();
        })
        if (emailDupe){
            document.getElementById("error-message3").innerHTML="";
            document.getElementById("error-message3").innerHTML="email already used"
            document.getElementById("error-message3").classList.add("error-print");
            document.getElementById("infieldError3").classList.add("in-field-invalid");
        }else{
            let emailDupe= admin_records.some(function(x){
                return x.email.toLowerCase() === newemail.toLowerCase();
            })
            if(emailDupe){
                document.getElementById("error-message3").innerHTML="";
                document.getElementById("error-message3").innerHTML="email already used"
                document.getElementById("error-message3").classList.add("error-print");
                document.getElementById("infieldError3").classList.add("in-field-invalid");
            }else{
                let findUser= user_records.find(function(x){
                    return x.email === oldemail;
                })
                findUser.email= newemail;
                sessionStorage.setItem("users",JSON.stringify(user_records));
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
    let user_records=new Array();
    user_records= JSON.parse(sessionStorage.getItem("users"))?JSON.parse(sessionStorage.getItem("users")):[];
    let findUser= user_records.find(function(x){
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
                sessionStorage.setItem("users",JSON.stringify(user_records));
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
});
document.getElementById("username").addEventListener("input",function(){
    let error1 = document.getElementById("error-message2");
    let error2 =document.getElementById("infieldError2");
    let error3=document.getElementById("error-duplicate2")
    
    if (error1.classList.contains('error-print')){
        document.getElementById("error-message2").classList.remove("error-print");
    } if (error2.classList.contains('in-field-invalid')){
            document.getElementById("infieldError2").classList.remove("in-field-invalid");
    }
    
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
//validation for address
function validateAddress(){
    let phonenumber= document.getElementById('phoneNumber').value;
    let street= document.getElementById('streetHouse').value;
    let province= document.getElementById('province').value;
    let city= document.getElementById('city').value;
    let barangay= document.getElementById('barangay').value;
    let zipcode= document.getElementById('zipcode').value;
    let isValid= true;
    
    if (phonenumber.length!==11){
        isValid= false;
        document.getElementById("address-error1").innerHTML="Phone number must be 11 digits"
        document.getElementById("address-error1").classList.add("error-print");
        document.getElementById("infieldAdress1").classList.add("in-field-invalid");
    } if (phonenumber.slice(0,2) !== "09"){
        isValid= false;
        document.getElementById("address-error1").innerHTML="Invalid number format must be 09*********."
        document.getElementById("address-error1").classList.add("error-print");
        document.getElementById("infieldAdress1").classList.add("in-field-invalid");
    } if (phonenumber===""){
        isValid= false;
        document.getElementById("address-error1").innerHTML="Please enter your number"
        document.getElementById("address-error1").classList.add("error-print");
        document.getElementById("infieldAdress1").classList.add("in-field-invalid");
    }if (space(street)){
        isValid=false;
        document.getElementById("address-error2").innerHTML="Please enter Street name/House no."
        document.getElementById("address-error2").classList.add("error-print");
        document.getElementById("infieldAdress2").classList.add("in-field-invalid");
    } if (street === ""){
        isValid= false;
        document.getElementById("address-error2").innerHTML="Please enter Street name/House no."
        document.getElementById("address-error2").classList.add("error-print");
        document.getElementById("infieldAdress2").classList.add("in-field-invalid");
    }if (space(province)){
        isValid=false;
        document.getElementById("address-error3").innerHTML="Please enter your province"
        document.getElementById("address-error3").classList.add("error-print");
        document.getElementById("infieldAdress3").classList.add("in-field-invalid");
    } if (province === ""){
        isValid= false;
        document.getElementById("address-error3").innerHTML="Please enter your province"
        document.getElementById("address-error3").classList.add("error-print");
        document.getElementById("infieldAdress3").classList.add("in-field-invalid");
    }if (!isNaN(parseFloat(province))){
        isValid= false;
        document.getElementById("address-error3").innerHTML="Please enter a valid province"
        document.getElementById("address-error3").classList.add("error-print");
        document.getElementById("infieldAdress3").classList.add("in-field-invalid");
    }if (space(city)){
        isValid=false;
        document.getElementById("address-error4").innerHTML="Please enter your city"
        document.getElementById("address-error4").classList.add("error-print");
        document.getElementById("infieldAdress4").classList.add("in-field-invalid");
    } if (city === ""){
        isValid= false;
        document.getElementById("address-error4").innerHTML="Please enter your city"
        document.getElementById("address-error4").classList.add("error-print");
        document.getElementById("infieldAdress4").classList.add("in-field-invalid");
    }if (!isNaN(parseFloat(city))){
        isValid= false;
        document.getElementById("address-error4").innerHTML="Please enter a valid city"
        document.getElementById("address-error4").classList.add("error-print");
        document.getElementById("infieldAdress4").classList.add("in-field-invalid");
    } if (space(barangay)){
        isValid=false;
        document.getElementById("address-error5").innerHTML="Please enter your barangay"
        document.getElementById("address-error5").classList.add("error-print");
        document.getElementById("infieldAdress5").classList.add("in-field-invalid");
    } if (barangay === ""){
        isValid= false;
        document.getElementById("address-error5").innerHTML="Please enter your barangay"
        document.getElementById("address-error5").classList.add("error-print");
        document.getElementById("infieldAdress5").classList.add("in-field-invalid");
    }if (!isNaN(parseFloat(barangay))){
        isValid= false;
        document.getElementById("address-error5").innerHTML="Please enter a valid barangay"
        document.getElementById("address-error5").classList.add("error-print");
        document.getElementById("infieldAdress5").classList.add("in-field-invalid");
    } if (zipcode.length != 4){
        isValid= false;
        document.getElementById("address-error6").innerHTML="Invalid Zipcode"
        document.getElementById("address-error6").classList.add("error-print");
        document.getElementById("infieldAdress6").classList.add("in-field-invalid");
    }  if (zipcode === ""){
        isValid= false;
        document.getElementById("address-error6").innerHTML="Please enter Zipcode"
        document.getElementById("address-error6").classList.add("error-print");
        document.getElementById("infieldAdress6").classList.add("in-field-invalid");
    } if (isValid){
        saveAddress();
        addressSaveSuccess();
    }
}
document.getElementById("phoneNumber").addEventListener("input", function(){
    document.getElementById("address-error1").innerHTML="";
    document.getElementById("address-error1").classList.remove("error-print");
    document.getElementById("infieldAdress1").classList.remove("in-field-invalid");
})
document.getElementById("streetHouse").addEventListener("input", function(){
    document.getElementById("address-error2").innerHTML="";
    document.getElementById("address-error2").classList.remove("error-print");
    document.getElementById("infieldAdress2").classList.remove("in-field-invalid");
})
document.getElementById("province").addEventListener("input", function(){
    document.getElementById("address-error3").innerHTML="";
    document.getElementById("address-error3").classList.remove("error-print");
    document.getElementById("infieldAdress3").classList.remove("in-field-invalid");
})
document.getElementById("city").addEventListener("input", function(){
    document.getElementById("address-error4").innerHTML="";
    document.getElementById("address-error4").classList.remove("error-print");
    document.getElementById("infieldAdress4").classList.remove("in-field-invalid");
})
document.getElementById("barangay").addEventListener("input", function(){
    document.getElementById("address-error5").innerHTML="";
    document.getElementById("address-error5").classList.remove("error-print");
    document.getElementById("infieldAdress5").classList.remove("in-field-invalid");
})
document.getElementById("zipcode").addEventListener("input", function(){
    document.getElementById("address-error6").innerHTML="";
    document.getElementById("address-error6").classList.remove("error-print");
    document.getElementById("infieldAdress6").classList.remove("in-field-invalid");
})

function saveAddress(){
    let phonenumber= document.getElementById('phoneNumber').value;
    let street= document.getElementById('streetHouse').value;
    let province= document.getElementById('province').value;
    let city= document.getElementById('city').value;
    let barangay= document.getElementById('barangay').value;
    let zipcode= document.getElementById('zipcode').value;
    let address_records= new Array;
    address_records=JSON.parse(sessionStorage.getItem("Address"))?JSON.parse(sessionStorage.getItem("Address")):[];

    address_records=({
        'phonenumber': phonenumber,
        'street': street,
        'province': province,
        'city': city,
        'barangay': barangay,
        'zipcode': zipcode,
    })
    sessionStorage.setItem("Address", JSON.stringify(address_records));
}
function addressSaveSuccess(){
    document.getElementById("addressmessage").innerHTML="Address successfully saved"
    document.getElementById("addressmessage").style.color='green';
    setTimeout(function(){
        document.getElementById("addressmessage").innerHTML="";
    }, 3000)
}
//for success page
function successRedirect(){
let prev=document.referrer.slice(-12);
console.log(prev)
    if (prev === 'success.html'){
        sectionReveal('sectionOrders'); 
        buttonActive('ordersButton');
    }else{
        return;
    }
}
successRedirect();
//generate order section
function generateOrders(){
    let order_records= new Array;
        order_records=JSON.parse(sessionStorage.getItem("Orders"))?JSON.parse(sessionStorage.getItem("Orders")):[];
    let orderbody= document.getElementById('generateOrderBody');
    let orderNone= document.getElementById('sectionOrders');
    if (order_records.length === 0){
        return orderNone.innerHTML=`
         NOTHING TO SHOW
        `
    }else{
        orderbody.innerHTML+= order_records.map(function(x){
             return`
            <tr>
                    <td  class="text-center py-0 py-lg-3">${x.orderId}</td>
                    <td   class="text-center  py-0 py-lg-3">${x.date.date}</td>
                    <td  class="text-center  py-0 py-lg-3">&#8369;${x.total}</td>
                    <td  class="text-center py-0 py-lg-3">${x.status}</td>
                    <td  class="text-center py-0 py-lg-3 dropdown-center">
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
        }).join("")
    }
}
generateOrders();
function openModal3() {
    var modal = document.getElementById('staticBackdrop3');
    var modalInstance = new bootstrap.Modal(modal);
    modalInstance.show();
}
//details for orders
function generateDetails(id){
    let order_records= new Array;
        order_records=JSON.parse(sessionStorage.getItem("Orders"))?JSON.parse(sessionStorage.getItem("Orders")):[];
    let book_records=new Array();
        book_records=JSON.parse(sessionStorage.getItem("Books"))?JSON.parse(sessionStorage.getItem("Books")):[];
    let address= document.getElementById('address-body');
    let items = document.getElementById('items-body');
    let total= document.getElementById('total-body');
    let details= document.getElementById('moreDetails');

    let search=order_records.find(function(x){
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
            <tr>
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
            <tr>
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