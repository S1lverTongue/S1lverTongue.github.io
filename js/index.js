// index.js
// Scripting page for my personal site page:
// s1lvertongue.github.io

"use strict";

var hideBanner = function() {
    $('.welcome-banner').fadeOut('slow');
    $('body').css({'overflow' : 'auto'});
}

var displayText = function(arrayIndex, letterIndex) {
    var textField = document.getElementById('text-field' + arrayIndex);
    var wordArray = ["Trent May", "Computer Scientist", "Welcome"];
    var done = false;

    if (letterIndex == wordArray[arrayIndex].length) { arrayIndex++; letterIndex = 0; done = true; }
    
    if (arrayIndex == wordArray.length) {
        $('.continue-button').fadeIn(300);
        return; 
    }
    
    if (textField && !done) {
        textField.innerHTML = wordArray[arrayIndex].substr(0, letterIndex + 1);
    }

    setTimeout(function() {
        if (textField) {
            displayText(arrayIndex, letterIndex + 1);
        } else {
            displayText(arrayIndex, letterIndex);
        }
    }, 100);
};

$(window).on("load", displayText(0, 0));