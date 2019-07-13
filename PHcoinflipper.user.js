// ==UserScript==
// @name         PH - Coin Flipper
// @namespace    https://github.com/warpKaiba
// @version      0.3
// @description  Adds buttons to flip the coin for you
// @author       You
// @match        https://pokeheroes.com/gc_coinflip*
// @grant        none
// @downloadURL  https://github.com/warpKaiba/TMpokeheroes/raw/master/PHcoinflipper.user.js
// @icon         https://vignette.wikia.nocookie.net/pkmnshuffle/images/7/7f/Ducklett.png/revision/latest?cb=20170409032016
// ==/UserScript==

(function() {
    'use strict';
    var i = 0, max = 10, delay = 200, run
    run = function() {

        coinflip() // website function

        if(i++ < max || max == 0){
            setTimeout(run, delay);
        }
    }

    var flipButton = document.querySelector("[onclick='coinflip();']")
    flipButton.insertAdjacentHTML("afterend", " <button id='flip10'>Flip 10x</button> <button id='flip100'>Flip 100x</button> <button id='flip1000'>Flip 1000x</button><br><br> <button id='flipinf'>Flip forever</button> <button id='stopflip'>Stop flipping</button>")
    document.getElementById("flip10").addEventListener("click", flip10)
    document.getElementById("flip100").addEventListener("click", flip100)
    document.getElementById("flip1000").addEventListener("click", flip1000)
    document.getElementById("flipinf").addEventListener("click", flipInf)
    document.getElementById("stopflip").addEventListener("click", stopFlip)


    function flip10() {
        max = 10
        run()
    }

    function flip100() {
        max = 100
        run()
    }
    function flip1000() {
        max = 1000
        run()
    }
    function flipInf() {
        max = 0
        run()
    }
    function stopFlip() {
        max = 1
    }

    // Your code here...
})();