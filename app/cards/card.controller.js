/* global angular */

(function() {
  'use strict';

  angular
    .module('appControllers')
    .controller('CardsCtrl', CardsCtrl);

  CardsCtrl.$inject = ['cardPrepService'];

  /* @ngInject */
  function CardsCtrl(cardPrepService) {
    /* jshint validthis: true */
    var vm = this;
    var results = [];

    vm.cards = cardPrepService;
    vm.released = released;

    // //////////////////

    function released(like) {
      var card = vm.cards.shift();
      card.accept = like;
      results.push(card);
    }
  }
})();
