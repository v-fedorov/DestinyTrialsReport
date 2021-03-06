'use strict';

angular.module('trialsReportApp')
  .directive('armorList', function() {
    return {
      restrict: 'A',
      scope: {
        armors: '=armorList'
      },
      template: [
        '<div class="col-xs-3" ng-repeat="armor in armors track by $index">',
          '<div class="gear-armor" bs-popover="{title:armor.definition.name,content:armor.definition.description}">',
            '<img class="img-responsive" ng-src="{{armor.definition.icon}}">',
          '</div>',
        '</div>'
      ].join('')
    };
});
