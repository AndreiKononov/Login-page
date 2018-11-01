(function () {
  'use strict';
  var app = angular.module('app');
  var LOGIN_FORMAT_REGEXP = /^(([0-2]\d|3[01]) (January|February|March|April|May|June|July|August|September|October|Novenber|December) \d{4}$)/;

  app.directive('login', function() {
    return {
      require: 'ngModel',
      link: function(scope, elm, attrs, ctrl) {
        ctrl.$validators.login = function(modelValue, viewValue) {
          if (ctrl.$isEmpty(modelValue)) {
            return true;
          }
          if (LOGIN_FORMAT_REGEXP.test(viewValue)) {
            return true;
          }
          return false;
        };
      }
    };
  });
})();
