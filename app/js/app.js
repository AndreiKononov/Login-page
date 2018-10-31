(function () {
  'use strict';
  angular.module('app', ['ui.router'])
    .factory('user', function () {
      return {
        id: '1',
        name: 'Andrei',
        age: '33',
        birthday: '1985/01/11',
        notification: '27-10-2018',
        login: '27 10 2018'
      };
    })
    .config(function ($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/login');
      $stateProvider
        .state('login', {
          url: '/login',
          templateUrl: 'login/login.view.html',
          controller: 'LoginController',
          controllerAs: 'vm'
        })
        .state('forgot', {
          url: '/forgot',
          templateUrl: 'forgot/forgot.view.html',
          controller: 'ForgotController',
          controllerAs: 'vm'
        })
        .state('home', {
          url: '/home',
          templateUrl: 'home/home.view.html',
          controller: 'HomeController',
          controllerAs: 'vm'
        })
        .state('home.info', {
          url: '/info',
          templateUrl: 'home/info/info.view.html',
          controller: 'InfoController',
          controllerAs: 'vm'
        })
        .state('home.update', {
          url: '/update',
          templateUrl: 'home/update/update.view.html',
          controller: 'UpdateController',
          controllerAs: 'vm'
        })
    });
})();