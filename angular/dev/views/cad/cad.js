angular
  .module('MainApp')
  .controller('SingupController', ['$rootScope', '$route', '$routeParams', '$location', SingupController]);

function SingupController($scope, $route, $routeParams, $location){
  // init material
  $.material.init();
  // when route complete
  // $scope.$on('$routeChangeSuccess', function () {
  // });
}