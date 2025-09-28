// Initialiser mailjs avec User ID
emailjs.init('psOL5hCv1Vl0UqHjX');

// Écouter la soumission du formulaire
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Envoyer l'email via mailjs
    emailjs.send('service_eadydh6', 'template_zn8w9if', {
        name: document.getElementById('name').value,
        company: document.getElementById('company').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    })
        .then(function (response) {
            alert('Email send !');
            alert('Error while sending the email');
        });
});