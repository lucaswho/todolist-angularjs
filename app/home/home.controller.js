'use strict';

angular.module('myApp.home', ['ngRoute', 'myApp.testDirective'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/home', {
      templateUrl: 'home/home.html',
      controller: 'homeController as vm',
    });
  }])

  .controller('homeController', ['$window', function ($window) {

    var vm = this;

    vm.newActivity = '';
    vm.activitiesList = JSON.parse(localStorage.getItem('activitiesList')) || [];

    vm.addActivity = function () {
      if (vm.newActivity != '') {
        vm.activitiesList.push(vm.newActivity);
        localStorage.setItem('activitiesList', JSON.stringify(vm.activitiesList));
        vm.newActivity = '';
        $window.document.getElementById('input-activity').focus();
      }
    };

    vm.deleteActivity = function (activity) {
      vm.activitiesList.splice(vm.activitiesList.indexOf(activity), 1);
      localStorage.setItem('activitiesList', JSON.stringify(vm.activitiesList));
    };

  }]);