import { dbank } from '../../declarations/dbank/index'
const form = document.querySelector('form')
const funds = document.querySelector('#value')
const btn = document.querySelector('#submit-btn')
const topUpAmount = document.querySelector('#input-amount')
const withdrawAmount = document.querySelector('#withdrawal-amount')


form.addEventListener('submit', async (e) => {
e.preventDefault()
btn.setAttribute('disabled', true)
if(topUpAmount.value.length > 0) {
await dbank.topUp(parseFloat(topUpAmount.value))
} else if (withdrawAmount.value.length > 0) {
await dbank.deduct(parseFloat(withdrawAmount.value))
} else {
    return;
}
await updateBlance()
btn.removeAttribute('disabled')
})


async function updateBlance() {
    const currentFunds = await dbank.checkBalance();
    funds.innerHTML = parseFloat(currentFunds.toFixed(2))
    topUpAmount.value =  ""
    withdrawAmount.value = ""
}
updateBlance()