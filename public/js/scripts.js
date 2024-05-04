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

        if(!isValidEmail || email.validity.typeMismatch || '' === email.value.trim()) { // || email.validity.patternMismatch
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
/*


    form.addEventListener('submit', (event) => {


        const isValidEmail = emailRegex.test(email.value);

        if (name.value.length < 3 || name.value.length > 150) {
            msg = 'fr' === lang ? 'Le champ nom doit avoir entre 3 et 150 caractères.' : 'the name field must contain between 3 and 150 characters.';
            arrayMsgs.push(msg);
            error = true;
            event.preventDefault();
            document.getElementById('nameError').style.cssText = 'display : block; visibility : visible;';
            msg = '';
        } else {
            error = false;
            document.getElementById('nameError').style.cssText = 'display : none; visibility : hidden;';
        }

        if (reason.value.length < 3 || reason.value.length > 150) {
            msg = 'fr' === lang ? 'Le champ raison sociale doit avoir entre 3 et 150 caractères.' : 'the Company Name field must contain between 3 and 150 characters.';
            arrayMsgs.push(msg);
            error = true;
            event.preventDefault();
            document.getElementById('reasonError').style.cssText = 'display : block; visibility : visible;';
            msg = '';
        } else {
            error = false;
            document.getElementById('reasonError').style.cssText = 'display : none; visibility : hidden;';
        }

        if(!isValidEmail || email.validity.typeMismatch || '' === email.value.trim()) { // || email.validity.patternMismatch
            msg = 'fr' === lang ? 'Le champ email semble invalide, veuillez entrer une adresse mail valide.' : 'the Email field doesn\'t appear to be valid. Please provide a valid email address.';
            arrayMsgs.push(msg);
            error = true;
            event.preventDefault();
            document.getElementById('emailError').style.cssText = 'display : block; visibility : visible;';
            msg = '';
        } else {
            error = false;
            document.getElementById('emailError').style.cssText = 'display : none; visibility : hidden;';
        }

        if (phone.validity.typeMismatch || phone.validity.patternMismatch || '' === phone.value.trim()) {
            event.preventDefault();
            msg = 'fr' === lang ? 'Le format du champ téléphone est incorrect.' : 'The Phone field is not valid.';
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
            msg = 'fr' === lang ? 'Le champ message doit comporter au minimum 15 caractères (max 850).' : 'The Message field must contain at least 15 characters (850 max).';
            arrayMsgs.push(msg);
            error = true;
            document.getElementById('messageError').style.cssText = 'display : block; visibility : visible;';
            msg = '';
        } else {
            message.setCustomValidity('');
            error = false;
            document.getElementById('messageError').style.cssText = 'display : none; visibility : hidden;';
        }

        if('' !== complement.value) {
            error = true;
            event.preventDefault();
        }
        var nameClear        = name.value;
        const strippedName   = nameClear.toString().replace(tagRegex, '');
        var reasonClear      = reason.value;
        const strippedReason = reasonClear.toString().replace(tagRegex, '');
        var msgClear         = message.value;
        const strippedMsg    = msgClear.toString().replace(tagRegex, '');

        if( !error && 0 === arrayMsgs.length) {

            fetch(functionLocation, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Credentials': true
                },
                body: JSON.stringify(
                    {
                        'name':strippedName,
                        'reason':strippedReason,
                        'phone':phone.value,
                        'email':email.value,
                        'message':strippedMsg
                    }
                )
            })
            .then(res => {
                if('OK' === res.statusText){
                    document.getElementById('form-wrapper').className = 'd-none';
                    submitButton.style.cssText = 'display : none; visibility : hidden;';
                    document.getElementById('submitSuccessMessage').className = 'form-success';
                }
            })
            .then(data => {
                console.log('Success: ', data);
            });

            console.log('success !!!');
        } else {
            console.log('ERRORS');
        }

        arrayMsgs = [];
        event.preventDefault();
    });
    */
});
