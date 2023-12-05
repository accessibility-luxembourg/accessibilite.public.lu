import { initDisclosure } from "./disclosureMenu"

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
  console.log(e, details)
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
  var id = e.getAttribute('id')
  var button = document.createElement("BUTTON")
  button.textContent = e.querySelector('p.summary').textContent
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
        document.getElementById('toc').classList.remove(className)
      } else{
        document.getElementById('toc').classList.add(className)
      }
    })
  }
}


function createObserver() {
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

window.addEventListener('DOMContentLoaded', function (event) {

    // Disclosure menu
    initDisclosure()

    // Sticky menu
    createObserver()

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
      } else {
        Array.from(document.querySelectorAll('.open-disclosure-crit-control')).map(e => e.style.display = 'none')       
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

      const filterRGAACheckbox = document.getElementById('filter-rgaa')
      if (filterRGAACheckbox !== null) {  
        if (Array.from(document.querySelectorAll('.topic.en-norm')).length == 0) {
          filterRGAACheckbox.style.display = 'none'
          document.getElementById('filter-rgaa-label').style.display = 'none'
        } else {
          filterRGAACheckbox.addEventListener('change', () => {
            Array.from(document.querySelectorAll('.topic.en-norm, .crit.en-norm, .summary-topic.en-norm')).map(e => e.style.display = filterRGAACheckbox.checked?'none':'block')
            Array.from(document.querySelectorAll('.summary-topic.en-norm')).map(e => e.style.display = filterRGAACheckbox.checked?'none':'list-item')
          })
        }
      }
    }

    
}, false);