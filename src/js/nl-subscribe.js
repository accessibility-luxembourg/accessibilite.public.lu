const serverMessages = {
    "fr": {
        "InvalidParams": "Désolé, les paramètres renseignés ne sont pas valides.",
        "InvalidParams-AlreadyTried": "Désolé, nous ne pouvons pas valider votre adresse email. Il se peut que vous l'ayez déjà précédemment validée.",
        "GeneralError": "Une erreur s\'est produite au moment de la confirmation de votre inscription. Veuillez nous en avertir en nous écrivant à l\'adresse <a href=\"mailto:accessibilite@sip.etat.lu\">accessibilite@sip.etat.lu</a>. Nous vous prions de bien vouloir nous excuser pour ce désagrément.",
        "Success": "Merci. Vous êtes désormais inscrit à notre lettre d\'informations.", 
        "MethodNotAllowed": "Service non disponible, veuillez réessayer plus tard.", 
        "InternalServerError": "Service non disponible, veuillez réessayer plus tard.", 
    },
    "en": {
        "InvalidParams": "Sorry, the provided parameters are invalid.",
        "InvalidParams-AlreadyTried": "Sorry, we can't validate your email address. You may have already validated it previously.",
        "GeneralError": "An error occurred while confirming your registration. Please notify us at <a href=\"mailto:accessibilite@sip.etat.lu\">accessibilite@sip.etat.lu</a>. We apologize for any inconvenience this may cause.",
        "Success": "Thank you. You are now subscribed to our newsletter.", 
        "MethodNotAllowed": "Service unavailable, please try again later.", 
        "InternalServerError": "Service unavailable, please try again later.",         
    }
}

function getMessage(code, messages) {
    let lang = document.querySelector('html').getAttribute('lang');
    lang  = Object.keys(messages).includes(lang)?lang:'en';
    return messages[lang][code];
}

function getURLparams () {
    const urlParams = new URLSearchParams(window.location.search);
    const email_validation = urlParams.get('email_validation');
    const demoMode = urlParams.get('demo') !== null;
    if (demoMode) {
        newUserRequestFeedback ({code:"Success", success: "true"});
    } else {
        if (email_validation == null || email_validation == "") {
            document.getElementById("output").classList.add("alert");
            document.getElementById("output").classList.add("alert-danger");
            document.getElementById("output").innerHTML = getMessage("InvalidParams", serverMessages);
        } else {
            validateNewUser(email_validation);
        }
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
    const msg = getMessage(output.code, serverMessages)
    if (output.code !== undefined && msg !== undefined) {
        document.getElementById("output").classList.add("alert");
        document.getElementById("output").classList.add((output.success === "true")?"alert-success":"alert-danger");
        document.getElementById("output").innerHTML =msg;
    } 
}

document.addEventListener('DOMContentLoaded', function(e) {
    getURLparams();
})
