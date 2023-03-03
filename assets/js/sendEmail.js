function sendMail(contactForm) {
    emailjs.send('service_6254x4d','zakia', {
        'from_name': contactForm.name.value,
        'from_email': contactForm.emailaddress.value,
        'message': contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log('SUCCESS', response);
        }, 
        function (error) {
            console.log('FAILED', error);
        });

    return false;
}