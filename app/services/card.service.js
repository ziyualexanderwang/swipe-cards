/* global angular */

(function() {
  'use strict';

  angular
    .module('appServices')
    .factory('cardService', cardService);

  cardService.$inject = ['$resource'];

  /* @ngInject */
  function cardService($resource) {
    return $resource('resources/cards/cards.json');
  }
})();
