
     
function addCart(id){
    let cartItems= new Array
    cartItems=JSON.parse(sessionStorage.getItem("Cart"))||[];
    let search = cartItems.find(function(x){
        return x.id === id
    })
    if (search){
        search.items += 1;
        sessionStorage.setItem("Cart",JSON.stringify(cartItems));
        calculateCart()
    }else {
        cartItems.push({
            'id': id,
            "items": 1,
        })
        sessionStorage.setItem("Cart",JSON.stringify(cartItems));
        calculateCart()
    }
}

function calculateCart(){
    let cartItems= new Array
    cartItems=JSON.parse(sessionStorage.getItem("Cart"))||[];
    let cartIcon = document.getElementById('cartCounter');
    let total=cartItems.map(function(x){
        return x.items;
        })
        .reduce(function(x, y){
        return x+y;
        }, 0)
        cartIcon.innerHTML= total;
}
calculateCart();