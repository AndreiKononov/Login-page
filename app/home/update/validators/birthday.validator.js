(function () {
  'use strict';
  var app = angular.module('app');
  //var BIRTHDAY_FORMAT_REGEXP = /([0-2]\d|3[01])\/(0\d|1[012])\/(\d{4})/;
  var BIRTHDAY_FORMAT_REGEXP = /^(\d{4}\/(0\d|1[012])\/([0-2]\d|3[01]))$/;

  app.directive('birthday', function() {
    return {
      require: 'ngModel',
      link: function(scope, elm, attrs, ctrl) {
        ctrl.$validators.birthday = function(modelValue, viewValue) {
          if (ctrl.$isEmpty(modelValue)) {
            return true;
          }
          if (BIRTHDAY_FORMAT_REGEXP.test(viewValue)) {
            return true;
          }
          return false;
        };
      }
    };
  });
})();
