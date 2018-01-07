'use strict';

angular.module('myApp.home', ['ngRoute'])

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
        var newItem = {
          name: vm.newActivity,
          done: false
        }

        vm.activitiesList.push(newItem);
        vm.saveCurrentList();

        vm.newActivity = '';
        $window.document.getElementById('input-activity').focus();
      } else {
        vm.error = 'Please, insert your activity.'
        $window.document.getElementById('input-activity').blur();
      }
    };

    vm.deleteActivity = function (activity) {
      vm.activitiesList.splice(vm.activitiesList.indexOf(activity), 1);
      vm.saveCurrentList();
    };
    
    vm.saveCurrentList = function() {
      localStorage.setItem('activitiesList', JSON.stringify(vm.activitiesList));
    }

  }]);