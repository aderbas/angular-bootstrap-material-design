// menu right controller
angular
  .module('MainApp')
  .controller('MenuRightController', ['$scope', '$location', MenuRightController]); 

function MenuRightController($scope, $location){
  // user menu
  $scope.userMenu = [
    {id: 1,  title: 'Profile', role: "#"},
    {id: 3,  title: 'Settings', role: "#"},
    {id: 2,  title: 'Rights', role: "#"}
  ];
  // go to item
  $scope.goTo = function(item, $event){
    if(item.role){
      $location.path(item.role);
    }    
  };
}