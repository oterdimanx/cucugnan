window.addEventListener('DOMContentLoaded', event => {

    const form         = document.querySelector('form');
    const tagRegex     = /(<([^>]+)>)/ig
    const submitButton = document.getElementById('submitButton');
    const name         = document.getElementById('yourname');
    const email        = document.getElementById('email');
    const phone        = document.getElementById('phone');
    const message      = document.getElementById('message');
    const emailRegex   = new RegExp(/^\b[a-zA-Z0-9._%+-]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'm');
    let arrayMsgs      = [];
    let error          = true;
    let msg            = '';

    form.addEventListener('submit', (event) => {

        let isValidEmail = emailRegex.test(email.value);

        if(!isValidEmail || email.validity.typeMismatch || '' === email.value.trim()) {
            msg = 'Le champ email semble invalide, veuillez entrer une adresse mail valide.';
            arrayMsgs.push(msg);
            error = true;
            event.preventDefault();
            event.stopPropagation();
            document.getElementById('emailError').style.cssText = 'display : block; visibility : visible;';
            msg = '';
        } else {
            error = false;
            document.getElementById('emailError').style.cssText = 'display : none; visibility : hidden;';
        }

        if (name.value.length < 3 || name.value.length > 150) {
            msg = 'Le champ nom doit avoir entre 3 et 150 caractères.';
            arrayMsgs.push(msg);
            error = true;
            event.preventDefault();
            event.stopPropagation();
            document.getElementById('nameError').style.cssText = 'display : block; visibility : visible;';
            msg = '';
        } else {
            error = false;
            document.getElementById('nameError').style.cssText = 'display : none; visibility : hidden;';
        }

        if (phone.validity.typeMismatch || phone.validity.patternMismatch || '' === phone.value.trim()) {
            event.preventDefault();
            event.stopPropagation();
            msg = 'Le format du champ téléphone est incorrect.';
            arrayMsgs.push(msg);
            error = true;
            document.getElementById('phoneError').style.cssText = 'display : block; visibility : visible;';
            msg = '';
        } else {
            phone.setCustomValidity('');
            error = false;
            document.getElementById('phoneError').style.cssText = 'display : none; visibility : hidden;';
        }

        if (message.validity.typeMismatch || message.validity.patternMismatch || '' === message.value.trim() || message.value.length < 15 || message.value.length > 850) {
            event.preventDefault();
            event.stopPropagation();
            msg = 'Le champ message doit comporter au minimum 15 caractères (max 850).';
            arrayMsgs.push(msg);
            error = true;
            document.getElementById('messageError').style.cssText = 'display : block; visibility : visible;';
            msg = '';
        } else {
            message.setCustomValidity('');
            error = false;
            document.getElementById('messageError').style.cssText = 'display : none; visibility : hidden;';
        }

        return false;
    });
});
