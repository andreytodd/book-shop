
import updatePopupCart from "./cart.mjs"
import { toggleCart } from "./cart.mjs"
import { updateCart } from "./btnFunctions.mjs"

// Header

const header = document.createElement('header')
header.id = "header"
header.innerHTML = `
    <div>
        <img class="header-logo" src="../../assets/logos/fox-logo.png" alt="fox logo">
    </div>
    <div>
        <i class="fa fa-shopping-cart fa-4x" id="cart-item"></i>
        <div class="cart-popup hidden">

        </div>
        <button id="clear-button" onClick="window.location.reload()">Clear cart</button>
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

function clearStorage() {
    localStorage.totalPrice = 0
    localStorage.cart = []
    localStorage.count = 0
}

document.getElementById('cart-item').addEventListener('click', toggleCart)
document.getElementById('cart-item').addEventListener('click', updatePopupCart)

document.getElementById('clear-button').addEventListener('click', updateCart)
document.getElementById('clear-button').addEventListener('click', clearStorage)
document.getElementById('clear-button').addEventListener('click', window.location.reload)




export default booksBlock;








