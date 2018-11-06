(function () {
  'use strict';
  angular.module('app')
    .controller('InfoController', InfoController);

  function InfoController(user, $timeout) {
    var vm = this;
    vm.userData = {};
    user.loadData()
      .then(
        (data) => {
          console.log(data);
          vm.userData = data;
        },
        (reason) => {
          console.log(reason);
        },
        (update) => {
          console.log(update);
        }
      );
    vm.timer = function () {
      $timeout(function() {

      }, 1000);
    }
  }
})();
