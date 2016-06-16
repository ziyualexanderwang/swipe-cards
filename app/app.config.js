/* global angular */

(function() {
  'use strict';

  /* App Config */

  angular
    .module('app')
    .config([
      '$routeProvider',
      config
    ]);

  function config($routeProvider) {
    $routeProvider
      .when('/cards', {
        templateUrl: 'cards/card.html',
        controller: 'CardsCtrl',
        controllerAs: 'vm',
        resolve: {
          cardPrepService: cardPrepService
        }
      })
      .otherwise({
        redirectTo: '/cards'
      });
  }

  cardPrepService.$inject = ['cardService'];
  function cardPrepService(cardService) {
    return cardService.query().$promise;
  }
})();

