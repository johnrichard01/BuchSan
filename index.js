let cardContainerNew= document.getElementById("cardContainerNew");


function generateCards(x){
    return(cardContainerNew.innerHTML= allBooks.slice(-5).map(function(x){
        return`
        <div class="card generated-hover col-12 col-md-6 col-lg mt-5" id="product${x.id}" type="button" onclick="generateModal(${x.id})"  data-bs-toggle="modal" data-bs-target="#newArrivalModal">        
            <img id="${x.id}" src="${x.cover}" class="card-img-top generated-image-hover"  loading="lazy" alt="book cover">
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

  function generateModal(id){
    let selected=id;
    let bookFind = allBooks.find(function(x){
        return x.id === selected.id;
    });
    if (bookFind){
        let modal= document.getElementById("modalgenerateBody");
        console.log(selected);
         modal.innerHTML = `
         <div class="col-12 col-lg-6 d-flex flex-wrap align-items-center justify-content-center align-content-center">
         <img src="${bookFind.cover}" class="modal-cover-image" alt="book cover"  loading="lazy">
       </div>
       <div class="col-12 col-lg-6 pe-0 pe-lg-5">
         <h1 class="display-6 fw-bold mt-5 mb-3 text-center text-lg-start">${bookFind.title}</h1>
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
         <div class="addtocardModal mb-3 d-flex justify-content-lg-start justify-content-center">
           <a href="../Home/login.html" type="button" class="btn btn-addtocard-modal fs-5 fw-bold w-50 p-2">ADD TO CART</a>
         </div>
         <div class="" id="synopsisAccordion">
           <div class="accordion-item">
             <h4 class="accordion-header accordion d-flex justify-content-lg-start justify-content-center" id="synopsisHeading">
               <button class="accordion-button p-2 fs-5 fw-bold collapsed text-center w-50" type="button" data-bs-toggle="collapse" data-bs-target="#synopsisCollapse" aria-expanded="false" aria-controls="synopsisCollapse">
                 <span class="d-flex justify-content-center align-items-center w-100">Description</span>
               </button>
             </h4>
             <div id="synopsisCollapse" class="accordion-collapse collapse" aria-labelledby="synopsisHeading" data-bs-parent="#synopsisAccordion">
               <div class="accordion-body">
                 <div class="synopsis-body container">
                   ${bookFind.synop}
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
       
        `
        
    }else{
        console.log("failed");
    }

  }
