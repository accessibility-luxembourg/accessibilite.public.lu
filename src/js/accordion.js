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
    this.buttonEl.toggle = this.onButtonClick.bind(this);
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

  document.querySelectorAll('.accordion-panel').forEach((section) => {
    section.onbeforematch = () => {
      section.removeAttribute('hidden');
      document.querySelector('[aria-controls="' + section.id + '"]').click();
    };
  });

  
  // manage anchors for topics or tests on the criteria page
  const h_topic = window.location.hash.match(/#topic-(\d+)/)
  const h_crit = window.location.hash.match(/#crit-(\d+)-(\d+)/)
  const h_test = window.location.hash.match(/#test-(\d+)-(\d+)-(\d+)/)

  if (h_topic) {
    document.querySelector('[aria-controls="sect' + h_topic[1] + '"]').click();
    document.querySelector(window.location.hash).scrollIntoView();
  }

  if (h_crit) {
    document.querySelector('[aria-controls="sect' + h_crit[1] + '"]').click();
    document.querySelector(window.location.hash).scrollIntoView();
  }

  if (h_test) {
    document.querySelector('[aria-controls="sect' + h_test[1] + '"]').click();
    document.querySelector(h_test[0]).parentElement.open = true;
    document.querySelector(window.location.hash).scrollIntoView();
  }
}

function unfoldThemes(evt) {
  updateCheckboxesStates(evt.target.checked, false)
  const themes = Array.from(document.querySelectorAll(`#accordionGroup button.accordion-trigger[aria-expanded=${!evt.target.checked}]`))
  themes.forEach(e => {
    e.toggle()
  })
  evt.stopPropagation()
}

function unfoldAll(evt) {
  if (evt.target?.checked === undefined) {
    evt.target.checked = true
  }
  unfoldDetails()(evt)
  unfoldThemes(evt)
  evt.stopPropagation()
}

function unfoldDetails(className){
  return function (evt) {
    const selectorDetailsPrefix = '#accordionGroup '+((className !== undefined)?`details.${className}`:'details')
    const selectorDetails = selectorDetailsPrefix + (evt.target.checked?':not([open])':'[open]')

    updateCheckboxesStates(evt.target.checked, (className === undefined))

    // update details states
    const details = Array.from(document.querySelectorAll(selectorDetails))
    details.forEach(e => {
      e.open = evt.target.checked
    })
    evt.stopPropagation()
  }
}

// the checkboxes are interrelated, this function updates their state accordingly
function updateCheckboxesStates(checked, isGlobal) {
  const all = document.getElementById('rwc1')
  const selectorInputPrefix = '#control-panel-dialog input.rw-filter'
  const selectorInput = selectorInputPrefix + (checked?':not(:checked)':':checked')
  const inputs = document.querySelectorAll(selectorInput)

  if (isGlobal) {
    all.indeterminate = false
    all.checked = checked
    inputs.forEach(e => {
      e.checked = checked
    })
  } else {
    if (all.indeterminate) {
      if (inputs.length == 0) {
        all.indeterminate = false
        all.checked = checked
      }
    } else {
      if (all.checked !== checked) {
        all.indeterminate = true
      }
    }
  }
}

export {initAccordions, unfoldThemes, unfoldAll, unfoldDetails }