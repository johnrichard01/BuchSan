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
               if (search.genre === 'sale'){
                return`
            
                <tr>
                    <td>
                        <div class="cart-info">
                            <img src="../${search.cover}">
                            <div>
                                <p id="booksCategory">Title : ${search.title}</p>
                                <p id="booksCategory">Author : ${search.author}</p>
                                <small> Price: &#8369; ${(search.price)-(search.price*(search.saleprice/100))}  <span><del> &#8369; ${search.price}</small>
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
                    <td class="iremove text-center">&#8369; ${x.items * ((search.price)-(search.price*(search.saleprice/100)))}</td>
                    <td class="iremove ">
                        <div class="d-flex flex-wrap justify-content-center">
                            <button onclick="removeCart('${x.id}')" class="btn btn-delete "><i class="fa fa-trash delete"></i></button>
                        </div>
                    </td>
                </tr>
                    `
               }else{
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
            </tr>`
               }
        }).join("")
    }else{
        let table= document.getElementById('cartTable');
        let total= document.getElementById('total');
        let body= document.getElementById('noContent');
        table.style.display='none';
        total.style.display='none';
        body.innerHTML=`
        <div class="container nothing-container remove-container1 d-flex flex-wrap align-items-center justify-content-center">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="20rem" height="20rem" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                </svg>
            </div>
        </div>
        `
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
        if (search.genre==='sale'){
            return items * ((search.price)-(search.price*(search.saleprice/100)));
        }else{
            return items * search.price;
        }
        
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
                            <button class="btn-checkout" type="button" id="checkoutButton" onclick="openCheckoutModal();">Proceed to Checkout</button>
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
        generateTotalforModal();
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
    generateTotalforModal();
    generateOrderDetails();
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
        generateTotalforModal();
        generatePage();
        generateTotal();
        generateOrderDetails();
    }
    
}
generatePage();
generateTotal();

function openCheckoutModal(){
    let address_records= new Array;
        address_records=JSON.parse(sessionStorage.getItem("Address"))?JSON.parse(sessionStorage.getItem("Address")):[];
    if(address_records.length === 0){
        openModal2();
    }else{

        openModal1();
    }
}

function openModal1() {
    var modal = document.getElementById('staticBackdrop1');
    var modalInstance = new bootstrap.Modal(modal);
    modalInstance.show();
  }
  function openModal2() {
    var modal = document.getElementById('staticBackdrop2');
    var modalInstance = new bootstrap.Modal(modal);
    modalInstance.show();
  }
//generate parts of the checkout
function generateOrderDetails(){
    let address_records= new Array;
        address_records=JSON.parse(sessionStorage.getItem("Address"))?JSON.parse(sessionStorage.getItem("Address")):[];
    let cartItems= new Array
        cartItems=JSON.parse(sessionStorage.getItem("Cart"))||[];
    let address=document.getElementById('address-body');
    let items = document.getElementById('items-body');
    let name = sessionStorage.getItem('name');

    if (address_records != 0 ){
        address.innerHTML= `
            <p class="fw-bold">${name}</p>
            <p class="fw-bold">${address_records.phonenumber}</p>
            <p class="fw-bold">${address_records.street}, Brgy. ${address_records.barangay}, ${address_records.city} City, ${address_records.province}, ${address_records.zipcode}</p>
        `
        items.innerHTML= cartItems.map(function(x){
            let search = allBooks.find(function(y){
                return x.id === y.id;
            })
            if (search.genre=== 'sale'){
               return `
            <tr>
                        <td class="col-10">
                            <div class="d-flex flex-wrap">
                                <div>
                                    <img src="../${search.cover}"  alt="">
                                </div>
                                <div class="col-6">
                                    <div class="d-flex flex-wrap">
                                        <div class="d-flex flex-wrap">${search.title}</div>
                                    </div>
                                    <div class="mt-2">${search.author}</div>
                                    <div class="mt-2">&#8369; ${(search.price)-(search.price*(search.saleprice/100))}  <span><del> &#8369; ${search.price}</p>
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
                            <td>
                                <div class="d-flex flex-wrap">
                                    <div>
                                        <img src="../${search.cover}" alt="">
                                    </div>
                                    <div class="col-6">
                                    <div class="d-flex flex-wrap">
                                        <div class="d-flex flex-wrap">${search.title}</div>
                                    </div>
                                        <div class="mt-2">${search.author}</div>
                                        <div class="mt-2">&#8369; ${search.price}</div>
                                    </div>
                                </div>
                            </td>
                            <td class="col-2">
                                x ${x.items}
                            </td>
                        </tr>
                `
            }
        }).join("")


    }

}
generateOrderDetails();

//generate total for modal

function generateTotalforModal(){
    let cartItems= new Array
    cartItems=JSON.parse(sessionStorage.getItem("Cart"))||[];
    let shipping= 200;
    let total= document.getElementById('total-body');
    let totalData = cartItems.map(function (x) {
        let items = x.items;
        let search = allBooks.find(function (y) {
            return y.id === x.id;
        }) || {};
        if (search.genre==='sale'){
            return items * ((search.price)-(search.price*(search.saleprice/100)));
        }else{
            return items * search.price;
        }
        
    })
    let totalPrice= totalData.reduce(function(x, y){
        return x + y ;
    }, 0)
    if(total === null){
        return;
    }else{
       return total.innerHTML =`
       <div class="product-tot d-flex justify-content-between align-items-center mt-3">
            <h6 class="fw-bold">Subtotal</h6>
            <p class="fw-bold">&#8369; ${totalPrice}.00</p>
        </div>
        <div class="shipping-tot d-flex justify-content-between align-items-center mt-3 mb-0">
            <h6 class="fw-bold">Shipping fee</h6>
            <p class="fw-bold">&#8369; ${shipping}.00</p>
        </div>
            <hr style="border:2px solid rgb(115, 78, 10);">
        <div class="payment-tot d-flex justify-content-between align-items-center">
            <h6 class="fw-bold">Order total</h6>
            <p class="fw-bold">&#8369; ${totalPrice + shipping}.00</p>
        </div>
    `
    }
}
generateTotalforModal();
//paypal buttons
  paypal.Buttons({
    createOrder: function(data, actions){
        let address_records= new Array;
            address_records=JSON.parse(sessionStorage.getItem("Address"))?JSON.parse(sessionStorage.getItem("Address")):[];
        let cartItems= new Array
            cartItems=JSON.parse(sessionStorage.getItem("Cart"))||[];
        let shipping= 200;
        let totalData = cartItems.map(function (x) {
                let items = x.items;
                let search = allBooks.find(function (y) {
                    return y.id === x.id;
                }) || {};
                if (search.genre==='sale'){
                    return items * ((search.price)-(search.price*(search.saleprice/100)));
                }else{
                    return items * search.price;
                }
                
            })
            let totalPrice= totalData.reduce(function(x, y){
                return x + y ;
            }, 0)
        return actions.order.create({
            purchase_units:[{
                amount: {
                    value: totalPrice + shipping,
                    // value: '1',
                },
                shipping:{
                    name:{
                        full_name: sessionStorage.getItem("name")
                    },
                    address: {
                        address_line_1: address_records.street+', Brgy. '+address_records.barangay,
                        address_line_2: '',
                        admin_area_2: address_records.city,
                        admin_area_1: address_records.province,
                        postal_code: address_records.zipcode,
                        country_code: 'PH'
                    },
                    phone:{
                        phone_number:{
                            national_number: address_records.phonenumber
                        }
                    }
                }
            }]
        });
    },
    onApprove: function (data, actions){
        let cartItems= new Array
            cartItems=JSON.parse(sessionStorage.getItem("Cart"))||[];
        let address_records= new Array;
            address_records=JSON.parse(sessionStorage.getItem("Address"))?JSON.parse(sessionStorage.getItem("Address")):[];
        let order_records= new Array;
            order_records=JSON.parse(sessionStorage.getItem("Orders"))?JSON.parse(sessionStorage.getItem("Orders")):[];
        let totalOrder_records= new Array;
        totalOrder_records=JSON.parse(sessionStorage.getItem("totalOrders"))?JSON.parse(sessionStorage.getItem("totalOrders")):[];
        let dateTime = new Date();
        let date = dateTime.toLocaleDateString();
        let time = dateTime.toLocaleTimeString();
        let shipping= 200;
        let totalData = cartItems.map(function (x) {
                let items = x.items;
                let search = allBooks.find(function (y) {
                    return y.id === x.id;
                }) || {};
                if (search.genre==='sale'){
                    return items * ((search.price)-(search.price*(search.saleprice/100)));
                }else{
                    return items * search.price;
                }
                
            })
            let totalPrice= totalData.reduce(function(x, y){
                return x + y ;
            }, 0)
        return actions.order.capture().then(function(details){
            let ordersNow= {
                orderId: details.id,
                payerName: sessionStorage.getItem('name'),
                payerEmail: sessionStorage.getItem('email'),
                shippingAddress:{
                    street: address_records.street,
                    barangay: address_records.barangay,
                    city: address_records.city,
                    province: address_records.province,
                    zipcode: address_records.zipcode,
                },
                phone: address_records.phonenumber,
                items: cartItems,
                total: totalPrice + shipping,
                date:{
                    date: date,
                    time: time,
                },
                status: 'TO SHIP',
                payment: 'PAID',
            }
            totalOrder_records.push(ordersNow);
            order_records.push(ordersNow)
            sessionStorage.setItem("totalOrders", JSON.stringify(totalOrder_records))
            sessionStorage.setItem("Orders", JSON.stringify(order_records))
            cartItems=[];
            sessionStorage.setItem('Cart', JSON.stringify(cartItems));
            window.location.href="../users/success.html";
        })
    }
}).render('#paypal-button-container')