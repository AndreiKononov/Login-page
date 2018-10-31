(function () {
  'use strict';
  angular.module('app')
    .controller('HomeController', HomeController)
    .directive('integer', integer);

  function HomeController() {
    var vm = this;
    vm.submitForm = function () {
      if (vm.myForm.$valid) {

      }
    };
  }

  function integer() {
    var REG = "/^-?[0-9][^\.]*$/";
    return {
      require: 'ngModel',
      link: function (scope, elm, attrs, ctrl) {
        ctrl.$validators.integer = function (modelValue, viewValue) {
          if (ctrl.$isEmpty(modelValue)) {
            return true;
          }
          if (REG.test(viewValue)) {
            return true;
          }
          return false
        };
      }
    };
  }
})();