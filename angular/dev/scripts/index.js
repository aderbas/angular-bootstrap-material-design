// controller
angular
  .module('MainApp')
  .controller('IndexController', ['$rootScope', '$route', '$routeParams', '$location', IndexController]);

function IndexController($rootScope, $route, $routeParams, $location){
  // includes
  $rootScope.common = {
    top    : 'common/top-header.html',
    footer : 'common/footer.html'
  };
}