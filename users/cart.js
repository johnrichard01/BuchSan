function generatePage(){
    let cartItems= new Array
    cartItems=JSON.parse(sessionStorage.getItem("Cart"))||[];
    let cartpage= document.getElementById('carBody');
    if(cartItems.length !== 0){
        return cartpage.innerHTML += cartItems.map(function(x){
            let id = x.id;
            
            let search= allBooks.find(function(y){
                return y.id === id;
            }||[])
                return`
            
            <tr>
                <td>
                    <div class="cart-info">
                        <img src="../${search.cover}">
                        <div>
                            <p id="booksCategory">Title : ${search.title}</p>
                            <p id="booksCategory">Author : ${search.author}</p>
                            <small> Price: &#8369; ${search.price}</small>
                            <br>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="increment-decrement d-flex flex-wrap justify-content-between" >
                        <svg xmlns="http://www.w3.org/2000/svg" onclick="decrement(${x.id})" width="1.5rem" height="1.5rem" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
                        <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"/>
                        </svg>
                        <div class=" text-center" id="${x.id}">${x.items}</div>
                        <svg xmlns="http://www.w3.org/2000/svg" onclick="increment(${x.id})" width="1.5rem" height="1.5rem" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                        </svg>
                    </div>
                </td>
                <td class="iremove text-center">&#8369; ${x.items * search.price}</td>
                <td class="iremove ">
                    <div class="d-flex flex-wrap justify-content-center">
                        <button onclick="removeCart('${x.id}')" class="btn btn-delete "><i class="fa fa-trash delete"></i></button>
                    </div>
                </td>
            </tr>
                `
        }).join("")
    }else{
        let table= document.getElementById('cartTable');
        let total= document.getElementById('total');
        let body= document.getElementById('noContent');
        table.style.display='none';
        total.style.display='none';
        body.innerHTML="Nothing to show for now click here to explore more"
    }

}

function generateTotal(){
    let cartItems= new Array
    cartItems=JSON.parse(sessionStorage.getItem("Cart"))||[];
    let shipping= 200;
    let total= document.getElementById('total');
    let totalData = cartItems.map(function (x) {
        let items = x.items;
        let search = allBooks.find(function (y) {
            return y.id === x.id;
        }) || {};
    
        return items * search.price;
    })
    let totalPrice= totalData.reduce(function(x, y){
        return x + y ;
    }, 0)
    if(total === null){
        return;
    }else{
       return total.innerHTML =`
                <div class="Cart-total">
                    <h5>ORDER SUMMARY</h5>
                </div>
                <div class="container tutal">
                    <div class="stotal">
                        <h6>Subtotal</h6>
                        <p>&#8369; ${totalPrice}.00</p>
                    </div>
                    <div class="shipping">
                            <h6>Shipping</h6>
                            <p>&#8369; ${shipping}.00</p>
                    </div>
                    <hr style="border:2px solid rgb(115, 78, 10);">
                    <div class="ordertotal">
                            <h5>Order Total</h5>
                            <p>&#8369; ${totalPrice + shipping}.00</p>
                    </div>
                    <div class="checkout">
                            <button class="btn-checkout" type="button">Proceed to Checkout</button>
                    </div>
                </div>
    `
    }
}
function increment(id){
    let cartItems= new Array
    cartItems=JSON.parse(sessionStorage.getItem("Cart"))||[];
    let selected = id;
    let search = cartItems.find(function(x){
        return selected.id === x.id;
    })
    if (search){
        search.items += 1;
        sessionStorage.setItem("Cart",JSON.stringify(cartItems));
        let cartpage= document.getElementById('carBody');
        let existingRows = cartpage.querySelectorAll('tr');
        for (let i = existingRows.length - 1; i > 0; i--) {
            existingRows[i].parentNode.removeChild(existingRows[i]);
        }
        calculateCart();
        generatePage();
        generateTotal();
    }
}
function decrement(id){
    let cartItems= new Array
    cartItems=JSON.parse(sessionStorage.getItem("Cart"))||[];
    let selected= id;
    let search = cartItems.find(function(x){
        return x.id === selected.id;
    })
    if(search === undefined){
        return;
    }else
    if (search.items === 0){
        return;
    }else{
        search.items -=1;
        sessionStorage.setItem("Cart",JSON.stringify(cartItems));
        let cartpage= document.getElementById('carBody');
        let existingRows = cartpage.querySelectorAll('tr');
        for (let i = existingRows.length - 1; i > 0; i--) {
            existingRows[i].parentNode.removeChild(existingRows[i]);
        }
        
    }
    cartItems= cartItems.filter(function(x){
        return x.items !== 0 ;
    })
    sessionStorage.setItem("Cart",JSON.stringify(cartItems));
    calculateCart();
    generatePage();
    generateTotal();
}
function removeCart(id){
    let cartItems= new Array
    cartItems=JSON.parse(sessionStorage.getItem("Cart"))||[];
    let search = cartItems.filter(function(x){
        return x.id !== id;
    })
    if (search){
        
        let cartpage= document.getElementById('carBody');
        let existingRows = cartpage.querySelectorAll('tr');
        for (let i = existingRows.length - 1; i > 0; i--) {
            existingRows[i].parentNode.removeChild(existingRows[i]);
        }
        sessionStorage.setItem("Cart",JSON.stringify(search));
        calculateCart();
        generatePage();
        generateTotal();
    }
    
}
generatePage();
generateTotal();
