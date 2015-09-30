app.directive('tariffs', function () {
  return {
    restrict: 'EA',
    templateUrl: 'templates/tariffs/tabs.html',
    link: function (scope, element, attrs) {
      console.log(scope);
    }
  }
})