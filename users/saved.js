//pushing the books to saved
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
             if (elementExists("savedModal"+savebook.id)){
                let hearfill= document.getElementById("savedModal"+savebook.id);
                saved_records=saved_records.filter(function(x){
                    return findDupe.id !== x.id;
                })
                sessionStorage.setItem("saved",JSON.stringify(saved_records));
                hearfill.classList.remove("heart-fill");
                calculateSaved();
                generatePage();
                checkSaved();
                paginationGenerate();
                console.log("Modal")
            } else if (elementExists("savedRelated"+savebook.id)){
                let hearfill= document.getElementById("savedRelated"+savebook.id);
                saved_records=saved_records.filter(function(x){
                    return findDupe.id !== x.id;
                })
                sessionStorage.setItem("saved",JSON.stringify(saved_records));
                hearfill.classList.remove("heart-fill");
                calculateSaved();
                generatePage();
                checkSaved();
                paginationGenerate();
                console.log("Related")
            } else if(elementExists("saved"+savebook.id)){
                console.log('dupe')
                saved_records=saved_records.filter(function(x){
                    return findDupe.id !== x.id;
                })
                sessionStorage.setItem("saved",JSON.stringify(saved_records));
                let hearfill= document.getElementById("saved"+findDupe.id);
                hearfill.classList.remove("heart-fill");
                calculateSaved();
                generatePage();
                checkSaved();
                paginationGenerate();
                console.log(saved_records)
            }
            
        }else{
            if (elementExists("savedModal"+savebook.id)){
                let hearfill= document.getElementById("savedModal"+savebook.id);
                saved_records.push({
                    "id": savebook.id,
                })
                sessionStorage.setItem("saved",JSON.stringify(saved_records));
                hearfill.classList.add("heart-fill");
                calculateSaved();
                generatePage();
                checkSaved();
                paginationGenerate();
                console.log("Modal")
            }else if (elementExists("savedRelated"+savebook.id)){
                let hearfill= document.getElementById("savedRelated"+savebook.id);
                saved_records.push({
                    "id": savebook.id,
                })
                sessionStorage.setItem("saved",JSON.stringify(saved_records));
                hearfill.classList.add("heart-fill");
                calculateSaved();
                generatePage();
                checkSaved();
                paginationGenerate();
                console.log("Related")
            } else if (elementExists("saved"+savebook.id)){
                let hearfill= document.getElementById("saved"+savebook.id);
                saved_records.push({
                    "id": savebook.id,
                })
                sessionStorage.setItem("saved",JSON.stringify(saved_records));
                hearfill.classList.add("heart-fill");
                calculateSaved();
                generatePage();
                checkSaved();
                paginationGenerate();
                console.log("saved")
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
            if(hearfill){
                if(document.getElementById("saved"+x.id).classList.contains("heart-fill")){
                    console.log("already colored")
                }else{
                    hearfill.classList.add("heart-fill");
                }
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


function generatePage(){
    let saved_records= JSON.parse(sessionStorage.getItem("saved"))?JSON.parse(sessionStorage.getItem("saved")):[]
    let cardscontainer=document.getElementById("generateSaved");
    
    if(saved_records.length !== 0){
       return (cardscontainer.innerHTML= saved_records.slice(0,10).map(function(x){
        let id = x.id;
        let search = allBooks.find(function(y){return y.id === id})||[];
        let newArrival = allBooks.slice(-10).find(function(z){
            return z.id === search.id;
        })
        if (newArrival){
            return `
        <div class="card generated-hover col-12 col-md-6 col-lg mt-5" id="product${newArrival.id}" type="button" onclick=" openModal();  generatenewModal('${search.id}');  checkModal();"  >        
                <div class="image-div">
                    <img src="../${newArrival.cover}" class="card-img-top generated-image-hover"  loading="lazy" alt="book cover">
                    <div class="new-div position-absolute badge">New Arrivals!</div>
                    <div class="save-div">
                        <a href="#" id="heart${newArrival.id}" onclick="clickEvent(event);savedBooks('${newArrival.id}');">
                            <div class="heart-div">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" fill="currentColor" class="save-button bi bi-heart" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                                </svg>
                                    <div class="heart-inside" id="saved${newArrival.id}">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" fill="currentColor" class="save-button-inside bi bi-heart-fill" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
                                        </svg>
                                    </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="card-body d-flex flex-wrap justify-content-between mt-2">
                    <p class="card-title h6 fw-bold mb-2 w-100">${newArrival.title}</p>
                    <p class="Author lead w-100 fs-6 fst-italic">${search.author}</p> 
                </div>
                <div class="price_addToCart">
                    <span> &#8369; ${newArrival.price}</span>
                </div>    
                <div class="addToCart">    
                    <a href="#"> <button  onclick="clickEvent(event); addCart('${newArrival.id}')" class="btn" type="button"><i class="fas fa-shopping-cart mx-1"></i>ADD TO CART</button> </a>
                </div>
        </div>
        `
        }else if (search.genre === "sale"){
            return `
            <div class="card generated-hover col-12 col-md-6 col-lg mt-5" id="product${search.id}" type="button" onclick=" openModal();  generatenewModal('${x.id}');  checkModal();"  >        
                    <div class="image-div">
                    <div class="sale-div position-absolute badge">SALE ${search.saleprice}% OFF</div>
                        <img src="../${search.cover}" class="card-img-top generated-image-hover"  loading="lazy" alt="book cover">
                        <div class="save-div">
                            <a href="#" id="heart${search.id}" onclick="clickEvent(event);savedBooks('${search.id}');">
                                <div class="heart-div">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" fill="currentColor" class="save-button bi bi-heart" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                                    </svg>
                                        <div class="heart-inside" id="saved${search.id}">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" fill="currentColor" class="save-button-inside bi bi-heart-fill" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
                                            </svg>
                                        </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="card-body d-flex flex-wrap justify-content-between mt-2">
                        <p class="card-title h6 fw-bold mb-2 w-100">${search.title}</p>
                        <p class="Author lead w-100 fs-6 fst-italic">${search.author}</p> 
                    </div>
                    <div class="price_addToCart">
                    &#8369;${(search.price)-(search.price*(search.saleprice/100))}  <span><del> &#8369; ${search.price}</del> </span>
                    </div>    
                    <div class="addToCart">    
                        <a href="#"> <button  onclick="clickEvent(event); addCart('${search.id}')" class="btn" type="button"><i class="fas fa-shopping-cart mx-1"></i>ADD TO CART</button> </a>
                    </div>
                </div>`
        }else if (search.genre === 'bestseller'){
            return`
            <div class="card generated-hover col-12 col-md-6 col-lg mt-5" id="product${search.id}" type="button" onclick=" openModal();  generatenewModal('${search.id}');  checkModal();"  >        
                <div class="image-div">
                    <img src="../${search.cover}" class="card-img-top generated-image-hover"  loading="lazy" alt="book cover">
                    <div class="new-div position-absolute badge">Best Seller</div> 
                    <div class="save-div">
                        <a href="#" id="heart${search.id}" onclick="clickEvent(event);savedBooks('${search.id}');">
                            <div class="heart-div">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" fill="currentColor" class="save-button bi bi-heart" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                                </svg>
                                    <div class="heart-inside" id="saved${search.id}">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" fill="currentColor" class="save-button-inside bi bi-heart-fill" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
                                        </svg>
                                    </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="card-body d-flex flex-wrap justify-content-between mt-2">
                    <p class="card-title h6 fw-bold mb-2 w-100">${search.title}</p>
                    <p class="Author lead w-100 fs-6 fst-italic">${search.author}</p> 
                </div>
                <div class="price_addToCart">
                    <span> &#8369; ${search.price}</span>
                </div>    
                <div class="addToCart">    
                    <a href="#"> <button  onclick="clickEvent(event); addCart('${search.id}')" class="btn" type="button"><i class="fas fa-shopping-cart mx-1"></i>ADD TO CART</button> </a>
                </div>
        </div>`
        } if (  !newArrival){
            return`
            <div class="card generated-hover col-12 col-md-6 col-lg mt-5" id="product${search.id}" type="button" onclick=" openModal();  generatenewModal('${search.id}');  checkModal();"  >        
                <div class="image-div">
                    <img src="../${search.cover}" class="card-img-top generated-image-hover"  loading="lazy" alt="book cover">  
                    <div class="save-div">
                        <a href="#" id="heart${search.id}" onclick="clickEvent(event);savedBooks('${search.id}');">
                            <div class="heart-div">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" fill="currentColor" class="save-button bi bi-heart" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                                </svg>
                                    <div class="heart-inside" id="saved${search.id}">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" fill="currentColor" class="save-button-inside bi bi-heart-fill" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
                                        </svg>
                                    </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="card-body d-flex flex-wrap justify-content-between mt-2">
                    <p class="card-title h6 fw-bold mb-2 w-100">${search.title}</p>
                    <p class="Author lead w-100 fs-6 fst-italic">${search.author}</p> 
                </div>
                <div class="price_addToCart">
                    <span> &#8369; ${search.price}</span>
                </div>    
                <div class="addToCart">    
                    <a href="#"> <button  onclick="clickEvent(event); addCart('${search.id}')" class="btn" type="button"><i class="fas fa-shopping-cart mx-1"></i>ADD TO CART</button> </a>
                </div>
        </div>`
        }
       }).join(""))
            
          
    }else{
        cardscontainer.innerHTML=`
        <div class="container nothing-container remove-container1 d-flex flex-wrap align-items-center justify-content-center">
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="20rem" height="20rem" fill="currentColor" class="bi bi-bookmark-heart-fill" viewBox="0 0 16 16">
            <path d="M2 15.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2zM8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"/>
        </svg>
        </div>
    </div>
        `;
  }
}
  function generateALL(){
    generatePage();
    checkSaved();
  }
  generateALL();


  function generateRelated(id){
  let select = id;
  let related= document.getElementById("relatedContainer");
  let bookFind = allBooks.filter(function(x){
      return select !== x.id;
  });
  
  
  let bookRand=  bookFind.sort(function(){
          return Math.random()-0.5;
  });
  
  if (bookRand){
      related.innerHTML= bookRand.slice(0,5).map(function(x){
          let newArrival = allBooks.slice(-10).find(function(y){
            return y.id === x.id;
          })
          if (newArrival){
            return `
            <div class="card generated-hover col-12 col-md-6 col-lg mt-5 mb-0 mb-lg-5"  id="product${newArrival.id}" >        
                    <a type="button" onclick="openFirst(); generatenewModal('${newArrival.id}'); checkModal();"  data-bs-toggle="modal" data-bs-target="#generatepageModal">
                        <div class="image-div">
                            <img src="../${newArrival.cover}" class="card-img-top generated-image-hover"  loading="lazy" alt="book cover">
                            <div class="new-div position-absolute badge">New Arrival!</div>
                            <div class="save-div d-flex flex-wrap">
                                <a id="heart${newArrival.id}" onclick="savedBooks('${newArrival.id}'); clickEvent(event);">
                                    <div class="heart-div">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" fill="currentColor" class="save-button bi bi-heart" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                                        </svg>
                                            <div class="heart-inside" id='savedRelated${newArrival.id}'>
                                                <svg xmlns="http://www.w3.org/2000/svg"   width="1.5rem" height="1.5rem" fill="currentColor" class="save-button-inside bi bi-heart-fill" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
                                                </svg>
                                            </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="card-body d-flex flex-wrap justify-content-between mt-2">
                            <p class="card-title h6 fw-bold mb-2 w-100">${newArrival.title}</p>
                            <p class="Author lead w-100 fs-6 fst-italic">${newArrival.author}</p> 
                        </div>
                        <div class="price_addToCart">
                            <span> &#8369; ${newArrival.price}</span>
                        </div>
                        <div class="addToCart">    
                            <a > <button  onclick="clickEvent(event); addCart('${newArrival.id}')" class="btn" type="button"><i class="fas fa-shopping-cart mx-1"></i>ADD TO CART</button> </a>
                        </div>
                    </a>
                </div>`
          } else if (x.genre === "sale"){
            return `
            <div class="card generated-hover col-12 col-md-6 col-lg mt-5 mb-0 mb-lg-5"  id="product${x.id}" >        
                    <a type="button" onclick="openFirst(); generatenewModal('${x.id}'); checkModal();"  data-bs-toggle="modal" data-bs-target="#generatepageModal">
                        <div class="image-div">
                        <div class="sale-div position-absolute badge">SALE ${x.saleprice}% OFF</div>
                            <img src="../${x.cover}" class="card-img-top generated-image-hover"  loading="lazy" alt="book cover">
                            
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
                            &#8369;${(x.price)-(x.price*(x.saleprice/100))}  <span><del> &#8369; ${x.price}</del> </span>
                        </div>
                        <div class="addToCart">    
                            <a > <button  onclick="clickEvent(event); addCart('${x.id}')" class="btn" type="button"><i class="fas fa-shopping-cart mx-1"></i>ADD TO CART</button> </a>
                        </div>
                    </a>
                </div>`
        }else if (x.genre === 'bestseller'){
            return`
            <div class="card generated-hover col-12 col-md-6 col-lg mt-5 mb-0 mb-lg-5"  id="product${x.id}" >        
                    <a type="button" onclick="openFirst(); generatenewModal('${x.id}'); checkModal();"  data-bs-toggle="modal" data-bs-target="#generatepageModal">
                        <div class="image-div">
                        <div class="sale-div position-absolute badge">Best Seller!</div>
                            <img src="../${x.cover}" class="card-img-top generated-image-hover"  loading="lazy" alt="book cover">
                            
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
                             &#8369; ${x.price}
                        </div>
                        <div class="addToCart">    
                            <a > <button  onclick="clickEvent(event); addCart('${x.id}')" class="btn" type="button"><i class="fas fa-shopping-cart mx-1"></i>ADD TO CART</button> </a>
                        </div>
                    </a>
                </div>`
        } if (  !newArrival){
            return`
            <div class="card generated-hover col-12 col-md-6 col-lg mt-5 mb-0 mb-lg-5"  id="product${x.id}" >        
                    <a type="button" onclick="openFirst(); generatenewModal('${x.id}'); checkModal();"  data-bs-toggle="modal" data-bs-target="#generatepageModal">
                        <div class="image-div">
                        <div class="sale-div position-absolute badge"></div>
                            <img src="../${x.cover}" class="card-img-top generated-image-hover"  loading="lazy" alt="book cover">
                            
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
                             &#8369; ${x.price}
                        </div>
                        <div class="addToCart">    
                            <a > <button  onclick="clickEvent(event); addCart('${x.id}')" class="btn" type="button"><i class="fas fa-shopping-cart mx-1"></i>ADD TO CART</button> </a>
                        </div>
                    </a>
                </div>`
        }
      }).join("")
  }
  }
  
  
  
  function generatenewModal(id){
    let selected=id;
    let modal= document.getElementById("generateBody");
    let bookFind = allBooks.find(function(x){
        return x.id === selected;
    });
        let newArrival= allBooks.slice(-10).find(function(y){
            return bookFind.id === y.id;
        })
        if (newArrival){
            modal.innerHTML = `
            <div class="row mb-5 mt-5">
            <div class=" position-relative col-12 col-lg-6 d-flex flex-wrap justify-content-center align-content-start">
                <div class="image-div-modal col-12 d-flex flex-wrap justify-content-center">
                    <div class="d-flex flex-wrap justify-content-center">
                    
                        <img src="../${newArrival.cover}" class="modal-cover-image" alt="book cover"  loading="lazy">
                        <div class="sale-div position-absolute badge">New Arrival!</div>
                    <div class="save-div-modal">
                        <a id="heart${newArrival.id}" onclick="savedBooks('${newArrival.id}'); clickEvent(event);">
                            <div class="heart-div-modal">
                                <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" class="save-button-modal bi bi-heart" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                                </svg>
                                    <div class="heart-inside-modal" id='savedModal${newArrival.id}'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" class="save-button-inside-modal bi bi-heart-fill" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
                                        </svg>
                                    </div>
                            </div>
                        </a>
                    </div>
     
                    <div class="col-12 row justify-content-center">
                        <div class="addtocardModal mb-3 d-flex justify-content-center col-11">
                            <a   onclick="clickEvent(event); addCart('${newArrival.id}')" type="button" class="btn w-100 btn-addtocard-modal fs-6 fw-bold p-0 p-lg-2">ADD TO CART</a>
                        </div>
                    </div>
                    </div>
                    
                </div>
            </div>
            <div class="col-12 col-lg-6 pe-0 pe-lg-5 ps-lg-5 ps-0">
                <div class="container">
                    <h1 class="display-6 fw-bold mt-4 mb-3 text-center text-lg-start">${newArrival.title}</h1>
                    <h4 class="mb-3 text-center text-lg-start fst-italic">${newArrival.author}</h4>
                    <div class="d-flex justify-content-lg-start justify-content-center">
                    <div class="rating-box bg-body-secondary d-flex flex-wrap justify-content-center mb-3">
                        <div class="outer-star">
                        <div class="inner-star" style="width:${(parseFloat(newArrival.rating) / 5) * 100}%"></div>
                        </div>
                        <div class=" rating-number d-flex flex-wrap align-items-center pt-2 ms-3">
                        <h1 class="fw-bold rating-text">${newArrival.rating}</h1>
                        </div>
                    </div>
                    </div>
                    <h4 class="mb-3 text-center text-lg-start h3 fw-bold"> &#8369; ${newArrival.price}</h4>
                    
                <div class="container mx-2">
                    ${newArrival.synop}
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
           generateRelated(newArrival.id);
        } else if (bookFind.genre === 'sale'){
            modal.innerHTML = `
         <div class="row mb-5 mt-5">
         <div class=" position-relative col-12 col-lg-6 d-flex flex-wrap justify-content-center align-content-start">
             <div class="image-div-modal col-12 d-flex flex-wrap justify-content-center">
                 <div class="d-flex flex-wrap justify-content-center">
                 
                     <img src="../${bookFind.cover}" class="modal-cover-image" alt="book cover"  loading="lazy">
                     <div class="sale-div position-absolute badge">SALE ${bookFind.saleprice}% OFF</div>
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
                 <h4 class="mb-3 text-center text-lg-start h3 fw-bold">&#8369;${(bookFind.price)-(bookFind.price*(bookFind.saleprice/100))}  <span><del> &#8369; ${bookFind.price}</del> </span></h4>
                 
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
        }else if (bookFind.genre ==='bestseller'){
            modal.innerHTML = `
            <div class="row mb-5 mt-5">
            <div class=" position-relative col-12 col-lg-6 d-flex flex-wrap justify-content-center align-content-start">
                <div class="image-div-modal col-12 d-flex flex-wrap justify-content-center">
                    <div class="d-flex flex-wrap justify-content-center">
                    
                        <img src="../${bookFind.cover}" class="modal-cover-image" alt="book cover"  loading="lazy">
                        <div class="sale-div position-absolute badge">Best Seller!</div>
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
        } else if (!newArrival){
            modal.innerHTML = `
            <div class="row mb-5 mt-5">
            <div class=" position-relative col-12 col-lg-6 d-flex flex-wrap justify-content-center align-content-start">
                <div class="image-div-modal col-12 d-flex flex-wrap justify-content-center">
                    <div class="d-flex flex-wrap justify-content-center">
                    
                        <img src="../${bookFind.cover}" class="modal-cover-image" alt="book cover"  loading="lazy">
                        <div class="sale-div position-absolute badge"></div>
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
        }
        
  }
  
  function openFirst() {
    var firstModal = document.getElementById('generatepageModal');
    firstModal.addEventListener('hidden.bs.modal', function(){
        setTimeout(showSecond, 100);}
        , { once: true });
    var newModal = new bootstrap.Modal(firstModal);
    newModal.hide();
  }
  
  function showSecond() {
    var secondModal = document.getElementById('generatepageModal');
    var newModal = new bootstrap.Modal(secondModal);
    newModal.show();
  }


  function openModal() {
    var modal = document.getElementById('generatepageModal');
    var modalInstance = new bootstrap.Modal(modal);
    modalInstance.show();
  }

function paginationGenerate(){
    let next1=document.getElementById('next1');
    let next2=document.getElementById('next2');
    let next3=document.getElementById('next3');
    let next4=document.getElementById('next4');
    let next5=document.getElementById('next5');
    let next6=document.getElementById('next6');
    let next7=document.getElementById('next7');
    let next8=document.getElementById('next8');
    let next9=document.getElementById('next9');
    let saved_records=new Array
    saved_records= JSON.parse(sessionStorage.getItem("saved"))?JSON.parse(sessionStorage.getItem("saved")):[]
    if(saved_records.length <= 10){
                next1.classList.add('next-hide');
                next2.classList.add('next-hide');
    } if (saved_records.length >10){
         if (next1.classList.contains('next-hide') && next2.classList.contains('next-hide')){
                next1.classList.remove('next-hide');
                next2.classList.remove('next-hide');
        }
    } if(saved_records.length <= 20){
            next3.classList.add('next-hide');
    } if (saved_records.length > 20){
        if (next3.classList.contains('next-hide')){
            next3.classList.remove('next-hide');
       }
    } if(saved_records.length <= 30){
            next4.classList.add('next-hide');
    } if (saved_records.length > 30){
        if (next4.classList.contains('next-hide')){
            next4.classList.remove('next-hide');
       }
    } if(saved_records.length <= 40){
            next5.classList.add('next-hide');
    } if (saved_records.length > 40){
        if (next5.classList.contains('next-hide')){
            next5.classList.remove('next-hide');
       }
    } if(saved_records.length <= 50){
            next6.classList.add('next-hide');
    } if (saved_records.length > 50){
        if (next6.classList.contains('next-hide')){
            next6.classList.remove('next-hide');
       }
    }  if(saved_records.length <= 60){
            next7.classList.add('next-hide');
    } if (saved_records.length > 60){
        if (next7.classList.contains('next-hide')){
            next7.classList.remove('next-hide');
       }
    } if(saved_records.length <= 70){
            next8.classList.add('next-hide');
    } if (saved_records.length > 70){
        if (next8.classList.contains('next-hide')){
            next8.classList.remove('next-hide');
       }
    } if(saved_records.length <= 80){
            next9.classList.add('next-hide');
    } if (saved_records.length > 80){
        if (next9.classList.contains('next-hide')){
            next9.classList.remove('next-hide');
       }
    }
   
}
paginationGenerate();

function changeNextActive(id){
    document.querySelectorAll('.next-button').forEach(function(x){
        x.classList.remove('next-active');
    })
    if (document.getElementById(id)){
        document.getElementById(id).classList.add('next-active')
    }
}
function nextPage(id){
    changeNextActive(id);
    if(id=== 'next1'){
        generateNext(0,10)
        checkSaved();
    }else if (id === 'next2'){
        generateNext(10,20)
        checkSaved();
    } else if (id === 'next3'){
        generateNext(20,30)
        checkSaved();
    }else if (id === 'next4'){
        generateNext(30,40)
        checkSaved();
    }else if (id === 'next5'){
        generateNext(40,50)
        checkSaved();
    }else if (id === 'next6'){
        generateNext(50,60)
        checkSaved();
    }else if (id === 'next7'){
        generateNext(60,70)
        checkSaved();
    }else if (id === 'next8'){
        generateNext(70,80)
        checkSaved();
    }else if (id === 'next9'){
        generateNext(80,90)
        checkSaved();
    }
}

function generateNext(x,y){
    let saved_records= JSON.parse(sessionStorage.getItem("saved"))?JSON.parse(sessionStorage.getItem("saved")):[]
    let cardscontainer=document.getElementById("generateSaved");
    
    if(saved_records.length !== 0){
       return (cardscontainer.innerHTML= saved_records.slice(x,y).map(function(x){
        let id = x.id;
        let search = allBooks.find(function(y){return y.id === id})||[];
        let newArrival = allBooks.slice(-10).find(function(z){
            return z.id === search.id;
        })
        if (newArrival){
            return `
        <div class="card generated-hover col-12 col-md-6 col-lg mt-5" id="product${newArrival.id}" type="button" onclick=" openModal();  generatenewModal('${search.id}');  checkModal();"  >        
                <div class="image-div">
                    <img src="../${newArrival.cover}" class="card-img-top generated-image-hover"  loading="lazy" alt="book cover">
                    <div class="new-div position-absolute badge">New Arrivals!</div>
                    <div class="save-div">
                        <a href="#" id="heart${newArrival.id}" onclick="clickEvent(event);savedBooks('${newArrival.id}');">
                            <div class="heart-div">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" fill="currentColor" class="save-button bi bi-heart" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                                </svg>
                                    <div class="heart-inside" id="saved${newArrival.id}">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" fill="currentColor" class="save-button-inside bi bi-heart-fill" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
                                        </svg>
                                    </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="card-body d-flex flex-wrap justify-content-between mt-2">
                    <p class="card-title h6 fw-bold mb-2 w-100">${newArrival.title}</p>
                    <p class="Author lead w-100 fs-6 fst-italic">${search.author}</p> 
                </div>
                <div class="price_addToCart">
                    <span> &#8369; ${newArrival.price}</span>
                </div>    
                <div class="addToCart">    
                    <a href="#"> <button  onclick="clickEvent(event); addCart('${newArrival.id}')" class="btn" type="button"><i class="fas fa-shopping-cart mx-1"></i>ADD TO CART</button> </a>
                </div>
        </div>
        `
        }else if (search.genre === "sale"){
            return `
            <div class="card generated-hover col-12 col-md-6 col-lg mt-5" id="product${search.id}" type="button" onclick=" openModal();  generatenewModal('${x.id}');  checkModal();"  >        
                    <div class="image-div">
                    <div class="sale-div position-absolute badge">SALE ${search.saleprice}% OFF</div>
                        <img src="../${search.cover}" class="card-img-top generated-image-hover"  loading="lazy" alt="book cover">
                        <div class="save-div">
                            <a href="#" id="heart${search.id}" onclick="clickEvent(event);savedBooks('${search.id}');">
                                <div class="heart-div">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" fill="currentColor" class="save-button bi bi-heart" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                                    </svg>
                                        <div class="heart-inside" id="saved${search.id}">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" fill="currentColor" class="save-button-inside bi bi-heart-fill" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
                                            </svg>
                                        </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="card-body d-flex flex-wrap justify-content-between mt-2">
                        <p class="card-title h6 fw-bold mb-2 w-100">${search.title}</p>
                        <p class="Author lead w-100 fs-6 fst-italic">${search.author}</p> 
                    </div>
                    <div class="price_addToCart">
                    &#8369;${(search.price)-(search.price*(search.saleprice/100))}  <span><del> &#8369; ${search.price}</del> </span>
                    </div>    
                    <div class="addToCart">    
                        <a href="#"> <button  onclick="clickEvent(event); addCart('${search.id}')" class="btn" type="button"><i class="fas fa-shopping-cart mx-1"></i>ADD TO CART</button> </a>
                    </div>
                </div>`
        }else if (search.genre === 'bestseller'){
            return`
            <div class="card generated-hover col-12 col-md-6 col-lg mt-5" id="product${search.id}" type="button" onclick=" openModal();  generatenewModal('${search.id}');  checkModal();"  >        
                <div class="image-div">
                    <img src="../${search.cover}" class="card-img-top generated-image-hover"  loading="lazy" alt="book cover">
                    <div class="new-div position-absolute badge">Best Seller</div> 
                    <div class="save-div">
                        <a href="#" id="heart${search.id}" onclick="clickEvent(event);savedBooks('${search.id}');">
                            <div class="heart-div">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" fill="currentColor" class="save-button bi bi-heart" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                                </svg>
                                    <div class="heart-inside" id="saved${search.id}">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" fill="currentColor" class="save-button-inside bi bi-heart-fill" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
                                        </svg>
                                    </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="card-body d-flex flex-wrap justify-content-between mt-2">
                    <p class="card-title h6 fw-bold mb-2 w-100">${search.title}</p>
                    <p class="Author lead w-100 fs-6 fst-italic">${search.author}</p> 
                </div>
                <div class="price_addToCart">
                    <span> &#8369; ${search.price}</span>
                </div>    
                <div class="addToCart">    
                    <a href="#"> <button  onclick="clickEvent(event); addCart('${search.id}')" class="btn" type="button"><i class="fas fa-shopping-cart mx-1"></i>ADD TO CART</button> </a>
                </div>
        </div>`
        } if (  !newArrival){
            return`
            <div class="card generated-hover col-12 col-md-6 col-lg mt-5" id="product${search.id}" type="button" onclick=" openModal();  generatenewModal('${search.id}');  checkModal();"  >        
                <div class="image-div">
                    <img src="../${search.cover}" class="card-img-top generated-image-hover"  loading="lazy" alt="book cover">  
                    <div class="save-div">
                        <a href="#" id="heart${search.id}" onclick="clickEvent(event);savedBooks('${search.id}');">
                            <div class="heart-div">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" fill="currentColor" class="save-button bi bi-heart" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                                </svg>
                                    <div class="heart-inside" id="saved${search.id}">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" fill="currentColor" class="save-button-inside bi bi-heart-fill" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
                                        </svg>
                                    </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="card-body d-flex flex-wrap justify-content-between mt-2">
                    <p class="card-title h6 fw-bold mb-2 w-100">${search.title}</p>
                    <p class="Author lead w-100 fs-6 fst-italic">${search.author}</p> 
                </div>
                <div class="price_addToCart">
                    <span> &#8369; ${search.price}</span>
                </div>    
                <div class="addToCart">    
                    <a href="#"> <button  onclick="clickEvent(event); addCart('${search.id}')" class="btn" type="button"><i class="fas fa-shopping-cart mx-1"></i>ADD TO CART</button> </a>
                </div>
        </div>`
        }
       }).join(""))
            
          
    }else{
        cardscontainer.innerHTML=`<h1 class="fw-bold">No save books at the moment</h1>`;
  }
}