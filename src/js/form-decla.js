import ejs from 'ejs'
import {lang } from '../../conf.json'
import { copyTextToClipboard } from './clipboard.js';
import "core-js/stable";
import "regenerator-runtime/runtime";
import formDataEntries from 'form-data-entries'

function errorMessage(inputElt, textMsg) { 
    if (textMsg !== null && arguments.length > 1) {
        inputElt.setAttribute("aria-invalid", true);
        inputElt.setCustomValidity(textMsg);
        inputElt.setAttribute("aria-describedby", inputElt.id + "Error");
        const newelement = document.createElement("p");
        newelement.setAttribute("class", "errorMessage");
        newelement.setAttribute("id", inputElt.id + "Error");
        newelement.innerHTML = textMsg;
        inputElt.parentNode.appendChild(newelement);
        inputElt.parentElement.classList.add('error');
    } else {
        if (document.getElementById(inputElt.id + "Error")) {
            inputElt.removeAttribute("aria-invalid");
            inputElt.removeAttribute("aria-describedby");
            inputElt.setCustomValidity('');
            inputElt.parentElement.classList.remove('error');
            document.getElementById(inputElt.id + "Error").remove();
        }
    }
}

// https://stackoverflow.com/questions/3665115/how-to-create-a-file-in-memory-for-user-to-download-but-not-through-server
function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
  }

let supportedLang = lang.map(function(e) {return e.code})

if (location.hash !== '') {
    location.hash = ''
}

document.querySelector('#contenu>h2').setAttribute('tabindex', '-1')

function multilineToArray(e) {
    return (e.length === 0)? Array(): e.replace('\r\n', '\n').split('\n')
}

function getParams() {
    let form = document.getElementById('decla')

    // as always, there is an elegant way of doing things, and there is the polyfill way for IE11
    let params = {}
    for (const [key, val] of formDataEntries(form)) {
          params[key] = val
    }
    params.sites = multilineToArray(params.sites)
    params.apps = multilineToArray(params.apps)
    lang.forEach(e => {
        params['nc_'+e.code] = multilineToArray(params['nc_'+e.code])
        params['cd_'+e.code] = multilineToArray(params['cd_'+e.code])
        params['ce_'+e.code] = multilineToArray(params['ce_'+e.code])
    });
    params.title_level = parseInt(params.title_level)

    if (params['date_prepa'].length != 0) {

        let match = params['date_prepa'].match(/([0-9]{2})\/([0-9]{2})\/([0-9]{4})/)

        let date = new Date(
            match[3],    // year
            match[2]-1,  // monthIndex
            match[1]     // day
        );
        params['date_prepa'] = date
    }

    if (params['date_renewal'].length != 0) {

        let match = params['date_renewal'].match(/([0-9]{2})\/([0-9]{2})\/([0-9]{4})/)

        let date = new Date(
            match[3],    // year
            match[2]-1,  // monthIndex
            match[1]     // day
        );
        params['date_renewal'] = date
    }    

    if (params.renow === undefined) {
        params.renow = false
    } else {
        params.renow = true
    }

    if (params.main_title === undefined) {
        params.title_level--
        params.main_title = false
    } else {
        params.main_title = true
    }
    return params;
}

function showHideByLang(show, lang) {
    if (show) {
        Array.from(document.querySelectorAll("[data-lang='"+lang+"']")).forEach(function(e) {
            e.style.display = 'block'
        })
    } else {
        Array.from(document.querySelectorAll("[data-lang='"+lang+"']")).forEach(function(e) {       
            e.style.display = 'none'
        })
    }
}
// Polyfill onhashchange for IE11: Let this snippet run before your hashchange event binding code
if (!window.HashChangeEvent)(function(){
    var lastURL = document.URL;
    window.addEventListener("hashchange", function(event){
    Object.defineProperty(event, "oldURL", {enumerable:true,configurable:true,value:lastURL});
    Object.defineProperty(event, "newURL", {enumerable:true,configurable:true,value:document.URL});
    lastURL = document.URL;
    });
}());

document.addEventListener('DOMContentLoaded', function(e) {
    window.addEventListener('hashchange', function(event) {
        if (location.hash == '#result') {
            document.getElementById('form').style['display'] = 'none'
            document.getElementById('result').style['display'] = 'block'
            document.title = "Votre déclaration - Portail de l'accessibilité numérique"
            document.querySelector('#contenu>h2').innerHTML = "Votre déclaration"
            document.querySelector('#contenu>h2').focus()
        } else {
            document.getElementById('form').style['display'] = 'block'
            document.getElementById('result').style['display'] = 'none'
            document.title = "Créez votre déclaration - Portail de l'accessibilité numérique"
            document.querySelector('#contenu>h2').innerHTML = "Créez votre déclaration"
            document.querySelector('#contenu>h2').focus()
        }
        // scroll back to top of the page
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }, false);

    document.getElementById('date_prepa').value = new Date().toLocaleDateString('fr').replace(/\u200E/g, '')
    
    supportedLang.forEach(function(l) {
        showHideByLang(document.getElementById('lang_'+l).checked, l)
    });

    document.addEventListener('invalid', (function(){
        return function(e) {
          //prevent the browser from showing default error bubble / hint
          e.preventDefault();
        };
    })(), true);

    if (document.getElementById('decla')) {
        supportedLang.forEach(function(lang) {
            var check = document.getElementById('lang_'+lang);
            if (check) {
                document.getElementById('lang_'+lang).addEventListener('change', function(e) {
                    showHideByLang(e.target.checked, lang)
                });
            } else {
                console.log(lang +' is not defined')
            }

        });
        document.getElementById('decla_btn').addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();

            // validate form  
            const emailField      = document.getElementById('email');
            const dateField       = document.getElementById('date_prepa');
            const renewalField    = document.getElementById('date_renewal');
            const thirdpartyField = document.getElementById('thirdparty_name');
            const eval_type       = document.querySelector("[name='eval_type']:checked").value;
            const sitesField      = document.getElementById('sites');
            const appsField       = document.getElementById('apps');
            sitesField.required   = true;
            appsField.required    = true;

            let fields            = [sitesField, appsField, dateField, renewalField, emailField];
            let checkLang         = false;
            let orgaFields        = [];
            const errorPanel        = document.getElementById('errorPanel');

            supportedLang.forEach (function (l) {
                const langField = document.getElementById('lang_' + l);
                const orgaField = document.getElementById('name_' + l);
                errorMessage(langField);
                if (langField.checked) {
                    checkLang = true;
                    fields.unshift(orgaField);
                    orgaFields.push(orgaField);
                }
            });

            if (!checkLang) {
                errorMessage(document.getElementById('lang_fr'), "Veuillez sélectionner au moins une langue");
            }
            
            if (eval_type == "thirdparty") {
                fields.splice(4, 0, thirdpartyField);
            }

            fields.forEach(f => {
                errorMessage(f);
            });

            orgaFields.forEach(f => {
                if (f.validity.valueMissing) {
                    errorMessage(f, "Veuillez compléter ce champ");
                } 
            });

            if (emailField.validity.patternMismatch || emailField.validity.typeMismatch || emailField.validity.valueMissing) {
                errorMessage(emailField, "Veuillez renseigner une adresse e-mail valide\n (exemple : jean.reuter@etat.lu)");
            }

            if (dateField.validity.patternMismatch || dateField.validity.typeMismatch || dateField.validity.valueMissing) {
                errorMessage(dateField, "Veuillez indiquer une date valide au format jj/mm/aaaa\n (exemple : 20/12/2023)");
            }

            if (renewalField.validity.patternMismatch || renewalField.validity.typeMismatch) {
                errorMessage(renewalField, "Veuillez indiquer une date valide au format jj/mm/aaaa\n (exemple : 20/12/2023)");
            }

            if (eval_type == "thirdparty") {
                if (thirdpartyField.validity.valueMissing) {
                    errorMessage(thirdpartyField, "Veuillez compléter ce champ");
                }                
            }

            if (sitesField.validity.valueMissing && appsField.validity.valueMissing) {
                errorMessage(sitesField, "Veuillez compléter ce champ et/ou le champ ci-dessous");
                errorMessage(appsField, "Veuillez compléter ce champ et/ou le champ ci-dessus");
            }

            if (!sitesField.validity.valueMissing) {
                appsField.required = false;
            }

            if (!appsField.validity.valueMissing) {
                sitesField.required = false;
            }

            document.getElementById('lang_fr').setCustomValidity(document.querySelectorAll(".form-lang-input:checked").length == 0  ? 'Sélectionnez au moins une case à cocher' : '');
            errorPanel.innerHTML = "";
            errorPanel.style.display = "none";

            // if ok, submit it
            const okToSubmit = fields.map(e => e.reportValidity()).reduce((a,b) => a && b, true);

            if (okToSubmit && checkLang) {
                let params = getParams();
                window.params = params;
                let res = [];
    
                lang.forEach(e => {
                    res[e.code] = ejs.render(window.tpl[e.code], params);
                });
                lang.forEach(e => {
                    if (params['lang_'+e.code] == e.code) { // language selected
                        document.getElementById('decla-'+e.code+'-result').innerHTML = res[e.code];
                        document.getElementById('decla-'+e.code).style.display = 'block';
                    } else {
                        document.getElementById('decla-'+e.code).style.display = 'none';
                    }
                });
                location.hash = 'result';
            } else {
                errorPanel.style.display = "block";
                window.setTimeout(function () {
                    errorPanel.innerHTML = "Des erreurs ont été détectées dans le formulaire, le focus est repositionné dans le premier champ posant problème.";
                    if (!checkLang) {
                        document.getElementById('lang_fr').focus();
                        document.getElementById('lang_fr').parentElement.parentElement.before(errorPanel);
                    } else  {
                        for (let f = 0; f < fields.length; f++) {
                            if (!fields[f].reportValidity()) {
                                fields[f].focus();
                                fields[f].parentElement.parentElement.before(errorPanel);
                                break;
                            }
                        }
                    }
                }, 10);
            }
        })
    }

    Array.from(document.querySelectorAll("[name='conformity']")).forEach(function(e) {
        e.addEventListener('change', function(e) {
            if (e.target.value === 'total') {
                document.getElementById('non-conformes').style.display = 'none'
            } else {
                document.getElementById('non-conformes').style.display = 'block'
            }
        })
    })

    if (document.getElementById('thirdparty-blk')) {
        document.getElementById('thirdparty-blk').style.display = 'none'
    }
    Array.from(document.querySelectorAll("[name='eval_type']")).forEach(function(e) {
        e.addEventListener('change', function(e) {
            if (e.target.value !== 'thirdparty') {
                document.getElementById('thirdparty-blk').style.display = 'none'
            } else {
                document.getElementById('thirdparty-blk').style.display = 'block'
            }
        })
    })

    Array.from(document.querySelectorAll('.clipboard')).forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            copyTextToClipboard(btn.nextElementSibling.nextElementSibling.innerHTML);
        })
    })

    Array.from(document.querySelectorAll('.download')).forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            download(btn.parentElement.getAttribute('id')+'.html', btn.nextElementSibling.innerHTML)
        })
    })    

    document.getElementById('back').addEventListener('click', function() {
        location.hash = 'form';
    })
})