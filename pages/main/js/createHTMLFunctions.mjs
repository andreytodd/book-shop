import { getShoppingCart } from "./helperFunctions.mjs"
import booksBlock from './index.mjs'
import {addBtnListener, toggleHidden } from './helperFunctions.mjs'

/* Create header */

export function createHeader() {
    const header = document.createElement('header')
    header.id = "header"
    header.innerHTML = `
    <div class="site-logo">
        <div class="logo-header">
            <img src="../../assets/logos/fox-logo.png" alt="fox logo">
        </div>
        <div class="header-heading">
            <h1>Foxbook</h1>
            <p>Your perfect book shop!</p>
        </div>
    </div>
    <div class="shopping-cart">
        <div id="cart-item">
            <i class="fa fa-shopping-cart fa-4x" ></i>
        </div>
        <div class="cart-popup hidden"></div>
    </div>
`
    return header
}

export function createBooksBlock() {
    const booksBlock = document.createElement('div')
    booksBlock.classList.add('books-block')
    return booksBlock
}

/* Create book card in body */

let fragment = new DocumentFragment();
let id = 1

export function createBookCard(book) {
    const bookCard = document.createElement("div")
    bookCard.classList.add('book-card')
    bookCard.setAttribute('data-id', id)
    bookCard.setAttribute('data-price', book.price)
    bookCard.setAttribute('data-author', book.author)
    bookCard.setAttribute('data-title', book.title)
    bookCard.setAttribute('data-imagelink', book.imageLink)

    const bookAuthor = document.createElement('p')
    bookAuthor.textContent = `${book.author}: ${book.title}`

    const bookPrice = document.createElement('p')
    bookPrice.classList.add('bold')
    bookPrice.innerHTML = `Price: ${book.price} $`

    const bookTextinfo = document.createElement('div')
    bookTextinfo.classList.add('books-info')
    bookTextinfo.append(bookAuthor, bookPrice)

    const infoBtn = document.createElement('div')
    infoBtn.classList.add('button', 'info')
    infoBtn.textContent = 'About'
    infoBtn.addEventListener('click', function handleClick() {
        toggleHidden(popupDescription)
    })

    const addBtn = document.createElement('div')
    addBtn.id = id
    addBtn.classList.add('addBtn')
    addBtn.insertAdjacentHTML("afterbegin", '<i class="fa fa-shopping-cart">')
    addBtnListener(addBtn)

    const buttonsDiv = document.createElement('div')
    buttonsDiv.classList.add('books-buttons')
    buttonsDiv.append(infoBtn, addBtn)

    const image = document.createElement('img')
    image.alt = `image of the book by ${book.author}`
    image.src = `${book.imageLink}`

    const bookImg = document.createElement('div')
    bookImg.classList.add('book-image')
    bookImg.append(image)

    const closeBtn = document.createElement('div')
    closeBtn.classList.add('info-close-btn')
    closeBtn.textContent = 'Close'
    closeBtn.addEventListener('click', function handleClick() {
        toggleHidden(popupDescription)
    })

    const popupDescription = document.createElement('div')
    popupDescription.classList.add('book-description', 'hidden')
    popupDescription.insertAdjacentHTML('afterbegin', `
        <h3>${book.title}</h3>
        <p>${book.description}</p>
    `)
    popupDescription.append(closeBtn)

    fragment.append(bookImg, bookTextinfo, buttonsDiv, popupDescription)

    bookCard.append(fragment)
    booksBlock.append(bookCard)
    id++
}

/* Create book card in shopping cart */

export function createBookInCart() {
    let cartTotal = getShoppingCart()
    let shoppingCart = document.querySelector('.cart-popup')
    for (const [key, value] of Object.entries(cartTotal)) {
        let book = document.querySelector(`[data-id="${key}"]`)
        shoppingCart.insertAdjacentHTML("afterbegin", `
            <div class='cartBookCard'>
                <div class="cartBookImg">
                    <img src="${book.dataset.imagelink}">
                </div>
                <div class="cartBookDescription">
                    <p>${book.dataset.author}</p>
                    <p>${book.dataset.title}</p>
                    <p>Pcs: ${value}</p>
                    <p class="total-book-price">Total amount: ${book.dataset.price * value}</p>
                </div>
                <p class="remove-cart-item" data-id="${key}">&#x2715</p>
            </div>
        `)
    }
}

export function createCartSummary() {
    let shoppingCart = document.querySelector('.cart-popup')
    if (!shoppingCart.innerHTML) {
        shoppingCart.insertAdjacentHTML("afterbegin", `<h3>Shopping cart empty`)
    } else {
        shoppingCart.insertAdjacentHTML("beforeend", `
        <hr>
        <div class="order-summary">
            <div class="order-btn"><a href="../delivery/index.html">Order</a></div>
            <p>Total: ${localStorage.totalPrice} $</p>
        </div>

    `)}
}

/* Create footer */

export function createFooter() {
    const footer = document.createElement('footer')
    footer.id = "footer"
    footer.innerHTML = `

`
    return footer
}