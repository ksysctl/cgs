'use strict';
angular.module('app.routes', ['ngRoute']).config(config);

function config ($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'views/home/home.html',
            controller: 'HomeController as home'
        })
        .otherwise({
            redirectTo: '/'
        });
}