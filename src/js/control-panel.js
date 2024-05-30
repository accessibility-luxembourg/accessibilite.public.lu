/* eslint-disable no-unused-vars */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable semi */

function initControlPanel () {
    const observer = new window.IntersectionObserver(([entry]) => {
      const panel = document.getElementById('control-panel');
      if (entry.isIntersecting) {
        panel.classList.remove('floating');
        panel.classList.remove('centered');
        panel.removeAttribute("role");
        panel.removeAttribute("aria-label");
        panel.removeAttribute("aria-modal");
        panel.removeAttribute("tabindex");
        return
      }
      if (entry.boundingClientRect.top > 0) {
      } else {
        panel.classList.add('floating');
        panel.setAttribute("role", "dialog");
        panel.setAttribute("aria-label", "Fenêtre modale d'options");
        panel.setAttribute("aria-modal", "true");
        panel.setAttribute("tabindex", "-1");
      }
    }, {
      root: null,
      threshold: 0,
    });

    observer.observe(document.querySelector('#static-container'));
    
    document.body.addEventListener('keydown', function (e) {
      const panel = document.getElementById('control-panel');
      if (e.key === 'Escape') {
        if (panel.classList.contains('centered')) {
          panel.classList.remove('centered');
          document.getElementById('accordion-settings').focus();
        }
      }
    });
}


function showSettings () {
  const panel = document.getElementById('control-panel');
  if (panel.classList.contains('centered')) {
    panel.classList.remove('centered')
    document.getElementById("accordion-settings").firstChild.innerHTML = "Ouvrir les paramètres d'affichage";
  } else {
    panel.classList.add('centered')
    document.getElementById("accordion-settings").firstChild.innerHTML = "Fermer les paramètres d'affichage";
  }
}


function trapFocus() {
  var focusableEls = document.querySelectorAll('button.settings, input[type="checkbox"]');
  var firstFocusableEl = focusableEls[0];  
  var lastFocusableEl = focusableEls[focusableEls.length - 1];

  document.addEventListener('keydown', function(e) {
    var isTabPressed = (e.key === 'Tab');

    if (!isTabPressed) { 
      return; 
    }

    if (document.getElementById("control-panel").classList.contains("centered")) {
      if ( e.shiftKey ) /* shift + tab */ {
        if (document.activeElement === firstFocusableEl) {
          lastFocusableEl.focus();
            e.preventDefault();
          }
        } else /* tab */ {
        if (document.activeElement === lastFocusableEl) {
          firstFocusableEl.focus();
            e.preventDefault();
          }
        }
    }

  });
}

export {initControlPanel, showSettings, trapFocus}