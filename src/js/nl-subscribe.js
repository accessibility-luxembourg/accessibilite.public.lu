function getURLparams () {
    const urlParams = new URLSearchParams(window.location.search);
    const email_validation = urlParams.get('email_validation');
    if (email_validation == null || email_validation == "") {
        document.getElementById("output").innerHTML = "<p>Désolé, les paramètres renseignés ne sont pas valides.</p>";
    } else {
        validateNewUser(email_validation);
    }
}

function validateNewUser (email_validation) {  
    const data = new URLSearchParams();
    data.append('email_validation', email_validation);          
    fetch('/api/1/contact_subscribe', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, */*;q=0.8',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: data
    })
    .then(response => response.json())
    .then(response => newUserRequestFeedback(response))
}

function newUserRequestFeedback (output) {
    document.getElementById("output").innerHTML = output.message;
}

document.addEventListener('DOMContentLoaded', function(e) {
    getURLparams();
})
