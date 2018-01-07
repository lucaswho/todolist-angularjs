'use strict';

angular.module("myApp.listFilter", [])
    .directive("listFilter",
    function () {
        return {
            scope: {
                option: '='
            },
            link: function (scope, element, attrs) {
                scope.allOptions = ['All items', 'In progress', 'Completed']

                scope.setOption = function (index) {
                    scope.option = index;
                }
            },
            templateUrl: 'directives/listFilter.html'
        };
    });