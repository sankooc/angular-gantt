'use strict';
gantt.factory('GanttLabels', [function() {
    var Labels= function($element) {
        this.$element = $element;

        this.getWidth = function() {
            return this.$element.width();
        };
    };
    return Labels;
}]);
