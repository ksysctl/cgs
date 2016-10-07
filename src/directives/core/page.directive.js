'use strict';
angular.module('app.core').directive('footer', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'views/partials/footer.html',
        controller: function ($scope, $element, $attrs) {
        }
    }
});

angular.module('app.core').directive('header', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'views/partials/header.html',
        controller: function ($scope, $element, $attrs) {
        }
    }
});
