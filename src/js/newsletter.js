const messages = {
    "MissingEmailAddress": "Adresse email manquante",
    "InvalidEmailAddress": "Adresse email invalide", 
    "InvalidEmailAddress-1Dot": "Adresse email invalide : Le nom de domaine de l\'adresse e-mail doit contenir au moins un point.",
    "AlreadyExistingAddress": "Cette adresse e-mail existe déjà dans notre base. Veuillez réessayer s\'il vous plaît avec une autre adresse.",
    "EmailSent": "Merci. Un e-mail vient de vous être envoyé&thinsp;: veuillez cliquer sur le lien qui s\'y trouve pour activer votre abonnement.",
    "GeneralEmailError": "Une erreur s\'est produite au moment de l\'envoi d\'une demande de confirmation par email. Veuillez nous en avertir en nous écrivant à l\'adresse <a href=\"mailto:accessibilite@sip.etat.lu\">accessibilite@sip.etat.lu</a> Nous vous prions de bien vouloir nous excuser pour ce désagrément",  
}


function checkForm () {
    const btn = document.getElementById('submitbtn');
    const emailField   = document.getElementById('sip_email');
    const checkConsent = document.getElementById('sip_consent');

    emailField.setCustomValidity("");
    checkConsent.setCustomValidity("");
    emailField.parentElement.classList.remove('error');
    checkConsent.parentElement.classList.remove('error');

    if (emailField.validity.patternMismatch || emailField.validity.typeMismatch || emailField.validity.valueMissing) {
        emailField.setCustomValidity("Veuillez renseigner une adresse e-mail valide\n (exemple : jean.reuter@etat.lu)");
        emailField.parentElement.classList.add('error');
    }

    if (checkConsent.validity.valueMissing) {
        checkConsent.setCustomValidity("Veuillez cocher cette case");
        checkConsent.parentElement.classList.add('error');
    }
    
    if (emailField.reportValidity() && checkConsent.reportValidity()) {
        btn.setAttribute("disabled", "");
        document.getElementById("output").innerHTML = '';
        newUserRequest();
    }
}

function newUserRequest () {
    const data = new URLSearchParams();
    data.append('sip_email', document.getElementById('sip_email').value);
    data.append('lang', document.documentElement.lang);
    fetch('/api/1/contact_create', {
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
    if (output.code !== undefined && messages[output.code] !== undefined) {
        document.getElementById("output").innerHTML = messages[output.code];
    } 
    if (output.success == "true") {
        document.getElementById("newsletter").style.display = "none";
    } else {
        document.getElementById("submitbtn").removeAttribute("disabled");
        document.getElementById("sip_email").parentElement.classList.add("error");
    }
}

document.addEventListener('DOMContentLoaded', function(e) {
    document.querySelector('#submitbtn').addEventListener('click', checkForm)
})