angular
  .module('MyApp')
  .config(function($routeProvider, $locationProvider){
    $routeProvider
      .when('/main', {templateUrl: 'views/main/main.html', controller: 'MainController', controllerAs: 'main' /*access: { requiredLogin: true }*/})
      .when('/singup', {templateUrl: 'views/cad/cad.html', controller: 'SingupController', controllerAs: 'singup'})
      .otherwise({redirectTo: '/main'});
  });