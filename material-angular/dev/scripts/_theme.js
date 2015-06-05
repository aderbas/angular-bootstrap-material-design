// setting all theme here
angular
  .module('MainApp')
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('lime');      
  });  