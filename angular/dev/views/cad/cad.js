angular
  .module('MainApp')
  .controller('SingupController', ['$rootScope', '$route', '$routeParams', '$location', '$core', SingupController]);

function SingupController($scope, $route, $routeParams, $location, $core){
  // init material
  $.material.init();
  // when route complete
  // $scope.$on('$routeChangeSuccess', function () {
  // });
}