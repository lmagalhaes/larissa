(function(angular) {
    'use strict';

    var directiveName = "card";
    angular.module('larissa').directive(directiveName, function() {
        return {
            restrict: "E",
            scope: {
                letter: "=",
            },
            templateUrl: "./js/directives/templates/card.tmpl.html"
        };
    });
})(angular);
