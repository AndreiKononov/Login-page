(function () {
  'use strict';
  var app = angular.module('app');
  app.directive('username', function($q, $timeout) {
    return {
      require: 'ngModel',
      link: function(scope, elm, attrs, ctrl) {
        var usernames = ['Jim', 'John', 'Jill', 'Jackie'];

        ctrl.$asyncValidators.username = function(modelValue, viewValue) {

          if (ctrl.$isEmpty(modelValue)) {
            return $q.resolve();
          }
          var def = $q.defer();

          $timeout(function() {
            if (usernames.indexOf(modelValue) === -1) {
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
