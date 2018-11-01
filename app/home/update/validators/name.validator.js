(function () {
  'use strict';
  var app = angular.module('app');
  var USERNAME_FORMAT_REGEXP1 = /^(([A-Z][a-z]+)+([A-Z])?)$/;
  var USERNAME_FORMAT_REGEXP2 = /^(([A-Z][a-z]+)+([A-Z])? ([A-Z][a-z]+)+([A-Z])?)$/;

  app.directive('username', function($q, $timeout) {
    return {
      require: 'ngModel',
      link: function(scope, elm, attrs, ctrl) {
        ctrl.$asyncValidators.username = function(modelValue, viewValue) {
          if (ctrl.$isEmpty(modelValue)) {
            return $q.resolve();
          }
          var def = $q.defer();
          $timeout(function() {
            if (USERNAME_FORMAT_REGEXP1.test(viewValue) || USERNAME_FORMAT_REGEXP2.test(viewValue)) {
              def.resolve();
            } else {
              def.reject();
            }
          }, 3000);
          return def.promise;
        };
      }
    };
  });
})();
