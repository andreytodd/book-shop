export function toggleHidden(btn) {
    btn.classList.toggle('hidden')
}

export function updateCart() {
    document.getElementById("sum").textContent = `${localStorage.totalPrice} $`;
    document.getElementById("count").textContent = localStorage.count;
}

export function updateCartStorage(btn) {
    if (!localStorage.cart) {
        localStorage.cart = JSON.stringify([btn.id]);
      } else {
        let cartItems = JSON.parse(localStorage.cart)
        cartItems.push(btn.id)
        localStorage.cart = JSON.stringify(cartItems)
        console.log(localStorage.cart)
      }
}

export function updateCartPrice(book) {
    if (!localStorage.totalPrice) {
        localStorage.totalPrice = book.price
    } else {
        localStorage.totalPrice = Number(localStorage.totalPrice)+ book.price
        console.log(localStorage.totalPrice)
    }
}

export function updateCartCount() {
    if (!localStorage.count) {
        localStorage.count = 1
    } else {
        localStorage.count = Number(localStorage.count)+ 1
    }
}



export function addBtnListener(btn, book) {
    btn.addEventListener('click', function handleClick() {
        updateCartStorage(btn)
        updateCartPrice(book)
        updateCartCount()
        updateCart()
})
}







