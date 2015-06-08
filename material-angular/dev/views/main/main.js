// 
angular
  .module('MainApp')
  .controller('MainController', ['$scope', '$route', '$routeParams', '$location', MainController]);

function MainController($scope, $route, $routeParams, $location){
  // 
  // $scope.menu = [
  //   {title: 'Foo', role: 'views/main/sub/item1.html'}
  // ];

  // $scope.to = function(item, $event){
  //   $scope.srcInclude = item.role;
  // };
  $scope.sayhelo = 'Hello Material Angular';
}