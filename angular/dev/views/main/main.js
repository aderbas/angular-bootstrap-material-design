angular
  .module('MainApp')
  .controller('MainController', ['$rootScope', '$route', '$routeParams', '$location', MainController]);

function MainController($scope, $route, $routeParams, $location){
  // init material
  $.material.init();
  
  $scope.hello = 'Hello Bootstrap Material Design Angular';

  // when route complete
  // $scope.$on('$routeChangeSuccess', function () {
  // });  
}