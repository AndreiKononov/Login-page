(function () {
	'use strict';
	angular
		.module('app')
		.controller('LoginController', LoginController);

	function LoginController($scope) {
		$scope.submitForm = function () {

			// check to make sure the form is completely valid
			if ($scope.loginForm.$valid) {
				alert('our form is amazing');
			}
		}
	}
})();
