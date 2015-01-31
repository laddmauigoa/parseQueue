var app = angular.module('parseQ');


 // var app = angular.module('parseQ')

    app.factory('httpRequestInterceptor', function() {
      return {
        request: function (config) {
          config.headers = {'X-Parse-Application-Id': 'SpEekhobnbJd6tMvyKTjyzggIjleNBKMKFvYbP87', 'X-Parse-REST-API-Key': 'a8wcu6w4wkfgwqADOj2tbfg8yLQb7jBthvL8CDtt'}
          return config;
        }
      };
    });