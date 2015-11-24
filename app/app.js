'use strict';

/**
 * @ngdoc overview
 * @name loop
 * @description
 * # loop
 *
 * Main module of the application.
 */
angular
  .module('loop', [
    'firebase',
    'angular-md5',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'home/home.html'
      })
      .state('login', {
        url: '/login',
        controller: 'AuthCtrl as authCtrl',
        templateUrl: 'auth/login.html',
        resolve: {
          requireNoAuth: function($state, Auth) {
            return Auth.$requireAuth().then(function(auth) {
              $state.go('home');
            }, function(error){
              return;
            });
          }
        }
      })
      .state('register', {
        url: '/register',
        controller: 'AuthCtrl as authCtrl',
        templateUrl: 'auth/register.html',
        resolve: {
          requireNoAuth: function($state, Auth) {
            return Auth.$requireAuth().then(function(auth) {
              $state.go('home');
            }, function(error){
              return;
            });
          }
        }
      });

    $urlRouterProvider.otherwise('/');
  })
  .constant('FirebaseUrl', 'https://blinding-inferno-6401.firebaseio.com/');
