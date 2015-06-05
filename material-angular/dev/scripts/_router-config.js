// router config
angular
  .module('MainApp')
  .config(function($routeProvider, $locationProvider){
    $routeProvider
      .when('/main', {templateUrl: 'views/main/main.html', controller: 'MainController', controllerAs: 'main' /*access: { requiredLogin: true }*/})
      .when('/singup', {templateUrl: 'views/singup/singup.html', controller: 'SingupController', controllerAs: 'singup' /*access: { requiredLogin: true }*/})
      .otherwise({redirectTo: '/main'});
  });