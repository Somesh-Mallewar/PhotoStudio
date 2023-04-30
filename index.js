function contactForm (){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "someshmallewar7@gmail.com",
        Password : "B7BD8A4E25A90978A238303F642AE0DEA2F4",
        To : 'syedimtiyazali141@gmail.com',
        From : "someshmallewar7@gmail.com",
        Subject : "Thank You For Showing Interest - Jemini Photo Studio.",
        Body : "We'll contact you shortly."
    }).then(
      message => alert('Your Details Submit Successfully')
    );
}