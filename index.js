let cardContainerNew= document.getElementById("cardContainerNew");


function generateCards(x){
    return(cardContainerNew.innerHTML= newArrivalData.map(function(x){
        return`
        <div class="card col-12 col-md-6 col-lg-3 mt-5" id=""product${x.id}>

        <a  type="button" onclick="generateModal(${x.id})"  data-bs-toggle="modal" data-bs-target="#newArrivalModal">
            <img id="${x.id}" src="${x.cover}" class="card-img-top">
        </a>

        <div class="card-body">
            <p class="card-title">${x.title}</p>
            <p class="Author">${x.author}</p>
            
        </div>
        <div class="price_addToCart">
            <span> &#8369; ${x.price}</span>
        </div>    
        <div class="addToCart">    
           <a href="#"> <button class="btn" type="button"><i class="fas fa-shopping-cart mx-1"></i>ADD TO CART</button> </a>
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
    let bookFind = newArrivalData.find(function(x){
        return x.id === selected.id;
    });
    if (bookFind){
        let modal= document.getElementById("modalgenerateBody");
        console.log
         modal.innerHTML = `
          <div class="col-12 col-lg-6 d-flex flex-wrap align-items-center justify-content-center align-content-center">
            <img src="${bookFind.cover}" class="modal-cover-image" alt="">
          </div>
          <div class="col-12 col-lg-6 pe-5">
            <h1 class="display-3 fw-bold mt-5 mb-3 text-center text-lg-start">${bookFind.title}</h1>
            <h4 class="mb-3 text-center text-lg-start">${bookFind.author}</h4>
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
            <div class="addtocardModal mb-3">
              <a href="./Home/login.html" type="button" class="btn btn-lg btn-addtocard-modal fw-bold w-100 py-3">ADD TO CART</a>
            </div>
            <div class="accordion" id="synopsisAccordion">
              <div class="accordion-item">
                <h4 class="accordion-header" id="synopsisHeading">
                  <button class="accordion-button p-3 fs-5 fw-bold collapsed text-center w-100" type="button" data-bs-toggle="collapse" data-bs-target="#synopsisCollapse" aria-expanded="false" aria-controls="synopsisCollapse">
                    <span class="d-flex justify-content-center align-items-center w-100">Synopsis</span>
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

  function generateStar(id){
    let selected = id;
    let bookFind = newArrivalData.find(function(x){
        return x.id === selected.id ;
    });

    if (bookFind){
        let starWidth= ((parseFloat(bookFind.rating))/5)*100;
        document.querySelector(".inner-star").style.width = starWidth + "%";

    } else {
        console.log("book not found");
    }
  }
