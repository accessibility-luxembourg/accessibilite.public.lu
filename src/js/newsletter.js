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
    document.getElementById("output").innerHTML = output.message;
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