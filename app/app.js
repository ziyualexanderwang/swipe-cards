/* global angular */

(function() {
  'use strict';

  /* App Module */

  angular
    .module('app', [
      'ngRoute',
      'appControllers',
      'appServices',
      'appDirectives'
    ]);

  angular
    .module('appServices', [
      'ngResource'
    ]);

  angular.module('appControllers', []);
  
  angular.module('appDirectives', []);
})();

