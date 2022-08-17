/*
*   This content is licensed according to the W3C Software License at
*   https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
*
*   Supplemental JS for the disclosure menu keyboard behavior
* 
*   AVA: 
*     - moved initialisation code to main.js
*     - added unmount method (and refactored init to be able to remove event listeners)
*/

'use strict';

var DisclosureNav = function (domNode) {
  this.rootNode = domNode;
  this.triggerNodes = [];
  this.controlledNodes = [];
  this.openIndex = null;
  this.useArrowKeys = true;
  this.menuKeyDown = this.handleMenuKeyDown.bind(this);
  this.buttonClick = this.handleButtonClick.bind(this);
  this.buttonKeyDown = this.handleButtonKeyDown.bind(this);
  this.blur = this.handleBlur.bind(this);
  this.isMounted = false;
};

DisclosureNav.prototype.mount = function () {
  var buttons = this.rootNode.querySelectorAll('button[aria-expanded][aria-controls]');

  for (var i = 0; i < buttons.length; i++) {
    var button = buttons[i];
    var menu = button.parentNode.querySelector('ul');
    if (menu) {
      // save ref to button and controlled menu
      this.triggerNodes.push(button);
      this.controlledNodes.push(menu);

      // collapse menus
      button.setAttribute('aria-expanded', 'false');
      this.toggleMenu(menu, false);

      // attach event listeners
      menu.addEventListener('keydown', this.menuKeyDown);
      button.addEventListener('click', this.buttonClick);
      button.addEventListener('keydown', this.buttonKeyDown);
    }
  }

  this.rootNode.addEventListener('focusout', this.blur);
  this.isMounted = true;
};

DisclosureNav.prototype.unmount = function() {
  var buttons = this.rootNode.querySelectorAll('button[aria-expanded][aria-controls]');
  for (var i = 0; i < buttons.length; i++) {
    var button = buttons[i];
    var menu = button.parentNode.querySelector('ul');
    if (menu) {
      // remove ref to button and controlled menu
      if (this.triggerNodes.indexOf(button) !== -1) {
        this.triggerNodes.splice(this.triggerNodes.indexOf(button), 1);
      }
      if (this.controlledNodes.indexOf(menu) !== -1) {
        this.controlledNodes.splice(this.controlledNodes.indexOf(menu), 1);
      }

      // expand menus
      button.setAttribute('aria-expanded', 'true');
      this.toggleMenu(menu, true);

      // remove event listeners
      menu.removeEventListener('keydown', this.menuKeyDown);
      button.removeEventListener('click', this.buttonClick);
      button.removeEventListener('keydown', this.buttonKeyDown);
    }
  }

  this.rootNode.removeEventListener('focusout', this.blur);
  this.isMounted = false;
};

DisclosureNav.prototype.toggleMenu = function (domNode, show) {
  if (domNode) {
    domNode.style.display = show ? 'block' : 'none';
  }
};

DisclosureNav.prototype.toggleExpand = function (index, expanded) {
  // close open menu, if applicable
  if (this.openIndex !== index) {
    this.toggleExpand(this.openIndex, false);
  }

  // handle menu at called index
  if (this.triggerNodes[index]) {
    this.openIndex = expanded ? index : null;
    this.triggerNodes[index].setAttribute('aria-expanded', expanded);
    this.toggleMenu(this.controlledNodes[index], expanded);
  }
};

DisclosureNav.prototype.controlFocusByKey = function (keyboardEvent, nodeList, currentIndex) {
  switch (keyboardEvent.key) {
    case 'ArrowUp':
    case 'ArrowLeft':
      keyboardEvent.preventDefault();
      if (currentIndex > -1) {
        var prevIndex = Math.max(0, currentIndex - 1);
        nodeList[prevIndex].focus();
      }
      break;
    case 'ArrowDown':
    case 'ArrowRight':
      keyboardEvent.preventDefault();
      if (currentIndex > -1) {
        var nextIndex = Math.min(nodeList.length - 1, currentIndex + 1);
        nodeList[nextIndex].focus();
      }
      break;
    case 'Home':
      keyboardEvent.preventDefault();
      nodeList[0].focus();
      break;
    case 'End':
      keyboardEvent.preventDefault();
      nodeList[nodeList.length - 1].focus();
      break;
  }
};

/* Event Handlers */
DisclosureNav.prototype.handleBlur = function (event) {
  var menuContainsFocus = this.rootNode.contains(event.relatedTarget);
  if (!menuContainsFocus && this.openIndex !== null) {
    this.toggleExpand(this.openIndex, false);
  }
};

DisclosureNav.prototype.handleButtonKeyDown = function (event) {
  var targetButtonIndex = this.triggerNodes.indexOf(document.activeElement);

  // close on escape
  if (event.key === 'Escape') {
    this.toggleExpand(this.openIndex, false);
  }

  // move focus into the open menu if the current menu is open
  else if (this.useArrowKeys && this.openIndex === targetButtonIndex && event.key === 'ArrowDown') {
    event.preventDefault();
    this.controlledNodes[this.openIndex].querySelector('a').focus();
  }

  // handle arrow key navigation between top-level buttons, if set
  else if (this.useArrowKeys) {
    this.controlFocusByKey(event, this.triggerNodes, targetButtonIndex);
  }
};

DisclosureNav.prototype.handleButtonClick = function (event) {
  var button = event.target;
  var buttonIndex = this.triggerNodes.indexOf(button);
  var buttonExpanded = button.getAttribute('aria-expanded') === 'true';
  this.toggleExpand(buttonIndex, !buttonExpanded);
};

DisclosureNav.prototype.handleMenuKeyDown = function (event) {
  if (this.openIndex === null) {
    return;
  }

  var menuLinks = Array.prototype.slice.call(this.controlledNodes[this.openIndex].querySelectorAll('a'));
  var currentIndex = menuLinks.indexOf(document.activeElement);

  // close on escape
  if (event.key === 'Escape') {
    this.triggerNodes[this.openIndex].focus();
    this.toggleExpand(this.openIndex, false);
  }

  // handle arrow key navigation within menu links, if set
  else if (this.useArrowKeys) {
    this.controlFocusByKey(event, menuLinks, currentIndex);
  }
};

// switch on/off arrow key navigation
DisclosureNav.prototype.updateKeyControls = function (useArrowKeys) {
  this.useArrowKeys = useArrowKeys;
};
