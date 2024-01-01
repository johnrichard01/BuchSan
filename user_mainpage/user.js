let cardContainerNew= document.getElementById("cardContainerNew");


function generateCards(x){
    return(cardContainerNew.innerHTML= allBooks.slice(-5).map(function(x){
        return`
        <div class="card generated-hover col-12 col-md-6 col-lg mt-5" id="product${x.id}" type="button" onclick=" openModal();  generateModal('${x.id}');  checkModal();"  >        
                    <div class="image-div">
                        <img src="../${x.cover}" class="card-img-top generated-image-hover"  loading="lazy" alt="book cover">
                        <div class="new-div position-absolute badge">New Arrivals!</div>
                        <div class="save-div">
                            <a href="#" id="heart${x.id}" onclick="clickEvent(event);savedBooks('${x.id}');">
                                <div class="heart-div">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" fill="currentColor" class="save-button bi bi-heart" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                                    </svg>
                                        <div class="heart-inside" id="saved${x.id}">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" fill="currentColor" class="save-button-inside bi bi-heart-fill" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
                                            </svg>
                                        </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="card-body d-flex flex-wrap justify-content-between mt-2">
                        <p class="card-title h6 fw-bold mb-2 w-100">${x.title}</p>
                        <p class="Author lead w-100 fs-6 fst-italic">${x.author}</p> 
                    </div>
                    <div class="price_addToCart">
                        <span> &#8369; ${x.price}</span>
                    </div>    
                    <div class="addToCart">    
                        <a href="#"> <button  onclick="clickEvent(event); addCart('${x.id}')" class="btn" type="button"><i class="fas fa-shopping-cart mx-1"></i>ADD TO CART</button> </a>
                    </div>
                </div>`
    }).join(""))
}

generateCards();

const swiper = new Swiper('.swiper', {
    slidesPerview:1,
    spaceBetween: 30,
    loop: true,
  
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });


  function generateRelated(id){
    let select = id;
    let related= document.getElementById("relatedContainer");
    let bookFind = allBooks.filter(function(x){
        return select !== x.id;
    });
    console.log(bookFind);
    let bookNew= bookFind.slice(-9);
    let bookRand=  bookNew.sort(function(){
            return Math.random()-0.5;
        });
    console.log(bookRand);

    if (bookRand){
        related.innerHTML= bookRand.slice(-5).map(function(x){
            return `
            <div class="card generated-hover col-12 col-md-6 col-lg mt-5 mb-0 mb-lg-5"  id="product${x.id}" >        
                    <a type="button" onclick="openFirst(); generateModal('${x.id}'); checkModal();"  data-bs-toggle="modal" data-bs-target="#newArrivalModal">
                        <div class="image-div">
                            <img src="../${x.cover}" class="card-img-top generated-image-hover"  loading="lazy" alt="book cover">
                            <div class="new-div position-absolute badge">New Arrivals!</div>
                            <div class="save-div d-flex flex-wrap">
                                <a id="heart${x.id}" onclick="savedBooks('${x.id}'); clickEvent(event);">
                                    <div class="heart-div">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" fill="currentColor" class="save-button bi bi-heart" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                                        </svg>
                                            <div class="heart-inside" id='savedRelated${x.id}'>
                                                <svg xmlns="http://www.w3.org/2000/svg"   width="1.5rem" height="1.5rem" fill="currentColor" class="save-button-inside bi bi-heart-fill" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
                                                </svg>
                                            </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="card-body d-flex flex-wrap justify-content-between mt-2">
                            <p class="card-title h6 fw-bold mb-2 w-100">${x.title}</p>
                            <p class="Author lead w-100 fs-6 fst-italic">${x.author}</p> 
                        </div>
                        <div class="price_addToCart">
                            <span> &#8369; ${x.price}</span>
                        </div>
                        <div class="addToCart">    
                            <a > <button  onclick="clickEvent(event); addCart('${x.id}')" class="btn" type="button"><i class="fas fa-shopping-cart mx-1"></i>ADD TO CART</button> </a>
                        </div>
                    </a>
                </div>
            `
        }).join("")
    }
  }


  function generateModal(id){
    let selected=id;
    console.log(selected);
    let bookFind = allBooks.find(function(x){
        return x.id === selected;
    });
    if (bookFind){
        let modal= document.getElementById("modalgenerateBody");
        console.log(selected);
         modal.innerHTML = `
         <div class="row mb-5 mt-5">
         <div class=" position-relative col-12 col-lg-6 d-flex flex-wrap justify-content-center align-content-start">
             <div class="image-div-modal col-12 d-flex flex-wrap justify-content-center">
                 <div class="d-flex flex-wrap justify-content-center">
                     <img src="../${bookFind.cover}" class="modal-cover-image" alt="book cover"  loading="lazy">
                     <div class="sale-div position-absolute badge">New Arrivals!</div>
                 <div class="save-div-modal">
                     <a id="heart${bookFind.id}" onclick="savedBooks('${bookFind.id}'); clickEvent(event);">
                         <div class="heart-div-modal">
                             <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" class="save-button-modal bi bi-heart" viewBox="0 0 16 16">
                                 <path fill-rule="evenodd" d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                             </svg>
                                 <div class="heart-inside-modal" id='savedModal${bookFind.id}'>
                                     <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" class="save-button-inside-modal bi bi-heart-fill" viewBox="0 0 16 16">
                                         <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
                                     </svg>
                                 </div>
                         </div>
                     </a>
                 </div>
  
                 <div class="col-12 row justify-content-center">
                     <div class="addtocardModal mb-3 d-flex justify-content-center col-11">
                         <a   onclick="clickEvent(event); addCart('${bookFind.id}')" type="button" class="btn w-100 btn-addtocard-modal fs-6 fw-bold p-0 p-lg-2">ADD TO CART</a>
                     </div>
                 </div>
                 </div>
                 
             </div>
         </div>
         <div class="col-12 col-lg-6 pe-0 pe-lg-5 ps-lg-5 ps-0">
             <div class="container">
                 <h1 class="display-6 fw-bold mt-4 mb-3 text-center text-lg-start">${bookFind.title}</h1>
                 <h4 class="mb-3 text-center text-lg-start fst-italic">${bookFind.author}</h4>
                 <div class="d-flex justify-content-lg-start justify-content-center">
                 <div class="rating-box bg-body-secondary d-flex flex-wrap justify-content-center mb-3">
                     <div class="outer-star">
                     <div class="inner-star" style="width:${(parseFloat(bookFind.rating) / 5) * 100}%"></div>
                     </div>
                     <div class=" rating-number d-flex flex-wrap align-items-center pt-2 ms-3">
                     <h1 class="fw-bold rating-text">${bookFind.rating}</h1>
                     </div>
                 </div>
                 </div>
                 <h4 class="mb-3 text-center text-lg-start h3 fw-bold"> &#8369; ${bookFind.price}</h4>
                 
             <div class="container mx-2">
                 ${bookFind.synop}
             </div>
             </div>
         </div>
     </div>
     <div class="container-fluid mt-5 bg-body-tertiary p-0 w-100">
         <div class="container">
            <h1 class="pt-3 fw-bold related-books">Related Books</h1>
         <div class="row row-cols-1 row-cols-4 justify-content-center" id="relatedContainer">
            
         </div>
         </div>
     </div>
       
        `;
        generateRelated(bookFind.id);
    }else{
        console.log("failed");
    }


}
function openFirst() {
    var firstModal = document.getElementById('newArrivalModal');
    firstModal.addEventListener('hidden.bs.modal', function(){
        setTimeout(showSecond, 100);}
        , { once: true });
    var newModal = new bootstrap.Modal(firstModal);
    newModal.hide();
  }
  
  function showSecond() {
    var secondModal = document.getElementById('newArrivalModal');
    var newModal = new bootstrap.Modal(secondModal);
    newModal.show();
  }


  function openModal() {
    var modal = document.getElementById('newArrivalModal');
    var modalInstance = new bootstrap.Modal(modal);
    modalInstance.show();
  }
  function savedBooks(id){
    let selected = id;
    saved_records= JSON.parse(sessionStorage.getItem("saved"))?JSON.parse(sessionStorage.getItem("saved")):[]

    let savebook= allBooks.find(function(x){
        return selected === x.id;
    })
    if (savebook){
        let findDupe= saved_records.find(function(x){
            return savebook.id === x.id;
        })
        if(findDupe){
            if(elementExists("saved"+savebook.id)){
                console.log('dupe')
                saved_records=saved_records.filter(function(x){
                    return findDupe.id !== x.id;
                })
                let hearfill= document.getElementById("saved"+findDupe.id);
                hearfill.classList.remove("heart-fill");
                sessionStorage.setItem("saved",JSON.stringify(saved_records));
                calculateSaved();
                generateCards();
                checkSaved();
                console.log(saved_records)
            } if (elementExists("savedModal"+savebook.id)){
                let hearfill= document.getElementById("savedModal"+savebook.id);
                hearfill.classList.remove("heart-fill");
                console.log("Modal")
            } if (elementExists("savedRelated"+savebook.id)){
                let hearfill= document.getElementById("savedRelated"+savebook.id);
                hearfill.classList.remove("heart-fill");
                console.log("Related")
            }
            
        }else{
            if (elementExists("saved"+savebook.id)){
                let hearfill= document.getElementById("saved"+savebook.id);
                saved_records.push({
                    "id": savebook.id,
                })
                sessionStorage.setItem("saved",JSON.stringify(saved_records));
                hearfill.classList.add("heart-fill");
                calculateSaved();
                console.log("saved")
            } if (elementExists("savedModal"+savebook.id)){
                let hearfill= document.getElementById("savedModal"+savebook.id);
                hearfill.classList.add("heart-fill");
                calculateSaved();
                console.log("Modal")
            } if (elementExists("savedRelated"+savebook.id)){
                let hearfill= document.getElementById("savedRelated"+savebook.id);
                hearfill.classList.add("heart-fill");
                calculateSaved();
                console.log("Related")
            }
            
        }
    }     
}
//stopped unnecessary behavior
function clickEvent(event){
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
}
//for the heartfill
function checkSaved(){
   let saved_records= JSON.parse(sessionStorage.getItem("saved"))?JSON.parse(sessionStorage.getItem("saved")):[]

    if (saved_records.length === 0){
        console.log("empty save array")
    }else{
        saved_records.map(function(x){
            let hearfill= document.getElementById("saved"+x.id);
            if(elementExists("saved"+x.id)){
               if(hearfill.classList.contains("heart-fill")){
                    console.log("colored already")
                }else{
                    hearfill.classList.add("heart-fill");
                }
            }else{
                console.log("does not exist");
            }
    })
    }
}
function elementExists(id) {
    return !!document.getElementById(id);
}
function checkModal(){
    saved_records= JSON.parse(sessionStorage.getItem("saved"))?JSON.parse(sessionStorage.getItem("saved")):[]
    saved_records.map(function(x){
        if (elementExists("savedRelated"+x.id)){
            let hearfillRelated=document.getElementById("savedRelated"+x.id);
            hearfillRelated.classList.add("heart-fill");
           
        }else if(elementExists("savedModal"+x.id)){
            let hearfillModal=document.getElementById("savedModal"+x.id);
            hearfillModal.classList.add("heart-fill");
        }else{
            console.log("not here");
        }
    })
}


checkSaved();
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
            return;
        }else{
            let find= admin_records.find(function(x){
                return x.email === email;
            })
            if (find){
                window.location.replace('../admin_mainpage/admin.html')
            }else{
                return;
            }
        }
    }
 }
 replacePage();