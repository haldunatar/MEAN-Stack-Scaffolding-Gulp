(function() {
    'use strict';

    angular.module('app.mockService', [
        'ngMockE2E'
    ])
    .run(function($httpBackend) {
        var res = {status: true};

        $httpBackend.whenPOST('/endPoint').respond(function(method, url, data, headers) {
            return [200, res, {}];
        });

        $httpBackend.whenGET().passThrough();
    });
})();