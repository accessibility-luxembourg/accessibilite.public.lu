import { initDisclosureMenu } from "./disclosureMenu"

import { initAccordions, unfoldThemes, unfoldAll, unfoldDetails } from "./accordion"

function getHeadingLevel(e) {
	var found = e.nodeName.match(/^H(\d)$/)
  if (found !== null) {
    return found[1]
  }
  return 10
}

function toggleExpanded(e) {
  setExpanded(e, (e.getAttribute('aria-expanded') == 'true')?'false':'true')
}

function setExpanded(e, status) {
  e.setAttribute('aria-expanded', status)
  const details = Array.from(e.classList).includes('crit') ? e.nextElementSibling : e.parentNode.nextElementSibling 
  if (status == 'true') {
    details.classList.remove('collapsed') 
  } else {
    details.classList.add('collapsed') 
  }
}

function changeAllCollapsibleStates(kind) {
  return function() {
    var buttons = document.querySelectorAll('button.disclosure.'+kind).forEach(function(e) {
      setExpanded(e, document.getElementById('open-disclosure-'+kind).checked?'true':'false')
    })
  }
}

function disclosure(e) {
  var baseHeadingLevel = getHeadingLevel(e)
  var id = e.getAttribute('id')
  var button = document.createElement("BUTTON")
  var heading = document.createElement("H"+baseHeadingLevel)
  heading.setAttribute('class', 'disclosure')
  heading.appendChild(button)
  button.textContent = e.textContent
  var container = document.createElement("DIV") 
  button.setAttribute('class', e.getAttribute('class'))
  button.setAttribute('aria-expanded', 'false')
  button.setAttribute('aria-controls', id)
  button.setAttribute('type', 'button')
  container.setAttribute('class', 'disc')
  container.setAttribute('id', id)
  e.insertAdjacentElement('afterend', container)
  e.insertAdjacentElement('afterend', heading)
  var next = e.nextElementSibling.nextElementSibling.nextElementSibling
  e.parentNode.removeChild(e)
  var nodesToMove = []
  while(next !== undefined && next !== null && getHeadingLevel(next) >= baseHeadingLevel && ! next.classList.contains("disclosure")) {
    nodesToMove.push(next)
    next = next.nextElementSibling
  }
  nodesToMove.forEach(function(e) { 
    container.appendChild(e)
  })
}

function critDisclosure(e) {
  var id = e.querySelector('div.details').getAttribute('id')
  var button = document.createElement("BUTTON")
  button.textContent = e.querySelector('p.summary').textContent
  button.id = e.querySelector('p.summary').getAttribute('id')
  e.querySelector('p.summary').remove()
  var container = e.querySelector('div.details')
  button.setAttribute('class', e.getAttribute('class'))
  button.setAttribute('aria-expanded', 'false')
  button.setAttribute('aria-controls', id)
  button.setAttribute('type', 'button')
  container.setAttribute('class', 'disc')
  container.insertAdjacentElement('beforebegin', button)
}

function handleIntersect(className) {
  return function(entries, observer) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        document.getElementById('toc')?.classList.remove(className)
      } else{
        document.getElementById('toc')?.classList.add(className)
      }
    })
  }
}


function initStickySideMenu() {
  if (document.getElementById('toc') !== null) {
    if ('IntersectionObserver' in window &&
    'IntersectionObserverEntry' in window &&
    'isIntersecting' in window.IntersectionObserverEntry.prototype) {
      new IntersectionObserver(handleIntersect('noFooter'), {
        root: null,
        rootMargin: "0px",
        threshold: [0]
      }).observe(document.querySelector('footer'));    
      new IntersectionObserver(handleIntersect('noNavi'), {
        root: null,
        rootMargin: "0px",
        threshold: [0]
      }).observe(document.getElementById('navi'));
    }
  }
}

function initOldStyleDisclosure() {
  // create disclosures where we have a heading with the class "disclosure"
  if (Element.prototype.matches) { // progressive enhancement (IE is out)
    var disclosures = document.querySelectorAll("#contenu h3.disclosure, #contenu h4.disclosure, #contenu h5.disclosure, #contenu h6.disclosure")
    if (disclosures.length != 0) {
      document.getElementById('disc-control').style.display = 'block'
      disclosures.forEach(function(e) {
        disclosure(e)
      })
      changeAllCollapsibleStates('mapping')()
      changeAllCollapsibleStates('methodo')()
      document.getElementById('open-disclosure-mapping').addEventListener('change', changeAllCollapsibleStates('mapping'))
      document.getElementById('open-disclosure-methodo').addEventListener('change', changeAllCollapsibleStates('methodo'))
    } 

      // particular case of the criteria
      var critDisclosures = document.querySelectorAll("#contenu div.crit.disclosure")
      if (critDisclosures.length != 0) {
        document.getElementById('disc-control').style.display = 'block'
        critDisclosures.forEach(function(e) {
          critDisclosure(e)
        })
        changeAllCollapsibleStates('crit')()
        document.getElementById('open-disclosure-crit').addEventListener('change', changeAllCollapsibleStates('crit'))
      } 
      document.getElementById('contenu').addEventListener('click', function(e) {
        for (var target = e.target; target && target != this; target = target.parentNode) {
          if (target.matches && target.matches('button.disclosure')) {
            toggleExpanded(target)
            break;
          }
        }      
      }, false)

    // HOTFIX for criteria 8.7
    if (window.location.pathname.match(/rgaa.*\/glossaire\.html$/)) {
      document.getElementById('landmarks').innerHTML = '<span lang="en">Landmarks</span>';
    }
  }
}


function initRAWeb () {
  if (document.querySelector('.RAWebMaster')) {
    initAccordions();
    document.getElementById('btnUnfoldAll')?.addEventListener('click', unfoldAll);
    document.getElementById('rwc1')?.addEventListener('click', unfoldAll);
    document.getElementById('rwc2')?.addEventListener('click', unfoldThemes);
    document.getElementById('rwc3')?.addEventListener('click', unfoldDetails('rawebTests'));
    document.getElementById('rwc4')?.addEventListener('click', unfoldDetails('methodo'));
    document.getElementById('rwc5')?.addEventListener('click', unfoldDetails('rawebNotes'));
    document.getElementById('rwc6')?.addEventListener('click', unfoldDetails('rawebCorr'));
    document.getElementById('showModal')?.addEventListener('click', function () {document.getElementById('control-panel-dialog').showModal()});
    document.getElementById('showModal-sticky')?.addEventListener('click', function () {document.getElementById('control-panel-dialog').showModal()});
    document.getElementById('close-modal')?.addEventListener('click', closeModal)

    const dialog = document.querySelector('dialog');
    dialog.addEventListener('click', function(event) {
      var rect = dialog.getBoundingClientRect();
      var isInDialog = (rect.top <= event.clientY && event.clientY <= rect.top + rect.height &&
        rect.left <= event.clientX && event.clientX <= rect.left + rect.width);
      if (!isInDialog) {
        closeModal()
      }
    });
  }
}

function closeModal(e) {
  document.querySelector('dialog').close()
  if (e !== undefined) {
    e.preventDefault()
  }
}

window.addEventListener('DOMContentLoaded', function (event) {

    // Disclosure menu
    initDisclosureMenu()

    // Sticky menu (only created if #toc is present in the DOM)
    initStickySideMenu()

    // RGAA / RAAM / RAPDF disclosures, nav, and filters
    initOldStyleDisclosure()

    // RAWeb disclosures and filters
    initRAWeb()
    
}, false);
