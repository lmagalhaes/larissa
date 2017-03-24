(function(angular) {
    'use strict';

    var directiveName = "scores";

    angular.module("larissa").directive(directiveName, function(){
        return {
            restrict: 'E',
            scope: {
                score: "="
            },
            templateUrl: "./js/directives/templates/scores.tmpl.html"
        };
    });

})(angular);
