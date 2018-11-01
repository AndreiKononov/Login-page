(function () {
  'use strict';
  var app = angular.module('app');
  var   NOTIFICATION_FORMAT_REGEXP = /^(([0-2]\d|3[01])-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-\d{2}$)/;

  app.directive('notification', function() {
    return {
      require: 'ngModel',
      link: function(scope, elm, attrs, ctrl) {
        ctrl.$validators.notification = function(modelValue, viewValue) {
          if (ctrl.$isEmpty(modelValue)) {
            return true;
          }
          if (NOTIFICATION_FORMAT_REGEXP.test(viewValue)) {
            return true;
          }
          return false;
        };
      }
    };
  });
})();
