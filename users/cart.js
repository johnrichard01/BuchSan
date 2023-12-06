let removeCart = document.getElementsByClassName('btn-delete');
console.log(removeCart);

for (let i = 0; i < removeCart.length; i++ ){
    let button = removeCart[i];
    button.addEventListener('click', function(event){
        let buttonClicked = event.target;
        buttonClicked.parentElement.parentElement.parentElement.remove()
    })
}