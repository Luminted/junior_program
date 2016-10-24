'use strict';

var rules ={
    '1': 'I',
    '4': 'IV',
    '5': 'V'
}

function roman(arabic){
    if(!arabic){
        return '';
    }

    var numbers = Object.keys(rules).filter(function(n){
       return Number(n) <= arabic;
    });

    //console.log(numbers);

    var currentRoman, currentArabic;
    currentArabic = numbers.pop();
    currentRoman = rules[currentArabic];

    return roman(arabic - currentArabic) + currentRoman;
}

module.exports = roman;