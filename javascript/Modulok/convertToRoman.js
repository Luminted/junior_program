'use strict';

var rules ={
    '1': 'I',
    '4': 'IV',
    '5': 'V',
    '9': 'IX',
    '10' : 'X'
}

function roman(arabic){
    if(!arabic){
        return '';
    }

    var numbers = Object.keys(rules).filter(function(n){
       return Number(n) <= arabic;
    });

    var currentRoman, currentArabic;
    currentArabic = numbers.pop();
    currentRoman = rules[currentArabic];

    return currentRoman + roman(arabic - currentArabic);
}

module.exports = roman;