'use strict';
angular.module('app.core').value('chartPerformance', {
    'chart': {
        'caption': 'Rendimiento General',
        'numberPrefix': '%',
        'numberPrefix': '%',
        'theme': 'carbon',
    },
    'data': []
});

angular.module('app.core').value('chartOpponent', {
    'chart': {
        'caption': 'Rendimiento General',
        'numberPrefix': '%',
        'theme': 'carbon',
    },
    'data': []
});

angular.module('app.core').value('chartSeason', {
    'chart': {
        'caption': 'Juegos por temporada',
        'xAxisName': 'Temporada',
        'yAxisName': 'Juegos',
        'numberPrefix': '',
        'theme': 'carbon',
    },
    'data': []
});
