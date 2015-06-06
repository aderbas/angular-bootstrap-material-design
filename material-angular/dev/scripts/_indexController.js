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
    leftmenu: 'common/left-menu.html',
    sideright: 'common/side-bar-right.html',
    topnav: 'common/top-nav-header.html',
    footer: 'common/footer.html'
  };
  // session 
  $rootScope.session = {
    username : 'Aderbal Nunes',
    avatar: 'images/28215124.jpg'
  };
}