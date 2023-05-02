getHeadingLevel = function(e) {
	var found = e.nodeName.match(/^H(\d)$/)
  if (found !== null) {
    return found[1]
  }
  return 10
}

toggleExpanded = function(e) {
  setExpanded(e, (e.getAttribute('aria-expanded') == 'true')?'false':'true')
}

setExpanded = function(e, status) {
  e.setAttribute('aria-expanded', status)
  if (status == 'true') {
    e.parentNode.nextElementSibling.classList.remove('collapsed') 
  } else {
    e.parentNode.nextElementSibling.classList.add('collapsed') 
  }
}

changeAllCollapsibleStates = function(kind) {
  return function() {
    var buttons = document.querySelectorAll('button.disclosure.'+kind).forEach(function(e) {
      setExpanded(e, document.getElementById('open-disclosure-'+kind).checked?'true':'false')
    })
  }
}

disclosure = function (e) {
  baseHeadingLevel = getHeadingLevel(e)
  id = e.getAttribute('id')
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
      document.getElementById('contenu').addEventListener('click', function(e) {
        for (var target = e.target; target && target != this; target = target.parentNode) {
          if (target.matches && target.matches('button.disclosure')) {
            toggleExpanded(target)
            break;
          }
        }      
      }, false)

      // HOTFIX for criteria 8.7
      if (window.location.pathname == '/fr/rgaa4.1/glossaire.html') {
        document.getElementById('landmarks').innerHTML = '<span lang="en">Landmarks</span>';
        document.getElementById('liste-des-valeurs-possibles-pour-l-attribut-autocomplete').innerHTML = 'Liste des valeurs possibles pour l\'attribut <code lang="en">autocomplete</code>';
        document.getElementById('passage-de-texte-lie-par-aria-labelledby-ou-aria-describedby').innerHTML = 'Passage de texte lié par <code lang="en">aria-labelledby</code> ou <code lang="en">aria-describedby</code>';
      }

    }

    
}, false);