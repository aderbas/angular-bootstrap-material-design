
(function(){
  // init material
  $.material.init();
  // main app contains Controllers 
  angular.module("MainApp", ['ngRoute']); 
  // Nav top bar
  angular.module('NavTopMenu', []);
  // app contains router config scripts/router-config.js
  angular.module('MyApp', ['MainApp', 'NavTopMenu']);
}());