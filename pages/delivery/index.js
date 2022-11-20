/* Add total amount information */

let totalAmount = document.querySelector('.delivery-total-amount')
totalAmount.innerHTML = `Total amount: ${localStorage.totalPrice} $`

/* Set minimal delivery date */

let ddate = document.getElementById('ddate')
var day = new Date();
var nextDay = new Date(day);
nextDay.setDate(day.getDate() + 1);
let dd = nextDay.getDate()
let mm = nextDay.getMonth() + 1
let yyyy = nextDay.getFullYear()
let tomorrow = yyyy + '-' + mm + '-' + dd

ddate.setAttribute('min', tomorrow)

/* Submit button validation */

const submitBtn = document.getElementById('form-submit')
let inputs = document.querySelectorAll("[required]")

inputs.forEach(input => {
    input.onkeyup = () => {
        if (!input.checkValidity()) {
            submitBtn.style.border = '1px solid red'
        } else {
            submitBtn.style.border = '1px solid black'
        }
    }
})
