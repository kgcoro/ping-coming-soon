const inputEmail = document.querySelector('#email');
const msgValidation = document.querySelector('.email-validation')
const btnAction = document.querySelector('.email-action')
const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

btnAction.addEventListener('click', validEmail);

function validEmail() {
    if (document.body.clientWidth > 600) {
        if (!inputEmail.value.match(emailRegEx) || inputEmail.value == "") {
            msgValidation.innerText = "Please provided a valid email address";
            inputEmail.style.borderColor = "hsl(354, 100%, 66%)"
        } else {
            msgValidation.innerText = ""
            inputEmail.style.borderColor = "hsl(0, 0%, 59%)"
            inputEmail.style.marginBottom = "0"
        }
    } else {
        if (!inputEmail.value.match(emailRegEx) || inputEmail.value == "") {
            msgValidation.innerText = "Please provided a valid email address";
            inputEmail.style.borderColor = "hsl(354, 100%, 66%)"
            inputEmail.style.marginBottom = "2rem"
        } else {
            msgValidation.innerText = ""
            inputEmail.style.borderColor = "hsl(0, 0%, 59%)"
            inputEmail.style.marginBottom = "0"
        }
    }
}

