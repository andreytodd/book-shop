import { toggleCart, updatePopupCart} from "./helperFunctions.mjs"
import { createBookCard, createHeader, createBooksBlock, createFooter } from "./createHTMLFunctions.mjs"

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

/* Footer */

const footer = createFooter()

// Page rendering

let fragment = new DocumentFragment();
fragment.prepend(header, booksBlock, footer)

document.body.append(fragment)

// Add event listeners

document.querySelector('.fa-shopping-cart').addEventListener('click', toggleCart)
document.querySelector('.fa-shopping-cart').addEventListener('click', updatePopupCart)

export default booksBlock;








