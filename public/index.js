"use strict";

(function() {

  window.addEventListener("load", init);

  /**
   * Sets up the necessary buttons and displays the welcome page when the webpage loads.
   */
  function init() {

    
    document.cookie = 'logged-in=false';
    checkIfLoggedIn();
  }

  // HELPER FUNCTIONS

  /**
   * Shortcut that returns the element that has the ID attribute with the specified value.
   * @param {string} id - element ID.
   * @return {object} - DOM object associated with id.
   */
  function id(id) {
    return document.getElementById(id);
  }

  /**
   * Shortcut that returns the first element matching the specified selector.
   * @param {string} selector - CSS query selector.
   * @returns {object} - First DOM object associated with selector.
   */
  function qs(selector) {
    return document.querySelector(selector);
  }

  /**
   * Shortcut that returns an array of elements matching the given query.
   * @param {string} selector - CSS query selector.
   * @returns {array} - Array of DOM objects matching the given query.
   */
  function qsa(selector) {
    return document.querySelectorAll(selector);
  }

  /**
   * Returns a new element with the given tag name.
   * @param {string} tagName - HTML tag name for new DOM element.
   * @returns {object} New DOM object for given HTML tag.
   */
  function gen(tagName) {
    return document.createElement(tagName);
  }
})();