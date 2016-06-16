/* global angular */

(function() {
  'use strict';

  angular
    .module('appDirectives')
    .directive('draggable', draggable);

  function draggable() {
    var basePos = 0;
    var currPos = 0;
    var scope = null;

    return function(curScope, element) {
      scope = curScope;
      var el = element[0];

      el.draggable = true;

      el.addEventListener('dragstart', dragStart, false);
      el.addEventListener('dragend', dragEnd, false);

      el.addEventListener('mousedown', mouseDown, false);
      el.addEventListener('mousemove', mouseMove, false);
    };

    function likeIt() {
      if (currPos > basePos) {
        return true;
      }
      return false;
    }

    function mouseDown(e) {
      basePos = e.x;
      return false;
    }

    function mouseMove(e) {
      currPos = e.x;
      return false;
    }

    function dragStart(e) {
      var ele = this.getElementsByTagName('div')[1];
      if (likeIt()) {
        ele.classList.add('drag-yes');
      } else {
        ele.classList.add('drag-no');
      }
      return false;
    }

    function dragEnd(e) {
      var ele = this.getElementsByTagName('div')[1];
      if (likeIt()) {
        ele.classList.remove('drag-yes');
      } else {
        ele.classList.remove('drag-no');
      }            
      scope.$apply(function(scope) {
        var fn = scope.$parent.vm.released(likeIt());
        if ('undefined' !== typeof fn) {            
          fn();
        }
      });
      return false;
    }
  }
})();
