// index controller
angular
  .module('MainApp')
  .controller('IndexController', ['$rootScope', '$mdSidenav', IndexController])

function IndexController($rootScope, $mdSidenav){
  // toggle menu
  $rootScope.toggleSidenav = function(menuId) {
    $mdSidenav(menuId).toggle();
  }; 
  // include global files config
  $rootScope.common = {
    leftmenu: 'common/left-menu.html'
  };
}