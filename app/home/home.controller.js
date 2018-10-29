(function () {
  'use strict';
  angular.module('app')
    .controller('HomeController', HomeController)
    .directive('integer', integer);

  function HomeController($scope) {
    $scope.user = {
      id: '1',
      name: 'Andrei',
      age: '33',
      birthday: '1985/01/11',
      notification: '27-10-2018',
      login: '27 10 2018'
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