const scriptURL = 'https://script.google.com/macros/s/AKfycbxy997sPmykPZ0ZVITZzHp-HCmFPxZHcdqy2TDOnOqlVy1s2E-TRtLgtu1zChFhlxTcjw/exec'

const form = document.forms['trip']

form.addEventListener('submit',e => {
    e.preventDefault()
    fetch(scriptURL, {method: 'POST', body: new FormData(form)})
    .then(response => alert("Thank you! Yor form is submitted Successfully."))
    .then(() => { window.location.reload(); })
    .catch(error => console.error('Error!', error.message))
})