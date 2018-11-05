(function () {
  'use strict';
  angular.module('app', ['ui.router', 'pascalprecht.translate'])
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
    })
    .config(['$translateProvider', function ($translateProvider) {
      $translateProvider.useSanitizeValueStrategy(null);
      $translateProvider.useStaticFilesLoader({
        prefix: '/localisation/lang-',
        suffix: '.json'
      });
      $translateProvider.preferredLanguage('en');
      // remember language
      //$translateProvider.useLocalStorage();
    }])
})();
