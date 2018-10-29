(function () {
  'use strict';
  angular.module('app', ['ngRoute'])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/login', {
          controller: 'LoginController',
          templateUrl: 'login/login.view.html',
        })
        .when('/forgot', {
          controller: 'ForgotController',
          templateUrl: 'forgot/forgot.view.html',
        })
        .when('/home', {
          controller: 'HomeController',
          templateUrl: 'home/home.view.html',
        })
        .otherwise({redirectTo: '/login'});

/*        .when('/info', {
          parent: 'home',
          controller: 'InfoController',
          templateUrl: 'home/info/info.view.html',
        })

        .when('/update', {
          parent: 'home',
          controller: 'UpdateController',
          templateUrl: 'home/update/update.view.html',
      })*/
    });
})();