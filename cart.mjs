export function toggleCart() {
    const shoppingCart = document.querySelector('.cart-popup')
    shoppingCart.classList.toggle('hidden')
}

function arrToObj(arr) {
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

function updatePopupCart() {
    let shoppingCart = document.querySelector('.cart-popup')
    let cartTotal = arrToObj(JSON.parse(localStorage.cart))
    shoppingCart.innerHTML = ''
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
                    <p>Total amount: ${book.dataset.price * value}</p>
                </div>
                <button class="remove-btn-cart" onclick='somefn()'>Remove from cart</button>
            </div>
        `)

    }
}

// export function logfn() {
//     console.log('hi from logfn')
// }

console.log(document.querySelectorAll('.remove-btn-cart'))

export default updatePopupCart;
