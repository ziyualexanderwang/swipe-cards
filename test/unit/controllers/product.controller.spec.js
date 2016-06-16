/* global describe, angular, beforeEach, it, inject, expect */

'use strict';

/* jasmine specs for controllers go here */
describe('App controllers', function() {
  beforeEach(function() {
    this.addMatchers({
      toEqualData: function(expected) {
        return angular.equals(this.actual, expected);
      }
    });
  });

  beforeEach(module('app'));
  beforeEach(module('appControllers'));
  beforeEach(module('appServices'));

  describe('CardsCtrl', function() {
    var ctrl;
    var cards = [{name: 'card1'}, {name: 'card2'}];

    beforeEach(inject(function(_$controller_) {
      ctrl = _$controller_('CardsCtrl', {
        cardPrepService: cards
      });
    }));

    it('should have "cards" model with 2 cards', function() {
      expect(ctrl.cards).toEqualData(
        [{name: 'card1'}, {name: 'card2'}]);
    });

    it('should remove current card when release', function() {
      ctrl.released(true);
      expect(ctrl.cards).toEqualData([{name: 'card2'}]);
    });
  });
});

