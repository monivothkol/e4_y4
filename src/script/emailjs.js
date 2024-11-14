function sendMail(){
    let param = {
        sender_name : document.getElementById("sender_name").value,
        sender_phone : document.getElementById("sender_phone").value,
        sender_email: document.getElementById("sender_email").value,
        sender_subject : document.getElementById("sender_subject").value,
        sender_message : document.getElementById("sender_message"),
    }
    emailjs.send("service_mpytdrf", "template_paqig5h", param).then(alert("Your email was sent successfully. We will contact you soon!"))
    console.log("send success")
}