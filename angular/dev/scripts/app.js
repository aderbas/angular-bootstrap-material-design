// init material
$.material.init();
// main app contains Controllers 
angular.module("MainApp", ['ngRoute']);
// Nav top bar
angular.module('NavTopMenu', []);
// app contains router config scripts/router-config.js
angular.module('MyApp', ['MainApp', 'NavTopMenu'])
  .factory('$core', core); // core.js
// app run afeter router changed
// app.run(function($rootScope, $location, $core){
//   $rootScope.$on("$routeChangeStart", function(event, nextRoute, currentRoute) {
//     if(nextRoute.access.requiredLogin && !$core.isLogged){
//       $location.path('/login');
//     }
//   });
// });