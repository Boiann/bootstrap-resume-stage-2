function sendMail(contactForm) {
    emailjs.send("service_2n9k474", "rosie", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        },
        form.current.reset()
    );
    return false;  // To block from loading a new page
}