var app = angular.module('larissa', []);

app.controller('AppController', function($scope){

    'use strict';

    var getRandomInt,
        changeLetter,
        vowels = ['a', 'e', 'i', 'o', 'u', 'y'],
        consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'z'],
        allLetters = vowels.concat(consonants).sort();

    getRandomInt = function (min, max) {
        var min = Math.ceil(min),
            max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };

    changeLetter = function () {
        var letter,
            capitular = (getRandomInt(0,2) == 1),
            randInt = getRandomInt(0, allLetters.length-1);

        letter = allLetters[randInt];
        if (capitular) {
            letter = letter.toUpperCase();
        }
        $scope.letter = letter;
    };

    $scope.evaluate = function() {
        changeLetter();
    };
    changeLetter();

});


