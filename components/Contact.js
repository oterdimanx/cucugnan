import logoImg from '../public/golden-logo-text-transparent-800-800.png'
export default function Contact() {

    async function handleSubmit(e){
        e.preventDefault();
        const tagRegex     = /(<([^>]+)>)/ig
        const name         = document.getElementById('yourname');
        const email        = document.getElementById('email');
        const phone        = document.getElementById('phone');
        const message      = document.getElementById('message');
        const emailRegex   = new RegExp(/^\b[a-zA-Z0-9._%+-]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'm');
        const isValidEmail = emailRegex.test(email.value);
        let arrayMsgs      = [];
        let error          = true;
        let msg            = '';

        if(!isValidEmail || email.validity.typeMismatch || '' === email.value.trim()) {
            msg = 'Le champ email semble invalide, veuillez entrer une adresse mail valide.';
            arrayMsgs.push(msg);
            error = true;
            e.preventDefault();
            e.stopPropagation();
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
            e.preventDefault();
            e.stopPropagation();
            document.getElementById('nameError').style.cssText = 'display : block; visibility : visible;';
            msg = '';
        } else {
            error = false;
            document.getElementById('nameError').style.cssText = 'display : none; visibility : hidden;';
        }

        if (phone.validity.typeMismatch || phone.validity.patternMismatch || '' === phone.value.trim()) {
            e.preventDefault();
            e.stopPropagation();
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
            e.preventDefault();
            e.stopPropagation();
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

        var nameClear        = name.value;
        const strippedName   = nameClear.toString().replace(tagRegex, '');
        var phoneClear       = phone.value;
        const strippedPhone  = phoneClear.toString().replace(tagRegex, '');
        var msgClear         = message.value;
        const strippedMsg    = msgClear.toString().replace(tagRegex, '');

        if( !error && 0 === arrayMsgs.length) {

            try {
                const response = await fetch('/api/contact', {
                    method: "post",
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Credentials': true
                    },
                    body: JSON.stringify(
                        {
                            'name':strippedName,
                            'email':email.value,
                            'phone':strippedPhone,
                            'message':strippedMsg
                        }
                    )
                });
                if(!response.ok) {
                    throw new Error(`Invalid response: ${response.status}`);
                }
                document.getElementById('submitButton').className = 'disabled';
                //submitButton.style.cssText = 'display : none; visibility : hidden;';
                document.getElementById('submitSuccessMessage').className = 'form-success';
                alert('Thanks for contacting us, we will get back to you soon!');
            } catch (err) {
                //console.log(err);
                alert('Form could not be submitted, please try again later');
            }

        } /*else {
            console.log('ERRORS');
        }*/

        arrayMsgs = [];
    }

    return (
        <section className="py-5 bg-dark">
        <div className="container px-5">
            <div className="bg-light rounded-3 py-5 px-4 px-md-5 mb-5">
                <div className="text-center mb-5">
                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-envelope"></i></div>
                    <h1 className="fw-bolder">Contactez-nous</h1>
                    <p className="lead fw-normal text-muted mb-0">Nous serons ravis de vous répondre.</p>
                </div>
                <div className="row gx-5 justify-content-center">
                    <div className="col-lg-8 col-xl-6">
                        <form id="contactForm" data-sb-form-api-token="API_TOKEN" onSubmit={handleSubmit}>
                            <div className="form-floating mb-3">
                                <input className="form-control" id="yourname" type="text" placeholder="Inscrivez votre nom..." data-sb-validations="required" size="150" />
                                <label htmlFor="yourname">Nom Complet</label>
                                <div className="invalid-feedback" data-sb-feedback="yourname:required">Le nom est requis.</div>
                                <div className="invalid-feedback" data-sb-feedback="yourname:yourname" id="nameError">Le champ nom n'est pas valide.</div>
                            </div>
                            <div className="form-floating mb-3">
                                <input className="form-control" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" />
                                <label htmlFor="email">Adresse Email</label>
                                <div className="invalid-feedback" data-sb-feedback="email:required">L'email est requis.</div>
                                <div className="invalid-feedback" data-sb-feedback="email:email" id="emailError">Le champ email n'est pas valide.</div>
                            </div>
                            <div className="form-floating mb-3">
                                <input className="form-control" id="phone" type="tel" placeholder="(123) 456-7890" data-sb-validations="required" pattern="^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$" />
                                <label htmlFor="phone">Téléphone</label>
                                <div className="invalid-feedback" data-sb-feedback="phone:required">Le téléphone est requis.</div>
                                <div className="invalid-feedback" data-sb-feedback="phone:phone" id="phoneError">Le champ téléphone n'est pas valide.</div>

                            </div>
                            <div className="form-floating mb-3">
                                <textarea className="form-control" id="message" type="text" placeholder="Inscrivez votre message ici..." data-sb-validations="required" minLength="15" maxLength="850"></textarea>
                                <label htmlFor="message">Message</label>
                                <div className="invalid-feedback" data-sb-feedback="message:required">Le message est requis.</div>
                                <div className="invalid-feedback" data-sb-feedback="message:message" id="messageError">Le champ message n'est pas valide.</div>
                            </div>
                            <div className="d-none" id="submitSuccessMessage">
                                <div className="text-center mb-3">
                                    <div className="fw-bolder">Le message a bien été envoyé !</div>
                                </div>
                            </div>
                            <div className="d-none" id="submitErrorMessage">
                                <div className="text-center text-danger mb-3">
                                    Une erreur est survenue lors de l'envoi du message
                                </div>
                            </div>
                            <div className="d-grid">
                                <button className="btn btn-primary btn-lg" id="submitButton" type="submit">Envoyer</button>
                            </div>
                        </form>
                    </div>
                </div>
                <script src="js/scripts.js"></script>
            </div>
            <div className="row gx-5 row-cols-2 row-cols-lg-4 py-5 justify-content-center">
                <div className="col">
                    <div className="text-white rounded-3 mb-3">
                        <img className="img-fluid rounded-3 my-5" src={logoImg.src} alt="Logo 800 image" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
  }