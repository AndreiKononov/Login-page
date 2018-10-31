(function () {
  'use strict';
  angular.module('app')
    .controller('UpdateController', UpdateController);

  function UpdateController(user) {
    var vm = this;
    vm.user = user;
  }
})();
