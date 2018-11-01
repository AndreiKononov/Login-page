(function () {
  'use strict';
  var app = angular.module('app');
  var INTEGER_AGE_REGEXP = /^(1[8-9]|[2-5]\d|6[0-5])$/;

  app.directive('integer', function() {
    return {
      require: 'ngModel',
      link: function(scope, elm, attrs, ctrl) {
        ctrl.$validators.integer = function(modelValue, viewValue) {
          if (ctrl.$isEmpty(modelValue)) {
            return true;
          }
          if (INTEGER_AGE_REGEXP.test(viewValue)) {
            return true;
          }
          return false;
        };
      }
    };
  });
})();
