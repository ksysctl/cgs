'use strict';
angular.module('app.core').filter('mapSpreadsheet', function () {
    return function (input) {
        var objs = [];

        angular.forEach(input, function(o) {
            var obj = {
                opponent_country: o.gsx$opponentcountry.$t,
                opponent: o.gsx$opponent.$t,
                location: o.gsx$location.$t,
                period: o.gsx$period.$t,
                result: o.gsx$result.$t,
                score: o.gsx$score.$t,
                stage: o.gsx$stage.$t,
                club: o.gsx$club.$t,
                club_country: o.gsx$clubcountry.$t,
                season: o.gsx$season.$t,
                ga_o: o.gsx$gao.$t,
                ga_r: o.gsx$gar.$t,
                ga_s: o.gsx$gas.$t,
                gf_o: o.gsx$gfo.$t,
                gf_r: o.gsx$gfr.$t,
                gf_s: o.gsx$gfs.$t
            };
            objs.push(obj);
        })

        return objs;
    }
});
