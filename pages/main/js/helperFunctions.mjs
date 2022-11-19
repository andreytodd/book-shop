import { createBookInCart, createCartSummary } from "./createHTMLFunctions.mjs";

/* Button functions */

export function toggleHidden(btn) {
    btn.classList.toggle('hidden')
}

function updateCartStorage(btn) {
    if (!localStorage.cart) {
        localStorage.cart = JSON.stringify([btn.id]);
      } else {
        let cartItems = JSON.parse(localStorage.cart)
        cartItems.push(btn.id)
        localStorage.cart = JSON.stringify(cartItems)
      }
}

function updateCartCount() {
    if (!localStorage.count) {
        localStorage.count = 1
    } else {
        localStorage.count = Number(localStorage.count)+ 1
    }
}

export function addBtnListener(btn) {
    btn.addEventListener('click', function handleClick() {
        updateCartStorage(btn)
        updateCartCount()
        updatePopupCart()
        unhideCart()
})
}

/* Storage functions */

export function clearStorage() {
    localStorage.totalPrice = 0
    localStorage.cart = []
    localStorage.count = 0
}

export function arrToObj(arr) {
    let obj = {}
    arr.forEach(nr => {
        if (!obj[nr]) {
            obj[nr] = 1
        } else {
            obj[nr] += 1
        }
    })
    return obj
}

export function getShoppingCart() {
    if (!localStorage.cart) {
        localStorage.cart = JSON.stringify([]);
    }
    let cart = arrToObj(JSON.parse(localStorage.cart))
    return cart
}

/* Shopping cart functions */

export function toggleCart() {
    const shoppingCart = document.querySelector('.cart-popup')
    shoppingCart.classList.toggle('hidden')
}

function unhideCart() {
    const shoppingCart = document.querySelector('.cart-popup')
    shoppingCart.classList.remove('hidden')
}

function removeItemFromCart(btn) {
    let cartItems = JSON.parse(localStorage.cart)
    const index = cartItems.indexOf(btn.dataset.id);
    if (index > -1) {
        cartItems.splice(index, 1);
    }
    localStorage.cart = JSON.stringify(cartItems)
    updatePopupCart()
}

function updateTotalSum() {
    let prices = document.querySelectorAll(".total-book-price");
    let total = 0;
    prices.forEach(price => {
        total += Number(price.innerHTML.replace( /^\D+/g, ''))
    })
    localStorage.totalPrice = total
}

function addRemoveListeners() {
    let buttons = document.querySelectorAll(".remove-cart-item")
    buttons.forEach(button => {
        button.addEventListener('click', function handleClick() {
            removeItemFromCart(button)
        })
    })
}

export function updatePopupCart() {
    let shoppingCart = document.querySelector('.cart-popup')
    shoppingCart.innerHTML = ''
    createBookInCart()
    addRemoveListeners()
    updateTotalSum()
    createCartSummary()
}







