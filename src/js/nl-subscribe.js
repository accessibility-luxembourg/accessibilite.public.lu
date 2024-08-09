const messages = {
    "InvalidParams": "Désolé, les paramètres renseignés ne sont pas valides.",
    "InvalidParams-AlreadyTried": "Désolé, nous ne pouvons pas valider votre adresse. Il se peut que vous l'ayez déjà précédemment validée.",
    "GeneralError": "Une erreur s\'est produite au moment de la confirmation de votre inscription. Veuillez nous en avertir en nous écrivant à l\'adresse <a href=\"mailto:accessibilite@sip.etat.lu\">accessibilite@sip.etat.lu</a>. Nous vous prions de bien vouloir nous excuser pour ce désagrément.",
    "Success": "Merci. Vous êtes désormais inscrit à notre lettre d\'informations.", 
    "MethodNotAllowed": "Service non disponible, veuillez réessayer plus tard.", 
    "InternalServerError": "Service non disponible, veuillez réessayer plus tard.", 

}

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
    const data = {
        'email_validation': email_validation
    }
    fetch('/api/1/contact_subscribe', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, */*;q=0.8',
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(response => newUserRequestFeedback(response))
}

function newUserRequestFeedback (output) {
    if (output.code !== undefined && messages[output.code] !== undefined) {
        document.getElementById("output").innerHTML = messages[output.code];
    } 
}

document.addEventListener('DOMContentLoaded', function(e) {
    getURLparams();
})
