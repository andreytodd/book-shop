
// Header
import updatePopupCart from "../../cart.mjs"
import { toggleCart } from "../../cart.mjs"

const header = document.createElement('header')
header.id = "header"
header.innerHTML = `
    <div>
        <img class="header-logo" src="../../assets/logos/fox-logo.png" alt="fox logo">
    </div>
    <div>
        <i class="fa fa-shopping-cart fa-4x" id="cart-item"></i>
        <div class="cart-popup hidden"></div>
    </div>
    <div id="cart-info">
        <p>
            Books ordered:
            <span id="count">${localStorage.count === undefined ? 0 : localStorage.count}</span>,
            Price:
            <span id="sum">${localStorage.totalPrice === undefined ? 0 : localStorage.totalPrice} $</span>
        </p>
    </div>
`


// Books block

const booksBlock = document.createElement('div')
booksBlock.classList.add('books-block')

// Page rendering

document.body.prepend(header, booksBlock)

// Popup shopping cart



function removeFromCart() {
    let index = JSON.parse(localStorage.cart).indexOf("1");
    let cartItems = JSON.parse(localStorage.cart)
    if (index > -1) {
        cartItems.splice(index, 1);
    }
    localStorage.cart = JSON.stringify(cartItems)
}


document.getElementById('cart-item').addEventListener('click', toggleCart)
document.getElementById('cart-item').addEventListener('click', updatePopupCart)
window.addEventListener('load', updatePopupCart)





export default booksBlock;








