// 
angular
  .module('MainApp')
  .controller('SingupController', ['$scope', '$route', '$routeParams', '$location', SingupController]);  

function SingupController($scope, $route, $routeParams, $location){
  // 
  $scope.user = {};
}