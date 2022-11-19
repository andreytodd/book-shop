import { toggleCart, updatePopupCart} from "./helperFunctions.mjs"
import { createBookCard } from "./createHTMLFunctions.mjs"

// Header

const header = document.createElement('header')
header.id = "header"
header.innerHTML = `
    <div class="site-logo">
        <div class="logo-header">
            <img src="../../assets/logos/fox-logo.png" alt="fox logo">
        </div>
        <div class="header-heading">
            <h1>Foxbook</h1>
            <p>Your perfext book shop!</p>
        </div>
    </div>
    <div class="shopping-cart">
        <i class="fa fa-shopping-cart fa-4x" id="cart-item"></i>
        <div class="cart-popup hidden"></div>
    </div>
`

/* Fetch data */


fetch('../../books/books.json')
    .then(response => {
        return response.json();
    })
    .then(data => {
        data.forEach(book => {
            createBookCard(book)
        })
    })
    .then(updatePopupCart)


// Books block

const booksBlock = document.createElement('div')
booksBlock.classList.add('books-block')

// Page rendering

let fragment = new DocumentFragment();
fragment.prepend(header, booksBlock)

document.body.append(fragment)

// Add event listeners

document.getElementById('cart-item').addEventListener('click', toggleCart)
document.getElementById('cart-item').addEventListener('click', updatePopupCart)

export default booksBlock;








