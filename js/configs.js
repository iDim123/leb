app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/home-page.html',
    })
    .when('/promo', {
      templateUrl: 'templates/promo.html',
    })
    .when('/tariffs', {
      templateUrl: 'templates/tariffs/tariffs.html',
    })
    .when('/service', {
      templateUrl: 'templates/service.html',
    })
    .when('/contacts', {
      templateUrl: 'templates/contacts.html',
    })
    .when('/faq', {
      templateUrl: 'templates/faq.html',
    })
    .otherwise({
      redirectTo: '/',
      templateUrl: 'templates/home-page.html'
    })
}]);