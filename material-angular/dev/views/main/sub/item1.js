//
angular
  .module('MainApp')
  .controller('Item1Controller', ['$scope', '$route', '$routeParams', '$location', Item1Controller]);

function Item1Controller($scope, $route, $routeParams, $location){
  $scope.foo = 'Work nice';
}