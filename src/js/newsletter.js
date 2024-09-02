const serverMessages = { 
    "fr": {
        "MissingEmailAddress": "Adresse email manquante",
        "InvalidEmailAddress": "Adresse email invalide", 
        "InvalidEmailAddress-1Dot": "<strong>Adresse email invalide&nbsp;:</strong> le nom de domaine de l\'adresse e-mail doit contenir au moins un point.",
        "AlreadyExistingAddress": "Cette adresse e-mail existe déjà dans notre base. Veuillez réessayer s\'il vous plaît avec une autre adresse.",
        "EmailSent": "<strong>Merci.</strong> Un e-mail vient de vous être envoyé&thinsp;: veuillez cliquer sur le lien qui s\'y trouve pour activer votre abonnement.",
        "GeneralEmailError": "Une erreur s\'est produite au moment de l\'envoi d\'une demande de confirmation par email. Veuillez nous en avertir en nous écrivant à l\'adresse <a href=\"mailto:accessibilite@sip.etat.lu\">accessibilite@sip.etat.lu</a> Nous vous prions de bien vouloir nous excuser pour ce désagrément",  
        "MethodNotAllowed": "Service non disponible, veuillez réessayer plus tard.",
        "InvalidParams": "Service non disponible, veuillez réessayer plus tard.",
        "InternalServerError": "Service non disponible, veuillez réessayer plus tard.",
    },
    "en": {
        "MissingEmailAddress": "Missing email address",
        "InvalidEmailAddress": "Invalid email address", 
        "InvalidEmailAddress-1Dot": "<strong>Invalid email address:</strong> the domain name of the email address must contain at least one period.",
        "AlreadyExistingAddress": "This email address already exists in our database. Please try again with another address.",
        "EmailSent": "<strong>Thank you.</strong> An email has just been sent to you: please click on the link in it to activate your subscription.",
        "GeneralEmailError": "An error occurred while sending a confirmation request by email. Please notify us at <a href=\"mailto:accessibilite@sip.etat.lu\">accessibilite@sip.etat.lu</a>. We apologize for this inconvenience.",  
        "MethodNotAllowed": "Service unavailable, please try again later.",
        "InvalidParams": "Service unavailable, please try again later.",
        "InternalServerError": "Service unavailable, please try again later.",
    }
}

const validationMessages = {
    "fr": {
        "email": "Veuillez renseigner une adresse e-mail valide\n (exemple : jean.reuter@etat.lu)",
        "checkbox": "Veuillez cocher cette case"
    },
    "en": {
        "email": "Please enter a valid email address\n (example: jean.reuter@etat.lu)",
        "checkbox": "Please check this box"
    }
}

function getMessage(code, messages) {
    let lang = document.querySelector('html').getAttribute('lang');
    lang  = Object.keys(messages).includes(lang)?lang:'en';
    return messages[lang][code];
}

function checkForm () {
    const urlParams = new URLSearchParams(window.location.search);
    const demoMode = urlParams.get('demo') !== null;
    const demoError = urlParams.get('demo') === "2";

    const btn = document.getElementById('submitbtn');
    const emailField   = document.getElementById('sip_email');
    const checkConsent = document.getElementById('sip_consent');

    emailField.setCustomValidity("");
    checkConsent.setCustomValidity("");
    emailField.parentElement.classList.remove('error');
    checkConsent.parentElement.classList.remove('error');

    if (emailField.validity.patternMismatch || emailField.validity.typeMismatch || emailField.validity.valueMissing) {
        emailField.setCustomValidity(getMessage('email', validationMessages));
        emailField.parentElement.classList.add('error');
    }

    if (checkConsent.validity.valueMissing) {
        checkConsent.setCustomValidity(getMessage('checkbox', validationMessages));
        checkConsent.parentElement.classList.add('error');
    }
    
    if (emailField.reportValidity() && checkConsent.reportValidity()) {
        btn.setAttribute("disabled", "");
        document.getElementById("output").innerHTML = '';
        document.getElementById("output").classList.remove("alert");
        document.getElementById("output").classList.remove("alert-danger");
        document.getElementById("output").classList.remove("alert-success");
        if (demoMode) {
            const demoParams = (demoError)?{code:"AlreadyExistingAddress", success: "false"}:{code:"EmailSent", success: "true"};
            newUserRequestFeedback(demoParams);
        } else {
            newUserRequest();
        }
        
    }
}

function newUserRequest () {
    const data = {
        "sip_email": document.getElementById('sip_email').value,
        'lang': document.documentElement.lang
    }
    fetch('/api/1/contact_create', {
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
    const msg = getMessage(output.code, serverMessages);
    if (output.code !== undefined && msg !== undefined) {
        document.getElementById("output").innerHTML = msg;
    } 
    if (output.success === "true") {
        document.getElementById("output").classList.add("alert");
        document.getElementById("output").classList.add("alert-success");
        document.getElementById("newsletter").style.display = "none";
    } else {
        document.getElementById("output").classList.add("alert");
        document.getElementById("output").classList.add("alert-danger");
        document.getElementById("submitbtn").removeAttribute("disabled");
        document.getElementById("sip_email").parentElement.classList.add("error");
    }
}

document.addEventListener('DOMContentLoaded', function(e) {
    document.querySelector('#submitbtn').addEventListener('click', checkForm)
})