angular
  .module('NavTopMenu')
  .controller('NavTopController', ['$scope', NavTopController]);

function NavTopController($scope){
  // top username screen
  $scope.username = 'Aderbal Nunes';
  // left top nav menu
  $scope.mainMenu = [
    {id: 1, label: 'Sing up', role: '#/singup'}
  ];
  // right dropdown menu
  $scope.rightMenu = [
    {id: 1, label: 'Profile'},
    {id: 2, label: 'Logout'},
  ];  
}
