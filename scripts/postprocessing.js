const fs = require('fs')
const MarkdownIt = require('markdown-it')
const jsdom = require("jsdom");

const { JSDOM } = jsdom;

function addelt(document, type, appendTo, textNode, attrType, attrValue) {    // generic function to create new DOM elements
    const newElement = document.createElement(type);
    appendTo.appendChild(newElement);
    if (arguments.length > 4) {
        Object.keys(attrType).forEach(function (key) {
        newElement.setAttribute(attrType[key], attrValue[key]);
        });
    }
    if (textNode !== null && arguments.length > 3) { newElement.innerHTML = textNode; }
  }
  
  
  function singleMDCriteria(data, __) {
    const dom = new JSDOM(data);
    const document = dom.window.document;

    // 1. créer le canevas général
    const mainDiv = document.getElementById("topics");
    let mainFrame = document.createElement('div');
    addelt(document, "div", mainFrame, null, ["class"], ["RAWebMasterHeader"]);
    addelt(document, "div", mainFrame.lastChild, null, ["class"], ["rawebMargin"]);
    addelt(document, "aside", mainFrame.lastChild.lastChild, null);
    addelt(document, "details", mainFrame.lastChild.lastChild.lastChild);
    addelt(document, "summary", mainFrame.lastChild.lastChild.lastChild.lastChild, __("Search"));
    addelt(document, "p", mainFrame.lastChild.lastChild.lastChild.lastChild, __("To search the entire page using your browser's search function, you will first need to")+' <button id="btnUnfoldAll">'+ __('unfold all')+'</button>.', ["class"], ["noonbeforematch"]);
    addelt(document, "p", mainFrame.lastChild.lastChild.lastChild.lastChild, __("You can search the entire page using your browser's search function, even when sections are closed."), ["class"], ["onbeforematch"]);
    addelt(document, "details", mainFrame.lastChild.lastChild.lastChild);
    addelt(document, "summary", mainFrame.lastChild.lastChild.lastChild.lastChild, __("Warning"));
    while (mainDiv.firstElementChild) {
      mainFrame.lastChild.lastChild.lastChild.lastChild.lastChild.after(mainDiv.firstElementChild);
      if (mainDiv.firstElementChild.hasAttribute('id') && mainDiv.firstElementChild.id.indexOf('topic-') > -1) {
        break;
      }
    }
    addelt(document, "button", mainFrame.lastChild.lastChild.lastChild, __("Legend and display options"), ["id", "aria-haspopup"], ["showModal", "dialog"]);
    addelt(document, "dialog", mainFrame, null, ["id"], ["control-panel-dialog"]);
    addelt(document, "form", mainFrame.lastChild, null, ["method", "autocomplete"], ["dialog", "off"]);
    addelt(document, "button", mainFrame.lastChild.lastChild, null, ["id", "title"], ["close-modal", "Fermer la fenêtre modale"]);
    addelt(document, "span", mainFrame.lastChild.lastChild.lastChild, __("Close the modal window"), ["class"], ["sr-only"]);
    addelt(document, "div", mainFrame.lastChild.lastChild, null, ["class"], ["content"]);
    addelt(document, "h6", mainFrame.lastChild.lastChild, __("Legend"));
    addelt(document, "div", mainFrame.lastChild.lastChild, null, ["class"], ["legends"]);
    addelt(document, "dl", mainFrame.lastChild.lastChild.lastChild);
    addelt(document, "div", mainFrame.lastChild.lastChild.lastChild.lastChild);
    addelt(document, "dt", mainFrame.lastChild.lastChild.lastChild.lastChild.lastChild);
    addelt(document, "span", mainFrame.lastChild.lastChild.lastChild.lastChild.lastChild.lastChild, "2.1", ["class"], ["crit"]);
    addelt(document, "span", mainFrame.lastChild.lastChild.lastChild.lastChild.lastChild.lastChild, __("explain criterion"), ["class"], ["sr-only"]);
    addelt(document, "dd", mainFrame.lastChild.lastChild.lastChild.lastChild.lastChild, __("Criterion"));
    addelt(document, "div", mainFrame.lastChild.lastChild.lastChild.lastChild);
    addelt(document, "dt", mainFrame.lastChild.lastChild.lastChild.lastChild.lastChild);
    addelt(document, "span", mainFrame.lastChild.lastChild.lastChild.lastChild.lastChild.lastChild, "A", ["class"], ["a"]);
    addelt(document, "span", mainFrame.lastChild.lastChild.lastChild.lastChild.lastChild.lastChild, __("explain level"), ["class"], ["sr-only"]);
    addelt(document, "dd", mainFrame.lastChild.lastChild.lastChild.lastChild.lastChild, __("Compliance level"));
    addelt(document, "fieldset", mainFrame.lastChild.lastChild);
    addelt(document, "legend", mainFrame.lastChild.lastChild.lastChild, __("Options"));
    addelt(document, "div", mainFrame.lastChild.lastChild.lastChild);
    addelt(document, "input", mainFrame.lastChild.lastChild.lastChild.lastChild, null, ["type", "id"], ["checkbox", "rwc1"]);
    addelt(document, "label", mainFrame.lastChild.lastChild.lastChild.lastChild, __("Unfold all"), ["for"], ["rwc1"]);
    addelt(document, "div", mainFrame.lastChild.lastChild.lastChild);
    addelt(document, "input", mainFrame.lastChild.lastChild.lastChild.lastChild, null, ["type", "id"], ["checkbox", "rwc2"]);
    addelt(document, "label", mainFrame.lastChild.lastChild.lastChild.lastChild, __("Unfold themes"), ["for"], ["rwc2"]);
    addelt(document, "div", mainFrame.lastChild.lastChild.lastChild);
    addelt(document, "input", mainFrame.lastChild.lastChild.lastChild.lastChild, null, ["type", "id"], ["checkbox", "rwc3"]);
    addelt(document, "label", mainFrame.lastChild.lastChild.lastChild.lastChild, __("Unfold tests"), ["for"], ["rwc3"]);
    addelt(document, "div", mainFrame.lastChild.lastChild.lastChild);
    addelt(document, "input", mainFrame.lastChild.lastChild.lastChild.lastChild, null, ["type", "id"], ["checkbox", "rwc4"]);
    addelt(document, "label", mainFrame.lastChild.lastChild.lastChild.lastChild, __("Unfold methodologies"), ["for"], ["rwc4"]);
    addelt(document, "div", mainFrame.lastChild.lastChild.lastChild);
    addelt(document, "input", mainFrame.lastChild.lastChild.lastChild.lastChild, null, ["type", "id"], ["checkbox", "rwc5"]);
    addelt(document, "label", mainFrame.lastChild.lastChild.lastChild.lastChild, __("Unfold notes and special cases"), ["for"], ["rwc5"]);
    addelt(document, "div", mainFrame.lastChild.lastChild.lastChild);
    addelt(document, "input", mainFrame.lastChild.lastChild.lastChild.lastChild, null, ["type", "id"], ["checkbox", "rwc6"]);
    addelt(document, "label", mainFrame.lastChild.lastChild.lastChild.lastChild, __("Unfold mappings"), ["for"], ["rwc6"]);
    addelt(document, "button", mainFrame, null, ["id", "title", "aria-haspopup"], ["showModal-sticky", __("Legend and display options"), "dialog"]);
    addelt(document, "span", mainFrame.lastChild, __("Legend and display options"), ["class"], ["sr-only"]);
    addelt(document, "div", mainFrame, null, ["class"], ["RAWebMaster"]);
    addelt(document, "div", mainFrame.lastChild, null, ["id", "class"], ["accordionGroup", "accordion"]);
  
    // 2. faire rentrer chaque thématique dans un <article> et tout le contenu hors <h3> dans un <div> spécifique
    let tagsToFetch = ["H4", "H5", "H6", "OL", "UL", "P"];
    let els = mainDiv.querySelectorAll('h3[id^=topic]'); 
    els.forEach(el => {
        let theme = document.createElement("article");
        let chapter = el.cloneNode(true);
        let themeNumber = el.firstElementChild.textContent.split(" ").pop();
        theme.append(chapter);
        addelt(document, "div", theme, null, ["id", "role", "aria-labelledby", "class", "hidden"], ["sect"+themeNumber, "region", "accordion"+themeNumber+"id", "accordion-panel", "until-found"])
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
        addelt(document, "button", el, null, ["aria-expanded", "aria-controls", "class", "id"], ["false", "sect"+themeNumber, "accordion-trigger", "accordion"+themeNumber+"id"]);
        addelt(document, "span", el.lastChild, null, ["class"], ["accordion-title"]);
        addelt(document, "span", el.lastChild.lastChild, themeTitle, ["class"], ["theme-name"]);
        addelt(document, "span", el.lastChild.lastChild, themeNumber, ["class"], ["chapter"]);
        addelt(document, "span", el.lastChild.lastChild, null, ["class"], ["accordion-icon"]);
        addelt(document, "a", el, null, ["class", "title", "href"], ["topic-anchor", themePrefix, "#topic-"+themeNumber]);
        addelt(document, "span", el.lastChild, themePrefix, ["class"], ["sr-only"]);
        addelt(document, "img", el.lastChild, null, ["aria-hidden", "src", "alt"], ["true", "../../../img/hyperlink.svg", ""]);
    });
  
    // 4. Créer les <details> de méthodologie
    tagsToFetch = ["H6", "OL", "UL", "P"];
    els = document.querySelectorAll('.disclosure.methodo');
    els.forEach(el => {
        const detailRAAM = document.createElement("details");
        detailRAAM.setAttribute("class", "methodo");
        addelt(document, "summary", detailRAAM, __("Assessment methodology"));
        addelt(document, "div", detailRAAM);
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
        addelt(document, "summary", detailRAAM, __("Mapping"));
        addelt(document, "div", detailRAAM);
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
        addelt(document, "summary", detailRAAM, __("Notes and special cases"));
        addelt(document, "div", detailRAAM);
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
        addelt(document, "summary", detailRAAM, __("Test"));
        el.parentNode.insertBefore(detailRAAM, el);
        while (el.nextElementSibling && tagsToFetch.includes(el.nextElementSibling.nodeName)) {
            detailRAAM.append(el.nextElementSibling);
        }
        detailRAAM.firstElementChild.after(el);
    });
  
    // 8. Créer les <details> pour les tests multiples
    els = document.querySelectorAll('div.accordion-panel > h4 + ul');
    // els = document.querySelectorAll('ul:has( > li[id^=test])');
    els.forEach(el => {
        const detailRAAM = document.createElement("details");
        detailRAAM.setAttribute("class", "discover rawebTests");
        addelt(document, "summary", detailRAAM, __("Tests"));
        el.parentNode.insertBefore(detailRAAM, el);       
        detailRAAM.firstElementChild.after(el);
    });
  
    // 9. Note baladeuse du critère 6.1
    let el = document.querySelector('h4[id=crit-6-1]').nextElementSibling;
    let detailRAAM = document.createElement("details");
    detailRAAM.setAttribute("class", "discover rawebNotes");
    addelt(document, "summary", detailRAAM, "Note");
    el.parentNode.insertBefore(detailRAAM, el);       
    detailRAAM.firstElementChild.after(el);
  
    // 10. redessiner l'apparence des critères
    els = mainFrame.querySelectorAll('h4[id^=crit]'); 
    els.forEach(el => {
        let critNumber = el.firstElementChild.innerHTML.split(" ").pop();
        let critTitle = el.innerHTML.split("] ").pop();
        let re = /\[(.*)\]/i;
        let critLevel = el.innerHTML.match(re)[1];
        el.innerHTML = '<span><span class="sr-only">' + __("Criterion") + ' </span>' + critNumber + '</span>' + critTitle ;
        addelt(document, "a", el, null, ["class", "title", "href"], ["anchor", __("Criterion") + ' ' + critNumber, "#" + el.id]);
        addelt(document, "span", el.lastChild, null, ["class"], ["sr-only"]);
        addelt(document, "span", el.lastChild.lastChild, __("Criterion") + ' ' + critNumber);
        addelt(document, "img", el.lastChild, null, ["aria-hidden", "src", "alt"], ["true", "../../../img/hyperlink.svg", ""]);
        addelt(document, "span", el, '<span class="sr-only">' + __("Compliance level") + ' </span>' + critLevel, ["class"], ["level"]);
    });
  
    // 11. redessiner l'apparence des tests simples
    els = document.querySelectorAll('p[id^=test]');
    els.forEach(el => {
        let testTitle = el.innerHTML.split("</strong> ").pop();
        let testNumber = el.id.split("test-").pop().replace(/-/g, '.');
        let newLayout = document.createElement("H5");
        newLayout.setAttribute("id", el.id);
        addelt(document, "span", newLayout, '<span class="sr-only">' + __("Test") + ' </span>' + testNumber);
        addelt(document, "span", newLayout, testTitle, ["class"], ["test-content"]);
        addelt(document, "a", newLayout.lastChild, null, ["class", "title", "href"], ["anchor", __("Test") + ' ' + testNumber, "#" + el.id]);
        addelt(document, "span", newLayout.lastChild.lastChild, null, ["class"], ["sr-only"]);
        addelt(document, "span", newLayout.lastChild.lastChild.lastChild, __("Test") + ' ' + testNumber);
        addelt(document, "img", newLayout.lastChild.lastChild, null, ["aria-hidden", "src", "alt"], ["true", "../../../img/hyperlink.svg", ""]);
        el.parentNode.insertBefore(newLayout, el); 
        el.remove();
    });
  
    // //12. redessiner l'apparence des tests multiples
    els = document.querySelectorAll('div.accordion-panel > details > ul');
    //els = document.querySelectorAll('ul:has( > li[id^=test])');
    els.forEach(el => {
        if (el.querySelectorAll('li[id^=test]').length !== 0) {
            for (let i = 0; i < el.childElementCount; i++) {
                if (el.children[i].lastElementChild.nodeName === "UL") {
                    el.parentNode.insertBefore(el.children[i].lastElementChild, el);
                }
                let testTitle = el.children[i].innerHTML.split("</strong> ").pop();
                let testNumber = el.children[i].id.split("test-").pop().replace(/-/g, '.');
                let newLayout = document.createElement("H5");
                newLayout.setAttribute("id", el.children[i].id);
                addelt(document, "span", newLayout, '<span class="sr-only">Test </span>' + testNumber);
                addelt(document, "span", newLayout, testTitle, ["class"], ["test-content"]);
                addelt(document, "a", newLayout.lastChild, null, ["class", "title", "href"], ["anchor", __("Test") + ' ' + testNumber, "#" + el.children[i].id]);
                addelt(document, "span", newLayout.lastChild.lastChild, null, ["class"], ["sr-only"]);
                addelt(document, "span", newLayout.lastChild.lastChild.lastChild, __("Test") + ' ' + testNumber);
                addelt(document, "img", newLayout.lastChild.lastChild, null, ["aria-hidden", "src", "alt"], ["true", "../../../img/hyperlink.svg", ""]);
                el.parentNode.insertBefore(newLayout, el.previousElementSibling);
            }
            el.remove();
        }
    });
    return dom.serialize();
  }
  
  
  function singleMDGlossary(data, __) {
    const dom = new JSDOM(data);
    const document = dom.window.document;

    const mainDiv = document.getElementById("topics");
    let mainFrame = document.createElement('div');
    let tagsToFetch = ["H5", "UL", "P"];
    let els = mainDiv.querySelectorAll('h4'); 
    els.forEach(el => {
        let dl = document.createElement("dl");
        const dlLink = ' <a href="#' + el.id + '" title="' + el.innerHTML + '"><img class="glossary-anchor" aria-hidden="true" src="../../../img/hyperlink.svg"></a>';
        addelt(document, "dt", dl, el.innerHTML + dlLink, ["id"], [el.id]);
        addelt(document, "dd", dl);
        while (el.nextElementSibling && tagsToFetch.includes(el.nextElementSibling.nodeName)) {
            dl.lastChild.append(el.nextElementSibling);
        }
        mainFrame.append(dl);
    });
    // remettre l'alphabet
    let firstLetter = '-';
    let entries = mainFrame.querySelectorAll('dl');
    entries.forEach(el => {
        if (el.textContent.charAt(0) !== firstLetter) {
            firstLetter = el.textContent.charAt(0);
            let alphaKey = document.createElement("h3");
            alphaKey.setAttribute('id', firstLetter.toLowerCase());
            alphaKey.setAttribute('style', 'text-transform: uppercase');
            alphaKey.innerHTML = firstLetter;
            mainFrame.insertBefore(alphaKey, el)
        }
    });
    mainDiv.remove();
    mainFrame.setAttribute('id', 'topics');
    document.getElementById("contenu").append(mainFrame);
    return dom.serialize();
  }

function main(html, name, __) {
    if (['raam1/referentiel-technique', 'rapdf1/referentiel-technique'].includes(name)) {
        html = singleMDCriteria(html, __)
    }    
    if (['raam1/glossaire', 'rapdf1/glossaire'].includes(name)) {
        html = singleMDGlossary(html, __)
    }
    return html
}

exports.main = main