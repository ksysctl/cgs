'use strict';
angular.module('app.core').factory('matchService', function ($http, $log, $filter, serviceConfig, matchResults, matchPoints) {
    var config = serviceConfig;
    
    var matchService = function() {
        this.data = [];
    };
    
    matchService.prototype.get = function() {
        var self = this;
        
        return $http({
            'url': config.url,
            'cache': true,
        }).then(function(response) {
            self.data = $filter('mapSpreadsheet')(response.data.feed.entry);
            
            return response;
        }).catch(function (errorResponse) {
            $log.error('XHR failed for match service');
            $log.error(errorResponse);
            
            return errorResponse;
        });
    };
    
    matchService.prototype.clubs = function() {
        return _.uniq(this.data, function(o) {
            return o.club;
        });
    };
    
    matchService.prototype.opponents = function() {
        return _.uniq(this.data, function(o) {
            return o.opponent;
        });
    };
    
    matchService.prototype.seasons = function() {
        return _.uniq(this.data, function(o) {
            return o.season;
        });
    };
    
    matchService.prototype.games = function(args) {
        var defaults = {
            query: {
                club: args.query.club || '',
                location: args.query.location || '',
                opponent: args.query.opponent || '',
                opponent_country: args.query.opponent_country || '',
                season: args.query.season || ''
            }
        }
        _.defaults(args, defaults);
        
        return _.size($filter('filter')(this.data, args.query));
    };
    
    matchService.prototype.performance = function(args) {
        var defaults = {
            decimals: args.decimals || 2,
            query: {
                club: args.query.club || '',
                location: args.query.location || '',
                opponent: args.query.opponent || '',
                opponent_country: args.query.opponent_country || '',
                season: args.query.season || ''
            }
        }
        _.defaults(args, defaults);
        
        var o = $filter('filter')(this.data, args.query);
        var games = _.size($filter('filter')(o, args.query));
        
        var win = matchPoints.win * _.size($filter('filter')(o, {result: matchResults.win}));
        var drawn = matchPoints.drawn * _.size($filter('filter')(o, {result: matchResults.drawn}));
        var lost = matchPoints.lost * _.size($filter('filter')(o, {result: matchResults.lost}));
        
        return parseFloat((100 * (win + drawn + lost)) / (matchPoints.win * games)).toFixed(args.decimals);
    };
    
    return matchService;
});
