// ==UserScript==
// @name         Messenger.com Force Official Dark Mode (M-FODM)
// @namespace    https://github.com/FrostiiZ/
// @version      0.2
// @description  Append the "__fb-dark-mode" class to the HTML tag and force Facebook's official Dark Mode
// @encoding utf-8
// @homepage https://github.com/FrostiiZ/fb-messenger-official-dark-mode
// @supportURL https://github.com/FrostiiZ/fb-messenger-official-dark-mode/issues
// @updateURL https://github.com/FrostiiZ/fb-messenger-official-dark-mode/blob/main/messenger-dot-com-force-official-dark-mode-M-FODM.user.js
// @downloadURL https://github.com/FrostiiZ/fb-messenger-official-dark-mode/blob/main/messenger-dot-com-force-official-dark-mode-M-FODM.user.js
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
