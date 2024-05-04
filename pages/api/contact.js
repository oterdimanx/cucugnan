function formValid(body) {
    return body.name && body.email && body.phone && body.message
}

export default async function handler(req, res, next) {
    const body = JSON.parse(JSON.stringify(req.body));

    if(!formValid(body)) {
        res.status(422).end();
        return;
    }

    try {
        if (req.body === null) {
            return {
                statusCode: 400,
                headers: {
                    'Access-Control-Allow-Headers': 'Content-Type',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'OPTIONS,POST'
                },
                body: JSON.stringify("Payload required"),
            };
        }

        const params    = body
        const name      = params.name || 'badNameFormat'
        const email     = params.email || 'badEmailFormat'
        const phone     = params.phone || 'badPhoneFormat'
        const message   = params.message || 'badMessageFormat'

        const Mailgun   = require('mailgun.js')
        const formData  = require('form-data')
        const domain    = process.env.REACT_APP_CUCUGNAN_EMAIL_DOMAIN
        const fromEmail = '7 saveurs de Cucugnan Contact <contact@7saveursdecucugnan.fr>'
        const toEmails  = ['contact@7saveursdecucugnan.fr']
        const mailgun   = new Mailgun(formData)

        const mg = mailgun.client({
            username: 'api',
            key: process.env.REACT_APP_CUCUGNAN_EMAIL_KEY || '',
            public_key: process.env.REACT_APP_CUCUGNAN_EMAIL_PUBKEY,
            timeout: 60000
        });

        const sendResult = await mg.messages.create(domain, {
            from: fromEmail,
            to: toEmails,
            subject: 'Formulaire de Contact Les 7 saveurs de Cucugnan.fr',
            text: '7saveursdecucugnan.fr :' +
                  'Nom : ' + name + ' | ' +
                  'Tel : ' + phone + ' | ' +
                  'Email : ' + email + ' | ' +
                  'Message : ' + message + ' | ' +
                  'Message en provenance du formulaire de contact 7saveursdecucugnan.fr',
            html: '<html>' +
                '<head>' +
                '</head>' +
                '<body>' +
                '<strong>Nom : ' + name + '</strong><br><br>' +
                '<strong>Tel : ' + phone + '</strong><br><br>' +
                '<strong>Email : ' + email + '</strong><br><br>' +
                '<strong>Message : ' + message + '</strong><br><br><br><br>' +
                '<strong><i>Message en provenance du formulaire de contact 7saveursdecucugnan.fr</i></strong>' +
                '</body>' +
                '</html>',
        });

        //console.log(sendResult.message);

    } catch (error) {
        console.log(error);
    }

    res.send(200);
}