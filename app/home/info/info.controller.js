(function () {
  'use strict';
  angular.module('app')
    .controller('InfoController', InfoController);

  function InfoController(user) {
    var vm = this;
    vm.user = user;
  }
})();
