import booksBlock from './index.mjs'

let fragment = new DocumentFragment();
let id = 1

function toggleHidden(btn) {
    btn.classList.toggle('hidden')
}

let cart = []

function updateCart(price, count) {
    document.getElementById("sum").textContent = price;
    document.getElementById("count").textContent = count;
}

function addBtnListener(btn, item) {
    btn.addEventListener('click', function handleClick() {
        price += item.price
        count += 1
        updateCart(price, count)
        cart.push(item.id)
})
}

let price = 0
let count = 0

fetch('../../books/books.json')
    .then(response => {
        return response.json();
    })
    .then(data => {
        data.forEach(book => {
            const bookCard = document.createElement("div")
            bookCard.classList.add('book-card')
            bookCard.setAttribute('data-id', id)

            const bookAuthor = document.createElement('p')
            bookAuthor.textContent = `${book.author}: ${book.title}`

            const bookPrice = document.createElement('p')
            bookPrice.innerHTML = `Price: ${book.price} $`

            const bookTextinfo = document.createElement('div')
            bookTextinfo.classList.add('books-info')
            bookTextinfo.append(bookAuthor, bookPrice)

            const infoBtn = document.createElement('button')
            infoBtn.classList.add('button', 'info')
            infoBtn.textContent = 'See more'
            infoBtn.addEventListener('click', function handleClick() {
                toggleHidden(popupDescription)
            })

            const addBtn = document.createElement('button')
            addBtn.id = id
            addBtn.textContent = 'Add to cart'
            addBtnListener(addBtn, book)

            const buttonsDiv = document.createElement('div')
            buttonsDiv.classList.add('books-buttons')
            buttonsDiv.append(infoBtn, addBtn)

            const image = document.createElement('img')
            image.alt = `image of the book by ${book.author}`
            image.src = `${book.imageLink}`

            const bookImg = document.createElement('div')
            bookImg.classList.add('book-image')
            bookImg.append(image)

            const closeBtn = document.createElement('button')
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
        })
    });
