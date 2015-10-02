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
    .when('/area', {
      templateUrl: 'templates/area.html',
    })
    .when('/faq', {
      templateUrl: 'templates/faq/faq.html',
    })
    .when('/contacts', {
      templateUrl: 'templates/contacts.html',
    })
    .when('/about', {
      templateUrl: 'templates/about.html',
    })
    .otherwise({
      redirectTo: '/',
      templateUrl: 'templates/home-page.html'
    })
}]);