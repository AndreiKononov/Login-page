(function () {
  'use strict';
  angular.module('app')
    .controller('HomeController', HomeController)

  function HomeController() {
    var vm = this;
    vm.submitForm = function () {
      if (vm.myForm.$valid) {

      }
    };
  }
})();
