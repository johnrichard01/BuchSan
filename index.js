let cardContainerNew= document.getElementById("cardContainerNew");


function generateCards(x){
    return(cardContainerNew.innerHTML= allBooks.slice(-5).map(function(x){
        return`
        <div class="card generated-hover col-12 col-md-6 col-lg mt-5" id="product${x.id}" type="button" onclick="generateModal('${x.id}')"  data-bs-toggle="modal" data-bs-target="#newArrivalModal">        
        <div class="image-div">
            <img src="${x.cover}" class="card-img-top generated-image-hover"  loading="lazy" alt="book cover">
            <div class="save-div">
                <a href="./Home/login.html">
                    <div class="heart-div">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" fill="currentColor" class="save-button bi bi-heart" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                        </svg>
                            <div class="heart-inside">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" fill="currentColor" class="save-button-inside bi bi-heart-fill" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
                                </svg>
                            </div>
                    </div>
                </a>
            </div>
        </div>
    <div class="card-body d-flex flex-wrap justify-content-between mt-2">
        <p class="card-title h5 fw-bold mb-2 w-100">${x.title}</p>
        <p class="Author lead w-100 fs-6 fst-italic">${x.author}</p> 
    </div>
    <div class="price_addToCart">
        <span> &#8369; ${x.price}</span>
    </div>    
    <div class="addToCart">    
        <a href="./Home/login.html"> <button class="btn" type="button"><i class="fas fa-shopping-cart mx-1"></i>ADD TO CART</button> </a>
    </div>
</div>`
    }).join(""))
}

generateCards();

const swiper = new Swiper('.swiper', {
    slidesPerview:1,
    spaceBetween: 30,
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });


  let generateRelated=(id)=>{
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
            <div class="card generated-hover col-12 col-md-6 col-lg mt-5 mb-5"  id="product${x.id}" type="button" onclick="openFirst(); generateModal('${x.id}');"  data-bs-toggle="modal" data-bs-target="#newArrivalModal">        
        <div class="image-div">
            <img src="${x.cover}" class="card-img-top generated-image-hover"  loading="lazy" alt="book cover">
            <div class="save-div">
                <a href="./Home/login.html" >
                    <div class="heart-div">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" fill="currentColor" class="save-button bi bi-heart" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                        </svg>
                            <div class="heart-inside">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" fill="currentColor" class="save-button-inside bi bi-heart-fill" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
                                </svg>
                            </div>
                    </div>
                </a>
            </div>
        </div>
    <div class="card-body d-flex flex-wrap justify-content-between mt-2">
        <p class="card-title h5 fw-bold mb-2 w-100">${x.title}</p>
        <p class="Author lead w-100 fs-6 fst-italic">${x.athor}}</p> 
    </div>
    <div class="price_addToCart">
        <span> &#8369; ${x.price}</span>
    </div>
    <div class="addToCart">    
        <a href="./Home/login.html"> <button class="btn" type="button"><i class="fas fa-shopping-cart mx-1"></i>ADD TO CART</button> </a>
    </div>
    </div>
            `
        })
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
         <div class="row mb-5">
         <div class=" position-relative col-12 col-lg-6 d-flex flex-wrap justify-content-center align-content-start">
             <div class="image-div-modal col-12 d-flex flex-wrap justify-content-center">
                 <div class="d-flex flex-wrap justify-content-center">
                     <img src="${bookFind.cover}" class="modal-cover-image" alt="book cover"  loading="lazy">
                 <div class="save-div-modal">
                     <a href="./Home/login.html">
                         <div class="heart-div-modal">
                             <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" class="save-button-modal bi bi-heart" viewBox="0 0 16 16">
                                 <path fill-rule="evenodd" d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                             </svg>
                                 <div class="heart-inside-modal">
                                     <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" class="save-button-inside-modal bi bi-heart-fill" viewBox="0 0 16 16">
                                         <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
                                     </svg>
                                 </div>
                         </div>
                     </a>
                 </div>

                 <div class="col-12 row justify-content-center">
                     <div class="addtocardModal mb-3 d-flex justify-content-center col-11">
                         <a href="./Home/login.html" type="button" class="btn w-100 btn-addtocard-modal fs-6 fw-bold p-0 p-lg-2">ADD TO CART</a>
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
                 <h4 class="mb-3 text-center text-lg-start h3 fw-bold"> &#8369; 999</h4>
                 
             <div class="container mx-2">
                 ${bookFind.synop}
             </div>
             </div>
         </div>
     </div>
     <div class="container-fluid mt-5 bg-body-tertiary">
         <div class="container">
             <h1 class="py-5">Related genre</h1>
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