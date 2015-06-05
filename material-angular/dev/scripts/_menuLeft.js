// menu config
angular
  .module('MainApp')
  .controller('MenuLeftController', ['$scope', '$location', MenuLeftController]); 

function MenuLeftController($scope, $location){
  // list menu
  $scope.menuList = [
    {id: 1, title: 'Main', role: '/main'},
    {id: 2, title: 'Sing up', role: '/singup'}
  ];
  // togle item
  $scope.goTo = function(item, $event){
    if(item.role){
      $location.path(item.role);
    }
  };
}