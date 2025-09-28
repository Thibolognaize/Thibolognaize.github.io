emailjs.init('psOL5hCv1Vl0UqHjX');

document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        alert('Veuillez remplir tous les champs.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Veuillez saisir une adresse email valide.');
        return;
    }

    grecaptcha.ready(function () {
        grecaptcha.execute('6LdI_9crAAAAAHQMPwCmzCpHBPDMtg5rcHkTUo7t', { action: 'submit' }).then(function (token) {
            // Envoyer l'email via mailjs avec le token reCAPTCHA
            emailjs.send('service_eadydh6', 'template_zn8w9if', {
                name: name,
                email: email,
                message: message,
                'g-recaptcha-response': token
            })
                .then(function (response) {
                    console.log('Email envoyé avec succès !', response);
                    alert('Email envoyé avec succès !');
                }, function (error) {
                    console.error('Erreur lors de l\'envoi de l\'email :', error);
                    alert('Erreur lors de l\'envoi de l\'email.');
                });
        });
    });
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}