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


function addelt (type, appendTo, textNode, attrType, attrValue) {    // generic function to create new DOM elements
  const newElement = document.createElement(type);
  appendTo.appendChild(newElement);
  if (arguments.length > 4) {
      Object.keys(attrType).forEach(function (key) {
      newElement.setAttribute(attrType[key], attrValue[key]);
      });
  }
  if (textNode !== null && arguments.length > 2) { newElement.innerHTML = textNode; }
}


function initStyleRAAM() {
  // 1. créer le canevas général
  const mainDiv = document.getElementById("topics");
  let mainFrame = document.createElement('div');
  addelt("div", mainFrame, null, ["class"], ["RAWebMasterHeader"]);
  addelt("div", mainFrame.lastChild, null, ["class"], ["rawebMargin"]);
  addelt("aside", mainFrame.lastChild.lastChild, null);
  addelt("details", mainFrame.lastChild.lastChild.lastChild);
  addelt("summary", mainFrame.lastChild.lastChild.lastChild.lastChild, "Recherche");
  addelt("p", mainFrame.lastChild.lastChild.lastChild.lastChild, 'Pour effectuer une recherche dans l’ensemble de la page via la fonction de recherche de votre navigateur, vous devrez au préalable <button id="btnUnfoldAll">tout déplier</button>.', ["class", "style"], ["noonbeforematch", "display: none"]);
  addelt("p", mainFrame.lastChild.lastChild.lastChild.lastChild, 'Vous pouvez effectuer une recherche dans l’ensemble de la page via la fonction de recherche de votre navigateur, même lorsque les sections sont refermées.', ["class"], ["onbeforematch"]);
  addelt("details", mainFrame.lastChild.lastChild.lastChild);
  addelt("summary", mainFrame.lastChild.lastChild.lastChild.lastChild, "Note importante");
  while (mainDiv.firstElementChild) {
    mainFrame.lastChild.lastChild.lastChild.lastChild.lastChild.after(mainDiv.firstElementChild);
    if (mainDiv.firstElementChild.hasAttribute('id') && mainDiv.firstElementChild.id.indexOf('topic-') > -1) {
      break;
    }
  }
  addelt("button", mainFrame.lastChild.lastChild.lastChild, "Légende et options d'affichage", ["id"], ["showModal"]);
  addelt("dialog", mainFrame, null, ["id"], ["control-panel-dialog"]);
  addelt("form", mainFrame.lastChild, null, ["method", "autocomplete"], ["dialog", "off"]);
  addelt("button", mainFrame.lastChild.lastChild, null, ["id", "title"], ["close-modal", "Fermer la fenêtre modale"]);
  addelt("div", mainFrame.lastChild.lastChild, null, ["class"], ["content"]);
  addelt("h6", mainFrame.lastChild.lastChild, "Légende");
  addelt("div", mainFrame.lastChild.lastChild, null, ["class"], ["legends"]);
  addelt("ul", mainFrame.lastChild.lastChild.lastChild);
  addelt("li", mainFrame.lastChild.lastChild.lastChild.lastChild);
  addelt("p", mainFrame.lastChild.lastChild.lastChild.lastChild.lastChild);
  addelt("span", mainFrame.lastChild.lastChild.lastChild.lastChild.lastChild.lastChild, "2.1", ["class"], ["crit"]);
  addelt("p", mainFrame.lastChild.lastChild.lastChild.lastChild.lastChild, "Critère");
  addelt("li", mainFrame.lastChild.lastChild.lastChild.lastChild);
  addelt("p", mainFrame.lastChild.lastChild.lastChild.lastChild.lastChild);
  addelt("span", mainFrame.lastChild.lastChild.lastChild.lastChild.lastChild.lastChild, "A", ["class"], ["a"]);
  addelt("p", mainFrame.lastChild.lastChild.lastChild.lastChild.lastChild, "Niveau de conformité");
  addelt("fieldset", mainFrame.lastChild.lastChild);
  addelt("legend", mainFrame.lastChild.lastChild.lastChild, "Options");
  addelt("div", mainFrame.lastChild.lastChild.lastChild);
  addelt("input", mainFrame.lastChild.lastChild.lastChild.lastChild, null, ["type", "id"], ["checkbox", "rwc1"]);
  addelt("label", mainFrame.lastChild.lastChild.lastChild.lastChild, "Tout déplier", ["for"], ["rwc1"]);
  addelt("div", mainFrame.lastChild.lastChild.lastChild);
  addelt("input", mainFrame.lastChild.lastChild.lastChild.lastChild, null, ["type", "id"], ["checkbox", "rwc2"]);
  addelt("label", mainFrame.lastChild.lastChild.lastChild.lastChild, "Déplier les thématiques", ["for"], ["rwc2"]);
  addelt("div", mainFrame.lastChild.lastChild.lastChild);
  addelt("input", mainFrame.lastChild.lastChild.lastChild.lastChild, null, ["type", "id"], ["checkbox", "rwc3"]);
  addelt("label", mainFrame.lastChild.lastChild.lastChild.lastChild, "Déplier les tests", ["for"], ["rwc3"]);
  addelt("div", mainFrame.lastChild.lastChild.lastChild);
  addelt("input", mainFrame.lastChild.lastChild.lastChild.lastChild, null, ["type", "id"], ["checkbox", "rwc4"]);
  addelt("label", mainFrame.lastChild.lastChild.lastChild.lastChild, "Déplier les méthodologies", ["for"], ["rwc4"]);
  addelt("div", mainFrame.lastChild.lastChild.lastChild);
  addelt("input", mainFrame.lastChild.lastChild.lastChild.lastChild, null, ["type", "id"], ["checkbox", "rwc5"]);
  addelt("label", mainFrame.lastChild.lastChild.lastChild.lastChild, "Déplier les notes et cas particuliers", ["for"], ["rwc5"]);
  addelt("div", mainFrame.lastChild.lastChild.lastChild);
  addelt("input", mainFrame.lastChild.lastChild.lastChild.lastChild, null, ["type", "id"], ["checkbox", "rwc6"]);
  addelt("label", mainFrame.lastChild.lastChild.lastChild.lastChild, "Déplier les correspondances", ["for"], ["rwc6"]);
  addelt("button", mainFrame, null, ["id", "title"], ["showModal-sticky", "Légende et options d'affichage"]);
  addelt("div", mainFrame, null, ["class"], ["RAWebMaster"]);
  addelt("div", mainFrame.lastChild, null, ["id", "class"], ["accordionGroup", "accordion"]);

  // 2. faire rentrer chaque thématique dans un <article> et tout le contenu hors <h3> dans un <div> spécifique
  let tagsToFetch = ["H4", "H5", "H6", "OL", "UL", "P"];
  let els = mainDiv.querySelectorAll('h3[id^=topic]'); 
  els.forEach(el => {
      let theme = document.createElement("article");
      let chapter = el.cloneNode(true);
      let themeNumber = el.firstElementChild.textContent.split(" ").pop();
      theme.append(chapter);
      addelt("div", theme, null, ["id", "role", "aria-labelledby", "class", "hidden"], ["sect"+themeNumber, "region", "accordion"+themeNumber+"id", "accordion-panel", "until-found"])
      while (el.nextElementSibling && tagsToFetch.includes(el.nextElementSibling.nodeName)) {
          theme.lastChild.append(el.nextElementSibling);
      }
      mainFrame.lastChild.lastChild.append(theme);
  });
  mainDiv.remove();
  mainFrame.setAttribute('id', 'topics');
  document.getElementById("toc").after(mainFrame);

  // 3. restructurer les titres de thèmes
  const els2 = mainFrame.lastChild.querySelectorAll('h3'); 
  els2.forEach(el => {
      let themePrefix = el.firstElementChild.innerHTML;
      let themeNumber = el.firstElementChild.innerHTML.split(" ").pop();
      let themeTitle = el.firstElementChild.nextSibling.nodeValue.split(": ").pop();
      el.innerHTML = "";
      addelt("button", el, null, ["aria-expanded", "aria-controls", "class", "id"], ["false", "sect"+themeNumber, "accordion-trigger", "accordion"+themeNumber+"id"]);
      addelt("span", el.lastChild, null, ["class"], ["accordion-title"]);
      addelt("span", el.lastChild.lastChild, themeTitle, ["class"], ["theme-name"]);
      addelt("span", el.lastChild.lastChild, themeNumber, ["class"], ["chapter"]);
      addelt("span", el.lastChild.lastChild, null, ["class"], ["accordion-icon"]);
      addelt("a", el, "&nbsp;", ["class", "title", "href"], ["topic-anchor", themePrefix, "#topic-"+themeNumber]);
  });

  // 4. Créer les <details> de méthodologie
  tagsToFetch = ["H6", "OL", "UL", "P"];
  els = document.querySelectorAll('.disclosure.methodo');
  els.forEach(el => {
      const detailRAAM = document.createElement("details");
      detailRAAM.setAttribute("class", "methodo");
      addelt("summary", detailRAAM, "Méthodologie d'évaluation");
      addelt("div", detailRAAM);
      el.parentNode.insertBefore(detailRAAM, el);
      while(el.nextElementSibling && tagsToFetch.includes(el.nextElementSibling.nodeName)) {
          detailRAAM.lastChild.append(el.nextElementSibling);
      }
      el.remove();
  });

  // 5. Créer les <details> de correspondance
  els = document.querySelectorAll('.disclosure.mapping');
  els.forEach(el => {
      const detailRAAM = document.createElement("details");
      detailRAAM.setAttribute("class", "discover rawebCorr");
      addelt("summary", detailRAAM, "Correspondances");
      addelt("div", detailRAAM);
      el.parentNode.insertBefore(detailRAAM, el);
      let wcagCorr = el.nextElementSibling.children[0];
      let euCorr = el.nextElementSibling.children[1];
      let wcagDetails = wcagCorr.innerHTML.split("&nbsp;:").pop();
      let euDetails = euCorr.innerHTML.split("&nbsp;:").pop();
      wcagCorr.innerHTML = "<p>WCAG 2.1</p><p>"+ wcagDetails +"</p>";
      euCorr.innerHTML = "<p>EN 301 549 V3.2.1 (2021-03)</p><p>"+ euDetails +"</p>";
      detailRAAM.lastChild.append(el.nextElementSibling);
      el.remove();
  });

  // 6. Créer les <details> pour les cas particuliers
  tagsToFetch = ["UL", "P"];
  els = document.querySelectorAll('h5[id^=cas-particulier]');
  els.forEach(el => {
      const detailRAAM = document.createElement("details");
      detailRAAM.setAttribute("class", "discover rawebNotes");
      addelt("summary", detailRAAM, "Notes et cas particuliers");
      addelt("div", detailRAAM);
      el.parentNode.insertBefore(detailRAAM, el);
      while(el.nextElementSibling && tagsToFetch.includes(el.nextElementSibling.nodeName)) {
          detailRAAM.lastChild.append(el.nextElementSibling);
      }
      detailRAAM.firstElementChild.after(el);
  });

  // 7. Créer les <details> pour les tests simples
  tagsToFetch = ["UL"];
  els = document.querySelectorAll('p[id^=test]');
  els.forEach(el => {
      const detailRAAM = document.createElement("details");
      detailRAAM.setAttribute("class", "discover rawebTests");
      addelt("summary", detailRAAM, "Test");
      el.parentNode.insertBefore(detailRAAM, el);
      while (el.nextElementSibling && tagsToFetch.includes(el.nextElementSibling.nodeName)) {
          detailRAAM.append(el.nextElementSibling);
      }
      detailRAAM.firstElementChild.after(el);
  });

  // 8. Créer les <details> pour les tests multiples
  els = document.querySelectorAll('ul:has( > li[id^=test])');
  els.forEach(el => {
      const detailRAAM = document.createElement("details");
      detailRAAM.setAttribute("class", "discover rawebTests");
      addelt("summary", detailRAAM, "Tests");
      el.parentNode.insertBefore(detailRAAM, el);       
      detailRAAM.firstElementChild.after(el);
  });

  // 9. Note baladeuse du critère 6.1
  let el = document.querySelector('h4[id=crit-6-1]').nextElementSibling;
  let detailRAAM = document.createElement("details");
  detailRAAM.setAttribute("class", "discover rawebNotes");
  addelt("summary", detailRAAM, "Note");
  el.parentNode.insertBefore(detailRAAM, el);       
  detailRAAM.firstElementChild.after(el);

  // 10. redessiner l'apparence des critères
  els = mainFrame.querySelectorAll('h4[id^=crit]'); 
  els.forEach(el => {
      let critNumber = el.firstElementChild.innerHTML.split(" ").pop();
      let critTitle = el.innerHTML.split("] ").pop();
      let re = /\[(.*)\]/i;
      let critLevel = el.innerHTML.match(re)[1];
      el.innerHTML = '<span><span class="sr-only">critère </span>' + critNumber + '</span>' + critTitle ;
      addelt("a", el, null, ["class", "title", "href"], ["anchor", "Critère " + critNumber, "#" + el.id]);
      addelt("img", el.lastChild, null, ["aria-hidden", "src", "alt"], ["true", "../../img/hyperlink.svg", ""]);
      addelt("span", el, '<span class="sr-only">Niveau de conformité </span>' + critLevel, ["class"], ["level"]);
  });

  // 11. redessiner l'apparence des tests simples
  els = document.querySelectorAll('p[id^=test]');
  els.forEach(el => {
      let testTitle = el.innerHTML.split("</strong> ").pop();
      let testNumber = el.id.split("test-").pop().replace(/-/g, '.');
      let newLayout = document.createElement("H5");
      newLayout.setAttribute("id", el.id);
      addelt("span", newLayout, '<span class="sr-only">Test </span>' + testNumber);
      addelt("span", newLayout, testTitle, ["class"], ["test-content"]);
      addelt("a", newLayout.lastChild, null, ["class", "title", "href"], ["anchor", "Test " + testNumber, "#" + el.id]);
      addelt("img", newLayout.lastChild.lastChild, null, ["aria-hidden", "src", "alt"], ["true", "../../img/hyperlink.svg", ""]);
      el.parentNode.insertBefore(newLayout, el); 
      el.remove();
  });

  // 12. redessiner l'apparence des tests multiples
  els = document.querySelectorAll('ul:has( > li[id^=test])');
  els.forEach(el => {
      for (let i = 0; i < el.childElementCount; i++) {
          if (el.children[i].lastElementChild.nodeName === "UL") {
              el.parentNode.insertBefore(el.children[i].lastElementChild, el);
          }
          let testTitle = el.children[i].innerHTML.split("</strong> ").pop();
          let testNumber = el.children[i].id.split("test-").pop().replace(/-/g, '.');
          let newLayout = document.createElement("H5");
          newLayout.setAttribute("id", el.children[i].id);
          addelt("span", newLayout, '<span class="sr-only">Test </span>' + testNumber);
          addelt("span", newLayout, testTitle, ["class"], ["test-content"]);
          addelt("a", newLayout.lastChild, null, ["class", "title", "href"], ["anchor", "Test " + testNumber, "#" + el.children[i].id]);
          addelt("img", newLayout.lastChild.lastChild, null, ["aria-hidden", "src", "alt"], ["true", "../../img/hyperlink.svg", ""]);
          el.parentNode.insertBefore(newLayout, el.previousElementSibling);
      }
      el.remove();
  });
}


function initStyleGlossary() {
  const mainDiv = document.getElementById("topics");
  let mainFrame = document.createElement('div');
  let tagsToFetch = ["H5", "UL", "P"];
  let els = mainDiv.querySelectorAll('h4'); 
  els.forEach(el => {
      let dl = document.createElement("dl");
      const dlLink = ' <a href="#' + el.id + '" title="' + el.innerHTML + '"><img class="glossary-anchor" aria-hidden="true" src="hyperlink.svg"></a>';
      addelt("dt", dl, el.innerHTML + dlLink, ["id"], [el.id]);
      addelt("dd", dl);
      while (el.nextElementSibling && tagsToFetch.includes(el.nextElementSibling.nodeName)) {
          dl.lastChild.append(el.nextElementSibling);
      }
      mainFrame.append(dl);
  });
  mainDiv.remove();
  mainFrame.setAttribute('id', 'topics');
  document.getElementById("contenu").append(mainFrame);
}


window.addEventListener('DOMContentLoaded', function (event) {

    // Disclosure menu
    initDisclosureMenu()

    // Sticky menu (only created if #toc is present in the DOM)
    initStickySideMenu()

    // RGAA / RAAM / RAPDF disclosures, nav, and filters
    //initOldStyleDisclosure()

    // RAAM / RAPDF new style
    if (document.title.includes("RAAM 1 : Critères et tests") || document.title.includes("RAPDF 1 : Critères et tests")) {initStyleRAAM();}
    if (document.title.includes("RAAM 1 : Glossaire") || document.title.includes("RAPDF 1 : Glossaire")) {initStyleGlossary();}

    // RAWeb disclosures and filters
    initRAWeb()
    
}, false);




