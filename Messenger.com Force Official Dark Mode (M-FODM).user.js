// ==UserScript==
// @name         Messenger.com Force Official Dark Mode (M-FODM)
// @namespace    https://github.com/FrostiiZ/
// @version      0.2
// @description  Append the "__fb-dark-mode" class to the HTML tag and force Facebook's official Dark Mode
// @author       FrostiiZ
// @match        https://www.messenger.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.onload = function() {
        document.querySelector('html').classList.add('__fb-dark-mode');
    }
})();
