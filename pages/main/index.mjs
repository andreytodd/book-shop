// Header

const header = document.createElement('header')
header.id = "header"
header.innerHTML = `
    <div>
        <img class="header-logo" src="../../assets/logos/fox-logo.png" alt="fox logo">
    </div>
    <p>
        Cart items:
        <span id="count">0</span>,
        Price:
        <span id="sum">0</span>
    </p>
`

// Books block

const booksBlock = document.createElement('div')
booksBlock.classList.add('books-block')

document.body.prepend(header, booksBlock)

export default booksBlock;







