function sendMail() {
    var params = {
        from_name: document.getElementById("name").value,
        email_id: document.getElementById("email").value,
        message :document.getElementById("message").value


    }
    emailjs.send("service_s8fptta" , "template_g58o34e" , params).then((res) =>{
        console.log(res);
        alert("Sent Successfully!");
    })

    .catch(err => console.log(err))

}
