import { toggleCart, updatePopupCart} from "./helperFunctions.mjs"
import { createBookCard, createHeader, createBooksBlock } from "./createHTMLFunctions.mjs"

// Header

const header = createHeader()

/* Books block */

const booksBlock = createBooksBlock()

/* Fetch data and create book cards */

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

// Page rendering

let fragment = new DocumentFragment();
fragment.prepend(header, booksBlock)

document.body.append(fragment)

// Add event listeners

document.getElementById('cart-item').addEventListener('click', toggleCart)
document.getElementById('cart-item').addEventListener('click', updatePopupCart)

export default booksBlock;








