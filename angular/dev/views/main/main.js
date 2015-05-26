angular
  .module('MainApp')
  .controller('MainController', ['$rootScope', '$route', '$routeParams', '$location', '$core', MainController]);

function MainController($scope, $route, $routeParams, $location, $core){
  // init material
  $.material.init();
  
  $scope.hello = 'Hello Bootstrap Material Design Angular';
  // // test load
  // $core.service.load(['json1.json', 'json2.json'])
  //   .then(function(result){
  //     console.log(result);
  //   });
  // when route complete
  // $scope.$on('$routeChangeSuccess', function () {
  // });  
}