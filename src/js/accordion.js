/* eslint-disable no-new */
/* eslint-disable no-unused-vars */
/* eslint-disable spaced-comment */
/* eslint-disable no-undef */
/* eslint-disable semi */
/* eslint-disable no-multi-spaces */
/* eslint-disable no-multiple-empty-lines */

'use strict'


class Accordion {
  constructor (domNode) {
    this.rootEl = domNode;
    this.buttonEl = this.rootEl.querySelector('button[aria-expanded]')
    const controlsId = this.buttonEl.getAttribute('aria-controls');
    this.contentEl = document.getElementById(controlsId);
    this.open = this.buttonEl.getAttribute('aria-expanded') === 'true';
    this.buttonEl.addEventListener('click', this.onButtonClick.bind(this));
  }

  onButtonClick () {
    this.toggle(!this.open);
  }

  toggle (open) {
    if (open === this.open) {
      return;                                                        // don't do anything if the open state doesn't change
    }

    this.open = open;                                                // update the internal state

    this.buttonEl.setAttribute('aria-expanded', `${open}`);          // handle DOM updates
    if (open) {
      this.contentEl.removeAttribute('hidden');
    } else {
      this.contentEl.setAttribute('hidden', 'until-found');
    }
  }

  open () {                                                          // add public open and close methods for convenience
    this.toggle(true);
  }

  close () {
    this.toggle(false);
  }
}


function getAnchor () {                                              // generic function to get the URL anchor
  const currentUrl = document.URL;
  const urlParts = currentUrl.split('#');
  return (urlParts.length > 1) ? urlParts[1] : null;
}


function initAccordions () {
  if ('onbeforematch' in document.body) {
    document.querySelector('.noonbeforematch').style.display = 'none';
  } else {
    document.querySelector('.onbeforematch').style.display = 'none';
  }
  
  const accordions = document.querySelectorAll('.accordion h3');
  accordions.forEach((accordionEl) => {
    new Accordion(accordionEl);
  });

  const methodoDetails = document.querySelectorAll('.methodo');
  methodoDetails.forEach(function (elt) {
    elt.addEventListener('toggle', (e) => {
      e.target.firstChild.innerHTML = 'Découvrir la méthodologie de test';
      if (e.target.open) {
        e.target.firstChild.innerHTML = 'Refermer la méthodologie de test';
      }
    })
  });

  document.querySelectorAll('.accordion-panel').forEach((section) => {
    section.onbeforematch = () => {
      section.removeAttribute('hidden');
      document.querySelector('[aria-controls="' + section.id + '"]').click();
    };
  });
  if (getAnchor() !== '' && getAnchor() !== null) {
    unfoldThemes();
    unfoldTests();
    window.location.href = '#' + getAnchor();
    window.scrollBy(0, -20);
    document.getElementById('rwc1').checked = true;
    document.getElementById('rwc2').checked = true;
  }
}


function unfoldThemes () {
  document.querySelectorAll('.accordion-trigger').forEach((btn) => {
    if (btn.ariaExpanded === 'false') {
      btn.click();
    }
  });
}


function foldThemes () {
  if (document.getElementById('rwc2').checked) {
    unfoldThemes();
  } else {
    document.querySelectorAll('.accordion-trigger').forEach((btn) => {
      if (btn.ariaExpanded === 'true') {
        btn.click();
      }
    });
  }
}

function unfoldAll () {
  document.querySelectorAll('details').forEach((box) => {
    if (box.open === false) {
      box.open = true;
    }
  });
  unfoldThemes();
  document.querySelectorAll('#control-panel-dialog input').forEach((elt) => {
    elt.checked = true;
  })
}


function foldAll (btn) {
  if (btn.target.checked) {
    unfoldAll();
  } else {
    document.querySelectorAll('details').forEach((box) => {
      if (box.open === true) {
        box.open = false;
      }
    });
    document.querySelectorAll('#control-panel-dialog input').forEach((elt) => {
      elt.checked = false;
    })
    foldThemes();
  }
}


function unfoldTests () {
  document.querySelectorAll('.rawebTests').forEach((box) => {
    if (box.open === false) {
      box.open = true;
    }
  });
}


function foldTests (btn) {
  if (btn.target.checked) {
    unfoldTests();
  } else {
    document.querySelectorAll('.rawebTests').forEach((box) => {
      if (box.open === true) {
        box.open = false;
      }
    });
  }
}


function unfoldMeth () {
  document.querySelectorAll('.methodo').forEach((box) => {
    if (box.open === false) {
      box.open = true;
    }
  });
}


function foldMeth (btn) {
  if (btn.target.checked) {
    unfoldMeth();
  } else {
    document.querySelectorAll('.methodo').forEach((box) => {
      if (box.open === true) {
        box.open = false;
      }
    });
  }
}


function unfoldCorr () {
  document.querySelectorAll('.rawebCorr').forEach((box) => {
    if (box.open === false) {
      box.open = true;
    }
  });
}


function foldCorr (btn) {
  if (btn.target.checked) {
    unfoldCorr();
  } else {
    document.querySelectorAll('.rawebCorr').forEach((box) => {
      if (box.open === true) {
        box.open = false;
      }
    });
  }
}


function unfoldNotes () {
  document.querySelectorAll('.rawebNotes').forEach((box) => {
    if (box.open === false) {
      box.open = true;
    }
  });
}


function foldNotes (btn) {
  if (btn.target.checked) {
    unfoldNotes();
  } else {
    document.querySelectorAll('.rawebNotes').forEach((box) => {
      if (box.open === true) {
        box.open = false;
      }
    });
  }
}


export {initAccordions, foldThemes, unfoldThemes, foldAll, unfoldAll, foldCorr, unfoldCorr, foldMeth, unfoldMeth, foldNotes, unfoldNotes, foldTests, unfoldTests}