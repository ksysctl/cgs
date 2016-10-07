'use strict';
angular.module('app.core').controller('HomeController', function($scope, pageValues, matchService, chartPerformance, chartOpponent, chartSeason) {
    pageValues.title = 'Home';
    pageValues.description = 'CCL Google Spreadsheet.';
    
    $scope.page = pageValues;
    
    var service = new matchService();
    service.get().then(function() {
        $scope.performanceDataSource = chartPerformance;
        $scope.opponentDataSource = chartOpponent;
        $scope.seasonDataSource = chartSeason;

        angular.forEach(service.clubs(), function(o) {
            $scope.performanceDataSource.data.push({
                'label': o.club,
                'value': service.performance({
                    query: {
                        club: o.club
                    }
                })
            });
        });
        
        angular.forEach(service.opponents(), function(o) {
            $scope.opponentDataSource.data.push({
                'label': o.opponent,
                'value': service.games({
                    query: {
                        opponent: o.opponent
                    }
                })
            });
        });
        
        angular.forEach(service.seasons(), function(o) {
            $scope.seasonDataSource.data.push({
                'label': o.season,
                'value': service.games({
                    query: {
                        season: o.season
                    }
                })
            });
        });
    })
});
