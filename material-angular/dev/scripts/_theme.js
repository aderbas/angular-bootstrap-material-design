// setting all theme here
angular
  .module('MainApp')
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('lime');
    $mdThemingProvider.theme('leftMenu')
      .primaryPalette('green')
      .dark();   
  });  