(function () {
  'use strict';
  angular.module('app')
    .controller('langCtrl', ['$scope', '$translate', function ($scope, $translate) {
      $scope.switchLang = function (key) {
        $translate.use(key);
      }
    }])
})();
