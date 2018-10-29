(function () {
	'use strict';
	angular
		.module('app')
		.controller('HomeController', HomeController);

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
	angular.directive('integer', function () {

		return {
			require: 'ngModel',
			link: function ($scope, elm, attrs, ctrl) {
				$scope.regexp = "/^-?[0-9][^\.]*$/";
				ctrl.$validators.integer = function (modelValue, viewValue) {
					if (ctrl.$isEmpty(modelValue)) {
						return true;
					}
					if ($scope.regexp.test(viewValue)) {
						return true;
					}
					return false
				};
			}
		};
	});
})();