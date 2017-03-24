var app = angular.module('larissa', []);

app.controller('AppController', function($scope){

    'use strict';

    var getRandomInt,
        changeLetter,
        playSound,
        vowels = ['a', 'e', 'i', 'o', 'u', 'y'],
        consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'z'],
        allLetters = vowels.concat(consonants).sort(),
        sounds = {
            correct: new Audio("sounds/smb_coin.wav"),
            incorrect: new Audio("sounds/smb_bump.wav")
        };

    $scope.score = {
        correct: 0,
        incorrect: 0,
        total: 0
    };

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

    playSound = function (sound) {
        if (!$scope.muteSound) {
            sounds[sound].currentTime = 0;
            sounds[sound].play();
        }
    };

    $scope.evaluate = function(evaluateTo) {
        if( typeof evaluateTo != "undefined") {
            playSound(evaluateTo);
            $scope.score[evaluateTo] += 1;
            $scope.score.total += 1;
        }
        changeLetter();
    };
    changeLetter();

});



